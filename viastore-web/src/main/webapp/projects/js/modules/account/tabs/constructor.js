/**
 * Created by SNSukhanov on 06.06.14.
 */

ADMIN.constructor = (function(){
    var view = {},

        _render = function(){
            console.log('constructor');
        };

    view.init = function(){
      _render();
    };

    return view;
})();