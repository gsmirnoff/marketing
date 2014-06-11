/**
 * Created by SNSukhanov on 09.06.14.
 */

window.onload = function(){
    if(!sessionStorage.token){
       if(location.pathname === '/pages/login/'){
           window.workConfig = Tools.extend(config, configLogin);
           PLATFORM.Route.start();
       }else{
           location.pathname = '/pages/login/';
       }
    }else{
        if(location.pathname === '/pages/account/'){
            userSettings.getSettings(function(){
                window.workConfig = Tools.extend(config, configAccount);
                PLATFORM.Route.start();
            });
        }else{
            location.pathname = '/pages/account/';
        }
    }
};