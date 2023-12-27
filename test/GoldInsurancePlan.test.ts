import { beforeEach, describe, expect, test } from "@jest/globals";
import { GoldInsurancePlan } from "../src/GoldInsurancePlan";

describe("Gold and fund is 500K", () => {
  let insurancePlan: GoldInsurancePlan;
  let numOfYears: number;

  beforeEach(() => {
    insurancePlan = new GoldInsurancePlan(500000, 900);
  });

  test("num of years is 2 should return 3000", () => {
    numOfYears = 2;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(3000);
  });

  test.each([
    { numOfYears: 0, amount: 0 },
    { numOfYears: 1, amount: 0 },
    { numOfYears: 2, amount: 3000 },
    { numOfYears: 3, amount: 500000 },
  ])(
    "num of years is $numOfYears should return $amount",
    ({ numOfYears, amount }) => {
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(amount);
    }
  );
});
