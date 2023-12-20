export class InsurancePlan {
  constructor(private insuranceFund: number) {}

  calculateMoneyBack(numOfYears: number): number {
    this.validateNumOfYears(numOfYears);
    const cashSurrenderValue = this.getCashSurrenderValue(numOfYears);
    return (cashSurrenderValue * this.insuranceFund) / 1000;
  }
  validateNumOfYears(numOfYears: number) {
    if (numOfYears < 0) {
      throw new RangeError("Num of years should be greater than or equal to 0");
    }
  }

  getCashSurrenderValue(numOfYears: number) {
    switch (numOfYears) {
      case 1:
        return 0;
      case 2:
        return 5;
      case 3:
        return 15;
      case 4:
        return 25;
      default:
        return 1000;
    }
  }
}
