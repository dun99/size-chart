
import './App.css';
import SizeChartClothingMan from './components/SizeChartClothingMan';
import SizeChartClothingWoman from './components/SizeChartClothingWoman';
import SizeChartMan from './components/SizeChartMan';
import SizeChartWoman from './components/SizeChartWoman';
import SizeListClothingWoman from './components/SizeListClothingWoman';


function App() {
  return (
    <div className="App">
      <SizeChartMan/>
      <SizeChartWoman/>
      <SizeChartClothingMan/>
      <SizeChartClothingWoman/>
    </div>
  );
}

export default App;
