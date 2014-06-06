/**
 * Created by SNSukhanov on 06.06.14.
 */


var SESSION = {};

SESSION.route = (function(){
   var view = {};


    view.startSession = function(data, callback){
           sessionStorage.name = data.name;
           sessionStorage.token = data.token;
           sessionStorage.pass = data.pass;

        callback();
    };

    view.getDataSession = function(){
        return {
            name:sessionStorage.name,
            token:sessionStorage.token,
            pass:sessionStorage.pass
        };
    };

    view.start = function(){
        SESSION.Login.init();
    };

    return view;
})();

$(document).ready(function(){
    if(sessionStorage.token){
        location.pathname = '/viastore/account';
    }else{
        SESSION.route.start();
    }
});