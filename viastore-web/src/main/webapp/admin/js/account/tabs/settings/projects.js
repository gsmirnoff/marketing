/**
 * Created by SNSukhanov on 20.06.14.
 */

PLATFORM.projects = (function(){
    var view = {},
        _el,
        _data = {
        },

        _settings = {},

        _render = function(){
           window.fileUpload.initFileUpload(_el, function(event){
               console.log(event);
              console.log('Here is projects page...');
               window.modal.create(function(wrap){
                   var wrapperUpload = document.createElement('div');
                   wrapperUpload.id = 'uploadAvatarProject';
                   var title = document.createElement('h2');
                   title.innerText = 'Upload project photo';

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
                       save:_saveProject,
                       delete:_deleteProject
                   });
                   window.modal.setModal(wrap);
               });
           });
        },

        _saveProject = function(){
           console.log('this is new Avatar project');
        },

        _deleteProject = function(){

        };

    view.init = function(route){
       _render();
    };

    return view;
})();