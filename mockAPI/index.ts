import { mockProductsData, mockProductDetailsData } from "./mockData"
import type { ResponseAPIGetProducts, ResponseAPIGetProductDetail } from "./types";

const mockGetProductsAPI = async (): Promise<ResponseAPIGetProducts> => {
    return mockProductsData;
}

const mockGetProductDetailInfoAPI = async (productId: string): Promise<ResponseAPIGetProductDetail> => {
    return mockProductDetailsData[productId] || {};
}

export {
    mockGetProductsAPI,
    mockGetProductDetailInfoAPI,
}
