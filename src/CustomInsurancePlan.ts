import { InsurancePlan } from "./InsurancePlan";

export type CashSurrenderValueRecord = {
  years: number;
  value: number;
};

export type CashSurrenderValueTable = CashSurrenderValueRecord[];

export class CustomInsurancePlan extends InsurancePlan {
  constructor(
    insuranceFund: number,
    denominator: number,
    private cashSurrenderValueTable: CashSurrenderValueTable
  ) {
    super(insuranceFund);
    this.denominator = denominator;
  }

  protected getCashSurrenderValueByNumOfYears(numOfYears: number): number {
    const value = this.cashSurrenderValueTable.find(
      (record) => record.years === numOfYears
    )?.value;

    if (value) {
      return value;
    }

    return InsurancePlan.PAYBACK_ALL;
  }
}
