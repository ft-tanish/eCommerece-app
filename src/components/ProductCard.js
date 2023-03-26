import "../assests/styles/product-card.css";
import { Start_CDN } from "../utils/cdn";

export const ProductCard = ({
    category,
    image,
    title,
    description,
    rating
}) => {
    return (
        <div className='product-card-cont'>
            <div id="product-card-img">
                <img src={image} alt="" />
            </div>
            <div className="rated-card-content">
                <div className="card-content-type">
                    <h3>{category}</h3>
                </div>
                <div className="card-content-name-like">
                    <div className="card-content-name">{title}</div>
                </div>
                <div>{rating?.rate} <img className="star" src={Start_CDN} alt="star" /> rating by {rating?.count} person</div>
            </div>
        </div>
    )
}
