/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.footer = (function(){
    var view = {},
        _el,

        _settings = {},

        _render = function(tmpl){
           console.log(tmpl);
            $(_el).append(tmpl);
        };

    view.init = function(el){
        _el = el;
        ToolsAdmin.loadTemplate(configAccount.pathTemplate, {
            template:'account/footer',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();