import React from 'react';
import categoryData from '../../Data/CategoryData';

const Category = () => {
  return (
    <div className=' bg-white flex items-center mt-20 mx-6 rounded-lg  space-x-14 justify-center '>
      {categoryData.map((item, index) => (
        <div key={index}>
          <img className=' size-20' src={item.Imageurl} alt={item.alt} />
          <p className='flex text-justify'>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
