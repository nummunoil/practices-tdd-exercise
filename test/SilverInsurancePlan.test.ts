import { beforeEach, describe, expect, test } from "@jest/globals";
import { SilverInsurancePlan } from "../src/SilverInsurancePlan";

describe("Silver and fund is 500K", () => {
  let insurancePlan: SilverInsurancePlan;
  let numOfYears: number;

  beforeEach(() => {
    insurancePlan = new SilverInsurancePlan(500000, 900);
    numOfYears = 0;
  });

  test("num of years is 0 should return 0", () => {
    numOfYears = 0;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(0);
  });

  test("num of years is 2 should return 3888.89", () => {
    numOfYears = 2;
    expect(insurancePlan.calculateMoneyBack(numOfYears).toFixed(2)).toEqual(
      parseFloat("3888.89").toFixed(2)
    );
  });

  test("num of years is 3 should return 9444.44", () => {
    numOfYears = 3;
    expect(insurancePlan.calculateMoneyBack(numOfYears).toFixed(2)).toEqual(
      parseFloat("9444.44").toFixed(2)
    );
  });

  test("num of years is 4 should return 15000", () => {
    numOfYears = 4;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(15000);
  });

  test("num of years is 5 or more should return 500000", () => {
    numOfYears = 5;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(500000);
  });
});
