import type { ShoppingCartProductInfo } from '@/mockAPI/types';
import styles from './ShoppingCartProductCard.module.scss';
import Image from 'next/image';
import Counter from '../counter/Counter';

type Props = {
    product: ShoppingCartProductInfo;
    onDeletedProduct: (productId: string) => void;
    onChangedCount: (productId: string, count: number) => void;
}

export default function ShoppingCartProductCard({
    product,
    onDeletedProduct,
    onChangedCount,
}: Props) {
    const {productId, productName, productImage, money, maxAmount, count} = product;

    const handleSubtractLastOne = () => {
        onDeletedProduct(productId);
    }

    return (
        <div className={styles.shoppingCartProductCard}>
            <div className='content--left'>
                <Image className='product__image' src={productImage} alt='product image' width={80} height={80} />
            </div>
            <div className='content--right'>
                <p className='product-name'>
                    {productName}
                    <span className='product-money'>${money}</span>
                </p>
                <div className='product-counts'>
                    <p className='product-count--max'>库存：{maxAmount}件</p>
                    <Counter defaultValue={count} maxAmount={maxAmount} onSubtractLastOne={handleSubtractLastOne} onChanged={(count) => onChangedCount(productId, count)} />
                </div>
            </div>
        </div>
    )
}