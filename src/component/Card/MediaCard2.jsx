import { Grow } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { PATH_DASHBOARD } from '../../routes/path';
import { ENDPOINTS } from '../../utlis/endpoints';
import CategoryHeader from '../Header/CategoryHeader';

MediaCard2.propTypes = {
    menuItem: PropTypes.array,
};

export default function MediaCard2({ menuItem, isGridView, style }) {
    // const { menuItemName, price, description, status, menuItemId, imagePath } = menuItem;
    const { menuGroupItems, id, name } = menuItem;
    const linkTo = PATH_DASHBOARD.root;
    const imagearr = [
        "/assets/burgerbg.jpg",
        "/assets/burgerbg1.png",
        "/assets/pizza.jpg",
    ]

    // useEffect(async ()=>{
    //   const image =await getMenuItemImage(id)
    //   console.log('IMAGE URL',image)
    //   setImage(URL.createObjectURL(image));
    // },[])

    function generateRandom(maxLimit = imagearr.length) {
        let rand = Math.random() * maxLimit;
        rand = Math.floor(rand); // 99
        return rand;
    }
    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={500}
        >
            {isGridView && <section className="categorySection sectionSpace ">
                <CategoryHeader title={name} style={style} />
                <div className="MenuList gridview">
                    <div className="container">
                        <br />
                        <br />
                        <div className="row">
                            {
                                menuGroupItems?.length > 0 && menuGroupItems?.map((item, index) =>
                                    <React.Fragment key={index}>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <div className="food-card">
                                                <div className="food-card_img">
                                                    <img
                                                        src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.MENUITEMDOWNLOADIMAGE}/${item?.menuItemId}`}
                                                        alt="" />
                                                    <a href="#!"><i className="far fa-heart"></i></a>
                                                </div>
                                                <div className="food-card_content" >
                                                    <div className="food-card_title-section" >
                                                        <a href="#!" style={style} className="food-card_title">{item?.menuItemName}</a>
                                                    </div>
                                                    <div className="food-card_bottom-section">
                                                        <div className="space-between">
                                                            <div className="food-card_price" style={{ ...style, fontWeight: 800 }}>
                                                                <span >Rs. {item?.price}</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="food-card food-card--vertical">
                                                <div className="food-card_img">
                                                    <img
                                                        src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.MENUITEMDOWNLOADIMAGE}/${item?.menuItemId}`}
                                                        alt="" />
                                                </div>
                                                <div className="food-card_content">
                                                    <div className="food-card_title-section">
                                                        <a href="#!" style={style} className="food-card_title">{item?.menuItemName}</a>
                                                    </div>
                                                    <div className="food-card_bottom-section">
                                                        <div className="space-between">
                                                            <div>
                                                                <span className="fa fa-fire"></span>
                                                                {item?.description}
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="space-between">
                                                            <div className="food-card_price" style={style}>
                                                                <span>Rs. {item?.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </React.Fragment >)
                            }

                        </div >
                    </div >
                </div >
            </section >
            }

        </Grow >
    );
}
