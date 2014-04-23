/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 16:10
 * To change this template use File | Settings | File Templates.
 */

APP.home = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'index/content',
        _partials = ['index/head', 'index/contacts'],
        _config = {

        },

        _render = function(){
           APP.SwitcherItem.init();
        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $('.banner').css('display', 'block');
            $(_el).addClass('home-content').html(html);
            _render();
        });
    };

    return view;
})(APP);