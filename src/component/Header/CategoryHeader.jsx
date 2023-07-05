import React from 'react'

function CategoryHeader({
    style,
    title,
    caption = "Caption"
}) {
    return (
        <div className="CategoryHeading mb-2">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 style={style}  >
                            {title}
                            {/* <span>{caption}</span> */}
                        </h2>

                    </div>
                </div>
        </div>
    )
}

export default CategoryHeader