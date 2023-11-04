import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LogisticsHome() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('Bengaluru');
  const [to, setTo] = useState('Bengaluru');
  const [vehicleType, setVehicleType] = useState('Car');
  const [vehicleVolume, setVehicleVolume] = useState('');
  const [midPoints, setMidPoints] = useState('');

  const handleProceedClick = () => {
    navigate('/pickupLogistics');
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
              <input
                list="fromOptions"
                className="p-2 rounded w-full focus:outline-blue-600"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <datalist id="fromOptions">
                <option value="Bengaluru" />
                <option value="Mysore" />
                <option value="Mandya" />
                <option value="Hubbli" />
              </datalist>
            </div>
            <div className="mb-2">
              <label className="block text-white">To</label>
              <input
                list="toOptions"
                className="p-2 rounded w-full focus:outline-blue-600"
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
            <div className="mb-2">
              <label className="block text-white">Mid points</label>
              <input
                type="text"
                className="p-2 rounded w-full focus:outline-blue-600"
                value={midPoints}
                onChange={(e) => setMidPoints(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-white">Type of Vehicle</label>
              <input
                list="vehicleTypeOptions"
                className="p-2 rounded w-full focus:outline-blue-600"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              />
              <datalist id="vehicleTypeOptions">
                <option value="Car" />
                <option value="Truck" />
                <option value="Motorcycle" />
                <option value="Van" />
              </datalist>
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
