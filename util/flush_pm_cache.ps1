# PowerShell script that clears the bower and npm caches
set-location ../

Write-Host "Flushing package manager files." -foregroundcolor DarkCyan

bower cache clean
npm cache clean
.nuget/nuget locals all -clear

$dummy = Read-Host "Package manager files flushed. Press enter to continue..."