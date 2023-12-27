import { beforeEach, describe, expect, test } from "@jest/globals";
import { InsurancePlan } from "../src/InsurancePlan";
import {
  CashSurrenderValueTable,
  CustomInsurancePlan,
} from "../src/CustomInsurancePlan";

describe("Custom plan and fund is 500K", () => {
  let insurancePlan: InsurancePlan;
  let cashSurrenderValueTable: CashSurrenderValueTable = [
    { years: 2, value: 10 },
    { years: 3, value: 20 },
    { years: 4, value: 30 },
  ];
  let numOfYears: number;

  beforeEach(() => {
    insurancePlan = new CustomInsurancePlan(
      500000,
      800,
      cashSurrenderValueTable
    );
  });

  test("Num of years is 2 should return 6250", () => {
    numOfYears = 2;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(6250);
  });

  test("Num of years is 3 should return 12500", () => {
    numOfYears = 3;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(12500);
  });

  test("Num of years is 4 should return 18750", () => {
    numOfYears = 4;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(18750);
  });

  test("Num of years is 5 or more should return 500K", () => {
    numOfYears = 5;
    expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(500000);
  });
});
