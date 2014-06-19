/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.login = (function(){
    var view = {},
        _template = 'login/login',
        _settings = {

        },

        _render = function(tmpl){
            ToolsAdmin.slideTabs(tmpl, function(){
                var btn = document.getElementById('signin');
                btn.addEventListener('click', function(event){
                    var form = event.currentTarget.parentNode;
                   var result =  ToolsAdmin.parseFormData(form);
                   _enterAdminPanel(result);
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
        },

        _enterAdminPanel = function(data){
            REQUEST.initRequest({
                url:workConfig.apiFolder + 'auth',
                data:JSON.stringify(data),
                success:function(result){
                    PLATFORM.setToken(result.response.token.token);
                    location.pathname = workConfig.toPath;
                },
                error:function(error){
                    console.log(error);
                }
            }, 'POST', 'json');
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