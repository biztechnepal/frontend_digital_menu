import React from 'react'

function HeaderTitle({
    title
}) {
    return (
        <div className="menuTitle">
            <div className="row">
                <div className="col-lg-12">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default HeaderTitle