import { useEffect, useState } from 'react';

const useWidth = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowSize.innerWidth;
}

const getWindowSize = () => {
  const { innerWidth } = window;
  return { innerWidth };
}

export default useWidth;