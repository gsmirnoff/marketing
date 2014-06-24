/**
 * Created by SNSukhanov on 20.06.14.
 */

PLATFORM.profile = (function(){
    var view = {},
        _el,

        _settings = {},

        _render = function(){
            var avatarProfile = document.getElementById('avatarProfile');
            var edit = $('.edit-profile > a');

            workConfig.avatarContainer.push(avatarProfile);
            var wrapImg = document.getElementById('loadImg');
            wrapImg.addEventListener('click', function(event){
                window.modal.create(function(wrap){
                    _createModalAvatar(event, wrap);
                });
            });

            edit.on('click', function(event){
                event.preventDefault();
               window.editorProfile.start();
            });
        },

        _createModalAvatar = function(event, wrap){
            var wrapperUpload = document.createElement('div');
            wrapperUpload.id = 'uploadAvatar';
            var title = document.createElement('h2');
            title.innerText = 'Upload profile photo';

            $(wrap).addClass('avatar-modal-wrapper');
            wrap.appendChild(title);
            wrap.appendChild(wrapperUpload);
            window.fileUpload.init({
                wrap:wrapperUpload,
                before:true,
                type:'avatar',
                attr:{
                    id:'avatar190'
                }
            });
            window.modal.setModal(wrap);
        };

    view.init = function(route){
       _render();
        window.editorProfile.check();
        if(localStorage.newUser == 'true'){
            window.editorProfile.start();
            localStorage.newUser = false;
        }

    };

    return view;
})();