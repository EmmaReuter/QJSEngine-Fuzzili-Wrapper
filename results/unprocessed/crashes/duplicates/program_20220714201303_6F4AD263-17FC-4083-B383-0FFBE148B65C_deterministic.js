function main() { 
const v1 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
const v3 = [-3551598376,-3551598376];
v3[3] = v3;
const v4 = delete v1[v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
