/**
 * Created by SNSukhanov on 17.04.14.
 */

window.REQUEST = {};

REQUEST.Request = function(options){
    try{
        $.ajax({
            beforeSend:options.beforeSend,
            url:config.apiFolder + options.url,
            type:options.type,
            dataType:options.dataType,
            contentType:options.contentType,
            data:options.data,
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