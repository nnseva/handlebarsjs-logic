// GPL v.3
// Home page: https://github.com/nnseva/handlebarsjs-logic

Handlebars.registerHelper('datetime_local', function(attr) {
    return new Handlebars.SafeString(
        new Date(attr).toLocaleString().replace(' ','&nbsp;')
    );
});

Handlebars.registerHelper('date_local', function(attr) {
    var tzd = new timezoneJS.Date(attr,'Etc/UTC');
    var d = new Date(tzd.year,tzd.month,tzd.date,0,0,0);
    return new Handlebars.SafeString(
        d.toLocaleDateString().replace(' ','&nbsp;')
    );
});

Handlebars.registerHelper('time_local', function(attr) {
    var tzd = new timezoneJS.Date("1980-01-01T"+attr+"Z",'Etc/UTC');
    var d = new Date(1980,1,1, tzd.hours,tzd.minutes,tzd.seconds);
    return new Handlebars.SafeString(
        d.toLocaleTimeString().replace(' ','&nbsp;')
    );
});

Handlebars.registerHelper('eq', function(attr,value) {
    return attr == value;
});
Handlebars.registerHelper('neq', function(attr,value) {
    return attr != value;
});
Handlebars.registerHelper('gt', function(attr,value) {
    return attr > value;
});
Handlebars.registerHelper('lt', function(attr,value) {
    return attr < value;
});
Handlebars.registerHelper('gte', function(attr,value) {
    return attr >= value;
});
Handlebars.registerHelper('lte', function(attr,value) {
    return attr <= value;
});
Handlebars.registerHelper('and', function(a1,a2) {
    return a1 && a2;
});
Handlebars.registerHelper('or', function(a1,a2) {
    return a1 || a2;
});
Handlebars.registerHelper('not', function(a) {
    return !a;
});
Handlebars.registerHelper('choice', function(a) {
    return arguments[a+1];
});

Handlebars.registerHelper('oneof', function() {
    // {{ oneof a b c ... empty="some empty" dflt="some default" }}
    var arr = new Array();
    for(var i in arguments) {
        arr.push(arguments[i]);
    }
    var opts = arr.slice(-1)[0];
    var args = arr.slice(0,-1);
    var ignore = {};
    for(var k in opts.hash) {
        if( k.search("ignore") == 0 ) {
            ignore[opts.hash[k]] = k;
        }
    }
    
    var a;
    for(var i in args) {
        if( args[i] ) {
            if( !(args[i] in ignore) ) {
                a = args[i];
                break;
            }
        }
    }
    if( !a ) {
        a = opts.dflt;
    }
    return a;
});
