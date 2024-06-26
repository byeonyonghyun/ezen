import './App.css';
import { useState } from 'react';
import Viewer01 from './components/Viewer01';
import Controller from './components/Controller';

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (num) => {
    setCount(count + num);
  }
  return (
    <div className="App">
      <h1>simple counter</h1>
      <section>
        <Viewer01 count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
