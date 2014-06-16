/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.page = (function(){
    var view = {},
        _routes = {},
        _settings = {},

        _render = function(){
            var hash = Tools.hash();
            ToolsAdmin.routeHash(hash, _routes);
            ToolsAdmin.title(hash);
        };

    view.init = function(routes){
        _routes = routes;
        _render();
    };

    return view;
})();