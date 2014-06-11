/**
 * Created by SNSukhanov on 06.06.14.
 */

ADMIN.fileManager = (function(){
    var view = {},

        _render = function(){
            console.log('file manager');
        };

    view.init = function(){
        _render();
    };

    return view;
})();