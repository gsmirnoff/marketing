/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.settings = (function(){
    var view = {},

        _el = 'content',

        _settings = {

        },

        _render = function(tmpl){
            var wrap = document.getElementById(_el);
            wrap.innerHTML = tmpl;
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(configAccount.pathTemplate, {
            template:'account/settings',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();