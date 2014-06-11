/**
 * Created by SNSukhanov on 09.06.14.
 */

window.onload = function(){
    if(!sessionStorage.token){
       if(location.pathname === '/pages/login/'){
           PLATFORM.RouteLogin.start();
       }else{
           location.pathname = '/pages/login/';
       }
    }else{
        if(location.pathname === '/pages/account/'){
            PLATFORM.RouteAccount.start();
        }else{
            location.pathname = '/pages/account/';
        }
    }
};