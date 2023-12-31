export class InsurancePlan {
  protected static PAYBACK_ALL = 9999;

  protected denominator: number;

  constructor(private insuranceFund: number) {
    this.denominator = 1000;
  }

  getInsuranceFund() {
    return this.insuranceFund;
  }

  calculateMoneyBack(numOfYears: number): number {
    this.validateNumOfYears(numOfYears);

    const cashSurrenderValue =
      this.getCashSurrenderValueByNumOfYears(numOfYears);

    if (cashSurrenderValue === InsurancePlan.PAYBACK_ALL) {
      return this.insuranceFund;
    }

    return (this.insuranceFund * cashSurrenderValue) / this.denominator;
  }

  private validateNumOfYears(numOfYears: number) {
    if (numOfYears < 0) {
      throw new RangeError("Num of years must be greater than 0");
    }
  }

  protected getCashSurrenderValueByNumOfYears(numOfYears: number): number {
    switch (numOfYears) {
      case 0:
      case 1:
        return 0;
      case 2:
        return 5;
      case 3:
        return 15;
      case 4:
        return 25;
      default:
        return InsurancePlan.PAYBACK_ALL;
    }
  }
}
