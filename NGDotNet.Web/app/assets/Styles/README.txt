High level CSS goes here (CSS rules which apply globally to HTML elements.)

Utility files like your color definition file, dataurls file, SUIT utility classes, SCSS/LESS mixins, etc, should go in the "Utility" subdirectory.

Most CSS should not be added to this folder, but instead should be added at the module level and pulled into the application using a require() statement in your JavaScript module.