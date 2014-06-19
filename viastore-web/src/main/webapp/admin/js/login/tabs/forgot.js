/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.forgot = (function(){
    var view = {},
        _template = 'login/forgot',
        _settings = {

        },

        _render = function(tmpl){
            ToolsAdmin.slideTabs(tmpl, function(){
                var btn = document.getElementById('remind');
                btn.addEventListener('click', function(event){
                    var form = event.currentTarget.parentNode;
                    var result =  ToolsAdmin.parseFormData(form);

                });
                document.addEventListener('keyup', function(event){
                    if(event.keyCode === 13){
                        var form = btn.parentNode;
                        var result =  ToolsAdmin.parseFormData(form);
                        for(var k in result){
                            if(result[k] === ''){
                                return false;
                            }
                        }

                        $(btn).trigger('click');
                    }
                });
            });
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
            template:_template,
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();