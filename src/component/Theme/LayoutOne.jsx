import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FooterComponent from '../../component/Footer';
import Page from '../../component/Page';
import useAdvertise from '../../hook/useAdvertise';
import usePopups from '../../hook/usePopups';
import AllView from '../AllView';
import FormHeader from '../FormHeader';
import { CompanyMainHeader, HeaderTitle } from '../Header';
import NoBgHeader from '../Header/NoBgHeader';
import AdvertisementHeader from '../Sticky/AdvertisementHeader';
import ViewMode from '../ViewMode';
import MenuListView from '../Menu/MenuListView';
import { MenuGridCard } from '../Card';
import PopupAdvertise from '../Popup';
import { ENDPOINTS } from '../../utlis/endpoints';
import useAddToCart from '../../hook/useAddToCart';
import CartDrawer from '../Popup/CartDrawer';

function LayoutOne({ menuData, profile }) {
  const [menuName, setMenuName] = useState('');

  const [isGridView, setIsGridView] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const { getPopups, data: popup } = usePopups();
  const { getAdvertise, data: ads } = useAdvertise();
  const { search } = useLocation();
  console.log(profile);
  const { theme } = profile !== null && profile;
  const hasPOS = profile?.hasPOS;
  useEffect(() => {
    getPopups();
    getAdvertise();
  }, []);

  useEffect(() => {
    // setInterval(() => {
    setOpen(true);
    // }, 200000)
  }, []);

  const dataFiltered = applySortFilter({
    data: menuData,
    name: menuName,
  });

  const handleFilter = (name) => {
    setMenuName(name);
  };

  const style = {
    // color:'#F47A00',
    color: theme?.color,
    fontFamily: theme?.font,
    fontSize: `${theme?.size?.title}`,
  };
  return (
    <>
      <Page
        title='Company Menu'
        sx={{ backgroundColor: '#fdfdfd', fontFamily: theme?.font }}
      >
        {ads?.length > 0 &&
          ads.map((item, i) => (
            <AdvertisementHeader
              link={item.adUrl}
              url={`${import.meta.env.VITE_APP_HOST_API_KEY}/${
                ENDPOINTS.DOWNLOADADSFILE
              }/${item.id}`}
              position={theme?.advertisementPlacement}
            />
          ))}
        {profile !== null && (
          <CompanyMainHeader profile={profile} style={style} />
        )}
        <HeaderTitle title='Our Menu' style={style} />
        <FormHeader
          onHandleChange={handleFilter}
          filterName={menuName}
          containerStyle={{
            backgroundColor: 'white',
            borderRadius: '5%',
            width: '50%',
            margin: '0 auto',
          }}
        />
        <ViewMode
          hasPOS={hasPOS}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          style={style}
        />
        {isGridView &&
          dataFiltered?.length > 0 &&
          dataFiltered?.map((menuItem, index) => (
            <React.Fragment>
              <MenuGridCard
                theme={theme}
                companyId={profile?.id}
                hasPOS={hasPOS}
                isGridView={isGridView}
                key={index}
                menuItem={menuItem}
                style={style}
              />
            </React.Fragment>
          ))}
        {!isGridView &&
          dataFiltered?.length > 0 &&
          dataFiltered?.map((menuItem, index) => (
            <React.Fragment>
              <MenuListView
                theme={theme}
                companyId={profile?.id}
                hasPOS={hasPOS}
                isGridView={false}
                key={index}
                menuItem={menuItem}
                style={style}
              />
            </React.Fragment>
          ))}
        <FooterComponent />

        {isPopup &&
          popup?.length > 0 &&
          popup.map((item, i) => (
            <PopupAdvertise
              key={i}
              url={`${import.meta.env.VITE_APP_HOST_API_KEY}/${
                ENDPOINTS.DOWNLOADPOPUPSFILE
              }/${item.id}`}
              open={isPopup}
              onClose={() => setIsPopup(false)}
            />
          ))}
      </Page>
    </>
  );
}

function applySortFilter({ data, name }) {
  const stabilizedThis = data?.map((el, index) => [el, index]);
  // data = stabilizedThis?.map((el) => el[0]);

  if (name) {
    data = data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  return data;
}

export default LayoutOne;
