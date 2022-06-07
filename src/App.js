import './App.css';
{/* import the zodiac array */}
import { zodiac } from './data.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Header name='David'/>
      <Main zodiac={zodiac}/>
      <Footer year='2022'/>
    </div>
  );
}

export default App;
