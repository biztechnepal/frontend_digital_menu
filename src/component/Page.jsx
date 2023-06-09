import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, style, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title}`}</title>
      {meta}
    </Helmet>
    <Box ref={ref} {...other}>
      <div className='bg-container' style={style}>
        <div className='container'>
          {children}
        </div>
      </div>
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
