/**
 * Created with JetBrains WebStorm.
 * User: Segrey
 * Date: 15.02.14
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */

Handlebars.registerHelper('iter', function (context, options) {
    var fn = options.fn, inverse = options.inverse;
    var ret = "";

    if (context && context.length > 0) {
        for (var i = 0, j = context.length; i < j; i++) {
            ret = ret + fn($.extend({}, context[i], { i:i, iPlus1:i + 1 }));
        }
    } else {
        ret = inverse(this);
    }
    return ret;
});

Handlebars.registerHelper('eq', function (val1, val2, options) {
    if(val1 == val2) {
        return options.fn(this);
    }
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 == v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});


Handlebars.registerHelper('ifand2', function (a1, a2, options) {
    if (a1 && a2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('ifor2', function (a1, a2, options) {
    if (a1 || a2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('t', function(i18n_key) {
    var result = i18n.t(i18n_key);

    return new Handlebars.SafeString(result);
});
Handlebars.registerHelper('tr', function(context, options) {
    var opts = i18n.functions.extend(options.hash, context);
    if (options.fn) opts.defaultValue = options.fn(context);

    var result = i18n.t(opts.key, opts);

    return new Handlebars.SafeString(result);
});
Handlebars.registerHelper('date', function(date, invarFormat, requiredFormat, options) {
    var result = moment(date,invarFormat).format(requiredFormat);

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('iterMenu', function(){
    return new Handlebars.SafeString(
        "<li><a href=" + this.url + ">" + this.title +"</a></li>"
    );
})