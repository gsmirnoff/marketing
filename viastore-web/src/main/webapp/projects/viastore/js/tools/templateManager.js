/**
 * Created with JetBrains WebStorm.
 * User: Segrey
 * Date: 14.02.14
 * Time: 22:37
 * To change this template use File | Settings | File Templates.
 */
var TemplateManager = {
    templates:{},
    context:null,
    get:function (request, callback) {
        var ajaxReqs = new Array(),
            $get = this;
        if(request.partials) {
            $.each(request.partials, function () {
                var partialName = this;
                ajaxReqs.push($get.loadTemplate(this, function (partialTemplate) {
                    $get.templates[partialName] = partialTemplate;
                    Handlebars.registerPartial(partialName, partialTemplate);
                }));
            });
        }
        $.when.apply(undefined, ajaxReqs).then(function () {
            $.when($get.loadTemplate(request.mainTemplate, function (template) {
                var tmp = Handlebars.compile(template);
                $get.templates[request.mainTemplate] = template;
                callback(tmp);
            }));
        });
    },
    getStatic:function (request, callback) {
        var $get = this;
        $get.loadTemplate(request.mainTemplate, function (template) {
            $get.templates[request.mainTemplate] = template;
            callback(template);
        });
    },
    loadTemplate:function (id, callback) {
        if (this.templates[id]) {
            return callback(this.templates[id]);
        }
        var url = 'resources/templates/' + id + '.tmpl';
        return $.ajax({url:url, type:'GET', dataType:'html', contentType:'application/json', async:true, success:callback});
    },
    setContext:function (context) {
        this.context = context;
    }
};