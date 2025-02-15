import { useParams } from 'react-router-dom';
import kalmi from '../assets/Products/kalmi edited.png';
import ajwa from '../assets/Products/ajwa.webp';
import naghal from '../assets/Products/naghal.webp';
import sari from '../assets/Products/sari.jpg';
import zihadi from '../assets/Products/zihadi.webp';

const products = [
  {
    id: 1,
    name: 'Premium Ajwa Dates',
    description: 'Sweet and soft, perfect for a healthy snack.',
    price: '1200 BDT',
    imageUrl: ajwa,
    benefits: 'High in fiber, boosts energy, rich in antioxidants.'
  },
  {
    id: 2,
    name: 'Kalmi Maryam Dates',
    description: 'Rich and chewy, naturally sweet and full of flavor.',
    price: '900 BDT',
    imageUrl: kalmi,
    benefits: 'Packed with essential vitamins, promotes heart health.'
  },
  {
    id: 3,
    name: 'Naghal (Big size)',
    description: 'Large dates stuffed with almonds, perfect for a gourmet treat.',
    price: '430 BDT',
    imageUrl: naghal,
    benefits: 'Excellent source of protein, healthy fats, and fiber.'
  },
  {
    id: 4,
    name: 'Sari Dates',
    description: 'Juicy and delicious, a perfect treat for any time of the day.',
    price: '360 BDT',
    imageUrl: sari,
    benefits: 'Rich in minerals, aids in digestion, boosts immunity.'
  },
  {
    id: 5,
    name: 'Zihadi Dates',
    description: 'Medium-sized dates, excellent for snacking and cooking.',
    price: '260 BDT',
    imageUrl: zihadi,
    benefits: 'Low in calories, supports weight management, high in potassium.'
  }
];

// const scrollToSection = (sectionId) => {
//   const section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// };

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="text-center mt-20 text-red-600">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-lg font-semibold text-amber-600 mt-4">{product.price}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Benefits</h2>
          <p className="text-gray-600 mt-2">{product.benefits}</p>
          {/* <button onClick={() => scrollToSection('home')} className="bg-amber-600 text-white py-2 px-6 rounded-full mt-6 hover:bg-amber-700 transition duration-300 shadow-md">
            Place Order
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
