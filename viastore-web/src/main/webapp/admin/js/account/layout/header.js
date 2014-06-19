/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.header = (function(){
    var view = {},
        _el,

        _settings = {},

        _render = function(tmpl){
            ToolsAdmin.insertTmpl(tmpl, _el, function(){
                _account();
            });
        },

        _account = function(){
            var wrapper = document.getElementById('account');
            var name = document.createElement('span');
                name.className = 'account-name';
                name.innerText = workConfig.personalSettings.email.replace('%40', '@');
            var avatarWrap = document.createElement('div');
                avatarWrap.className = 'account-avatar';
            var avatar = document.createElement('img');
            workConfig.avatarContainer.push(avatar);
                if(workConfig.personalSettings.avatarId){
                    avatar.src = workConfig.personalSettings.avatarUrl;
                }else{
                    avatar.src = workConfig.imagesFolder + workConfig.defaultImageAccount;
                }
            avatarWrap.appendChild(avatar);
            var exit = document.createElement('a');
                exit.href = '#';
                exit.className = 'account-exit';
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
            wrapper.appendChild(avatarWrap);
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
