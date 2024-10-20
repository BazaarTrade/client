import React, { useEffect, useState } from 'react'
import PrimaryInput from '../PrimaryInput/PrimaryInput'
import Slider from '../PrimaryInput/Slider'

interface AmountInputProps {
  value: number;
  setValue: Function;
  amount: number | undefined;
  setAmount: Function;
  total: number | undefined;
  setTotal: Function;
  price: number;

}

const AmountInput : React.FC<AmountInputProps> = ({value, setValue, amount, setAmount, total, setTotal, price}) => {
    const balance = 400000;
  
    const roundToPrecision = (num: number, precision = 6) => {
      return parseFloat(num.toFixed(precision));
    };
  
    useEffect(() => {
      console.log("value:", value);
      console.log("value UseEffect Triggered")
      const calculatedAmount = roundToPrecision((balance * value) / 100);
      console.log("Calculated amount: ",calculatedAmount);
      console.log(amount);
  
      if (amount != calculatedAmount) {
        setAmount(calculatedAmount);
        console.log("setAmount in value useEffect triggered");
      }
      
    }, [value, price]);
  
    useEffect(() => {
      if (amount !== undefined) {
        console.log("amount UseEffect Triggered")
        const calculatedTotal = roundToPrecision(amount * price);
        
        const calculatedValue = Math.min(
          100,
          Math.max(0, (amount / balance) * 100)
        );
        console.log("calculated total: ",calculatedTotal);
        console.log(total);
        if (total != calculatedTotal) {
          setTotal(calculatedTotal);
          console.log("setTotal triggered in amount")
        }
        else {
          console.log("setTotal NOT triggered in amount UseEffect")
        }
        setValue(calculatedValue)
        
      }
    }, [amount]);

    useEffect(() => {
      if (total !== undefined) {
        console.log("total UseEffect Triggered")
        console.log("total: ",total)
        console.log("price: ",price)
        const calculatedAmount = roundToPrecision(total / price);

        console.log(amount, calculatedAmount)

        if (amount != calculatedAmount) {
          setAmount(calculatedAmount)
          console.log("setAmount in total UseEffect Triggered")
        }
        else {
          console.log("setAmount not triggered in total UseEffect")
        }
      }
    }, [total])
  return (
    <div>
        <PrimaryInput title='Amount' value={amount} setValue={setAmount}></PrimaryInput>
        <Slider value={value} setValue={setValue}></Slider>
        <PrimaryInput title='Order Value' value={total} setValue={setTotal}></PrimaryInput>
    </div>
  )
}

export default AmountInput
