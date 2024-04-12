import { useState } from 'react';
import styles from './Counter.module.scss';

type Props = {
    maxAmount: number;
    onChanged?: (count: number) => void;
}

export default function Counter({
    maxAmount,
    onChanged,
}: Props) {
    const [count, setCount] = useState(1);

    const handleSubtract = () => {
        if (count === 1) {
            return;
        }

        const newCount = count - 1;

        setCount(newCount);
        onChanged?.(newCount);
    }

    const handleAdd = () => {
        if (count === maxAmount) {
            return;
        }

        const newCount = count + 1;

        setCount(newCount);
        onChanged?.(newCount);
    }

    return (
        <div className={styles.counter}>
            <button onClick={handleSubtract}>-</button>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}