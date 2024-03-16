import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
const option = [
  {value:'name1',label:'sushant'},
  {value:'name2',label:'ali'},
  {value:'name3',label:'satyam'},
  {value:'name4',label:'kshitish'}
];

function App() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedValues(selectedOptions);
    console.log(selectedValues);
  };

  return (
    <div className="App">
      <Select
        options={option} 
        isMulti
        components={animatedComponents}
        onChange={handleSelectChange}
        value={selectedValues}
      />
      
      <div>
        Selected Values:
        {selectedValues.map((item) => (
          <div key={item.value}>{item.label+" "+selectedValues.length}</div>
        ))}
      </div>
    </div>
  );
}

export default App;


