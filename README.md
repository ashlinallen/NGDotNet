Requirements: Visual Studio 2015, Entity Framework, SQL Server Express, NodeJS, IIS (w/ URLRewrite module), Git, Powershell

If you have already installed any of the utilities listed below, feel free to skip the install step for that utility (take note of what steps you deviate from to help troubuleshooting if you encounter problems.)


[32] I recommend enabling File Name Extensions in File Explorer so you can see what filetypes you're working with. (Otherwise files that start with a dot will show up as blank files. IE: .gitignore just shows up as an icon.)


***


Install applications:
    Open an elevated command prompt:
        Click 'Start'
        Type 'cmd'
        Right-click cmd.exe (Command Prompt)
        [1] Click 'Run as Administrator' (Click 'Yes' on User Account Control dialog)

    Launch Powershell to install Chocolatey (Chocolatey is a desktop app manager, it will make installations easier for Git and Node since they have path settings to configure):
        At the cmd prompt:
        [2] @powershell -NoProfile -ExecutionPolicy unrestricted -Command "(iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))) >$null 2>&1" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
        [3]

    Close the command prompt and re-open it (as you did in step 1,) so you have access to the choco path variable

    Use Chocolatey to install Git (NPM depends upon Git):
        At an elevated command prompt:
            [4] choco install git.install -y
            [5]

    Use Chocolatey to install Node.js:
        At an elevated command prompt:
            [6] choco install nodejs.install -y
            [7]

    Close the command prompt and re-open it (as you did in step 1,) so you have access to the NPM path variable

    Use NPM to install Bower globally:
        At an elevated command prompt:
            [8] npm install bower -g
            [9]

    Install Visual Studio 2015 Community Edition:
        https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx
        Download and run the Visual Studio 2015 Community Edition installer
        [30] Check "Custom" then click Next
        [31] Check "Microsoft SQL Server Data Tools" and "Microsoft Web Developer Tools" then click Next
        Click "Install" then click "Yes" on the User Account Control dialog
        [33]
        
    Install SQL Server 2014 Express:
        https://www.microsoft.com/en-us/download/details.aspx?id=42299
        Download and run the SQL Server 2014 Express installer (you probably want the "ExpressAndTools" package, so you get SQL Server Management Studio - for me, this was SQLEXPRWT_x64_ENU.exe)
        Click "New SQL Server stand-alone installation or add features to an existing installation"
        Accept the license terms and click next
        [35] Click next through the remaining prompts until the install begins
        [36] Restart your computer


***


Clone the NGDotNet solution from the GitHub repo:
    Go to the directory where you'd like to clone the NGDotNet project (Ex: C:\Dev\)
    [10] Hold shift and right-click in the file explorer, then click "Open command window here"
    At the command prompt:
        [11] git clone https://github.com/ashlinallen/NGDotNet/
        [12]


***


Configure execution policy in PowerShell so you can run downloaded PowerShell scripts:
    Click 'Start'
    Type 'PowerShell'
    Right-click PowerShell.exe
    [13] Click 'Run as Administrator' (Click 'Yes' on User Account Control dialog)

    Run the following command in PowerShell to allow the execution of downloaded PS Scripts:
        [14] Set-ExecutionPolicy RemoteSigned
        Type "Y" and hit enter at the prompt
        [15]
        
    Close PowerShell


***


Restore NPM, Bower and Nuget packages:
    [16] In the /util/ directory, right-click install_packages.ps1 and click 'Run with Powershell'
    [17, 18, 19]
    [20]
    Press enter to close the PowerShell prompt


***


Set up/configure IIS:
    Enable IIS and WWW services:
        Click 'Start button'
            [21] In the search box, enter 'Turn windows features on or off' and click the item
            [22] In the features window:
                Enable .NET Frameworks:
                    Check: .NET Framework 3.5
                    Check: .NET Framework 4.6

                Enable IIS:    
                    Check: 'Internet Information Services'
                    Expand: 'World Wide Web Services'
                    Expand: 'Application Development Features'
                    Check: All options but CGI, ASP, and Server Side Includes
            Click 'OK' to install new features
            Click 'Download files from Windows Update'
            
    Install URL Rewrite:
        http://www.iis.net/downloads/microsoft/url-rewrite#additionalDownloads


***


Add the NGDotNet application to IIS:
    Click 'Start button'
        [23] In the search box, enter 'IIS' and click the item (Internet Information Services)
        
    Add new website in IIS for NGDotNet project:
        [24] Right-click 'Default Website' and click 'Remove', then click yes on the confirmation.
        [25] Right-click 'Sites' node in the left panel and click 'Add Website'
        Enter 'NGDotNet' into the 'Site name' field
        Set the 'Physical Path' to the NGDotNet.Web directory (EX: C:\dev\NGDotNet\NGDotNet.Web)
        Ensure 'Application Pool' is set to 'NGDotNet'. If it isn't, click 'Select', and choose the 'NGDotNet' App Pool.
        [26] Click 'OK'
        
        NOTE: If you change the port from 80, you also need to change the Browserify 'browserPort' setting in \NGDotNet.Web\gulp\config.js

    Add application to hosts file:
        [27] Start Notepad with administrator priveleges:
            Click 'Start'
            Type 'notepad'
            Right-click notepad.exe
            Click 'Run as Administrator' (Click 'Yes' on User Account Control dialog.)

        [28] Open 'C:\Windows\System32\drivers\etc\hosts' with Notepad.
            [29] Add the following record to your hosts file:
                127.0.0.1 NGDotNet.local
            Save and close the hosts file.


***


Open and configure the solution in Visual Studio:
    Double-click the NGDotNet solution file (Ex: C:\Dev\NGDotNet\NGDotNet.sln)

    Configure solution:
        Prevent Visual Studio from launching a browser for us when you debug:
            [37] Right-click the NGDotNet.Web project in the Solution Explorer > Click Properties
            [38] Under the Web tab, click 'Don't open a page. Wait for a request from an external application.'
                Close the NGDotNet.Web properties tab and save if prompted

        Change startup project for solution:
            [39] Right-click the main NGDotNet Solution and click Properties
                [40] Under the 'Startup Project' tab, select 'Single Startup Project' and change the dropdown the NGDotNet.Web
                Click 'Apply', then click 'Ok'

        Prioritize global Node version over the version Visual Studio 2015 installed:
            [42] Click Tools > Options in Visual Studio 2015
            [41] Under Projects and Solutions > External Web Tools:
                    Reorder locations so that $(PATH) is above $(DevEnvDir)\Extensions\Microsoft\Web Tools\External
            [44, 45, 46] Close and re-open the 'dev' gulp task in Task Runner Explorer
            [43] You may need to Allow Node to communicate on your network.
        
        [47] Once the dev tasks completes, the BrowserSync task will automatically open your proxied IIS server in your browser. Just to be clear, IIS is hosting the site at http://ngdotnet.local/ and the Node module BrowserSync is proxying the IIS site to inject CSS and HTML changes on-the-fly.
        
    Build the solution:
        [48] In Visual Studio, click Build > Build Solution


***


Create initial database migration, then run your migrations to update (create, in this case,) the database:
    [49] In Visual Studio 2015, click View > Other Windows > Package Manager Console
        In the Visual Studio Package Manager Console, ensure that the 'Default project' setting is set to 'NGDotNet.DAL' and run the following commands:
            [52] add-migration InitialCreate -force
            [53]
            Note that after running InitialCreate has created a migration at NGDotNet.DAL/Migrations/ which, when run, will create your database to match your Models at NGDotNet.API/Controllers/
            
        Now, run the following command in the package manager console to create your database:
            [54] update-database
            [55]

Add AppPool user permissions so your app has SQL access:
    Open Microsoft SQL Server Management Studio:
        Click 'Start'
        Type 'Management Studio', select the SQL Server 2014 Management Studio item
        Click 'Connect' with the default connection string
        Expand 'Security' node
        Right-click 'Logins' node
        [56] Click 'New Login...'
        [57] Enter 'IIS APPPOOL\NGDotNet' into the 'Login name' field
        Click 'User Mapping' node
        Check 'Map' on the 'NGDotNet' database
        Check all roles except 'db_denydatareader' and 'db_denydatawriter'
        [58] Click 'OK'


***


[59] Now you can access the NGDotNet application at http://localhost:3000/ (BrowserSync proxy,) and http://ngdotnet.local/ (directly access IIS.) If all went well, you should be able to access the Avengers tab on the left, which will perform a GET request in our Angular app. This step fully demonstrates a back-end agnostic front-end, utilizing AngularJS and SCSS, built in NodeJS using Gulp and Browserify, which accesses a C# .NET WebAPI back-end and a SQL datasource with Entity Framework 6.

If you have trouble getting the solution running, feel free to leave a comment below and I'll try to get you up and running.

Thanks for reading! 


***


<p align="center">
  <img src='http://i.imgur.com/tthpnHa.gif'/>
</p>