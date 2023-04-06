import { Box, Button, Grid, IconButton, ToggleButton } from '@mui/material';
import React, { useState } from 'react'
import TextFieldFilter from '../TextFieldFilter';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { BsCart4, BsGrid, BsList } from 'react-icons/bs'

function SearchComponent({
    isGridView,
    setIsGridView
}) {
    const [searchValue, setSearchValue] = useState("");
    return (
        <Box p={2}>
            <form
            // onSubmit={handleFilter}
            >
                <Grid container justifyContent="center" textAlign="center" spacing={2} >
                    <Grid
                        item
                        xs={11}
                        md={3}
                        lg={3}
                        xl={11}
                    >
                        <TextFieldFilter
                            label="Search by menu name. . ."
                            filter={searchValue}
                            setfilter={(value) => setSearchValue(value)}
                        />
                    </Grid>
                    <Grid item>
                        <IconButton >
                            <BsCart4 size={22} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        {
                            !isGridView ?
                                <IconButton onClick={() => setIsGridView(true)} >
                                    <BsList size={22} />
                                </IconButton>
                                : <IconButton onClick={() => setIsGridView(!isGridView)}  >
                                    <BsGrid size={22} />
                                </IconButton>
                        }
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default React.memo(SearchComponent)