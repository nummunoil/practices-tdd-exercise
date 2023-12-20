export class InsurancePlan {
  constructor(private insuranceFund: number) {}

  calculateMoneyBack(numOfYears: number): number {
    const cashSurrenderValue = this.getCashSurrenderValue(numOfYears);
    return (cashSurrenderValue * this.insuranceFund) / 1000;
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
        return 0;
    }
  }
}
