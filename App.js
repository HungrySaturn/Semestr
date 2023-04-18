import { useState } from "react";
import Select from "react-select";
import Data from "./components/data";


function App() {
  const options = [
    { value: 1, label: "1.semestr" },
    { value: 2, label: "2.semestr" },
    { value: 3, label: "3.semestr" },
    { value: 4, label: "4.semestr" },
  ];

  const [selected, setSelected] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className="app">
      
        <Select options={options} onChange={handleChange} autoFocus={true} />

        <div>
          {selected && (
            <Data semester={selected.value} />
          )}
        </div>
      
    </div>
  );
}

export default App;
