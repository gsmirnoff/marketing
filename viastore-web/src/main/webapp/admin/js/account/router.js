/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.RouteAccount = (function(){
    var view = {},

        _routes = {
        },

        _render = function(){
           console.log('account');
        };

    view.start = function(){
      _render();
    };

    return view;
})();