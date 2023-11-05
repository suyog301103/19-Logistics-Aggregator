// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// function RetailHome() {
//   const navigate = useNavigate();
//   const [from, setFrom] = useState('Bengaluru');
//   const [to, setTo] = useState('Bengaluru');

//   const handleProceedClick = () => {
//     // navigate('/pickup');   //changed for suyog
//     navigate('/'); 
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-gray-800 px-10 py-10 rounded-xl">
//           <h1 className="text-center text-white text-3xl font-bold mb-4">Find Transport</h1>
//           <form className="my-6">
//             <div className="mb-2">
//               <label className="block text-white">From</label>
//               <input
//                 list="fromOptions"
//                 className="bg-gray-600 p-2 rounded w-full focus:outline-none text-white placeholder:text-gray-200"
//                 value={from}
//                 onChange={(e) => setFrom(e.target.value)}
//               />
//               <datalist id="fromOptions">
//                 <option value="Bengaluru" />
//                 <option value="Bengal" />
//                 <option value="Mysore" />
//                 <option value="Mandya" />
//                 <option value="Hubbli" />
//               </datalist>
//             </div>
//             <div className="mb-2">
//               <label className="block text-white">To</label>
//               <input
//                 list="toOptions"
//                 className="bg-gray-600 p-2 rounded w-full focus:outline-none text-white placeholder:text-gray-200"
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//               />
//               <datalist id="toOptions">
//                 <option value="Bengaluru" />
//                 <option value="Mysore" />
//                 <option value="Mandya" />
//                 <option value="Hubbli" />
//               </datalist>
//             </div>


//             {/* <h1 className="text-center font-bold text-3xl text-white">Pickup Details</h1> */}

//           <div className="mb-2">
//             <label className="block text-white">Pickup Date</label>
//             <input
//               className="p-2 rounded w-[100%] focus:outline-blue-600"
//               type="date"
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block text-white">Volume of Inventory</label>
//             <input
//               className="p-2 rounded w-[100%] focus:outline-blue-600"
//               type="text"
//               placeholder="Enter volume"
//             />
//           </div>


//             <button
//               className="bg-yellow-500 hover:bg-blue-500 text-black font-semibold p-2 mt-3 rounded w-full"
//               onClick={handleProceedClick}
//             >
//               Proceed
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RetailHome;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase/FirebaseConfig';
import Navbar from '../components/Navbar';

const RetailHome = () => {
  const navigate = useNavigate();

  const addConsumerDocument = async () => {
    console.log('enter');
    try {
      const fromSelect = document.getElementById("fromSelect");
      const toSelect = document.getElementById("toSelect");
      const pickupDateInput = document.getElementById("pickupDateInput"); // Add this line
      const volumeInput = document.getElementById("volumeInput"); // Add this line

      const data = {
        from: fromSelect.value,
        to: toSelect.value,
        pickupDate: pickupDateInput.value, // Add the "Pickup Date" value
        volume: volumeInput.value, // Add the "Volume of Inventory" value
        // You can add other data if needed
      };

      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, 'consumer'), data);
      console.log('Document written with ID: ', docRef.id);
      navigate('/pickup');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="card px-8 py-6 rounded-lg bg-gray-800 w-100">
          <h1 className="text-center font-bold text-3xl text-white">Find Transport</h1>
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
            <label className="block text-white">Pickup Date</label>
            <input
              id="pickupDateInput" // Add this id
              className="p-2 rounded w-[100%] focus:outline-blue-600"
              type="date"
            />
          </div>
          <div className="mb-2">
            <label className="block text-white">Volume of Inventory</label>
            <input
              id="volumeInput" // Add this id
              className="p-2 rounded w-[100%] focus:outline-blue-600"
              type="text"
              placeholder="Enter volume"
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

export default RetailHome;
