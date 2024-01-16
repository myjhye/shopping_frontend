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

        // 사진
        if (name === "file") {
            setFile(files && files[0]);
            return;
        }

        // 사이즈 : 다수 선택
        if (name === "options") {
            const updatedOptions = checked
                ? [...product.options, value]
                : product.options.filter((option) => option !== value);

            const sortedOptions = ["XS", "S", "M", "L", "XL"].filter((option) =>
                updatedOptions.includes(option)
            );
            
            setProduct((product) => ({
                ...product,
                options: sortedOptions,
            }));
            return;
        }

        // 그 외
        setProduct((product) => ({
            ...product,
            [name]: value,
        }));
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
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="description"
                    value={product.description}
                    placeholder="제품 설명"
                    required
                    onChange={handleChange}
                />

                {/* 성별 */}
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox"
                            name="gender"
                            value="여성"
                            checked={product.gender.includes("여성")}
                            onChange={handleChange}
                        />
                        여성
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="gender"
                            value="남성"
                            checked={product.gender.includes("남성")}
                            onChange={handleChange}
                        />
                        남성
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="gender"
                            value="공용"
                            checked={product.gender.includes("공용")}
                            onChange={handleChange}
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
                            checked={product.category.includes("상의")}
                            onChange={handleChange}
                        />
                        상의
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="하의"
                            checked={product.category.includes("하의")}
                            onChange={handleChange}
                        />
                        하의
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="원피스"
                            checked={product.category.includes("원피스")}
                            onChange={handleChange}
                        />
                        원피스
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="모자"
                            checked={product.category.includes("모자")}
                            onChange={handleChange}
                        />
                        모자
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="신발"
                            checked={product.category.includes("신발")}
                            onChange={handleChange}
                        />
                        신발
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="category"
                            value="기타"
                            checked={product.category.includes("기타")}
                            onChange={handleChange}
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
                            checked={product.options.includes("XS")}
                            onChange={handleChange}
                        />
                        XS
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="S"
                            checked={product.options.includes("S")}
                            onChange={handleChange}
                        />
                        S
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="M"
                            checked={product.options.includes("M")}
                            onChange={handleChange}
                        />
                        M
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="L"
                            checked={product.options.includes("L")}
                            onChange={handleChange}
                        />
                        L
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="options"
                            value="XL"
                            checked={product.options.includes("XL")}
                            onChange={handleChange}
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