/**
 * Created by SNSukhanov on 09.06.14.
 */

var PLATFORM = {};

PLATFORM.getToken = function(){
  if(sessionStorage.token){
      return sessionStorage.token;
  }else{
      console.log('token is not found. ERROR!!!');
      return false;
  }
};

PLATFORM.setToken = function(token){
    if(sessionStorage){
        sessionStorage.token = token;
        console.log('token is set successfully');
        return true;
    }else{
        console.log('token does not set. ERROR!!!');
        return false;
    }
};

PLATFORM.removeToken = function(){
    if(sessionStorage.token){
        sessionStorage.removeItem('token');
        console.log('token is deleted');
        return true;
    }else{
        console.log('property does not exist. ERROR!!!');
        return false;
    }
};
