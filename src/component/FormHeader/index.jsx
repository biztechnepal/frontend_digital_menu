import { Box, Button, Grid, IconButton, ToggleButton } from '@mui/material';
import React, { useState } from 'react'
import TextFieldFilter from '../TextFieldFilter';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { BsCart4, BsGrid, BsList } from 'react-icons/bs'

function SearchComponent({
    onHandleChange,
    filterName,
    isGridView,
    setIsGridView
}) {
    const [searchValue, setSearchValue] = useState("");
    return (
        <Box p={2}>
            <div className="searchBar">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 ">
                            <form className="">
                                <div className=" row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    <div className="col">
                                        {/* <input className="form-control " type="search" placeholder="Search topics or keywords" /> */}
                                        <TextFieldFilter
                                            filter={filterName}
                                            onHandleChange={onHandleChange}
                                        />
                                    </div>
                                    {/* <div className="col-auto pl-2">
                                        <button className="btn  btn-success" type="submit">Search</button>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </Box>
    )
}
export default React.memo(SearchComponent)