/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.settings = (function(){
    var view = {},

        _el = 'content',
        _tab,

        _settings = {
           tmpl:{
               defaultProfilePhoto:'/resources/img/defaultAvatar.jpg',
               defaultProjectPhoto:'/resources/img/defaultProject.png',
               avatarIdProfile:'avatarProfile'
           }
        },

        _render = function(tmpl){
            if(localStorage.settingsTab){
                _tab = localStorage.settingsTab;
            }else{
                _tab = 'profile';
            }
           _activateMenu();
            _loadSettingsTab(_tab);
        },

        _activateMenu = function(){
            var wrap = document.getElementById('menuTabsAccount'),
                list = wrap.children,
                active = null;

            for(var i=0; i<list.length; i++){

                var has = $(list[i]).data('idTab');

                if(has == _tab){
                    $(list[i]).addClass('active');
                    active = $(list[i]);
                }
                (function(){
                    list[i].addEventListener('click', function(event){
                        var target = event.currentTarget,
                            siblings = $(target).siblings();
                        _tab  = $(target).data('idTab');
                        localStorage.settingsTab = $(target).data('idTab');
                        $(target).addClass('active');
                        $(siblings).removeClass('active');
                        _loadSettingsTab(_tab);
                    });
                })();
            }

        },

        _loadSettingsTab = function(tab){
            _settings.tmpl = $.extend({}, _settings.tmpl, workConfig.personalSettings);
            console.log(_settings);
            ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
                template:'account/settings/' + tab,
                callback:_postRenderTab,
                settings:_settings
            });
        },

        _postRenderTab = function(tmpl){
            var wrap = document.getElementById('tabsAccount');
            ToolsAdmin.insertTmpl(tmpl, wrap, function(){
               PLATFORM[_tab].init();
            }, 'insert');
        };

    view.init = function(){
        _render();
    };

    return view;
})();