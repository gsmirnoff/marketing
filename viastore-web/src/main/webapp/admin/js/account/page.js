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
        };

    view.init = function(routes){
        _routes = routes;
        _render();
    };

    return view;
})();