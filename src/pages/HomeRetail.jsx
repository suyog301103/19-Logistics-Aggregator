import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function RetailHome() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('Bengaluru');
  const [to, setTo] = useState('Bengaluru');

  const handleProceedClick = () => {
    navigate('/pickup');
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 px-10 py-10 rounded-xl">
          <h1 className="text-center text-white text-3xl font-bold mb-4">Find Transport</h1>
          <form className="my-6">
            <div className="mb-2">
              <label className="block text-white">From</label>
              <input
                list="fromOptions"
                className="bg-gray-600 p-2 rounded w-full focus:outline-none text-white placeholder:text-gray-200"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <datalist id="fromOptions">
                <option value="Bengaluru" />
                <option value="Bengal" />
                <option value="Mysore" />
                <option value="Mandya" />
                <option value="Hubbli" />
              </datalist>
            </div>
            <div className="mb-2">
              <label className="block text-white">To</label>
              <input
                list="toOptions"
                className="bg-gray-600 p-2 rounded w-full focus:outline-none text-white placeholder:text-gray-200"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <datalist id="toOptions">
                <option value="Bengaluru" />
                <option value="Mysore" />
                <option value="Mandya" />
                <option value="Hubbli" />
              </datalist>
            </div>
            <button
              className="bg-yellow-500 hover:bg-blue-500 text-black font-semibold p-2 mt-3 rounded w-full"
              onClick={handleProceedClick}
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RetailHome;
