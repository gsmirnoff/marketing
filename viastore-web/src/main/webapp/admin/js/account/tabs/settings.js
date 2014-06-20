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
               avatarIdProfile:'avatarProfile'
           }
        },

        _render = function(tmpl){
            _tab = 'profile';
            _settings.tmpl = $.extend({}, _settings.tmpl, workConfig.personalSettings);
           _activateMenu();
            _loadSettingsTab(_tab);
        },

        _activateMenu = function(){
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
                        _tab  = $(target).data('idTab');
                        $(target).addClass('active');
                        $(siblings).removeClass('active');
                        _loadSettingsTab(_tab);
                    });
                })();
            }

        },

        _loadSettingsTab = function(tab){
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
