function main() { 
const v1 = [1000.0,1000.0,1000.0,1000.0];
v1[5] = v1;
Object[v1] += 1000.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
