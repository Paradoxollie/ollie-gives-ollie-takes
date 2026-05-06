param(
  [string]$InstallRoot = 'D:\AI\ComfyUI'
)

$ErrorActionPreference = 'Stop'

$python = Join-Path $InstallRoot 'venv\Scripts\python.exe'

$processes = Get-CimInstance Win32_Process |
  Where-Object {
    $_.ExecutablePath -eq $python -and
    $_.CommandLine -like '*main.py*'
  }

if (-not $processes) {
  Write-Output 'Aucun processus ComfyUI a arreter.'
  exit 0
}

$ids = $processes.ProcessId
$ids | ForEach-Object { Stop-Process -Id $_ -Force }

Write-Output ("ComfyUI arrete. PID: " + ($ids -join ', '))
