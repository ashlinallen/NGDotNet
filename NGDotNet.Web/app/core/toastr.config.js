var coreModule = require('./core.module.js');

coreModule.config(toastrConfig);

function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}

toastrConfig.$inject = ['toastr'];