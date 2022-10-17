import React from "react";
import Calculator from "./Calculator";
import "./Splitter.css";

import person from "./../assets/person.svg";
function Splitter({
  bill,
  setBill,
  setTip,
  selectedPersentage,
  setSelectedPersentage,
  setTipPersentage,
  people,
  setPeople,
  tip,
  total,
  setTotal,
  eror,
  setEror,
}) {
  const updateBill = (e) => {
    if (bill.startsWith("0")) {
      setBill(1);
      console.log("as");
    }
    setBill(e.target.value);
  };

  const selectPersentage = (e) => {
    setTipPersentage(e.target.getAttribute("value"));
    setSelectedPersentage(e.target.innerText);
  };

  const updatePeople = (e) => {
    if (e.target.value === "0") {
      setEror(true);
    } else {
      setEror(false);
    }
    setPeople(e.target.value);
  };

  const selectCustomPersentage = (e) => {
    setSelectedPersentage("");
    setTipPersentage(e.target.value);
  };

  return (
    <div className='splitter_wrapper'>
      <div className='splitter_left'>
        <div className='bill_cont'>
          <p className='bill_title'>Bill</p>
          <div className='bill_input_cont'>
            <span className='dollar_sign'>$</span>
            <input
              type='number'
              name='bill'
              value={bill}
              onChange={updateBill}
              className='bill_input'
              autofocus
              required
              pattern='[1-9]\d*'
              min='0'
            />
          </div>
        </div>
        <div className='tip_selection_cont'>
          <p className='tip_selection_title'>Select Tip %</p>
          <div className='tip_percentage_nums'>
            <span
              className={`persentage_num ${
                selectedPersentage === "5%" && "active_persentage_num"
              }`}
              value='5'
              onClick={selectPersentage}>
              5%
            </span>
            <span
              className={`persentage_num ${
                selectedPersentage === "10%" && "active_persentage_num"
              }`}
              value='10'
              onClick={selectPersentage}>
              10%
            </span>
            <span
              className={`persentage_num ${
                selectedPersentage === "15%" && "active_persentage_num"
              }`}
              value='15'
              onClick={selectPersentage}>
              15%
            </span>
            <span
              className={`persentage_num ${
                selectedPersentage === "25%" && "active_persentage_num"
              }`}
              value='25'
              onClick={selectPersentage}>
              25%
            </span>
            <span
              className={`persentage_num ${
                selectedPersentage === "50%" && "active_persentage_num"
              }`}
              value='50'
              onClick={selectPersentage}>
              50%
            </span>
            <input
              type='number'
              placeholder='Custom'
              className='custom_persentage'
              onChange={selectCustomPersentage}
            />
          </div>
        </div>
        <div className='num_of_people_wrapper'>
          <div className='num_of_people_title_cont'>
            <p className='num_of_people_title'>Number of People</p>
            <span className={`num_of_people_error ${eror && "active_error"}`}>
              Can't be zero
            </span>
          </div>
          <div className='num_of_people_input_cont'>
            <span className='person_icon'>
              <img src={person} alt='person' />
            </span>
            <input
              type='number'
              value={people}
              onChange={updatePeople}
              className={`num_of_people_input ${eror && "input_error"}`}
              min='0'
            />
          </div>
        </div>
      </div>
      <div className='splitter_right'>
        <Calculator
          tip={tip}
          total={total}
          setTotal={setTotal}
          setSelectedPersentage={setSelectedPersentage}
          setTipPersentage={setTipPersentage}
          setTip={setTip}
          setBill={setBill}
          setPeople={setPeople}
        />
      </div>
    </div>
  );
}

export default Splitter;
