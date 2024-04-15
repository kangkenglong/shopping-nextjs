import type { ProductInfo, ProductDetailInfo, ShoppingCartProductInfo } from "./types";

const mockProductsData: ProductInfo[] = [
    {
        productId: '111',
        productName: '时尚连衣裙',
        productImage: '/32-2.jpg',
        money: '99.9',
    },
    {
        productId: '222',
        productName: '时尚连衣裙1',
        productImage: '/32-2.jpg',
        money: '199.9',
    },
    {
        productId: '333',
        productName: '时尚连衣裙2',
        productImage: '/32-2.jpg',
        money: '299.9',
    },
    {
        productId: '444',
        productName: '时尚连衣裙3',
        productImage: '/32-2.jpg',
        money: '399.9',
    },
    {
        productId: '555',
        productName: '时尚连衣裙4',
        productImage: '/32-2.jpg',
        money: '499.9',
    },
    {
        productId: '666',
        productName: '时尚连衣裙5',
        productImage: '/32-2.jpg',
        money: '599.9',
    },
];

const mockProductDetailsData: {[productId: string]: ProductDetailInfo} = {
    '111': {
        productId: '111',
        productName: '时尚连衣裙',
        productImage: '/32-2.jpg',
        money: '99.9',
        amount: 6,
    },
    '222': {
        productId: '222',
        productName: '时尚连衣裙1',
        productImage: '/32-2.jpg',
        money: '199.9',
        amount: 6,
    },
    '333': {
        productId: '333',
        productName: '时尚连衣裙2',
        productImage: '/32-2.jpg',
        money: '299.9',
        amount: 6,
    },
    '444': {
        productId: '444',
        productName: '时尚连衣裙3',
        productImage: '/32-2.jpg',
        money: '399.9',
        amount: 6,
    },
    '555': {
        productId: '555',
        productName: '时尚连衣裙4',
        productImage: '/32-2.jpg',
        money: '499.9',
        amount: 6,
    },
    '666': {
        productId: '666',
        productName: '时尚连衣裙5',
        productImage: '/32-2.jpg',
        money: '599.9',
        amount: 6,
    },
}

const mockShoppingCartInfo: ShoppingCartProductInfo[] = [
    {
        productId: '111',
        productName: '时尚连衣裙',
        productImage: '/32-2.jpg',
        money: '99.9',
        maxAmount: 6,
        count: 2,
    },
    {
        productId: '222',
        productName: '时尚连衣裙1',
        productImage: '/32-2.jpg',
        money: '199.9',
        maxAmount: 6,
        count: 1,
    },
];

export {
    mockProductsData,
    mockProductDetailsData,
    mockShoppingCartInfo,
}