import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BiFolderMinus, BiTrash } from 'react-icons/bi';
import Image from '../Image';
import { Card, Container, Grow } from '@mui/material';
import CategoryHeader from '../Header/CategoryHeader';
import { PATH_DASHBOARD } from '../../routes/path';
import { ENDPOINTS } from '../../utlis/endpoints';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function MenuListView2({ menuItem, style }) {
    // const { menuItemName, price, description, status, menuItemId, imagePath } = menuItem;
    const { menuGroupItems, id, name } = menuItem;
    const linkTo = PATH_DASHBOARD.root;
    const imagearr = [
        "/assets/burgerbg.jpg",
        "/assets/burgerbg1.png",
        "/assets/pizza.jpg",
    ]

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const fontStyle = {
        fontSize: '1em',

    }
    const descriptionStyle = {
        width: "1000px",
        mt: "-10px",
        color: "#736e6e"
    }
    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={500}
        >
            <body className='list'>
                <section className="categorySection sectionSpace ">
                    <CategoryHeader title={name} style={style} />

                    <div className="MenuList listView ">
                        <div className="list-wrapper container">
                            <br />
                            <div className="row">
                                {
                                    menuGroupItems?.length > 0 && menuGroupItems?.map((item, index) =>
                                        <React.Fragment key={index}>
                                            <div className="col-lg-6">
                                                <ul className="list-group catlistgroup">
                                                    <li className="list-group-item">
                                                        <h4 className="list-group-item-heading">{item?.menuItemName}<span
                                                            className="badge pull-right Commonprice">Rs. {item?.price}</span></h4>
                                                        <p className="list-group-item-text">{item?.description}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    )}
                            </div>
                        </div>
                    </div>

                </section>
            </body>
        </Grow>
    );
}