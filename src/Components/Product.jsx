// ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Premium Medjool Dates',
    description: 'Sweet and soft, perfect for a healthy snack.',
    price: '$10.99',
    imageUrl: 'https://example.com/path-to-your-image.jpg'
  },
  {
    id: 2,
    name: 'Organic Dates',
    description: 'Organic dates, naturally sweet and rich in flavor.',
    price: '$8.99',
    imageUrl: 'https://example.com/path-to-your-image.jpg'
  },
  {
    id: 3,
    name: 'Stuffed Dates',
    description: 'Dates stuffed with almonds, perfect for a gourmet treat.',
    price: '$15.99',
    imageUrl: 'https://example.com/path-to-your-image.jpg'
  }
];

const Product = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold text-amber-600 mt-2">{product.price}</p>
              <Link 
                to={`/product/${product.id}`}
                className="bg-amber-600 text-white py-2 px-4 rounded-full mt-4 inline-block hover:bg-amber-700 transition"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
