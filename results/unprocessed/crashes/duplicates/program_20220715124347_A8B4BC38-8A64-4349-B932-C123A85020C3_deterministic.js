function main() { 
const v1 = [2147483649,2147483649,2147483649,2147483649];
const v4 = [Promise];
const v5 = Promise.resolve;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
