As a general rule, no scripts should be added to this directory or its subdirectories. They should be added as an NPM module or part of an Angular module, instead.

If you know what you're doing and need to put a one-off global script somewhere, place it in the appropriate subdirectory and Webpack will pick it up when you require() it in a JavaScript module.