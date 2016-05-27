require('bootstrap/dist/css/bootstrap.min.css');
require('../public/stylesheets/resume.css');
require('imports?$=jquery!bootstrap/dist/js/bootstrap.min.js');
require('imports?$=jquery!jquery-scrollify/jquery.scrollify.min.js');

$.scrollify({
    section : ".wrap",
    scrollbars: true,
    easing: "easeOutExpo"
});
