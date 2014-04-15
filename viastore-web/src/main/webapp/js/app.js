/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:57
 * To change this template use File | Settings | File Templates.
 */

window.APP = {};

APP.Request = function(options){
    try{
        $.ajax({
            beforeSend:options.token,
            url:config.apiFolder + options.url,
            type:options.type,
            dataType:'json',
            contentType:'application/json',
            data:options.data,
            success:options.success,
            error:options.error
        }).done(options.next);
    }catch(e){

    }
};

APP.get = function(options){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'GET',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

APP.post = function(options){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'POST',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

APP.put = function(options){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'PUT',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

APP.delete = function(options){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'DELETE',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

APP.initRequest = function(options, type){
    if(type){
        this[type.toLowerCase()](options);
    }else{
        this.Request(options);
    }
};

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