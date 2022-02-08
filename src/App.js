import logo from './logo.svg';
import './Main.css';
import Todos from './Todos';
import Average from './Average';
import AddNos from './AddNos';
import MiniCalculator from './MiniCalculator';
function App() {
  return (
    <div className="App">
      <Todos></Todos>
      <Average></Average>
      <AddNos 
      numberOne={25}
      numberTwo={15}>
      </AddNos>
      <MiniCalculator
      noOne={48}
      noTwo={6}
      operation="multiply">
      </MiniCalculator>
    </div>
  );
}
export default App;
