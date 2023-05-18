import React from 'react'
import { ENDPOINTS } from '../../utlis/endpoints';

function HeaderComponent({
    profile
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
                <div className="row bgColor">
                    <div className="col-lg-12 d-flex">
                        <div className="logo">
                            <img
                                src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${id}`}
                                alt="company-logo" />
                        </div>
                        <div className="companyDetails" style={{ color: '#fff' }}>
                            <h1>{name}</h1>
                            <span>{mobile}</span>
                            <p>{city} {address}, {country} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent