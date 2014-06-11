/**
 * Created by SNSukhanov on 06.06.14.
 */

ADMIN.headLine = (function(){
    var view = {},
        _el = 'userAccount',

        _render = function(){
          _loadSettings();
        },

        _createHTML = function(data){
            var wrapper = document.getElementById(_el);
            var username = document.createElement('span');
            if(data.name){
                    username.className = 'user-name';
                    username.innerText = data.name;
            }
            var wrapUserPic = document.createElement('div');
                wrapUserPic.className = 'wrap-user-pic';
            var userPic = document.createElement('img');

            if(data.avatarId){
                _loadAvatar(data.avatarId, function(url){
                    userpic.src = url;
                });
            }else{
                userPic.src = config.defaultAvatar;
            }

            wrapUserPic.appendChild(userPic);

            var exit = document.createElement('a');
                exit.className = 'exit';
                exit.innerText = 'Log out';

            exit.addEventListener('click', function(event){
               event.preventDefault();
                sessionStorage.clear();
                location.pathname = 'viastore/login';
            });

            wrapper.appendChild(username);
            wrapper.appendChild(wrapUserPic);
            wrapper.appendChild(exit);

        },

        _loadAvatar = function(userId, callback){
           REQUEST.initRequest({
               token:function(request){
                   request.setRequestHeader('token', sessionStorage.token);
               },
               url:'api/image/' + userId,
               type:'GET',
               contentType:'application/json',
               success:function(data){
                   callback(data.response.data);
               },
               error:function(error){
                  console.log(error);
               }
           }, 'POST');
        },

        _loadSettings = function(){
          REQUEST.initRequest({
              token:function(request){
                  request.setRequestHeader('token', sessionStorage.token);
              },
              url:"user/current",
              success:function(data){
                 _createHTML(data);
              },
              error:function(error){
                  console.log(error);
              }
          }, 'GET', 'json');
        };

    view.init = function(){
        _render();
    };

    return view;
})();