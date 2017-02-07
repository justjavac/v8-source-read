// flag: --trace-opt-verbose

function add(obj) {
    return obj.prop + obj.prop;
}

var length = 1000 * 1000;

var objs = new Array(length);

var i = 0;

for (i = 0; i < length; i++) {
    objs[i] = Math.random();
}

var a = { prop: 'a' };
var b = { prop: 1 };

for (i = 0; i < length; i++) {
    add(objs[i] > 0.5 ? a : b);
}
