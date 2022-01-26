import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function getCountries() {
      setLoad(true);
      const result = await fetch("https://restcountries.com/v3/all");
      const data = await result.json();
      setCountries(data);
      setAllCountries(data);
      setLoad(false);
    }
    getCountries();
  }, []);

  useEffect(() => {
    if (!filter) {
      setCountries(allCountries);
      return;
    }
    setCountries(
      allCountries.filter((country) => country.name.common === filter)
    );
  }, [filter]);

  return (
    <div className="App">
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </form>
      </div>

      {load && <span>carregando...</span>}

      {!load &&
        countries.map((country, key) => (
          <Card key={key} image={country.flags[0]} name={country.name.common} />
        ))}
    </div>
  );
}

export default App;
