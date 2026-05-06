param(
  [string]$InstallRoot = 'D:\AI\ComfyUI',
  [string]$ListenHost = '127.0.0.1',
  [int]$Port = 8188,
  [switch]$Background
)

$ErrorActionPreference = 'Stop'

$python = Join-Path $InstallRoot 'venv\Scripts\python.exe'
$main = Join-Path $InstallRoot 'main.py'
$statusUrl = "http://$ListenHost`:$Port/system_stats"

function Test-ComfyUiReady {
  param(
    [string]$Url
  )

  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $Url -TimeoutSec 3
    return $response.StatusCode -eq 200
  } catch {
    return $false
  }
}

if (-not (Test-Path $python)) {
  throw "Python introuvable pour ComfyUI: $python"
}

if (-not (Test-Path $main)) {
  throw "ComfyUI introuvable: $main"
}

$arguments = @(
  $main,
  '--listen', $ListenHost,
  '--port', "$Port",
  '--enable-manager',
  '--disable-auto-launch',
  '--disable-mmap'
)

if (Test-ComfyUiReady -Url $statusUrl) {
  Write-Host "ComfyUI est deja pret sur $statusUrl"
  exit 0
}

if ($Background) {
  $logDirectory = Join-Path $PSScriptRoot '..\reports\character-lab'
  New-Item -ItemType Directory -Force -Path $logDirectory | Out-Null

  $stdout = Join-Path $logDirectory 'comfyui.stdout.log'
  $stderr = Join-Path $logDirectory 'comfyui.stderr.log'

  $process = Start-Process `
    -FilePath $python `
    -WorkingDirectory $InstallRoot `
    -ArgumentList $arguments `
    -RedirectStandardOutput $stdout `
    -RedirectStandardError $stderr `
    -PassThru

  for ($attempt = 0; $attempt -lt 60; $attempt++) {
    if ($process.HasExited) {
      throw "Le processus ComfyUI s'est arrete avant de devenir pret. Voir $stderr"
    }

    if (Test-ComfyUiReady -Url $statusUrl) {
      Write-Host "ComfyUI demarre en arriere-plan (PID $($process.Id)) sur http://$ListenHost`:$Port"
      Write-Host "Logs: $stdout"
      Write-Host "Erreurs: $stderr"
      exit 0
    }

    Start-Sleep -Seconds 1
  }

  Write-Host "ComfyUI est lance (PID $($process.Id)) mais l'API n'est pas encore prete."
  Write-Host "Logs: $stdout"
  Write-Host "Erreurs: $stderr"
  exit 0
}

Write-Host "Demarrage de ComfyUI sur http://$ListenHost`:$Port"
& $python @arguments
