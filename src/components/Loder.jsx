import React from 'react';
import { CircleLoader } from "react-spinners";

const Loder = ({ loading, showSecond }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black ">
      {/* First loader – purple */}
      <CircleLoader 
        color="#FFFFFF" 
        loading={loading} 
        size={200} 
      />

      
    </div>
  );
};

export default Loder;
