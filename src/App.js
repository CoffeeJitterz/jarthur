import './App.css';
import myImage from './images/1.png';  // Import the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Jarthur
        {/* Use the image */}
      <img src={myImage} 
          alt="Description of the image" />
      </header>
    </div>
  );
}

export default App;
