function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = [v1,v0,v1,v0,v1,v1];
v0.__proto__ = v1;
const v4 = new Uint8Array();
const v5 = delete v4[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
