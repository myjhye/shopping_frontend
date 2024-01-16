import { useState } from "react";
import { useLocation } from "react-router-dom"
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

export default function ProductDetail() {

    const {state: {product}} = useLocation();
    const [selected, setSelected] = useState(product.options[0]);
    const [selectedTab, setSelectedTab] = useState('댓글');
    const [commentList, setCommentList] = useState([]);
    const [commentText, setCommentText] = useState('');

    const buttonText = (
        <span className="flex items-center justify-center">
            <span className="ml-2">관심상품</span>
        </span>
    );

    return (
        <>
            <section className="flex flex-col md:flex-row p-4 mt-10">
                <img className="max-w-xl mx-auto px-4" src={product.image} alt={product.title} />
                <div className="w-full basis-5/12 flex flex-col p-4">
                    <h2 className="text-3xl font-bold py-2">{ product.title }</h2>
                    <p className="text-2xl font-bold py-2 border-b border-gray-400">{`${product.price.toLocaleString()}원`}</p>
                    <p className="py-4 text-lg">{ product.description }</p>
                    <div className="flex items-center">
                        <label htmlFor="select">옵션: </label>
                        <select
                            id='select'
                            className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
                            onChange={(e) => setSelected(e.target.value)}
                            value={selected}
                        >
                            {product.options.split(',').map((option, index) => (
                                <option key={index} value={option.trim()}>
                                    {option.trim()}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        className="bg-brand text-white py-2 px-4 rounded-lg hover:brightness-110"
                    >
                        장바구니에 추가
                    </button>
                    <div>
                        <button
                            className="bg-transparent border border-gray-300 text-black py-2 px-4 rounded-lg hover:brightness-110"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </section>
            <hr className="mt-20" />
            <div className="flex space-x-4 mt-20">
                <button 
                    className={`${selectedTab === "댓글" ? "bg-blue-500" : "bg-gray-300"} px-4 py-2 rounded-lg text-white`}
                    onClick={() => {setSelectedTab('댓글')}}
                >
                    댓글
                </button>
                <button 
                    className={`${selectedTab === "비슷한 상품" ? "bg-blue-500" : "bg-gray-300"} px-4 py-2 rounded-lg text-white`}
                    onClick={() => {setSelectedTab('비슷한 상품')}}
                >
                    비슷한 상품
                </button>
            </div>
            {selectedTab === "댓글" && (
                <div className="comment-container">
                    <div>
                        <span class="text-red-500 text-4xl">
                            {commentList.length}개의 댓글
                        </span>
                    </div>
                    <div className="comment-input-container">
                        <input 
                            className="comment-input"
                            type='text'
                            placeholder="댓글 입력"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button className="comment-submit-button">
                            등록
                        </button>
                    </div>
                    {commentList.length === 0 ? (
                        <p>
                            <span className="text-xl font-bold">아직 댓글이 없습니다.</span> <br />
                            <span>가장 먼저 댓글을 남겨보세요.</span>
                        </p>
                    ) : (
                        <p>
                            <span>댓글 있음</span>
                        </p>
                    )}
                </div>
            )}
        </>
    )
}