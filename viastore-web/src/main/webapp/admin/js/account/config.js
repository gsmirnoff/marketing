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

    //navigation
    nav:[
        {
            url:'#constructor',
            title:'Constructor'
        },
        {
            url:'#fileManager',
            title:'File manager'
        },
        {
            url:'#settings',
            title:'Profile'
        },
        {
            url:'#statistics',
            title:'Statistics'
        },
        {
            url:'#chat',
            title:'Chat'
        }
    ],

   //pages
    layout:[
        'header',
        'nav',
        'content',
        'footer'
    ],

    pages:[
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