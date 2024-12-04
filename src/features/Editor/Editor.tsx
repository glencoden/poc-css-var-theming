import React from 'react'
import Button from '../../components/Button/Button'
import styles from './Editor.module.css'

const Editor: React.FC = () => {
    return (
        <div className={styles.editor}>
            <h3>Editor</h3>

            <Button
                onClick={() => {
                    document.documentElement.style.setProperty(
                        '--color-primary',
                        '#ff69b4'
                    )
                }}
            >
                Light
            </Button>
            <Button
                onClick={() => {
                    document.documentElement.style.setProperty(
                        '--color-primary',
                        '#000066'
                    )
                }}
            >
                Dark
            </Button>
        </div>
    )
}

export default Editor
