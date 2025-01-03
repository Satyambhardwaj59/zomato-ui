import { background } from "../utils/constant";
import { MOOK_URL } from "../utils/constant";

const RestroCart = (props) => {

    const {resData} = props;

    const {store_front_brand_image_url, brand_name, description, costForTwo, avgRating, deliveryTime} = resData?.info;

    return (
        <div className="cart" style={background}>
            <div className="res-img">
                <img src={store_front_brand_image_url} alt="cart img"  />
            </div>
            <div className="cart-desc">                
                <h3>{brand_name}</h3>
                <h4>{description}</h4>
                {/* <h4>{costForTwo + " Cost For Two"}</h4>
                <h4>{avgRating + " star"}</h4>
                <h4>{" Delivary time " + deliveryTime + " min"}</h4> */}
            </div>
        </div>
    )
}

export default RestroCart;