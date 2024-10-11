import React, { useEffect, useState } from 'react'
import PrimaryInput from '../PrimaryInput/PrimaryInput'
import Slider from '../PrimaryInput/Slider'

const AmountInput = () => {
    const balance = 10000;
    const price = 0.07;
    const [value, setValue] = useState<number>(0); // Initial value in percentage (0 to 100)
    const [amount, setAmount] = useState<number>();
    const [total, setTotal] = useState<number>();

    useEffect(()=> {
        const calculatedAmount = (balance * value / 100)
        const calculatedTotal = (calculatedAmount / price)
        setAmount(calculatedAmount);
        setTotal(calculatedTotal);
    }, [value])
  return (
    <div>
        <PrimaryInput title='Amount' value={amount}></PrimaryInput>
        <Slider value={value} setValue={setValue}></Slider>
        <PrimaryInput title='Order Value' value={total}></PrimaryInput>
    </div>
  )
}

export default AmountInput