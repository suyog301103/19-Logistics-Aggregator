import React from 'react';
import Navbar from '../components/Navbar';

function PickupDetails() {
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
      <div className="card px-8 py-6 rounded-lg bg-gray-800 w-100">
        <h1 className="text-center font-bold text-3xl text-white">Pickup Details</h1>
        <form className="my-6">
          <div className="mb-2">
            <label className="block text-white">Pickup Date</label>
            <input
              className="p-2 rounded w-[100%] focus:outline-blue-600"
              type="date"
            />
          </div>
          <div className="mb-2">
            <label className="block text-white">Volume of Inventory</label>
            <input
              className="p-2 rounded w-[100%] focus:outline-blue-600"
              type="text"
              placeholder="Enter volume"
            />
          </div>
          <button className="bg-yellow-500 hover:bg-blue-500 text-black font-semibold p-2 mt-3 rounded w-[100%]">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default PickupDetails;