/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 03.04.14
 * Time: 12:32
 * To change this template use File | Settings | File Templates.
 */

var Tools = {
    extend:function(localConfig){
       return $.extend({}, config, localConfig);
    }
};
