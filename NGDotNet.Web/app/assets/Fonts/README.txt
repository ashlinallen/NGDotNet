There is no need to place a font here which is part of an NPM package (Bootstrap or Font-Awesome, for example;) Webpack will add it from the NPM package when you require() it in the JavaScript app module.

If you have a custom font or a font which isn't available as an NPM package, place it in this directory and Webpack will pick it up when you require it in a CSS module.