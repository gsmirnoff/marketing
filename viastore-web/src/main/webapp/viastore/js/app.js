/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:57
 * To change this template use File | Settings | File Templates.
 */

window.APP = {};

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

APP.save = function(self){
   console.log(self);
};

APP.fetch = function(self){
    console.log(self);
    var page = Tools.hash();
    REQUEST.initRequest({
        url:'pages/'+page,
        success:function(data){
           self.setData(data);
        },
        next:function(){
          self.postRender();
        }
    },'GET', 'json');

};

APP.delete = function(self){

};

APP.update = function(self){

};



APP.start = function(){
  this.Router.start();
};