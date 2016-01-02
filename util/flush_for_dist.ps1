# The purpose of this script is to delete all dev-specific, build and package 
# manager files to reduce the file count and project size for distribution.
# Run this script to get rid of bloat before zipping the project.

set-location ../


###################################################
# Deletes the wwwroot, node_components,           #
# bower_components and nuget_packages directories #
###################################################
if((Test-Path "NGDotNet.Web\gulp_build\")){
    cmd /c rmdir "NGDotNet.Web\gulp_build\" /s /q
    Write-Host "Removed: NGDotNet.Web\gulp_build\" -foregroundcolor green
}
if((Test-Path "NGDotNet.Web\index.html")){
    cmd /c del "NGDotNet.Web\index.html" /q
    Write-Host "Removed: NGDotNet.Web\index.html" -foregroundcolor green
}
if((Test-Path "NGDotNet.Web\favicon.ico")){
    cmd /c del "NGDotNet.Web\favicon.ico" /q
    Write-Host "Removed: NGDotNet.Web\favicon.ico" -foregroundcolor green
}
if((Test-Path "NGDotNet.Web\favicon_large.ico")){
    cmd /c del "NGDotNet.Web\favicon_large.ico" /q
    Write-Host "Removed: NGDotNet.Web\favicon_large.ico" -foregroundcolor green
}
if((Test-Path "NGDotNet.Web\node_modules")){
    cmd /c rmdir "NGDotNet.Web\node_modules" /s /q
    Write-Host "Removed: node_modules" -foregroundcolor green
}
if((Test-Path "NGDotNet.Web\bower_components")){
    cmd /c rmdir "NGDotNet.Web\bower_components" /s /q
    Write-Host "Removed: bower_components" -foregroundcolor green
}
if((Test-Path "nuget_packages")){
    cmd /c rmdir "nuget_packages" /s /q
    Write-Host "Removed: nuget_packages" -foregroundcolor green
}


#################################################
# Recursively deletes all 'bin', 'obj', '.suo', #
# '.sln.docstates' and '.user' files inside     #
# current folder.                               #
#################################################
$CurrentPath = (Get-Location -PSProvider FileSystem).ProviderPath
# Recursively get all files matching given includes, except ignored files
$FilesToRemove = Get-ChildItem -include bin,obj,*.suo,*.user,*.sln.docstates -Force -Recurse -ErrorAction SilentlyContinue | Where {$_.FullName -notlike "*node_modules*"}  | foreach {$_.fullname}
# Remove files and print to output
if($FilesToRemove -ne $null)
{
	foreach ($item in $FilesToRemove)
	{
		remove-item $item -Force -Recurse;
		Write-Host "Removed: ." -nonewline;
		Write-Host $item.replace($CurrentPath, "");
	}
	
	Write-Host $FilesToRemove.count "Visual Studio temp files removed." -foregroundcolor green
}


########
# Done #
########
Write-Host
$dummy = Read-Host "Finished flushing temp and build files. Press a key to close..."