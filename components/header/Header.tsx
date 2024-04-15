import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import IconShoppingCart from './assets/icon-shopping-cart.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className='content--left'>
                <Link href={'/'} className='logo'>Shopping</Link>
            </div>
            <div className='content--right'>
                <Link href={'/shoppingCart'} className='logo'>
                    <Image className='image-button' src={IconShoppingCart} alt='shopping cart icon' width={24} height={24} />
                </Link>
                <p className='user-name'>Kedron</p>
            </div>
        </header>
    )
} 