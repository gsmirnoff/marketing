/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 17:14
 * To change this template use File | Settings | File Templates.
 */

APP.Banner = (function(module){
    var view = {},

        _template = 'banner',
        _partials = [],
        _el = '.banner',
        _settings = {

        },

        _render = function(){

                $('.banner-logo a').on('click', function(e){
                    e.preventDefault();
                    if($(window).outerWidth() <= 1200){
                        var box = $('.banner-text-box');
                        if(box.css('display') == 'none'){
                            box.show(300);
                        }else{
                            box.hide(300);
                        }

                    }

                });
          _changeBanner();
        },

        _changeBanner = function(){
            var hash = Tools.hash();
            if((hash === 'home') || (hash === '#') || hash === ''){
               console.log('home');
            }else if(hash === 'notfound'){
                $(_el).addClass('not-found-banner');
            }else{
                var ban = $(_el);
                var img = $('<img/>').attr({
                    src:'resources/images/solutions_bg.jpg'
                });
                ban.addClass('simple-page-banner');
                ban.append(img).show();
            }
        };
    view.initNoTemp = function(){
        _changeBanner();
    };

    view.init = function(){

        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_settings));
            $(_el).html(html);
            _render();
        });
    };

    return view;
})(APP);
