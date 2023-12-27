import { InsurancePlan } from "./InsurancePlan";

export class GoldInsurancePlan extends InsurancePlan {
  constructor(fund: number, denominator: number) {
    super(fund);
    this.denominator = denominator;
  }

  protected getCashSurrenderValueByNumOfYears(numOfYears: number): number {
    switch (numOfYears) {
      case 0:
      case 1:
        return 0;
      case 2:
        return 5.4;
      default:
        return this.denominator;
    }
  }
}
