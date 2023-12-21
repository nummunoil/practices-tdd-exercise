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
        return 7;
      case 3:
        return 17;
      case 4:
        return 27;
      default:
        return this.denominator;
    }
  }
}
