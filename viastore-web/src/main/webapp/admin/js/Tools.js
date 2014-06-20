/**
 * Created by SNSukhanov on 09.06.14.
 */

var ToolsAdmin = {
    loadTemplate:function(path, options){
      TEMPLATES.changePath(path, function(){
         TEMPLATES.setTemplate({
             template:options.template,
             next:options.callback,
             settings:options.settings
         }, 'loadTemplate');
      });
    },

    insertTmpl:function(tmpl, wrap, callback, type){
        switch(type){
            case 'insert':(function(){
                wrap.innerHTML = tmpl;
            })();
                break;
            case 'add':(function(){
                $(wrap).append(tmpl);
            })();
                break;
            default:(function(){
                wrap.innerHTML = tmpl;
            })();
        }
        callback();
    },

    changeAvatar:function(id, arrayAvatar, callback){
        delete workConfig.personalSettings.avatarUrl;
        userSettings.setSettings(workConfig.personalSettings, function(){
            ToolsAdmin.fetchAvatar(id, function(){
                var url = workConfig.personalSettings.avatarUrl;
                for(var i=0; i<arrayAvatar.length; i++){
                    arrayAvatar[i].src = url;
                }
                callback();
            });

        });
    },

    progressBar:function(){

    },

    fetchAvatar:function(id, callback){
        REQUEST.initRequest({
            url:'/api/image/' + id,
            contentType:'application/json',
            success:function(data){
                workConfig.personalSettings.avatarUrl = data.response.data;
              callback();
            },
            error:function(error){
                console.log(error);
            }
        }, 'GET', 'json');
    },

    exit:function(callback){
        sessionStorage.clear();
        localStorage.clear();
        callback();
    },

    title:function(hash){
        var title = document.getElementsByTagName('title');
        var wrapper = document.getElementById('wrapper');
        var small = document.getElementById('pageName');
        if(hash === ''){
            hash = 'login';
        }

        title[0].innerText = 'Admin panel | ' + hash.toUpperCase();
        wrapper.className = hash;
        small.innerText = hash.toUpperCase();

        (function(){
            var listLinks = document.getElementsByClassName('login-nav');
            for(var i=0; i<listLinks.length; i++){
                if($(listLinks[i]).attr('href') === '#'+hash){
                    listLinks[i].className = 'login-nav active';
                }

                listLinks[i].addEventListener('click', function(event){
                    $(event.currentTarget).addClass('active');
                    $(event.currentTarget).siblings().removeClass('active');
                }, false);
            }
        })();
    },

    parseFormData:function(form){
        var data = $(form).serialize().split('&');
        var result = {};
        for(var i=0; i<data.length; i++){
            var attr = data[i].split('=');
            result[attr[0]] = attr[1];
        }
        return result;
    },

    slideTabs:function(tmpl, callback){
        var wrapper = document.getElementById('form');
        if(localStorage.typeEventLoad === 'load'){
            wrapper.innerHTML = tmpl;
            callback();
        }else if(localStorage.typeEventLoad === 'hashchange'){
            var form = wrapper.childNodes;
            $(form).animate({
                left:'-300px'
            }, 200, function(){
                $(wrapper).hide();
                wrapper.innerHTML = tmpl;
                $(wrapper).fadeIn(600, function(){
                    callback();
                });
            });
        }
    },

    routeHash:function(hash, routes){
       if(hash === routes[hash]){
           PLATFORM[hash].init();
       }else if(hash === ''){
           PLATFORM[routes[hash]].init();
       }else{
           hash = '';
           PLATFORM[routes[hash]].init();
       }
    }
};
