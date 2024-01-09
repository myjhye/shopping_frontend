import { AiOutlineMessage } from 'react-icons/ai';

export default function ProductCard({ product }) {

    return (
        <>
            <li>
                <img className='w-full' src='{product.image}' alt={product.title} />
            </li>
            <li className="mt-2 px-2 text-lg justify-between items-center">
                <h3 className="truncate text-lg">{product.title}</h3>
                <p className="text-xl font-bold">{`${product.price.toLocaleString()}원`}</p>
            </li>
            <li className="mb-2 px-2 text-gray-600">{product.category} / {product.gender}</li>
        </>
    )
}