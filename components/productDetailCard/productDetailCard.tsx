import type { ProductDetailInfo } from '@/mockAPI/types';
import styles from './productDetailCard.module.scss';
import Image from 'next/image';
import Counter from '../counter/Counter';

type Props = {
    product: ProductDetailInfo;
}

export default function ProductDetailCard({
    product,
}: Props) {
    const {
        productImage,
        productName,
        money,
        amount,
    } = product;

    return (
        <div className={styles.productDetailCard}>
            <div className='product-images'>
                <Image className='product__image' src={productImage} alt='product image' width={365} height={425} />
            </div>
            <div className='product-info'>
                <p className='product-name'>
                    {productName}
                    <span className='product-money'>
                        ${money}
                    </span>
                </p>
                <div className='product-counts'>
                    <p>数量：x{amount}</p>
                    <div className='add-shopping-card'>
                        <Counter maxAmount={amount} />
                        <button className='add-shopping-card__button'>添加至购物车</button>
                    </div>
                </div>
            </div>
        </div>
    )
}