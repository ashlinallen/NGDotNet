Requirements: Visual Studio 2015, Entity Framework, SQL Server Express, NodeJS, IIS, Git, Powershell

Getting Started:

    NPM requires Git, so install it if you haven't already done so.
    
    Enable IIS and WWW services:
        Click 'Start button'
            In the search box, enter 'Turn windows features on or off'
            In the features window:
                Enable .NET Frameworks:
                    Check: .NET Framework 3.5
                    Check: .NET Framework 4.6

                Enable IIS:    
                    Check: 'Internet Information Services'
                    Expand: 'World Wide Web Services'
                    Expand: 'Application Development Features'
                    Check: All options but CGI, ASP, and Server Side Includes
                
    Install URL Rewrite:
        http://www.iis.net/downloads/microsoft/url-rewrite#additionalDownloads
    
    Click 'Start'
    Click 'Run'
    Type 'cmd'
    Right-click cmd.exe
    Click 'Run as Administrator'
    
    Launch Powershell to install Chocolatey:
        At the cmd prompt:
            @powershell -NoProfile -ExecutionPolicy Bypass -Command 'iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))' && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

    Use Chocolatey to install Node.js:
        At the cmd prompt:
            choco install nodejs.install -y
    
    Close the command prompt and re-open it so it has access to the NPM path variable

    Run the following command in PowerShell to allow the execution of downloaded PS Scripts:
        Set-ExecutionPolicy RemoteSigned

	Restore NPM, Bower and Nuget packages:
        In the /util/ directory, right-click install_packages.ps1 and click 'Run with Powershell'

	Open the project in Visual Studio:
        Double-click the NGDotNet solution file (NGDotNet.sln)

    Configure solution:
        Prevent Visual Studio from launching a browser for us when we debug:
            Right-click the NGDotNet.Web project in the Solution Explorer>Click Properties
                Under the Web tab, click 'Don't open a page. Wait for a request from an external application.'
                Close the NGDotNet.Web properties tab and save when prompted

        Change startup project for solution:
            Right-click the main NGDotNet Solution and click Properties
                Under the 'Startup Project' tab, select 'Single Startup Project' and change the dropdown the NGDotNet.Web
                Click 'Apply'
                
        Prioritize global Node version over the version Visual Studio 2015 installed:
            Click Tools > Options > Projects and Solutions > External Web Tools
            Reorder locations so that $(PATH) is above $(DevEnvDir)\Extensions\Microsoft\Web Tools\External

    Create initial database migration, then run your migrations to update (create, in this case,) the database:
        In the Visual Studio Package Manager Console, run the following command:
            add-migration InitialCreate -force
            update-database

    Add new website in IIS for NGDotNet project:
        Open Internet Information Services (IIS) Manager:
            Right-click 'Sites' node
            Enter 'NGDotNet' into the 'Site name' field
            Set the 'Physical Path' to the NGDotNet.Web directory (EX: C:\dev\NGDotNet\NGDotNet.Web)
            Ensure 'Application Pool' is set to 'NGDotNet'. If it isn't, click 'Select', and choose the 'NGDotNet' App Pool.
            Click 'OK'
            NOTE: If you change the port from 80, you also need to change the Browserify 'browserPort' setting in \NGDotNet.Web\gulp\config.js
            
    Add AppPool user permissions for SQL Database:
        Open Microsoft SQL Server Management Studio
            Expand 'Security' node
            Right-click 'Logins' node
            Click 'New Login...'
            Enter 'IIS APPPOOL\NGDotNet' into the 'Login name' field
            Click 'User Mapping' node
            Check 'Map' on the 'NGDotNet' database
            Check all roles except 'db_denydatareader' and 'db_denydatawriter'
            Click 'OK'
            
![alt tag](http://i.imgur.com/tthpnHa.gif)
