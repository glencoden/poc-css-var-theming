import React from 'react'
import Button from '../../components/Button/Button'
import styles from './Preview.module.css'

const Preview: React.FC = () => {
    return (
        <div className={styles.preview}>
            <h3>Preview</h3>
            <Button>Click me</Button>
        </div>
    )
}

export default Preview
