import React from 'react'
import { ENDPOINTS } from '../../utlis/endpoints';

function HeaderComponent({
    profile,
    style
}) {
    const {
        address, appSecret, city, companyBannerPath, companyLogoPath, contactPerson, country, email, id, mobile, name, panNo, pinNo, username,
        cover = "/assets/banner.png" }
        = profile;
    return (
        <div className="header"
        // style={{
        //   width:'100%',
        //   background:`url(/assets/banner.png) no-repeat`
        // }}
        >
            <div className="container">
                <div className="row bgColor" style={{
                    
                    // background: `linear - gradient(90deg,${style?.color} 26 %, red 100 %, ${style?.color} 100 %)`
                    // background: `linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))`
                }}>
                    <div className="col-lg-12 d-flex">
                        <div className="logo">
                            <img
                                src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${id}`}
                                alt="company-logo" />
                        </div>
                        <div className="companyDetails" style={{ ...style, color: '#fff' }}>
                            <h1 style={{ fontFamily: style.fontFmaily }}>{name}</h1>
                            <span >{mobile}</span>
                            <p>{city} {address}, {country} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent