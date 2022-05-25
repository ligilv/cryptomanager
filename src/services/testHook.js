import React, {useState, useEffect} from 'react';
const TestHook = () => {
  const [count, setcount] = useState(0);
  const addCount = () => {
    console.log(count);
    setcount(prev => prev + 1);
  };
  const resetTo = x => {
    setcount(count => x);
  };

  return {count, addCount, resetTo};
};
export default TestHook;
