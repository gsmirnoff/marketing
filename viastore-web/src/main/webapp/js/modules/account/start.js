/**
 * Created by SNSukhanov on 06.06.14.
 */



$(document).ready(function(){
    if(sessionStorage.token){
         ADMIN.route.start();
    }else{
        location.pathname = '/viastore/login';
    }
});