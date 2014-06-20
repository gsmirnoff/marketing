/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 16:10
 * To change this template use File | Settings | File Templates.
 */

APP.home = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'index/content',
        _partials = ['index/head', 'index/contacts'],
        _config = {

        },

        _render = function(){
           APP.SwitcherItem.init();
          $('#sendMail').on('click', function (event){
              $(event.currentTarget).val('Отправка...');
             var form = $(event.currentTarget).parent();
              var data = form.serialize();
              console.log(data);
              data = {
                  name:data.split('&')[0].split('=')[1],
                  email:data.split('&')[1].split('=')[1].replace('%40', '@'),
                  message:data.split('&')[2].split('=')[1]
              };

              Tools.send(data, function(success){
                 var wrap = $('<div/>').addClass('success-mail').css({
                     top:window.scrollY-80
                 });
                  var p = $('<p/>').text('Сообщение отправлено...');
                  wrap.append(p);
                  $('body').append(wrap);

                  wrap.animate({
                      top:scrollY+80
                  }, 1000, function(){
                      $(event.currentTarget).val('Отправить');
                      wrap.fadeOut(1000, function(){
                          wrap.remove();
                      });
                  });

              }, function(){
                  var wrap = $('<div/>').addClass('error-mail');
                  var p = $('<p/>').text('Сообщение не отправлено...');
                  wrap.append(p);

              });
          });
        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $('.banner').css('display', 'block');
            $(_el).addClass('home-content').html(html);
            _render();
        });
    };

    return view;
})(APP);
