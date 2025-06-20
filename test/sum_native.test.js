import { expect } from "chai";
import sumNative from "../src/helpers/sum_native.js";

describe("sumNative – Fuerza bruta", () => {
  it("debería devolver true si existe algún par que sume el objetivo", () => {
    const nums = [2, 7, 11, 15];
    expect(sumNative(nums, 9)).to.be.true;
  });

  it("debería devolver false si no existe ningún par que sume el objetivo", () => {
    expect(sumNative([1, 2, 3], 7)).to.be.false;
  });

  it("debería devolver false para array vacío", () => {
    expect(sumNative([], 5)).to.be.false;
  });
});
