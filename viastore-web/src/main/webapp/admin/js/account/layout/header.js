/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.header = (function(){
    var view = {},
        _el,

        _settings = {},

        _render = function(tmpl){
            console.log(tmpl);
            $(_el).append(tmpl);
            _createUser();
        },

        _createUser = function(){
            var wrapper = document.getElementById('userAccount');
            var name = document.createElement('span');
                name.className = 'account-name';
                name.innerText = configAccount.personalSettings.name;
            var avatarWrap = document.createElement('div');
                avatarWrap.className = 'account-avatar';
            var avatar = document.createElement('img');
                if(configAccount.personalSettings.avatarId){
                    avatar.src = configAccount.personalSettings.avatarId;
                }else{
                    avatar.src = '';
                }
            avatarWrap.appendChild(avatar);
            var exit = document.createElement('a');
                exit.href = '#';
                exit.innerText = 'Log out';

            (function(){
                exit.addEventListener('click', function(event){
                    console.log(event);
                   ToolsAdmin.exit(function(){
                       _exit();
                   });
                });
            })();

            wrapper.appendChild(name);
            wrapper.appendChild(avatar);
            wrapper.appendChild(exit);
        },

        _exit = function(){
            location.hash = '';
            location.pathname = workConfig.toPath;
        };

    view.init = function(el){
        _el = el;
        ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
            template:'account/head',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();
