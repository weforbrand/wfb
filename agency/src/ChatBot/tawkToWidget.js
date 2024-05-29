import React, { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://embed.tawk.to/65c234390ff6374032c9ef70/1hlv9o0ko';
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.head.appendChild(s);

    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return null;
};

export default TawkToWidget;
