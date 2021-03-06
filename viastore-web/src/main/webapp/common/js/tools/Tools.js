/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 03.04.14
 * Time: 12:32
 * To change this template use File | Settings | File Templates.
 */

var Tools = {
    extend:function(config, localConfig){
       return $.extend({}, config, localConfig);
    },

    location:function(list, currentHash, staticText){
//        var flagNotFount = true;
//        var list = menu.children();
//        menu.find('a.active').removeClass('active');
//
//        for(var i=0; i<list.length; i++){
//           var href = $(list[i]).find('a').attr('href');
//            if(href == location.hash){
//                var title = 'FLS | ' + $(list[i]).find('a').data('title');
//                $('title').text(title);
//                $(list[i]).find('a').addClass('active');
//                flagNotFount = false;
//            }
//            if((location.hash === "") || (location.hash === "#")){
//                var titleHome = 'FLS | Главная';
//                $('title').text(titleHome);
//                $(list[0]).find('a').addClass('active');
//                flagNotFount = false;
//            }
//        }
//
//        if(flagNotFount){
//            var notfound = 'FLS | 404';
//            $('title').text(notfound);
//        }

        for(var i=0; i<list.length; i++){
            var href = $(list[i]).attr('href');
            var name;
            if(href === '#'+currentHash){
                name = $(list[i]).text();
                $('title').text(staticText + ' | ' + name);
                $(list).not($(list[i])).removeClass('active');
                $(list[i]).addClass('active');
            }else if(currentHash === '' || currentHash === '#'){
                name = $(list[0]).text();
                $('title').text(staticText + ' | ' + name);
                $(list[0]).addClass('active');
            }else{

            }
        }
    },
    hash:function(){
        var hash = location.hash;
        var result = hash.split('');
        result.shift();
        return result.join('');
    },

    send:function(data, success, error){
        REQUEST.initRequest({
            url:'mail/compose',
            data:JSON.stringify(data),
            success:function(suck){
                success(suck);
            },
            error:function(){
                error();
            }
        }, 'POST', 'json');
    }
};
