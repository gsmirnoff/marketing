/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.page = (function(){
    var view = {},
        _el = document.body,
        _route = {},
        _settings = {},
        _stuffPage = [],
        _currentLayout = 0,

        _render = function(){
            _load(_currentLayout);
            (function(load){
                if(load){
                    $(document).on('changeAvatar', function(event){
                        ToolsAdmin.changeAvatar(event.avatarId, workConfig.avatarContainer, event.callbackAvatar);
                    });
                }
            })(localStorage.typeEventLoad  === "load");
        },

        _load = function(index){
            ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
                template:'account/' + _stuffPage[index],
                callback:_reload,
                settings:_settings
            });
        },

        _reload = function(tmpl){
           ToolsAdmin.insertTmpl(tmpl, _el, function(){
               if(_currentLayout !== window.countLayout-1){
                   PLATFORM[_stuffPage[_currentLayout]].init(_route);
                   _currentLayout++;
                   _load(_currentLayout);
               }else{

               }
           }, 'add');
        };

    view.init = function(route){
        _el = document.getElementById('wrapper');
        _settings.nav = workConfig.nav;
        _route = route;
        window.countLayout = workConfig.layout.length;
        _stuffPage = workConfig.layout;
        window.editorProfile = EDITOR.profile.init();
        window.modal = new Modal().newModal();
        window.fileUpload = new FileUpload();

        _render();
    };

    return view;
})();