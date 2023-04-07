// http://52.221.216.231/QrMenuCompany/WebApi
// http://52.221.216.231/QrMenuAdmin/WebApi
// HOST_API
export const COMPANY_API_ROUTE_NAME = "QrMenuCompany/WebApi"

// COMPANIES ROUTES
export const ENDPOINTS = {
    LOGIN: `${COMPANY_API_ROUTE_NAME}/Auth/Login`,
    USER: `${COMPANY_API_ROUTE_NAME}/Users`,
    DOWNLOADCOMPANYBANNER: `${COMPANY_API_ROUTE_NAME}/Companies/DownloadCompanyBanner`,
    DOWNLOADCOMPANYLOGO: `${COMPANY_API_ROUTE_NAME}/Companies//DownloadCompanyLogo`,
    MENUITEMDOWNLOADIMAGE: `${COMPANY_API_ROUTE_NAME}/MenuItems/DownloadImage`,
    COMPANYMENU: `${COMPANY_API_ROUTE_NAME}/Companies/CompanyMenu`,
    COMPANYPROFILE: `${COMPANY_API_ROUTE_NAME}/Companies/CompanyProfile`,
}