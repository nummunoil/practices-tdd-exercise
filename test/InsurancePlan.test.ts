import { beforeEach, describe, test, expect } from "@jest/globals";
import { InsurancePlan } from "../src/InsurancePlan";
import { SilverInsurancePlan } from "../src/SilverInsurancePlan";

//  https://reviewprakan.com/dict-prakan/vocabulary/surrender-value-table
// CASH SURRENDER VALUE มูลค่าเวนคืนเงินสด หรือ เงินค่าเวนคืนกรมธรรม์ประกันภัย https://dict.longdo.com/search/*cash+surrender+value*
//
// ทดสอบ มูลค่าเวนคืนเงินสดตามปีที่กำหนดในตารางด้านล่าง
// ตารางเวนคืนกรมธรรม์ (n.) Surrender Value Table
// สิ้นปีที่	มูลค่าเวนคืนเงินสด (บาท)
// 1	   -
// 2	    5
// 3	   15
// 4	   25
//
// สุตรการคำนวน
// หลักการคำนวณง่าย ๆ ว่าเราจะได้เงินสดคืนหลังจากที่ขอเวนคืนกรมธรรม์ไปแล้วกี่บาท ให้ไปดูที่หน้าตารางมูลค่ากรมธรรม์ภัยต่อจำนวนเงินเอาประกันภัย 1,000 บาท ซึ่งจะอยู่ในกรมธรรม์ นำเอามูลค่าเวนคืนเงินสดในปีที่เราจ่ายเบี้ยไป มาคูณกับเงินทุนประกันที่ทำไว้ และหารด้วย 1,000 ก็จะได้ยอดเงินคืนหลังจากที่ทำการยกเลิกกรมธรรม์
//
// ยกตัวอย่างเช่น
//
// นางสาวจัสมิน ได้ทำประกันชีวิตทุนประกัน 500,000 บาท และได้จ่ายเบี้ยประกันไปแล้ว 4 ปี แต่มีเหตุที่ทำให้ไม่สามารถชำระเบี้ยต่อได้ และต้องการที่จะยกเลิกกรมธรรม์ จึงไปดูที่ตารางเวนคืนกรมธรรม์ท้ายเล่ม และสามารถคำนวณเงินคืนที่จะได้รับ ดังนี้
//
// มูลค่าเวนคืนเงินสด 25
// ทุนประกัน (insurance fund) 500,000 บาท
// จะได้รับเงินคืนเท่ากับ (25 x 500,000)/1,000 = 12,500 บาท
//
describe("calculateMoneyBack", () => {
  let insurancePlan: InsurancePlan;
  let numOfYears: number;

  beforeEach(() => {
    insurancePlan = new InsurancePlan(500000);
    numOfYears = 0;
  });

  describe("Fund is 500K", () => {
    test("num of years is 0 should return 0", () => {
      numOfYears = 0;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(0);
    });

    test("num of years is 1 should return 0", () => {
      numOfYears = 1;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(0);
    });

    test("num of years is 2 should return 2500", () => {
      numOfYears = 2;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(2500);
    });

    test("num of years is 3 should return 7500", () => {
      numOfYears = 3;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(7500);
    });

    test("num of years is 4 should return 12500", () => {
      numOfYears = 4;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(12500);
    });

    test("num of years is 5 or more should return 500K", () => {
      numOfYears = 5;
      expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(500000);
    });

    test.failing("num of years is less than 0 should throw RangError", () => {
      numOfYears = -1;
      insurancePlan.calculateMoneyBack(numOfYears);
    });

    test("num of years is less than 0 should throw RangError", () => {
      numOfYears = -1;

      let errorMessage: string | undefined;
      try {
        insurancePlan.calculateMoneyBack(numOfYears);
      } catch (error) {
        errorMessage = (error as RangeError).message;
      }

      expect(errorMessage).toEqual("Num of years must be greater than 0");
    });
  });

  describe("Fund is 123K", () => {
    beforeEach(() => {
      insurancePlan = new InsurancePlan(123000);
    });

    test.each([
      { numOfYears: 1, amount: 0 },
      { numOfYears: 2, amount: 615 },
      { numOfYears: 3, amount: 1845 },
      { numOfYears: 4, amount: 3075 },
    ])(
      "num of years is $numOfYears should return $amount",
      ({ numOfYears, amount }) => {
        expect(insurancePlan.calculateMoneyBack(numOfYears)).toEqual(amount);
      }
    );
  });
});
