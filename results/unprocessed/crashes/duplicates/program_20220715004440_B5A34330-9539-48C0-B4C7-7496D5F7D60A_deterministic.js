function main() { 
const v0 = {};
const v1 = [v0];
const v4 = [v1];
const v5 = Promise.race;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
