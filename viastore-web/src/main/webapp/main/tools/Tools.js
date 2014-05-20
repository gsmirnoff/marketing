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
    },

    location:function(menu){
        var flagNotFount = true;
        var list = menu.children();
        menu.find('a.active').removeClass('active');

        for(var i=0; i<list.length; i++){
           var href = $(list[i]).find('a').attr('href');
            if(href == location.hash){
                var title = 'FLS | ' + $(list[i]).find('a').data('title');
                $('title').text(title);
                $(list[i]).find('a').addClass('active');
                flagNotFount = false;
            }
        }

        if(flagNotFount){
            var notfound = 'FLS | 404';
            $('title').text(notfound);
        }
    },

    hash:function(){
       var hash = location.hash;
       var result = hash.split('');
           result.shift();
       return result.join('');
    },

    hashChange:function(hash){
       location.hash = hash;
    },

    fetch:function(view, self){
        var hash = Tools.hash();
        if(hash === ""){
            hash = "home";
        }
        AJAX.set({
            root:'api/',
            request:self + '/' + hash,
            success:function(data){
                view.setData(data);
            },
            next:function(){
                view.postRender();
            }
        }, 'fetch');
    },

    save:function(view, self){
        var hash = Tools.hash();
        if(hash === ""){
            hash = "home";
        }
        var data = view.getData();
        AJAX.set({
            root:'api/',
            request:self + '/' + hash,
            data:JSON.stringify(data),
            success:function(data){
               console.log(data);
            },
            next:function(){

            }
        }, 'save');
    },

    update:function(view, self, id){
        var hash = Tools.hash();
        if(hash === ""){
            hash = "home";
        }
        var data = view.getData();
        AJAX.set({
            root:'api/',
            request:self + '/' + hash + '/' + id,
            data:JSON.stringify(data),
            success:function(data){
                console.log(data);
            },
            next:function(){

            }
        }, 'save');
    },

    delete:function(view, self, id){
        var hash = Tools.hash();
        if(hash === ""){
            hash = "home";
        }
        AJAX.set({
            root:'api/',
            request:self + '/' + hash + '/' + id,
            success:function(data){
                console.log(data);
            },
            next:function(){

            }
        }, 'save');
    }
};
