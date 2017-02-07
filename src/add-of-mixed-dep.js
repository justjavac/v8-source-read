// flags: --trace-opt --trace-deopt

function add(obj) {
    return obj.prop + obj.prop;
}

var length = 10000;
var i = 0;
var a = { prop: 'a' };
var b = { prop: 1 };

for (i = 0; i < length; i++) {
    add(i !== 8000 ? a : b);
}
