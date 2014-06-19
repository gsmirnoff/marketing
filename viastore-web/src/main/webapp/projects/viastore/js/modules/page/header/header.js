/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */

APP.Header = (function(module){
    var view = {},

        _template = 'header',
        _partials = ['header/brand', 'header/navigation'],
        _el = '.main-header',
        _settings = {
            titles:{
                "home":"Главная",
                "solutions":"Решения",
                "products":"Продукты"
            },
            brand:config.imagesFolder + '/logo.png'
        },

        _render = function(){
            var nav = $('ul.nav-list');
           Tools.location(nav);
            var title = $('.title-page');
            var hash = Tools.hash();
            var currentTitle = _settings.titles[hash];
            title.find('h5').addClass('title-f').text(currentTitle);


            _handlers(title);
        },

        _handlers = function(title){
            $(window).on('scroll', function(event){
                if($(event.currentTarget).scrollTop() >= 250){
                    title.find('h5').fadeIn(500);
//                    $('.main-content').find('.title-f').fadeOut(500);
                }else{
                    title.find('h5').fadeOut(500);
//                    $('.main-content').find('.title-f').fadeIn(500);
                }
            });
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
