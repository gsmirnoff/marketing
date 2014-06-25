/**
 * Created by SNSukhanov on 11.06.14.
 */

var userSettings = {
    getProfile:function(callback){
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

    setProfile:function(data, callback){
        REQUEST.initRequest({
            token:function(request){
                request.setRequestHeader('token', PLATFORM.getToken());
                delete data.avatarUrl;
            },
            url:'/api/user/current',
            data:JSON.stringify(data),
            success:function(result){
                console.log(result);
            },
            error:function(){

            },
            next:function(){
                callback();
            }
        }, 'PUT', 'json');
    },

    getProjects:function(callback){
        REQUEST.initRequest({
            url:'/api/project',
            success:function(data){
                console.log(data);
                workConfig.personalSettings.projects = data;
            },
            error:function(error){
                console.log(error);
            },
            next:function(){
                callback();
            }
        }, 'GET', 'json');
    },

    setProjects:function(callback){
        REQUEST.initRequest({
            url:'/api/project',
            data:JSON.stringify(data),
            success:function(r){
                console.log(r);
            },
            error:function(error){
                console.log(error);
            },
            next:function(){
                callback();
            }
        }, 'POST', 'json');
    }


};