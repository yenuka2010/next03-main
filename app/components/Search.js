"use client";

import { useEffect } from 'react';

const Search = () => {
  useEffect(() => {
    const cx = '84db7e58094224e74'; // Replace with your CSE ID
    const script = document.createElement('script');
    script.src = `https://cse.google.com/cse.js?cx=${cx}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="gcse-search"></div>
  );
};

export default Search;
