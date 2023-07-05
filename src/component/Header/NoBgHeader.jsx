import React from 'react'
import { ENDPOINTS } from '../../utlis/endpoints';

function NoBgHeader({
    profile,
    style
}) {
    const {
        address, appSecret, city, companyBannerPath, companyLogoPath, contactPerson, country, email, id, mobile, name, panNo, pinNo, username,
        cover = "/assets/banner.png" }
        = profile;
    return (
        <div className="header mb-3">
            <div className="container">
                <div className="row" >
                    <div className="col-lg-12 d-flex justify-content-center  loggo">
                        <div className="logo">
                            <img
                                src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${id}`}
                                alt="company-logo" />
                        </div>
                        <div className="companyDetails type2headertext" style={{ ...style }}>
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

export default NoBgHeader