function main() { 
const v1 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
const v4 = [Promise];
const v5 = Promise.resolve;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
