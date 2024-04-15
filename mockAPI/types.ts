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

type ShoppingCartProductInfo = {
    productId: string;
    productName: string;
    productImage: string;
    money: string;
    maxAmount: number;
    count: number;
}

type ResponseAPIGetProducts = ProductInfo[];

type ResponseAPIGetProductDetail = ProductDetailInfo;

type ResponseAPIGetShoppingCartInfo = ShoppingCartProductInfo[];

export type {
    ProductInfo,
    ProductDetailInfo,
    ShoppingCartProductInfo,
    ResponseAPIGetProducts,
    ResponseAPIGetProductDetail,
    ResponseAPIGetShoppingCartInfo,
}