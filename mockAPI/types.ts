type ProductInfo = {
    productId: string;
    productName: string;
    productImage: string;
    money: string;
}

type ProductDetailInfo = {
    productId: string;
    productName: string;
    productImage: string;
    money: string;
    amount: number;
}

type ResponseAPIGetProducts = ProductInfo[];

type ResponseAPIGetProductDetail = ProductDetailInfo;

export type {
    ProductInfo,
    ProductDetailInfo,
    ResponseAPIGetProducts,
    ResponseAPIGetProductDetail,
}