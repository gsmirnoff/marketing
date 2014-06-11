/**
 * Created by SNSukhanov on 06.06.14.
 */

ADMIN.settings = (function(){
    var view = {},

        _render = function(){
            console.log('settings');
        };

    view.init = function(){
        _render();
    };

    return view;
})();