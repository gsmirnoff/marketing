/**
 * Created by SNSukhanov on 06.06.14.
 */

SESSION.Login = (function(){
   var view = {},

       _render = function(){
           var login = document.getElementById('login');
           var pass = document.getElementById('password');
           var submit = document.getElementById('signin');

           submit.addEventListener('click', function(event){
              _authorization(login, pass);
           });
       },

       _authorization = function(login, pass){
           var auth = {
               name:login.value,
               password:pass.value
           };
               REQUEST.initRequest({
                   url:'auth',
                   data:JSON.stringify(auth),
                   success:function(data){
                      SESSION.route.startSession({
                          name:auth.name,
                          pass:auth.password,
                          token:data.response.token.token
                      }, function(){
                          location.pathname = 'viastore/account/';
                      });
                   },
                   error:function(error){
                       console.log(error);
                   }
               }, 'POST', 'json');
       };

    view.init = function(){
      _render();
    };

    return view;
})();