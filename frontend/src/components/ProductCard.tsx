import "./style/productCard.css";

type Product = {
    name: string;
    price: number;
    image: string;
};

const ProductCard = ({ name, price, image }: Product) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-img" />

            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">{price.toLocaleString()} VND</p>
            </div>

            <div className="cart-icon">🛒</div>
        </div>
    );
};

export default ProductCard;