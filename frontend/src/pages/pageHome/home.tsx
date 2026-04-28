import React from "react";
import ProductCard from "../../components/ProductCard";
import CategorySidebar from "../../components/CategorySidebar";
import banner1 from "../../assets/banners/banner1.png";
import banner2 from "../../assets/banners/banner2.png";
import banner3 from "../../assets/banners/banner3.png";

import "./home.css";

const Home = () => {
    const products = [
        {
            id: 1,
            name: "Sữa cho bé cao cấp",
            price: 250000,
            image: banner1,
        },
        {
            id: 2,
            name: "Tã em bé siêu thấm",
            price: 180000,
            image: banner2,
        },
        {
            id: 3,
            name: "Bình sữa an toàn",
            price: 120000,
            image: banner3,
        },
    ];

    return (
        <div className="home">
            <p className="breadcrumb">
                <a href="/">Trang chủ </a>&gt;
            </p>

            <div className="home-container">
                {/* DANH MỤC */}
                <CategorySidebar />

                {/* SẢN PHẨM */}
                <div className="product-section">
                    <div className="tabs">
                        <button>Sản phẩm tiêu biểu</button>
                        <button>Sản phẩm mới</button>
                        <button>Sản phẩm bán chạy</button>
                    </div>

                    <div className="product-list">
                        {/* render product của bạn */}
                        <div className="product-list">
                            {products.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;