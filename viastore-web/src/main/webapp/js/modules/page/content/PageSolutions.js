/**
 * Created by SNSukhanov on 10.04.14.
 */

APP.solutions = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'solutions/content',
        _partials = [],
        _config = {

        },

        _render = function(){
            APP.SwitcherItem.init();
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