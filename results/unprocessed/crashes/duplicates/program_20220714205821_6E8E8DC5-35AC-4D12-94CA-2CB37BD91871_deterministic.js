function main() { 
const v1 = [-1000000000.0,-1000000000.0,-1000000000.0,-1000000000.0,-1000000000.0];
const v3 = [v1];
const v4 = v1.fill;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
