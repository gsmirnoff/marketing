/**
 * Created by SNSukhanov on 09.04.14.
 */

function ContentSwitcher(){
    var self = this,

        _currentElem = null,

        _create = function(){
            var header = _currentElem.children('h3');
            var slides = _currentElem.children('.slide-box');
            var linkSwitch = _currentElem.children('.slide-arrow');

            (function(){
                _addEventListener(linkSwitch, 'click', _animate, {
                    slideBox:slides
                });


                _addEventListener($(window), 'resize', _calculate, {
                    slides:slides,
                    links:linkSwitch
                });
                _calculate('', {
                    slides:slides,
                    links:linkSwitch
                });
            })();
        },

        _calculate = function(event, options){
            console.log(event);
            var wrapper = options.slides;
            var innerWrapper = options.slides.find('.slides-all');
            var slide = options.slides.find('.slide-cont');

            var widthItem = wrapper.width();
            var heightItem = wrapper.height()+30;
            var lengthSlides = slide.length;

            (function(){
                innerWrapper.css({
                    width:widthItem*lengthSlides+5
                });

                wrapper.css({
                    width:widthItem
                });

                slide.css({
                    width:widthItem
                });

                if(lengthSlides > 1){
                    for(var i=0; i<lengthSlides; i++){
                        if(innerWrapper.offset().left == $(slide[i]).offset().left){
                            $(slide[i]).addClass('first current');
                        }

                        if((innerWrapper.offset().left + innerWrapper.width() - slide.width()) == $(slide[i]).offset().left){
                            $(slide[i]).addClass('last');
                        }

                        $(slide[i]).attr('data-swing', slide.width()*i);
                    }
                }else{
                    slide.addClass('single');
                    options.links.hide();
                }

            })();
        },

        _addEventListener = function(elem, event, callback, options){
            elem.on(event, function(event){
               callback(event, options);
            });
        },

        _animate = function(event, options){
            var hasClass = $(event.currentTarget).hasClass('next');
            var slideBox = options.slideBox.find('.slides-all');
            var slides = options.slideBox.find('.slide-cont');
            var currentSlide = slides.filter('.current');
            var newSlide;
            var newLink;

            $(event.currentTarget).fadeOut(200);

            if(hasClass){
                newSlide = currentSlide.next();
                newLink = $(event.currentTarget).prev();
            }else{
                newSlide = currentSlide.prev();
                newLink = $(event.currentTarget).next();
            }

            var swing = newSlide.data('swing');

            currentSlide.removeClass('current');
            newSlide.addClass('current');

            slideBox.animate({
                left:'-'+swing
            }, 400, function(){
                  newLink.fadeIn(200);
            });
        },

        _triggerAnimate = function(event){
//           $(event.currentTarget).trigger('click');
        };

    self.update = function(){

    };

    self.init = function(wrap){
        wrap.each(function(index, elem){
            _currentElem = $(elem);
            _create();
        });
    };
}
