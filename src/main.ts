import { CustomInsurancePlan } from "./CustomInsurancePlan";
import { InsurancePlan } from "./InsurancePlan";
import { SilverInsurancePlan } from "./SilverInsurancePlan";

class Main {
  constructor(private insurancePlan: InsurancePlan) {}

  public showMoneyBack(numOfYears: number) {
    const insuranceFund = this.insurancePlan.getInsuranceFund();
    console.log(
      `Insurance fund ${insuranceFund} and number of years is ${numOfYears}, the money back is`,
      this.insurancePlan.calculateMoneyBack(numOfYears)
    );
  }
}

new Main(new InsurancePlan(500000)).showMoneyBack(3);
new Main(new SilverInsurancePlan(500000, 900)).showMoneyBack(4);
new Main(
  new CustomInsurancePlan(500000, 800, [{ years: 3, value: 50 }])
).showMoneyBack(5);
