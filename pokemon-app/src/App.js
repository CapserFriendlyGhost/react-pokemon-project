import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import AppRouter from "./components/AppRouter";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Searchbar setSearchValue={setSearchValue} />
      <AppRouter searchValue={searchValue} />
    </div>
  );
}

export default App;
