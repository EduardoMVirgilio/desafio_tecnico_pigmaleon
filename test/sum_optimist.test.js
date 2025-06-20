import { expect } from "chai";
import sumOptimist from "../src/helpers/sum_optimist.js";

describe("sumOptimist con Map", () => {
  it("debería devolver true si existe algún par que sume el objetivo", () => {
    const nums = [3, 2, 4];
    expect(sumOptimist(nums, 6)).to.be.true;
  });

  it("debería devolver false si no hay ningún par que sume el objetivo", () => {
    expect(sumOptimist([1, 5, 3], 10)).to.be.false;
  });

  it("debería manejar números negativos correctamente", () => {
    const nums = [-3, 4, 3, 90];
    expect(sumOptimist(nums, 0)).to.be.true;
  });
});
