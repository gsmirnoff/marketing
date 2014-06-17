/**
 * Created by SNSukhanov on 11.06.14.
 */

var userSettings = {
    getSettings:function(callback){
        REQUEST.initRequest({
            token:function(request){
              request.setRequestHeader('token', PLATFORM.getToken());
            },
            url:'/api/user/current',
            success:function(data){
                console.log(data);
                workConfig.personalSettings = data;
            },
            error:function(error){
                console.log(error);
            },
            next:function(){
                callback();
            }
        }, 'GET', 'json');
    },

    setSettings:function(data, callback){
        REQUEST.initRequest({
            token:function(request){
                request.setRequestHeader('token', PLATFORM.getToken());
            },
            url:'/api/user/current',
            data:data,
            success:function(result){
                console.log(result);
            },
            error:function(){

            },
            next:function(){
                callback();
            }
        }, 'POST', 'json');
    }
};