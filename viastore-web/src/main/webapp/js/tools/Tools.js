/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 03.04.14
 * Time: 12:32
 * To change this template use File | Settings | File Templates.
 */

var Tools = {
    extend:function(localConfig){
       return $.extend({}, config, localConfig);
    },

    toggleSlide:function(wrap){
            wrap.each(function(index, elem){
                var slides = $(elem).children('.slide-cont');
                var buttons = $(elem).siblings('.slide-arrow');
                    slides.first().addClass('first');
                    slides.last().addClass('last');
                var width = $(elem).width();
                var height = $(elem).height();
                (function(){
                    $(elem).css({
                        width:width,
                        height:height
                    });

                    if(slides.length > 1){
                        slides.first().css('display', 'block');
                        slides.last().css('display', 'none');
                        slides.last().css({
                            'margin-left':'-70px'
                        });
                        slides.css({
                            'padding-top':'30px'
                        });
                        buttons.filter('.next').css('display', 'block');
                        buttons.filter('.prev').css('display', 'none');

                        buttons.filter('.prev').on('click', function(event){
                            console.log('prev');
                            console.log(index);

                            Animate(slides, '-', function(){
                                buttons.filter('.next').css('display', 'block');
                                buttons.filter('.prev').css('display', 'none');
                            });
                        });

                        buttons.filter('.next').on('click', function(event){
                            console.log('next');
                            console.log(index);
                            Animate(slides, '+', function(){
                                buttons.filter('.next').css('display', 'none');
                                buttons.filter('.prev').css('display', 'block');
                            });

                        });
                    }else{
                        buttons.filter('.next').css('display', 'none');
                        buttons.filter('.prev').css('display', 'none');
                    }

                })();



                function Animate(event, dest, callback){
                    var current = $(slides).filter(':visible');
                   if(dest == '+'){
                       current.fadeOut(200, function(){
                           current.next().fadeIn(200);
                           callback();
                           current.next().css({
                               'padding-top':'30px',
                               'margin-left':'-70px'
                           });
                       });


                   }else if(dest == '-'){
                       current.fadeOut(200, function(){
                           current.prev().fadeIn(200);
                           callback();
                           current.prev().css({
                               'padding-top':'30px'
                           });
                       });

                   }
                }
            });
    }
};
