var coreModule = require('./core.module.js');

coreModule.config(toastrConfig);

toastrConfig.$inject = ['toastr'];
function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}