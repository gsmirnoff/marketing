/**
 * Created by SNSukhanov on 15.04.14.
 */


APP.ServerError = (function(module){
    var view = {},

        _el = '.server-error',
        _template = 'errors/serverError',
        _partials = [],
        _config = {

        },

        _render = function(){
            _joke(_handlers);
        },
        _joke = function(callback){
            var count = parseInt(localStorage.getItem('countAdminClick'));
            if(count){
                switch(count){
                    case 1:(function(){
                        $(_el).find('h1').text('И все равно без паники');
                        $(_el).find('p').text('Попробуй чуть позже');
                        callback();
                    })();
                        break;
                    case 2:(function(){
                        $(_el).find('h1').text('Ну прости.');
                        $(_el).find('p').text('И вообще, наберись терпения');
                        callback();
                    })();
                        break;
                    case 3:(function(){
                        $(_el).find('h1').text('Хм....');
                        $(_el).find('p').text('Если 3 раза не получилось, и сейчас не получится...подожди!');
                        callback();
                    })();
                        break;
                    case 4:(function(){
                        $(_el).find('h1').text('Хватит');
                        $(_el).find('p').text('Так, все, достало...посмотри котиков и потом вернешься.');
                        $(_el).find('a').attr({
                            href:'https://www.google.ru/search?q=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8&newwindow=1&tbm=isch&tbo=u&source=univ&sa=X&ei=RxRNU8eyA4KnyAPFooDYDQ&ved=0CCcQsAQ&biw=1317&bih=885&dpr=1',
                            target:'_blank'
                        }).on('click', function(){
                            $(window).trigger('hashchange');
                        });
                        localStorage.clear();
                    })();
                        break;

                }
            }else{
                count = 1;
                localStorage.setItem('countAdminClick', count);
                callback();
            }
        },

        _handlers = function(){
            $(_el).find('a').on('click', function(event){
                event.preventDefault();
                var count = parseInt(localStorage.getItem('countAdminClick'));
                localStorage.setItem('countAdminClick', ++count);
                APP.FormSession.init();
            });
        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $(_el).html(html);
            _render();
        });
    };

    return view;
})(APP);