/**
 * Created by SNSukhanov on 20.05.14.
 */

window.TEMPLATES = {
    path:'resources/templates/',
    type:'.tmpl',
    template:null,
    config:null,
    html:null,
    elem:null,
    next:null
};

TEMPLATES.loadTemplate = function(options){
    var url = this.path + options.template + this.type;
    REQUEST.Request({
        url:url,
        type:'GET',
        dataType:'html',
        contentType:'application/json',
        complete:function(){
            console.log('Just complete!');
        },
        success:function(res){
            TEMPLATES.compile(res);
        },
        next:function(){
            TEMPLATES.setAttributes(options.next, options.settings);
        },
        error:function(e){
            console.log(e);
        }
    });
};

TEMPLATES.compile = function(source){
    this.html = Handlebars.compile(source);
};

TEMPLATES.setAttributes = function(next, settings){
    this.elem = this.html(settings);
    next(this.elem, settings);
};

TEMPLATES.changePath = function(path, callback){
    if(path){
        this.path = path;
    }

    callback();
};

TEMPLATES.changeType = function(type){
    if(type){
        this.type = type;
    }
    return this.type;
};

TEMPLATES.setTemplate = function(options, callback){
    this[callback]({
        template:options.template,
        next:options.next,
        settings:options.settings
    });
};
