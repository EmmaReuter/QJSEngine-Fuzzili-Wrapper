function main() { 
const v1 = Object();
const v3 = new Int32Array();
const v6 = [v1];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v3,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
