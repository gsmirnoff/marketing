/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.nav = (function(){
    var view = {},
        _el,

        _settings = {},

        _render = function(tmpl){
            ToolsAdmin.insertTmpl(tmpl, _el, function(){

            });
        };

    view.init = function(el){
        _el = el;
        ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
            template:'account/nav',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();