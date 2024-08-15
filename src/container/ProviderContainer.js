import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import InputBox from '../components/InputBox';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ProviderContainer() {
    const [selectedBrand, setSelectedBrand] = useState('Select the brand');
    
    return (
        <div className="text-center">
            <div className='mt-4'>
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ro-pcPbHlNbaXKwUtGzPRVqTKaah3cIZFw&s' 
                    height={150} 
                    width={180} 
                    alt='Receiver' 
                />
            </div>
            <h4 className="d-flex justify-content-center align-items-center ms-3 mt-4">
                Hello Provider,
                <br />
                Thank you for the excellent service you provide. I appreciate the value and effort you bring to the table. Keep up the great work!
            </h4>
            <Dropdown className='mt-4' onSelect={setSelectedBrand} />
            <InputBox selectedBrand={`Enter ${selectedBrand} coupon code`} />
        </div>
    );
}
