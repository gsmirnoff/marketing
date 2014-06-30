/**
 * Created by SNSukhanov on 20.06.14.
 */

PLATFORM.profile = (function(){
    var view = {},
        _el,
        _editorContainer,

        _settings = {},

        _render = function(){
            var avatarProfile = document.getElementById('avatarProfile');
            var edit = $('.edit-profile > a');
           _editorContainer = $('.data-profile');

            workConfig.avatarContainer.push(avatarProfile);

            window.fileUpload.initFileUpload(_el, function(){
                window.modal.create(function(wrap){
                    _createModalAvatar(event, wrap);
                });
            });

            edit.on('click', function(event){
                event.preventDefault();
               window.editorProfile.start(_editorContainer, {
                   saveButton:'profile',
                   resetButton:'profile'
               });
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
                },
                save:_saveAvatar,
                delete:_deleteAvatar
            });
            window.modal.setModal(wrap);
        },

        _saveAvatar = function(event){

        },

        _deleteAvatar = function(event){

        };

    view.init = function(route){
       _render();
        window.editorProfile.check(_editorContainer, {
            saveButton:'profile',
            resetButton:'profile'
        });
        if(localStorage.newUser == 'true'){
            window.editorProfile.start(_editorContainer, {
                saveButton:'profile',
                resetButton:'profile'
            });
            localStorage.newUser = false;
        }

    };

    return view;
})();