import { Link } from 'react-router-dom';
import kalmi from '../assets/Products/kalmi edited.png'
import ajwa from '../assets/Products/ajwa.webp'
import naghal from '../assets/Products/naghal.webp'
import sari from '../assets/Products/sari.jpg'
import zihadi from '../assets/Products/zihadi.webp'

const products = [
  {
    id: 1,
    name: 'Premium Ajwa Dates',
    description: 'Sweet and soft, perfect for a healthy snack.',
    price: '1200 BDT',
    imageUrl: ajwa
  },
  {
    id: 2,
    name: 'Kalmi Maryam Dates',
    description: 'Rich and chewy, naturally sweet and full of flavor.',
    price: '900 BDT',
    imageUrl: kalmi
  },
  {
    id: 3,
    name: 'Naghal (Big size)',
    description: 'Large dates stuffed with almonds, perfect for a gourmet treat.',
    price: '430 BDT',
    imageUrl: naghal
  },
  {
    id: 4,
    name: 'Sari Dates',
    description: 'Juicy and delicious, a perfect treat for any time of the day.',
    price: '360 BDT',
    imageUrl: sari
  },
  {
    id: 5,
    name: 'Zihadi Dates',
    description: 'Medium-sized dates, excellent for snacking and cooking.',
    price: '260 BDT',
    imageUrl: zihadi
  }
];


const Product = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-10 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mt-3">{product.description}</p>
              <p className="text-xl font-bold text-amber-600 mt-4">{product.price}</p>
              <Link 
                to={`/product/${product.id}`}
                className="bg-amber-600 text-white py-2 px-6 rounded-full mt-6 inline-block hover:bg-amber-700 transition duration-300 shadow-md"
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
