/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.forgot = (function(){
    var view = {},

        _settings = {

        },

        _render = function(tmpl){
            ToolsAdmin.slideTabs(tmpl, function(){
                var btn = document.getElementById('remind');
                btn.addEventListener('click', function(event){
                    var form = event.currentTarget.parentNode;
                    ToolsAdmin.parseFormData(form);
                });
            });
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
            template:'login/forgot',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();