import './App.css';
import data from './data.json'
import ActivityCard from './components/ActivityCard';
import IdentityCard from './components/IdentityCard';
import { useState } from 'react';

function App() {

  const [timeframe, setTimeframe] = useState('weekly')

  const timeframeChangeHandler = (value)=>{
    setTimeframe(value)
  }

  const dataList = data.map(el => <ActivityCard key={el.id} activity={el} time={timeframe} className={el.title.replace(' ', '')}/>)
  return (
    <div className="App">
      <IdentityCard id='id' onTimeframeChange={timeframeChangeHandler}/>
      <section id='activities'>
        {dataList}
      </section>
      
    </div>
  );
}

export default App;
