import { useEffect } from 'react';

export const useStandaloneMode = () => {
  useEffect(() => {
    const isStandalone = 
      window.navigator.standalone || 
      window.matchMedia('(display-mode: standalone)').matches;

    if (isStandalone) {
      document.documentElement.classList.add('standalone-mode');
    }
    
    // Previeni comportamenti browser indesiderati
    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    return () => {
      document.documentElement.classList.remove('standalone-mode');
    };
  }, []);
}; 