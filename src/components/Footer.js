import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-row items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4">
      <p>&copy; {new Date().getFullYear()} Created by Samouil Pratziotis</p>
    </footer>
  );
};

export default Footer;
