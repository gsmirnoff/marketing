/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.page = (function(){
    var view = {},
        _routes = {},
        _settings = {},
        _sections = {
            header:false,
            nav:false,
            footer:false
        },

        _render = function(){
           var header = document.getElementById('header');
           var nav = document.getElementById('nav');
           var content = document.getElementById('content');
           var footer = document.getElementById('footer');

            if(!_sections.header){
                _sections.header = true;
                PLATFORM.header.init(header);
            }

            if(!_sections.nav){
                _sections.nav = true;
                PLATFORM.nav.init(nav);
            }

            var hash = Tools.hash();
            ToolsAdmin.routeHash(hash, _routes);

            if(!_sections.footer){
                _sections.footer = true;
                PLATFORM.footer.init(footer);
            }

            (function(load){
                if(load){
                    $(document).on('changeAvatar', function(event){
                        ToolsAdmin.changeAvatar(event.avatarId, workConfig.avatarContainer, event.callbackAvatar);
                    });
                }
            })(localStorage.typeEventLoad  === "load");
        };

    view.init = function(routes){
        _routes = routes;
        window.modal = new Modal().newModal();
        window.fileUpload = new FileUpload();
        if(workConfig.personalSettings.avatarId){
            ToolsAdmin.fetchAvatar(workConfig.personalSettings.avatarId, function(){
                _render();
            });
        }else{
            _render();
        }

    };

    return view;
})();