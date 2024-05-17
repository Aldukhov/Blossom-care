import { animateScroll as scroll } from 'react-scroll';

export const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 0,
    smooth: false,
  });
};