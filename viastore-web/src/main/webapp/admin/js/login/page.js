/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.page = (function(){
    var view = {},
        _route = {},
        _settings = {},

        _render = function(){
            var hash = Tools.hash();
            ToolsAdmin.routeHash(hash, _route);

            ToolsAdmin.title(hash);
        };

    view.init = function(route){
        _route = route;
        _render();
    };

    return view;
})();