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

TEMPLATES.loadTemplate = function(settings){
    var url = this.path + this.template + this.type;
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
            TEMPLATES.setAttributes(settings);
        },
        error:function(e){
            console.log(e);
        }
    });
};

TEMPLATES.compile = function(source){
    this.html = Handlebars.compile(source);
};

TEMPLATES.setAttributes = function(settings){
    this.elem = this.html(settings);
    this.next(this.elem, settings);
};

TEMPLATES.changePath = function(path){
    if(path){
        this.path = path;
    }
    return this.path;
};

TEMPLATES.changeType = function(type){
    if(type){
        this.type = type;
    }
    return this.type;
};

TEMPLATES.setTemplate = function(options, callback){
    this.template = options.template;
    this.next = options.next;
    this[callback](options.settings);
};