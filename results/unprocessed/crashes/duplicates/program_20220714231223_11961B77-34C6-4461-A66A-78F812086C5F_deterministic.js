function main() { 
const v1 = [839749.1338031525];
const v3 = [v1];
const v4 = v1.fill;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = Object();
v7[16] %= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
