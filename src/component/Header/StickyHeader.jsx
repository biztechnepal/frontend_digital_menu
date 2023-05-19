import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const StickyNavHeader = ({ image,style }) => {
    // const {
    //     companyLogoPath,
    //     name,
    //     country,
    //     mobile,
    //     city,
    //     panNo,
    //     email,
    //     id,
    //     cover = "/assets/banner.png" }
    //     = profile;

    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowHeader(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box >
            {image !== undefined &&
                <header
                    style={{
                        backgroundImage: `url(${image})`,
                        // backgroundColor: '#f1f1f1',
                        backgroundColor: style?.color,
                        // backgroundImage: `url('/assets/ads.gif')`
                    }}
                    className={`sticky-header ${showHeader ? 'show' : ''}`}
                >
                   {/* <img class="animated-gif" src="https://media.giphy.com/media/Wq6DnHvHchrTG/giphy.gif" /> */}
                </header>
            }
        </Box>
    );
};

export default StickyNavHeader;