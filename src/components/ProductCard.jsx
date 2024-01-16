import { AiOutlineMessage } from 'react-icons/ai';
import { formatAgo } from "./util/date";
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {

  const navigate = useNavigate();  

  return (
    <li onClick={() => navigate(`/products/${product.id}`, { state: { product } })}>
      <img className='w-full' src={product.image} alt={product.title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-xl font-bold mt-2">{`${product.price.toLocaleString()}원`}</p>
        <p className="text-gray-600 mt-2">{product.category} / {product.gender}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">{formatAgo(product.date, 'ko')} 등록</p>
          <p>
            <AiOutlineMessage />
          </p>
        </div>
      </div>
    </li>
  );
}
