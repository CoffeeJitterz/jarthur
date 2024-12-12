import './App.css';
import jarthur_pic1 from './images/1.png';  // Import the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Jarthur
        {/* Use the image */}
      <img src={jarthur_pic1}  />
      </header>
    </div>
  );
}

export default App;
