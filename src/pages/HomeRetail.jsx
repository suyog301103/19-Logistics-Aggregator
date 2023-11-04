import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function RetailHome() {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/pickup');
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="card px-8 py-6 rounded-lg bg-gray-800 w-100">
          <h1 className="text-center font-bold text-3xl text-white">Find Transport</h1>
          <form className="my-6">
            <div className="mb-2">
              <label className="block text-white">From</label>
              <select
                className="p-2 rounded w-[100%] focus:outline-blue-600"
              >
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mysore">Mysore</option>
                <option value="Mandya">Mandya</option>
                <option value="Hubbli">Hubbli</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-white">To</label>
              <select
                className="p-2 rounded w-[100%] focus:outline-blue-600"
              >
                <option value="volvo">Bengaluru</option>
                <option value="saab">Mysore</option>
                <option value="mercedes">Mandya</option>
                <option value="audi">Hubbli</option>
              </select>
            </div>
            <button
              className="bg-blue-600 hover-bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]"
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
