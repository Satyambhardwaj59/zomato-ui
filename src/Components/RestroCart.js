import { background } from "../utils/constant";


const RestroCart = (props) => {

    const {resData} = props;

    const {store_front_brand_image_url, brand_name, description} = resData

    return (
        <div className="cart" style={background}>
            <div className="res-img">
                <img src={store_front_brand_image_url ? store_front_brand_image_url : "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" } alt="cart img"  />
            </div>
            <div className="cart-desc">                
                <h3>{brand_name}</h3>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default RestroCart;