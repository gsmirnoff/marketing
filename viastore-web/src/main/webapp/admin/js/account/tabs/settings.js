/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.settings = (function(){
    var view = {},

        _el = 'content',

        _settings = {
           tmpl:{
               defaultProfilePhoto:'resources/img/defaultAvatar.jpg'
           }
        },

        _render = function(tmpl){
            var wrap = document.getElementById(_el);
                wrap.innerHTML = tmpl;
             _postRender();
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
            _settings.tmpl = workConfig.personalSettings;
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
            wrap.innerHTML = tmpl;
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