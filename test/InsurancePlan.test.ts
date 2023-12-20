import { beforeEach, describe, test, expect } from "@jest/globals";
import { InsurancePlan } from "../src/InsurancePlan";
describe("calculateMoneyBack", () => {
  let insurancePlan: InsurancePlan;

  beforeEach(() => {
    insurancePlan = new InsurancePlan(500000);
  });

  describe("Fund 500,000", () => {
    test("Year 1 should return 0", () => {
      const numOfYears = 1;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(0);
    });

    test("Year 2 should return 2500", () => {
      const numOfYears = 2;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(2500);
    });

    test("Year 3 should return 7500", () => {
      const numOfYears = 3;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(7500);
    });

    test("Year 4 should return 12500", () => {
      const numOfYears = 4;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(12500);
    });

    test("Year 5 should return 500,000", () => {
      const numOfYears = 5;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(500000);
    });

    test.failing("num of years is less than 0 should throw Error", () => {
      let numOfYears = -1;
      insurancePlan.calculateMoneyBack(numOfYears);
    });
  });

  describe("Fund 300,000", () => {
    test("Year 2 should return 1,500", () => {
      insurancePlan = new InsurancePlan(300000);
      const numOfYears = 2;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(1500);
    });

    test("Year 4 should return 7,500", () => {
      insurancePlan = new InsurancePlan(300000);
      const numOfYears = 4;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(7500);
    });
  });

  test.each([
    { numOfYears: 1, amount: 0 },
    { numOfYears: 2, amount: 2500 },
    { numOfYears: 3, amount: 7500 },
    { numOfYears: 4, amount: 12500 },
  ])(
    "numOfYears is $numOfYears should return $amount",
    ({ numOfYears, amount }) => {
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(amount);
    }
  );
});
