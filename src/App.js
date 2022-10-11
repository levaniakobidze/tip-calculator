import "./App.css";
import Splitter from "./components/Splitter";
import SPLITTER from "./assets/SPLITTER.svg";
import React, { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tipPersentage, setTipPersentage] = useState("");
  const [selectedPersentage, setSelectedPersentage] = useState("");
  const [people, setPeople] = useState("");
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [eror, setEror] = useState(false);

  useEffect(() => {
    if (bill && tipPersentage && people && !eror) {
      let tip = (bill * tipPersentage) / 100 / people;
      let total = bill / people + tip;
      console.log(tip);
      console.log(total);

      setTip(tip);
      setTotal(total);
    }
  }, [bill, tipPersentage, people]);

  return (
    <div className='App'>
      <img src={SPLITTER} alt='logo' className='logo' />
      <Splitter
        bill={bill}
        setBill={setBill}
        tipPersentage={tipPersentage}
        setTipPersentage={setTipPersentage}
        people={people}
        setPeople={setPeople}
        selectedPersentage={selectedPersentage}
        setSelectedPersentage={setSelectedPersentage}
        total={total}
        setTotal={setTotal}
        tip={tip}
        setTip={setTip}
        eror={eror}
        setEror={setEror}
      />
    </div>
  );
}

export default App;
