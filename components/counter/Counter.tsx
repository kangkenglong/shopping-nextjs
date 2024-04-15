import { useState } from 'react';
import styles from './Counter.module.scss';

type Props = {
    maxAmount: number;
    defaultValue?: number;
    onChanged?: (count: number) => void;
    onSubtractLastOne?: () => void;
}

export default function Counter({
    maxAmount,
    defaultValue = 1,
    onSubtractLastOne,
    onChanged,
}: Props) {
    const [count, setCount] = useState(defaultValue);

    const handleSubtract = () => {
        if (count === 1) {
            onSubtractLastOne?.();
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