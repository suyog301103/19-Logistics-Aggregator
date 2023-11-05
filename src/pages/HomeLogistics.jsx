import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase/FirebaseConfig';
import Navbar from '../components/Navbar';

const LogisticsHome = () => {
  const navigate = useNavigate();

  const addConsumerDocument = async () => {
    console.log('enter');
    try {
      const fromSelect = document.getElementById("fromSelect");
      const toSelect = document.getElementById("toSelect");
      const pickupDateInput = document.getElementById("pickupDateInput");
      const volumeInput = document.getElementById("volumeInput");
      const midPointsInput = document.getElementById("midPointsInput"); // Add this line
      const vehicleTypeSelect = document.getElementById("vehicleTypeSelect"); // Add this line

      const data = {
        from: fromSelect.value,
        to: toSelect.value,
        pickupDate: pickupDateInput.value,
        volume: volumeInput.value,
        midPoints: midPointsInput.value, // Add the "Mid Points" value
        vehicleType: vehicleTypeSelect.value, // Add the "Type of Vehicle" value
        // You can add other data if needed
      };

      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, 'logistics'), data);
      console.log('Document written with ID: ', docRef.id);
      navigate('/gubald');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="card px-8 py-6 rounded-lg bg-gray-800 w-100">
          <h1 className="text-center font-bold text-3xl text-white">Register Vehicle</h1>
          <div className="mb-2">
            <label className="block text-white">From</label>
            <select
              id="fromSelect"
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
              id="toSelect"
              className="p-2 rounded w-[100%] focus:outline-blue-600"
            >
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mysore">Mysore</option>
              <option value="Mandya">Mandya</option>
              <option value="Hubbli">Hubbli</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-white">Mid Points</label>
            <input
              id="midPointsInput" // Add this id
              type="text"
              className="p-2 rounded w-[100%] focus:outline-blue-600"
            />
          </div>
          <div className="mb-2">
            <label className="block text-white">Type of Vehicle</label>
            <select
              id="vehicleTypeSelect" // Add this id
              className="p-2 rounded w-[100%] focus:outline-blue-600"
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
              id="volumeInput"
              type="text"
              className="p-2 rounded w-[100%] focus:outline-blue-600"
            />
          </div>
          <div className="mb-2">
            <label className="block text-white">Pickup Date</label>
            <input
              id="pickupDateInput"
              className="p-2 rounded w-[100%] focus:outline-blue-600"
              type="date"
            />
          </div>
          <button
            className="bg-blue-600 hover-bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]"
            onClick={addConsumerDocument}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}

export default LogisticsHome;
