# PowerShell script that clears npm and nuget caches
set-location ../

Write-Host "Flushing package manager files." -foregroundcolor DarkCyan

npm cache clean
.nuget/nuget locals all -clear

$dummy = Read-Host "Package manager files flushed. Press enter to continue..."