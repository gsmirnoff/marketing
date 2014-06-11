/**
 * Created by SNSukhanov on 04.06.14.
 */

function Auth(options){
    var view = this,

        _settings = {
            wrap:options.wrapper || document,
            idLogin:options.login || 'login',
            idPass:options.password || 'password',
            idBtn:options.button || 'button'
        },

        _render = function(){
            _createHTML();
        },

        _createHTML = function(){
            var form = document.createElement('form');
            form.className = 'form-auth';

            var login = document.createElement('input');
            login.type = 'text';
            login.id = _settings.idLogin;
            login.name = _settings.idLogin;
            login.placeholder = 'Enter your login';
            login.value = '';

            var pass = document.createElement('input');
            pass.type = 'password';
            pass.id = _settings.idPass;
            pass.name = _settings.idPass;
            pass.placeholder = 'Enter your password';
            pass.value = '';

            var btn = document.createElement('input');
            btn.type = 'button';
            btn.id = _settings.idBtn;
            btn.value = 'Sign in';

            form.appendChild(login);
            form.appendChild(pass);
            form.appendChild(btn);
            _settings.wrap.appendChild(form);

            //handlers
            (function(){
                login.addEventListener('keyup', function(event){
                    var str = $(this).serialize();
                    console.log(str);
                });

                pass.addEventListener('keyup', function(event){
                    var str = $(this).serialize();
                    console.log(str);
                });

                btn.addEventListener('click', function(event){
                    event.preventDefault();
                    _session(event, form);
                })
            })();


        },


        _session = function(event, form){
            var str = $(form).serialize();
            console.log(str);
            str = str.split('&');
            try{
                $.ajax({
                    url:'/api/auth',
                    type:'POST',
                    contentType:'application/json',
                    dataType:'json',
                    data:JSON.stringify({
                        name:str[0].split('=')[1],
                        password:str[1].split('=')[1]
                    }),
                    success:function(data){
                        localStorage.token = data.response.token.token;
                        new FileUpload({
                            wrap:document.getElementById('avatarLoader'),
                            attr:{
                                id:'fileinput123'
                            }
                        });
                        $(_settings.wrap).slideUp(1000, function(){
                            $(this).empty();
                        });
                        $('#avatarLoader').slideDown(1000);
                    },
                    error:function(e){
                        console.log(e);
                    }
                })
            }catch (e){
                console.log(e);
            }
        };

    view.init = function(){
        _render();
    };

    view.init();
}