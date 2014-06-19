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
        _is,
        _el = 'body',
        _token,
        _template = 'layout',
        _partials = [],
        settings = {

        },

        _render = function(){
            if(_is.header){
                APP.Header.init();
            }
            if(_is.banner){
                APP.Banner.init();
            }else{
                APP.Banner.initNoTemp();
            }
            if(_is.aside){
                APP.Aside.init();
            }
            APP[_page].init();

            if(_is.footer){
                APP.Footer.init();
            }
        };

    view.init = function(page, is){
        _page = page;
        _is = is;
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(settings));
            $(_el).html(html);
            _render();
        });

    };

    return view;
})(APP);