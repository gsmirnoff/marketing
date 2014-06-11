/**
 * Created by SNSukhanov on 11.04.14.
 */

APP.admin = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'admin/content',
        _partials = [],
        _config = {

        },

        _data ={},

        _render = function(){
            $(_el).find('div').on('click', function(event){

            });
        },

        _saveDataHome = function(){
          REQUEST.initRequest({
              url:'pages/home',
              data:JSON.stringify(_data),
              success:function(data){
                console.log(data);
              },
              error:function(){

              }
          }, 'POST', 'json');
        },
        _saveDataSolutions = function(){
          REQUEST.initRequest({
              url:'pages/solutions',
              data:JSON.stringify(_data),
              success:function(data){
                  console.log(data);
              },
              error:function(){

              }
          }, 'POST', 'json');
        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $(_el).html(html);
            _render();
        });
    };

    return view;
})(APP);