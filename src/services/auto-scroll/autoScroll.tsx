import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      scroll.scrollToTop({
        duration: 0,
        smooth: false,
      });
    }, [pathname]);
  
    return null;
  };
  
  export default ScrollToTop;
