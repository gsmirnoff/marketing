/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:57
 * To change this template use File | Settings | File Templates.
 */

window.APP = {};

APP.Request = function(options){

};

APP.get = function(options){

};

APP.post = function(options){

};

APP.put = function(options){

};

APP.delete = function(options){

};

APP.initRequest = function(options, type){
    if(type){
        this[type](options);
    }else{
        this.Request(options);
    }
};

APP.setToken = function(token){
    sessionStorage.setItem('Access-Token', token.accessToken);
    sessionStorage.setItem('Access', token.access);
};

APP.getToken = function(){
   var token = {
       'accessToken':sessionStorage.getItem('Access-Token'),
       'access':sessionStorage.getItem('Access')
   };

    return token;
};

APP.deleteToken = function(){
    sessionStorage.removeItem('Access-Token');
    sessionStorage.removeItem('Access');
};

APP.start = function(){
  this.Router.start();
};