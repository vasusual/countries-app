import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RegionPicker from "./components/RegionPicker";
import Countries from "./components/Countries";

type Region = string;

function App() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const onRegionPickHandler = (region: Region) => {
    setSelectedRegion(region);
  };

  const clearSelectedRegion = () => {
    setSelectedRegion(null);
  };

  return (
    <>
      <Navbar />
      {selectedRegion ? (
        <Countries
          clearSelectedRegion={clearSelectedRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
        <RegionPicker onRegionPickHandler={onRegionPickHandler} />
      )}
    </>
  );
}

export default App;
