import React, { useEffect, useState } from 'react';

const Firstpage = () => {
  const spanTexts = ["Shirt", "Pants", "Skirt", "Coat", "T-Shirt"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % spanTexts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [spanTexts.length]);

  return (
    <div className='container mx-auto mt-10'>
      <div className='flex justify-evenly items-center'>
        <div>
          <p className='text-center text-4xl'>
            GET THING FOR THE GENZ LIKE   <br />
            {spanTexts.map((text, index) => (
              <span
                key={index}
                className={`${index === currentIndex ? '' : 'hidden'}`}
              >
                {text}
              </span>
            ))}
          </p>
        </div>
        <div className='h-4/6 w-4/12'>
          <img src="https://awesome11ty.ttntm.me/img/undraw_Friends_online_re_r7pq.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
