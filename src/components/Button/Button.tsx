import React, { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'
import styles from './Button.module.css'

const Button: React.FC<
    PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    )
}

export default Button
