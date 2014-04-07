/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */

APP.Page = (function(module){
    var view = {},

        _page,
        _el = 'body',
        _token,
        _template = 'layout',
        _partials = [],
        settings = {

        },

        _render = function(){
            APP.Header.init();
            APP.Banner.init();
            APP[_page].init();
            APP.Footer.init();
        };

    view.init = function(page){
        _page = page;
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(settings));
            $(_el).html(html);
            _render();
        });

    };

    return view;
})(APP);