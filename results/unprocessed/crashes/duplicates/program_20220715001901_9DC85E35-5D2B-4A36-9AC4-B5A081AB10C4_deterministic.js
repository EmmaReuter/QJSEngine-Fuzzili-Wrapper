function main() { 
const v2 = Object();
const v4 = Object();
const v6 = [Object,Object,v2,v4];
const v7 = Promise.all;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
