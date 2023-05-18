import { IconButton } from '@mui/material'
import React from 'react'
import { BsCart4, BsGrid, BsList } from 'react-icons/bs'

function ViewMode({
    
    isGridView,
    setIsGridView
}) {
    return (
        <div className="viewModeIcos">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex">
                    {
                            !isGridView ?
                                <IconButton onClick={() => setIsGridView(true)} >
                                    <BsList color='#F47A00' size={22} />
                                </IconButton>
                                : <IconButton onClick={() => setIsGridView(!isGridView)}  >
                                    <BsGrid color='#F47A00' size={22} />
                                </IconButton>
                        }
                        {/* <div className="icons toggleList gridlistIcon">
                            <img src="images/grid.png" alt="" />
                        </div>
                        <div className="icons toggleList listIcon">
                            <img src="images/list.png" alt="" />
                        </div>
                        <div className="icons cart-icon">
                            <img src="images/cart.png" alt="" />
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMode