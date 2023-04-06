import { ENDPOINTS } from "../../utlis/endpoints";
import { createApiEndpoint } from "../api";

export const getCompanyLogoImage = async (id) => {
    const response = await createApiEndpoint(ENDPOINTS.DOWNLOADCOMPANYLOGO).fetchImage(id);
    return response.data
}
export const getMenuItemImage = async (id) => {
    const response = await createApiEndpoint(ENDPOINTS.MENUITEMDOWNLOADIMAGE).fetchImage(id);
    return response.data
    // return URL.createObjectURL(response.data)
}