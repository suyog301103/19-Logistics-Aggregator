import React from 'react';

const Transport = (props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <span className="text-lg font-semibold">{props.name}</span>
      <p className="text-gray-600">{props.volume}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600">Click</button>
    </div>
  );
};

export default Transport;
