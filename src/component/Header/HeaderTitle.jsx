import React from 'react'

function HeaderTitle({
    title,
    style
}) {
    return (
        <div className="menuTitle">
            {/* <div className="row"> */}
                <div className="col-lg-12">
                    <h2 style={style}>{title}</h2>
                </div>
            {/* </div> */}
        </div>
    )
}

export default HeaderTitle