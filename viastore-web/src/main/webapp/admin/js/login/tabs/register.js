/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.register = (function(){
    var view = {},

        _el = 'wrapper',

        _settings = {

        },

        _render = function(tmpl){
            console.log(tmpl);
            var wrapper = document.getElementById(_el);
            wrapper.innerHTML = tmpl;
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(config.pathTemplate, {
            template:'login/register',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();