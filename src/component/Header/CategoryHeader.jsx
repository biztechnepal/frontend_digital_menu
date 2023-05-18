import React from 'react'

function CategoryHeader({
    style,
    title,
    caption="Example Tagline Text"
}) {
    return (
        <div className="CategoryHeading">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>
                            {title}
                            {/* <span>{caption}</span> */}
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryHeader