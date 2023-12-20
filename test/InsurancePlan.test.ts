import { beforeEach, describe, test, expect } from "@jest/globals";
import { InsurancePlan } from "../src/InsurancePlan";
describe("calculateMoneyBack", () => {
  let insurancePlan: InsurancePlan;

  beforeEach(() => {
    insurancePlan = new InsurancePlan(500000);
  });

  test("Fund 500,000 and year 1 should return 0", () => {
    const numOfYears = 1;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(0);
  });

  test("Fund 500,000 and year 2 should return 2500", () => {
    const numOfYears = 2;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(2500);
  });
});
