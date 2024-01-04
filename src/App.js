import { Card } from './components';
import './App.scss';

function App() {
  const labels = new Array(100).fill("");

  return (
    <div className='App'>
      <h3 className='title'>Movie Recommendation App</h3>
      <div className='centre'>
        {labels.map((_value, index) =>
          <Card key={index} />
        )}
      </div>
    </div>
  );
}

export default App;
