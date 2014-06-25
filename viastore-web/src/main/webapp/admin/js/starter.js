/**
 * Created by SNSukhanov on 09.06.14.
 */

window.onload = function(){
    var localConfig = window.configLogin || window.configAccount;
    window.workConfig = Tools.extend(config, localConfig);

    if(!sessionStorage.token){
        if((location.pathname === workConfig.currentPath) && (workConfig.page === 'login')){
            PLATFORM.Route.start();
        }else{
           location.pathname = workConfig.toPath;
        }
    }else{
        if((location.pathname === workConfig.currentPath) && (workConfig.page === 'account')){
            userSettings.getProfile(function(){
                userSettings.getProjects(function(){
                    if(workConfig.personalSettings.avatarId){
                        ToolsAdmin.fetchAvatar(workConfig.personalSettings.avatarId, function(){
                            PLATFORM.Route.start();
                        });
                    }else{
                        PLATFORM.Route.start();
                    }
                });
            });
        }else{
            location.pathname = workConfig.toPath;
        }
    }
};