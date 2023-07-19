import React from 'react';

import CounterLabel from 'Component/counter/CounterLabel';
import DecreaseCounterButton from 'Component/counter/DecreaseCounterButton';
import IncreaseCounterButton from 'Component/counter/IncreaseCounterButton';

function CounterApp() {
  return (
    <div>
      <DecreaseCounterButton />
      <CounterLabel />
      <IncreaseCounterButton />
    </div>
  );
}

export default CounterApp;
