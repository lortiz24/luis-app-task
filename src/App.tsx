import { Button } from './components/ui/Button';
import { useTaskStore } from './store/store';

function App() {
  const bears = useTaskStore.use.bears();
  const increasePopulation = useTaskStore.use.increasePopulation();

  
  return (
    <div className="flex">
      <div>
        <h1>Bears: {bears}</h1>
        <Button className="" onClick={increasePopulation}>
          Increase Population
        </Button>
      </div>
    </div>
  );
}

export default App;
