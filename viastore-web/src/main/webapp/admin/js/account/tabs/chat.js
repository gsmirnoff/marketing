/**
 * Created by SNSukhanov on 18.06.14.
 */
/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.chat = (function(){
    var view = {},

        _el = 'content',

        _settings = {

        },

        _render = function(tmpl){
            console.log(tmpl);
            var wrap = document.getElementById(_el);
            wrap.innerHTML = tmpl;
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
            template:'account/chat',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();