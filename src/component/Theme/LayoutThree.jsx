import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FooterComponent from '../../component/Footer';
import Page from '../../component/Page';
import useMenu from '../../hook/useMenu';

import useAdvertise from '../../hook/useAdvertise';
import usePopups from '../../hook/usePopups';
import NoBgHeader from '../Header/NoBgHeader';
import AdvertisementHeader from '../Sticky/AdvertisementHeader';
import { HeaderTitle } from '../Header';
import FormHeader from '../FormHeader';
import ViewMode from '../ViewMode';
import { MenuGridCard } from '../Card';
import MenuListView from '../Menu/MenuListView';
import MenuListView2 from '../Menu/MenuListView2';
import AllView from '../AllView';
import useAddToCart from '../../hook/useAddToCart';
import PopupAdvertise from '../Popup';
import { ENDPOINTS } from '../../utlis/endpoints';

function LayoutThree({ menuData, profile }) {
  const [menuName, setMenuName] = useState('');
  const [isGridView, setIsGridView] = useState(false);
  const [open, setOpen] = useState(false);
  const { getPopups, data: popup } = usePopups();
  const { getAdvertise, data: ads } = useAdvertise();
  const { theme } = profile !== undefined && profile;
  const hasPOS = profile.hasPOS;
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

  const style = {
    // color:'#F47A00',
    color: theme?.color,
    fontFamily: theme?.font,
    fontSize: `${theme?.size?.title}`,
  };
  const bgImage = `${import.meta.env.VITE_APP_HOST_API_KEY}/${
    ENDPOINTS.MENUBGIMAGE
  }/${profile?.id}`;
  return (
    <>
      <Page
        bgImage={bgImage}
        title={profile.name}
        companyId={profile?.id}
        theme={theme}
        sx={{
          backgroundColor: '#fdfdfd',
          fontFamily: theme?.font,
        }}
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

        {profile !== null && <NoBgHeader profile={profile} style={style} />}
        <HeaderTitle
          title='Our Menu'
          style={{ ...style, fontSize: `${theme?.size?.title}` }}
        />

        <FormHeader
          onChange={(e) => setMenuName(e.target.value)}
          filterName={menuName || ''}
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
        {dataFiltered?.length > 0 &&
          dataFiltered?.map((menuItem, index) => (
            <React.Fragment key={index}>
              <AllView
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
        <FooterComponent ads={ads} profile={profile} />
        {open &&
          popup?.length > 0 &&
          popup.map((item, i) => (
            <PopupAdvertise
              key={i}
              url={`${import.meta.env.VITE_APP_HOST_API_KEY}/${
                ENDPOINTS.DOWNLOADPOPUPSFILE
              }/${item.id}`}
              open={open}
              onClose={() => setOpen(false)}
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

export default LayoutThree;
