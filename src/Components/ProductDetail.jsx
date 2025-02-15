// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Premium Medjool Dates',
    description: 'Sweet and soft, perfect for a healthy snack.',
    price: '$10.99',
    imageUrl: 'https://example.com/path-to-your-image.jpg',
    details: 'These dates are handpicked from the best farms, ensuring premium quality. Perfect for snacking, baking, or adding to smoothies.'
  },
  {
    id: 2,
    name: 'Organic Dates',
    description: 'Organic dates, naturally sweet and rich in flavor.',
    price: '$8.99',
    imageUrl: 'https://example.com/path-to-your-image.jpg',
    details: 'Our organic dates are grown without pesticides or chemicals, ensuring they are healthy and delicious.'
  },
  {
    id: 3,
    name: 'Stuffed Dates',
    description: 'Dates stuffed with almonds, perfect for a gourmet treat.',
    price: '$15.99',
    imageUrl: 'https://example.com/path-to-your-image.jpg',
    details: 'Stuffed with roasted almonds, these dates make a perfect snack for any occasion.'
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.details}</p>
          <p className="text-lg font-semibold text-amber-600 mt-4">{product.price}</p>
          <button className="bg-amber-600 text-white py-2 px-6 rounded-full mt-4 hover:bg-amber-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
