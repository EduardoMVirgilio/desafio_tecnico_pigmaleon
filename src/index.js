import sumNative from "./helpers/sum_native.js";
import sumOptimist from "./helpers/sum_optimist.js";

console.log("Native: ", sumNative([1, 4, 3, 9], 8));
console.log("Native: ", sumNative([1, 2, 4, 4], 8));
console.log("Optimist: ", sumOptimist([1, 4, 3, 9], 8));
console.log("Optimist: ", sumOptimist([1, 2, 4, 4], 8));
