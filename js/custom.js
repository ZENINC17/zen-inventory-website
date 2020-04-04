(function( $ ) {

    'use strict';
    
    $('.click-link').click(function(){
        alert("aaa")
        const self = this;
        const url = $(self).attr('data-url');
        
        alert(url)
        if(url===''){ return false;}
        window.location = url;
    });
}).apply( this, [ jQuery ]);

// $('.btnclick').click(function(){
//     alert("aaa")
// });
//
// /*Slider customer*/
// ;(function ( $, window, undefined ) {
//     $('body').on('click', '.click-link', function () {
//         alert("abc");
//         // var self = this;
//         // var url = $(self).attr('data-url');
//         // if(url==''){ return false;}
//         // window.location = url;
//     });