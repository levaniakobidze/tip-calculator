import React from "react";
import "./Calculator.css";
function Calculator({
  tip,
  total,
  setTotal,
  setBill,
  setSelectedPersentage,
  setTipPersentage,
  setTip,
  setPeople,
}) {
  const resetHandler = () => {
    setTip(0);
    setSelectedPersentage("");
    setBill("");
    setTotal(0);
    setTipPersentage("");
    setPeople("");
  };
  return (
    <div className='calculator'>
      <div className='calculate_wrapper'>
        <div className='tip_amount_cont'>
          <div className='tip_amount_left'>
            <p className='tip_amount_title'>Tip Amount</p>
            <p className='person'>/ person</p>
          </div>
          <div className='tip_amount_right_num'>${tip.toFixed(2)}</div>
        </div>
        <div className='total_amount_cont'>
          <div className='total_amount_left'>
            <p className='total_amount_title'>Total </p>
            <p className='person'>/ person</p>
          </div>
          <div className='total_amount_right_num'>${total.toFixed(2)}</div>
        </div>
      </div>
      <button className='reset_btn' onClick={resetHandler}>
        RESET
      </button>
    </div>
  );
}

export default Calculator;
