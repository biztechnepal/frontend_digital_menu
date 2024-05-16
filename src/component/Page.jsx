import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, theme, title = '', meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title}`}</title>
        {meta}
      </Helmet>
      <Box ref={ref} {...other}>
        <div
          className='bg-container'
          style={{
            backgroundImage: `url(${other?.bgImage})`,
          }}
        >
          <div className='container'>{children}</div>
        </div>
      </Box>
    </>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
