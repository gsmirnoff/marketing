/**
 * Created by SNSukhanov on 17.04.14.
 */

window.REQUEST = {
    root:'',
    folder:'',
    request:'',
    success:null,
    error:null,
    next:null,
    complete:null,
    data:null
};

REQUEST.Request = function(options){
    try{
        $.ajax({
            beforeSend:options.token,
            url:options.url,
            type:options.type,
            crossDomain:true,
            dataType:options.dataType,
            contentType:options.contentType,
            data:options.data,
            complete:options.complete,
            success:options.success,
            error:options.error
        }).done(options.next);
    }catch(e){
        console.log(e);
    }
};

REQUEST.get = function(options, dataType){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'GET',
        dataType:dataType,
        contentType:'application/json',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

REQUEST.post = function(options, dataType){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'POST',
        dataType:dataType,
        contentType:'application/json',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

REQUEST.put = function(options, dataType){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'PUT',
        dataType:dataType,
        contentType:'application/json',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

REQUEST.delete = function(options, dataType){
    this.Request({
        beforeSend:options.token,
        url:options.url,
        type:'DELETE',
        dataType:dataType,
        contentType:'application/json',
        data:options.data,
        success:options.success,
        error:options.error,
        next:options.next
    });
};

REQUEST.initRequest = function(options, type, dataType){
    if(type){
        this[type.toLowerCase()](options, dataType);
    }else{
        this.Request(options);
    }
};

REQUEST.fetch = function(){
    REQUEST.initRequest({
        url:this.root + this.folder + this.request,
        data:this.data,
        success:this.success,
        next:this.next
    }, 'GET', 'json');
};

REQUEST.save = function(){
    REQUEST.initRequest({
        url:this.root + this.folder + this.request,
        data:this.data,
        success:this.success,
        next:this.next
    }, 'POST', 'json');
};

REQUEST.update = function(){
    REQUEST.initRequest({
        url:this.root + this.folder + this.request,
        data:this.data,
        success:this.success,
        next:this.next
    }, 'PUT', 'json');
};

REQUEST.remove = function(){
    REQUEST.initRequest({
        url:this.root + this.folder + this.request,
        data:this.data,
        success:this.success,
        next:this.next
    }, 'DELETE', 'json');
};

REQUEST.set = function(options, callback){
    this.root = options.root || '';
    this.folder = options.folder || '';
    this.request = options.request || '';
    this.data = options.data || {};
    this.success = options.success || null;
    this.error = options.error || null;
    this.next = options.next || null;
    this.complete = options.complete || null;
    this[callback](options.view);

};

REQUEST.AJAX = function(){
    return {
        fetch:this.fetch,
        save:this.save,
        update:this.update,
        delete:this.delete,
        set:this.set
    }
};

window.AJAX = REQUEST.AJAX();