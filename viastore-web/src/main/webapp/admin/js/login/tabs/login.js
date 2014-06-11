/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.login = (function(){
    var view = {},
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
            });
        },

        _enterAdminPanel = function(data){
            REQUEST.initRequest({
                url:configLogin.pathApi + 'auth',
                data:JSON.stringify(data),
                success:function(result){
                   console.log(result);
                    PLATFORM.setToken(result.response.token.token);
                    location.pathname = 'pages/account/';
                },
                error:function(){

                }
            }, 'POST', 'json');
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(configLogin.pathTemplate, {
            template:'login/login',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();