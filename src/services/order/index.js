import { ENDPOINTS } from "../../utlis/endpoints";
import { createApiEndpoint } from "../api";

export const placeOrderService = (values) => createApiEndpoint(ENDPOINTS.ORDERS).create(values);
