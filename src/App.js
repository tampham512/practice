
import Button from './components/Button/index'

function App() {
  return (
    <div className="App">
     <Button >Primary</Button>
     <Button disabled>Primary</Button>
     <Button size="lg">Primary</Button>
     <Button type="secondary" size="lg">Secondary</Button>
     <Button type="gray" size="sm" >Gray</Button>
    </div>
  );
}

export default App;
