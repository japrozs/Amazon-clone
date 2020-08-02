import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    }
    return (
        <div className="product">
            <div class="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
