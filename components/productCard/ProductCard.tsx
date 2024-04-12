import type { ProductInfo } from '@/mockAPI/types';
import styles from './ProductCard.module.scss';
import Image from 'next/image';

type Props = {
    product: ProductInfo;
}

export default function ProductCard({
    product,
}: Props) {
    const {productName, productImage, money} = product;

    return (
        <div className={styles.productCard}>
            <div className='content--left'>
                <Image className='product__image' src={productImage} alt='product image' width={180} height={425} />
            </div>
            <div className='content--right'>
                <p className='product-name'>{productName}</p>
                <p className='product-money'>${money}</p>
            </div>
        </div>
    )
}