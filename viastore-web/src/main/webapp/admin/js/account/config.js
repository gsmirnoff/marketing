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
        'statistics':'statistics',
        'chat':'chat'
    },

   //pages
    layout:[
        'header',
        'footer',
        'nav'
    ],

    pages:[
       'header',
       'footer',
       'nav',
       'constructor',
       'fileManager',
       'settings',
       'statistics',
       'chat',
       'settings/profile',
       'settings/history',
       'settings/change',
       'settings/projects'
   ],

    avatarContainer:[]
};