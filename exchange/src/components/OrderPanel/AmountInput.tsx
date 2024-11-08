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
      const calculatedAmount = roundToPrecision((balance * value) / 100);
  
      if (amount != calculatedAmount) {
        setAmount(calculatedAmount);
      }
      
    }, [value, price]);
  
    useEffect(() => {
      if (amount !== undefined) {
        const calculatedTotal = roundToPrecision(amount * price);
        
        const calculatedValue = Math.min(
          100,
          Math.max(0, (amount / balance) * 100)
        );
        if (total != calculatedTotal) {
          setTotal(calculatedTotal);
        }
        else {
        }
        setValue(calculatedValue)
        
      }
    }, [amount]);

    useEffect(() => {
      if (total !== undefined) {
        const calculatedAmount = roundToPrecision(total / price);


        if (amount != calculatedAmount) {
          setAmount(calculatedAmount)
        }
        else {
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
