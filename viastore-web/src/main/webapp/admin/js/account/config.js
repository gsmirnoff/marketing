/**
 * Created by SNSukhanov on 09.06.14.
 */

var configAccount = {
    apiFolder:'../../api/',
    templatesFolder:'../../../../resources/templates/',

    //image
    defaultImageAccount:'defaultavatar.jpg',

    //paths
    page:'account',
    currentPath:'/pages/account/',
    toPath:'/pages/login/',

    //routes
    routes:{
        '':'constructor',
        'constructor':'constructor',
        'fileManager':'fileManager',
        'settings':'settings',
        'statistics':'statistics'
    }
};