
import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
    {
        "info":{ 
            "brand_id": 20,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/ff45eb24-ff5d-49d5-8652-7f90aaee28f5.jpg",
            "brand_name": "Faasos",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Indulgent wraps loaded with high protein fillings",
            "logo": "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
            "main_offering": "Wraps",
            "slug": "faasos",
            "is_exclusive": 0,
            "sequence": 0,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 150,
            "avgRating": 4.3,
            "deliveryTime": 40,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/125b377f-0b15-42a2-9775-18bc1dfc4f02.jpg"
        }
    },
    {
      "info": {
        "brand_id": 26,
        "client_source_id": 13,
        "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/44df4975-8ff8-49dd-8e66-58d4d9a80a87.jpg",
        "brand_name": "Behrouz Biryani",
        "brand_start_time": "00:00:00",
        "brand_end_time": "23:59:00",
        "description": "Handcrafted, Royal Biryanis",
        "logo": "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
        "rectangle_logo": "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
        "background_url": "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
        "background_url_large": "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
        "main_offering": "Royal Biryani",
        "slug": "behrouz-biryani",
        "is_exclusive": 0,
        "sequence": 1,
        "minimum_order_amount": 0,
        "brand_delivery_fees": 0,
        "max_delivery_time": 0,
        "min_delivery_time": 0,
        "inclusive_mrp": 1,
        "is_opened": 0,
        "discount_info": {
            
        },
        "costForTwo": 550,
        "avgRating": 4.7,
        "deliveryTime": 45,
        "sure_points_multiplier_data": null,
        "coupons_with_best_promotion": [
            {
            
            }
        ],
        "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/eecae976-af37-4f0f-adfe-a5a68b401729.jpg"
     }
    },
    {
      "info": {
        "brand_id": 21,
        "client_source_id": 13,
        "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/e85c7df9-03a7-4e7e-9aff-63777accdf57.jpg",
        "brand_name": "Ovenstory",
        "brand_start_time": "00:00:00",
        "brand_end_time": "23:59:00",
        "description": "Pizza with standout toppings",
        "logo": "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
        "rectangle_logo": "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
        "background_url": "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
        "background_url_large": "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
        "main_offering": "Pizzas",
        "slug": "ovenstory",
        "is_exclusive": 0,
        "sequence": 2,
        "minimum_order_amount": 0,
        "brand_delivery_fees": 0,
        "max_delivery_time": 0,
        "min_delivery_time": 0,
        "inclusive_mrp": 1,
        "is_opened": 0,
        "discount_info": {
            
        },
        "costForTwo": 350,
        "avgRating": 4.5,
        "deliveryTime": 35,
        "sure_points_multiplier_data": null,
        "coupons_with_best_promotion": [
            {
            
            }
        ],
        "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/7b0d4930-5806-4ee3-97bd-b606932bbe64.jpg"
     }
    },
    {
        "info": {
            "brand_id": 23,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/dd79d385-5898-4956-8a07-718b8ddde9ff.jpg",
            "brand_name": "Firangi Bake",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Safe & Legendary Bakes",
            "logo": "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
            "main_offering": "Pasta & Lasagnas",
            "slug": "firangi-bake",
            "is_exclusive": 0,
            "sequence": 3,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 220,
            "avgRating": 4.1,
            "deliveryTime": 30,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/be6ab66f-c173-414c-889e-2600cac04268.jpg"
        }
    },
    {
        "info": {
            "brand_id": 30,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/a2963595-02b9-4472-80a5-e790d9308d93.jpg",
            "brand_name": "The Good Bowl",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Delicious Bowl Meals - Hygienic & Safe",
            "logo": "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
            "main_offering": "Rice Bowl",
            "slug": "the-good-bowl",
            "is_exclusive": 0,
            "sequence": 5,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 180,
            "avgRating": 4.5,
            "deliveryTime": 40,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/233e155d-e498-4239-9013-7cb4c999d0ab.jpg"
        }    
    },
    {
        "info": {
            "brand_id": 27,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/36654b98-27ab-4601-b54c-a59cb11b5607.jpg",
            "brand_name": "Lunchbox - Meals & Thalis",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Homestyle, Wholesome, Delightful",
            "logo": "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
            "main_offering": "Homestyle Meals",
            "slug": "lunchbox",
            "is_exclusive": 0,
            "sequence": 6,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 275,
            "avgRating": 4.3,
            "deliveryTime": 30,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/5b91446d-ccce-460b-8ca5-e9669a761c5e.jpg"
        }    
    },
    {
        "info": {
            "brand_id": 25,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/cbd4171c-dc9c-4ba4-96f8-ef4e4c3f959e.jpg",
            "brand_name": "The Biryani Life",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Hyderabad & Lucknow Biryani experts",
            "logo": "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
            "main_offering": "Hyderabadi Biryani",
            "slug": "the-biryani-life",
            "is_exclusive": 0,
            "sequence": 7,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 750,
            "avgRating": 4.7,
            "deliveryTime": 50,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/a5157179-7451-48b1-8797-b63aac29573d.jpg"
        }    
    },
    {
        "info": {
            "brand_id": 31,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/bf483b98-1d1c-4aa2-b0c2-43f5b2175bd7.jpg",
            "brand_name": "Veg Meals by LunchBox",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Satvik bhi, Delicious bhi",
            "logo": "https://rp-media.faasos.io/catalog/images/UQ4W3WVNYGOG.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/UQ4W3WVNYGOG.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/UQ4W3WVNYGOG.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/UQ4W3WVNYGOG.jpeg",
            "main_offering": "Veg Meals",
            "slug": "pure-veg-meals-by-lunchbox",
            "is_exclusive": 0,
            "sequence": 8,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 350,
            "avgRating": 4.3,
            "deliveryTime": 40,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/689f9d0b-f389-4fb3-8ff3-104fead5d9ac.jpg"
        }    
    },
    {
        "info": {
            "brand_id": 82,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/d3268cfb-a448-4638-9b84-32b822bd9322.jpg",
            "brand_name": "Faasos' Signature Wraps & Rolls",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Extraordinarily Indulgent Wraps",
            "logo": "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
            "main_offering": "Loaded wrap",
            "slug": "signature-wraps-rolls-by-faasos",
            "is_exclusive": 0,
            "sequence": 10,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 160,
            "avgRating": 4.5,
            "deliveryTime": 20,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/5d9d7626-e803-40b0-8b0b-62570e1b8ad0.jpg"
        }    
    },
    {
        "info": {
            "brand_id": 175,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/f9cccf85-1a26-4b63-a5bd-168cab6b9199.jpeg",
            "brand_name": "Makhani Darbar",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Delicious Curries and Gravies",
            "logo": "https://rp-media.faasos.io/catalog/images/MPGOURFDQX4X.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/MPGOURFDQX4X.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/MPGOURFDQX4X.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/MPGOURFDQX4X.jpeg",
            "main_offering": "North Indian",
            "slug": "makhani-darbar",
            "is_exclusive": 0,
            "sequence": 14,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
        
            },
            "costForTwo": 450,
            "avgRating": 4.3,
            "deliveryTime": 35,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/19989bb4-632b-45c8-a144-4e1ed7377fe3.jpg"
        }    
    },
    {
        "info": {
            "brand_id": 182,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/38a959ac-8ed7-4847-9d36-31616952dbf1.jpg",
            "brand_name": "The Pizza Project",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "description": "Pizza Slices with standout toppings",
            "logo": "https://rp-media.faasos.io/catalog/images/Y97QPEXOAWRG.png",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/Y97QPEXOAWRG.png",
            "background_url": "https://rp-media.faasos.io/catalog/images/Y97QPEXOAWRG.png",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/Y97QPEXOAWRG.png",
            "main_offering": "Pizza",
            "slug": "slice-it",
            "is_exclusive": 0,
            "sequence": 16,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 300,
            "avgRating": 4.4,
            "deliveryTime": 30,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/151f9afb-c0a7-4ee6-a68c-dc64f675b417.png"
        }    
    },
    {
        "info": {
            "brand_id": 218,
            "client_source_id": 13,
            "banner_image_es": "https://product-assets.faasos.io/eatsure_cms/production/ecc1743c-654f-41b2-b519-ed13e0258cf4.jpg",
            "brand_name": "Thalaiva Biryani",
            "brand_start_time": "00:00:00",
            "brand_end_time": "23:59:00",
            "logo": "https://rp-media.faasos.io/catalog/images/UF4RZT7C8LJS.jpeg",
            "rectangle_logo": "https://rp-media.faasos.io/catalog/images/UF4RZT7C8LJS.jpeg",
            "background_url": "https://rp-media.faasos.io/catalog/images/UF4RZT7C8LJS.jpeg",
            "background_url_large": "https://rp-media.faasos.io/catalog/images/UF4RZT7C8LJS.jpeg",
            "main_offering": "food",
            "slug": "thalaiva-biryani",
            "is_exclusive": 0,
            "sequence": 20,
            "minimum_order_amount": 0,
            "brand_delivery_fees": 0,
            "max_delivery_time": 0,
            "min_delivery_time": 0,
            "inclusive_mrp": 1,
            "is_opened": 0,
            "discount_info": {
                
            },
            "costForTwo": 650,
            "avgRating": 4.6,
            "deliveryTime": 45,
            "sure_points_multiplier_data": null,
            "coupons_with_best_promotion": [
                {
                
                }
            ],
            "store_front_brand_image_url": "https://product-assets.faasos.io/eatsure_cms/production/1c07b309-51e7-4ed8-a298-942d19044a4b.jpg"
        }
    }
]

const background = {
    backgroundColor: "#f0f0f0"
}

const Header = () => {
    return (
        <div className="header" style={background}>
            <div className="logo">
                 <img className = "logo-img" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" alt="logo img" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        
    )
}

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
                <h4>{costForTwo + " Cost For Two"}</h4>
                <h4>{avgRating + " star"}</h4>
                <h4>{" Delivary time " + deliveryTime + " min"}</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Find your Restro..." />
                <button>Search</button>
            </div>
            <div className="res-container">
                {
                    resList.map (restaurant => (
                        <RestroCart key={restaurant.info.brand_id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer" style={background}>
            <div className="copyR" >
                    <img className="foot-logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" alt="footer-logo" />
                    <h3> © Copyright Satyam Bhardwaj</h3>
            </div>
            <div className="about">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="about">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Email</li>
                </ul>
            </div>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="test">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
