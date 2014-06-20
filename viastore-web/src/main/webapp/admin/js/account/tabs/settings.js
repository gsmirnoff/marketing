/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.settings = (function(){
    var view = {},

        _el = 'content',

        _settings = {
           tmpl:{
               defaultProfilePhoto:'/resources/img/defaultAvatar.jpg',
               avatarIdProfile:'avatarProfile'
           }
        },

        _render = function(tmpl){
           _postRender();
        },

        _postRender = function(){
            var wrap = document.getElementById('menuTabsAccount'),
                list = wrap.children,
                active = null;

            for(var i=0; i<list.length; i++){
                var has = $(list[i]).hasClass('active');
                if(has){
                    active = $(list[i]);
                }
                (function(){
                    list[i].addEventListener('click', function(event){
                        var target = event.currentTarget,
                            siblings = $(target).siblings();
                        $(target).addClass('active');
                        $(siblings).removeClass('active');
                        _loadSettingsTab('', target);
                    });
                })();
            }

            _loadSettingsTab(list, active);

        },

        _createModalAvatar = function(event, wrap){
            var wrapperUpload = document.createElement('div');
                wrapperUpload.id = 'uploadAvatar';
            var title = document.createElement('h2');
                title.innerText = 'Upload profile photo';

            $(wrap).addClass('avatar-modal-wrapper');
            wrap.appendChild(title);
            wrap.appendChild(wrapperUpload);
            window.fileUpload.init({
                wrap:wrapperUpload,
                before:true,
                type:'avatar',
                attr:{
                    id:'avatar190'
                }
            });
            window.modal.setModal(wrap);
        },

        _loadSettingsTab = function(list, active){
            _settings.tmpl = $.extend({}, _settings.tmpl, workConfig.personalSettings);
            if(active){
                ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
                    template:'account/settings/'+$(active).data('idTab'),
                    callback:_postRenderTab,
                    settings:_settings
                });
            }else{
                $(list[0]).addClass('active');
                ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
                    template:'account/settings/profile',
                    callback:_postRenderTab,
                    settings:_settings
                });
            }
        },

        _postRenderTab = function(tmpl){
            var wrap = document.getElementById('tabsAccount');
            ToolsAdmin.insertTmpl(tmpl, wrap, function(){
                var avatarProfile = document.getElementById(_settings.tmpl.avatarIdProfile);
                workConfig.avatarContainer.push(avatarProfile);
                var wrapImg = document.getElementById('loadImg');
                wrapImg.addEventListener('click', function(event){
                    window.modal.create(function(wrap){
                        _createModalAvatar(event, wrap);
                    });
                });
            });
        };

    view.init = function(){
        _postRender();
    };

    return view;
})();