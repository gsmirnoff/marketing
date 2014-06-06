/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:57
 * To change this template use File | Settings | File Templates.
 */

window.APP = {};
window.ADMIN = {};
window.SESSION = {};

APP.setToken = function(user, token){
    sessionStorage.setItem('name', user.name);
    sessionStorage.setItem('role', user.role);
    sessionStorage.setItem('token', token.token);
    sessionStorage.setItem('expires', token.expires);
};

APP.getToken = function(){
   var token = {
       'accessToken':sessionStorage.getItem('token'),
       'access':sessionStorage.getItem('expires')
   };

    return token;
};

APP.deleteToken = function(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expires');
};

APP.start = function(){
  this.Router.start();
};