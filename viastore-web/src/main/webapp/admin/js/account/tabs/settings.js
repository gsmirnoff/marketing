/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.settings = (function(){
    var view = {},

        _el = 'content',

        _settings = {
           tmpl:{
               defaultProfilePhoto:'/resources/img/defaultAvatar.jpg'
           }
        },

        _render = function(tmpl){
            var wrap = document.getElementById(_el);
            ToolsAdmin.insertTmpl(tmpl, wrap, _postRender);
        },

        _createModalAvatar = function(event, wrap){
            console.log(wrap);
                $(wrap).addClass('avatar-modal-wrapper');
            var wrapperUpload = document.createElement('div');
                wrapperUpload.id = 'uploadAvatar';
            var title = document.createElement('h2');
                title.innerText = 'Upload profile photo';
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
            window.modal.newModal().setModal(wrap);
        },

        _postRender = function(){

            var wrap = document.getElementById('menuTabsAccount'),
                list = wrap.children,
                active = null;

            for(var i=0; i<list.length; i++){
                var has = $(list[i]).hasClass('active');
                console.log(list[i]);
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
               console.log('All right!');
                var wrapImg = document.getElementById('loadImg');
                wrapImg.addEventListener('click', function(event){
                    window.modal.newModal().create(function(wrap){
                        _createModalAvatar(event, wrap);
                    });
                });
            });
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
            template:'account/settings',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();