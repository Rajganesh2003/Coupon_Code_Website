import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Dropdown(props) {
  const [selected, setSelected] = useState('Select the brand');

  const options = [
    { value: 'swiggy', label: 'Swiggy', icon: '🍕' },
    { value: 'zomato', label: 'Zomato', icon: '🍔' },
    { value: 'ola', label: 'Ola', icon: '🚗' },
    { value: 'uber', label: 'Uber', icon: '🚕' },
    { value: 'amazon', label: 'Amazon', icon: '📦' },
  ];

  const handleSelect = (option) => {
    setSelected(option.label);
    props.onSelect(option.label);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width:'500px'}}
        >
          {selected}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {options.map((option) => (
            <li key={option.value}>
              <button
                className="dropdown-item d-flex align-items-center"
                style={{ width:'500px'}}
                onClick={() => handleSelect(option)}
              >
                <span style={{ marginLeft: 150,marginRight:8 }}>{option.icon}
               </span> {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
