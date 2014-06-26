/**
 * Created by SNSukhanov on 26.06.14.
 */

function Accordion(){
    var view = this,

        _render = function(){
           console.log('accordion load complete...');
        };

    view.init = function(){
        _render();
    };

    view.init();
}