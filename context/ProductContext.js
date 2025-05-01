import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const sampleProducts = [
  {
    id: '1',
    name: 'Smart Watch',
    description: 'High-tech smart watch with multiple features.',
    price: '₹1999',
    image: require('../assets/smartwatch.jpg'),
  },
  {
    id: '2',
    name: 'Bluetooth Speaker',
    description: 'Loud and portable speaker.',
    price: '₹4999',
    image: require('../assets/speaker.jpg'),
  },
  {
    id: '3',
    name: 'Bluetooth Earphones',
    description: 'ANC and Bass enhanced earphones',
    price: '₹2999',
    image: require('../assets/earphones.jpg'),
  },
  // Add more products
];

export const ProductProvider = ({ children }) => {
  const [products] = useState(sampleProducts);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
