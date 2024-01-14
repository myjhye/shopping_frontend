import { useState } from "react"

export default function NewProduct() {

    const currentDate = new Date();

    // 새로 등록하는 상품 정보
    const [product, setProduct] = useState({
        category: "",
        date: currentDate.toISOString(),
        description: "",
        gender: "",
        image: "",
        options: [],
        price: "",
        title: ""
    });

    // 업로드할 이미지 파일
    const [file, setFile] = useState();


    const handleChange = (e) => {

        const { name, value, files, checked } = e.target;

        if (name === "file") {
            setFile(files && files[0]);
        }

        return;
    }
    

    return (
        <section className="w-full text-center">
            <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>

            {file && (
                <img
                    className="w-96 mx-auto mb-2"
                    src={URL.createObjectURL(file)}
                    alt='local file'
                />
            )}

            <form className="flex flex-col px-12">
                <input 
                    type='file'
                    accept="image/*"
                    name="file"
                    required
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="title"
                    value={product.title}
                    placeholder="제품명"
                    required
                />
                <input 
                    type="text"
                    name="description"
                    value={product.description}
                    placeholder="제품 설명"
                    required
                />

                {/* 성별 */}
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox"
                            name="gender"
                            value="여성"
                            checked={product.gender.includes("여성")}
                        />
                        여성
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="gender"
                            value="남성"
                            checked={product.gender.includes("남성")}
                        />
                        남성
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="gender"
                            value="공용"
                            checked={product.gender.includes("공용")}
                        />
                        공용
                    </label>
                </div>

                {/* 카테고리 */}
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="상의"
                            checked={product.gender.includes("상의")}
                        />
                        상의
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="하의"
                            checked={product.gender.includes("하의")}
                        />
                        하의
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="원피스"
                            checked={product.gender.includes("원피스")}
                        />
                        원피스
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="원피스"
                            checked={product.gender.includes("원피스")}
                        />
                        모자
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="원피스"
                            checked={product.gender.includes("원피스")}
                        />
                        신발
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="기타"
                            checked={product.gender.includes("기타")}
                        />
                        기타
                    </label>
                </div>

                {/* 사이즈 */}
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="XS"
                            checked={product.gender.includes("XS")}
                        />
                        XS
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="S"
                            checked={product.gender.includes("S")}
                        />
                        S
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="M"
                            checked={product.gender.includes("M")}
                        />
                        M
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="L"
                            checked={product.gender.includes("L")}
                        />
                        L
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="XL"
                            checked={product.gender.includes("XL")}
                        />
                        XL
                    </label>
                </div>

                {/* 제출 버튼 */}
                <button
                    className="bg-brand text-white py-2 px-4 rounded-lg hover:brightness-110"
                >
                    등록
                </button>
            </form>
        </section>
    )
}