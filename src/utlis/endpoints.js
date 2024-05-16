// http://52.221.216.231/QrMenuCompany/WebApi
// http://52.221.216.231/QrMenuAdmin/WebApi
// https://qrmenu.gorkhab.com:877/QrMenuCompany/WebApi/Auth/Login
// HOST_API
export const COMPANY_API_ROUTE_NAME = "QrMenuCompany/WebApi";
export const ADMIN = "QrMenuAdmin/WebApi";

// COMPANIES ROUTES
export const ENDPOINTS = {
  LOGIN: `${COMPANY_API_ROUTE_NAME}/Auth/Login`,
  USER: `${COMPANY_API_ROUTE_NAME}/Users`,
  DOWNLOADCOMPANYBANNER: `${COMPANY_API_ROUTE_NAME}/DownloadImages/DownloadCompanyBanner`,
  DOWNLOADCOMPANYLOGO: `${COMPANY_API_ROUTE_NAME}/DownloadImages//DownloadCompanyLogo`,
  MENUITEMDOWNLOADIMAGE: `${COMPANY_API_ROUTE_NAME}/DownloadImages/DownloadItemImage`,
  MENUBGIMAGE: `${COMPANY_API_ROUTE_NAME}/DownloadImages/DownloadBGImage`,
  DOWNLOADADSFILE: `${COMPANY_API_ROUTE_NAME}/DownloadImages/DownloadAdFile`,
  DOWNLOADPOPUPSFILE: `${COMPANY_API_ROUTE_NAME}/DownloadImages/DownloadPopupFile`,
  ORDERS: `${COMPANY_API_ROUTE_NAME}/Orders`,

  COMPANYPROFILE: `${COMPANY_API_ROUTE_NAME}/Companies/CompanyProfile`,
  POPUPS: `${ADMIN}/Popups`,
  ADVERTISE: `${ADMIN}/Ads`,

  PUBLICMENU: `${COMPANY_API_ROUTE_NAME}/PublicMenu`,
};
