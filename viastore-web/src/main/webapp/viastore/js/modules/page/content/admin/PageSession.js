/**
 * Created by SNSukhanov on 15.04.14.
 */


APP.session = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'session/content',
        _partials = [],
        _config = {
             brand:config.imagesFolder + 'logo.png'
        },

        _render = function(){
             APP.FormSession.init();
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