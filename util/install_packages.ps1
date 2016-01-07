set-location ../NGDotNet.Web/

Write-Host

Write-Host "Restoring NPM packages..." -foregroundcolor DarkCyan
npm install --msvs_version=2015 --no-optional
Write-Host "NPM packages installed." -foregroundcolor DarkCyan
Write-Host

set-location ../

Write-Host "Restoring NuGet packages..." -foregroundcolor DarkCyan
.nuget/NuGet.exe restore NGDotNet.Web/packages.config -PackagesDirectory nuget_packages
.nuget/NuGet.exe restore NGDotNet.Model/packages.config -PackagesDirectory nuget_packages
.nuget/NuGet.exe restore NGDotNet.DAL/packages.config -PackagesDirectory nuget_packages
.nuget/NuGet.exe restore NGDotNet.API/packages.config -PackagesDirectory nuget_packages
Write-Host "NuGet packages restored." -foregroundcolor DarkCyan
Write-Host

$dummy = Read-Host "Package restoration complete. Press enter to continue..."