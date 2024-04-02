import CountryCard from "./Components/CountryCard";
import './App.css';
import Header from "./Components/Header";
import { useEffect } from "react";
import { getAllCountries } from "./Services";
import Nav from "./Components/Nav";

function App() {
  useEffect(() => {
    getAllCountries().then(countries => {
      console.log("countries: ", countries);
    });
  }, []);

  return (
    <div className="App">
      <div className="bg"></div>
       <Nav/>
      
       <Header/>
      <div className='country-card-wrapper'>
        <CountryCard 
          name={'Rwanda'}
          capital={'Kigali'}
          population={12000000}
          flagUrl={'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg'}
        />
      </div>
    </div>
  );
}

export default App;
