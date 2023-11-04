import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LogisticsHome() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('Bengaluru');
  const [to, setTo] = useState('Bengaluru');
  const [vehicleType, setVehicleType] = useState('Car');
  const [vehicleVolume, setVehicleVolume] = useState('');

  const handleProceedClick = () => {
    // You can access the selected values via the state variables (from, to, vehicleType, vehicleVolume)
    navigate('/pickup');
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="card px-8 py-6 rounded-lg bg-gray-800 w-100">
          <h1 className="text-center font-bold text-3xl text-white">Register Vehicle</h1>
          <form className="my-6">
            <div className="mb-2">
              <label className="block text-white">From</label>
              <select
                className="p-2 rounded w-full focus:outline-blue-600"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
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
                className="p-2 rounded w-full focus:outline-blue-600"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mysore">Mysore</option>
                <option value="Mandya">Mandya</option>
                <option value="Hubbli">Hubbli</option>
              </select>
            </div>
            <div className="mb-2">
            <label className="block text-white">Mid points</label>
              <input
                type="text"
                className="p-2 rounded w-full focus:outline-blue-600"
                value={vehicleVolume}
                onChange={(e) => setVehicleVolume(e.target.value)}
              />
              <label className="block text-white">Type of Vehicle</label>
              <select
                className="p-2 rounded w-full focus:outline-blue-600"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Van">Van</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-white">Volume of Vehicle</label>
              <input
                type="text"
                className="p-2 rounded w-full focus:outline-blue-600"
                value={vehicleVolume}
                onChange={(e) => setVehicleVolume(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-full"
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

export default LogisticsHome;
