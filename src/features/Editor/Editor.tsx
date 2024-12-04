import React from 'react'
import Button from '../../components/Button/Button'
import { setThemeStyle } from '../../lib/theme'
import styles from './Editor.module.css'

const Editor: React.FC = () => {
    return (
        <div className={styles.editor}>
            <h3>Editor</h3>

            <Button
                onClick={() => {
                    setThemeStyle('color-primary', '#ff69b4')
                }}
            >
                Light
            </Button>
            <Button
                onClick={() => {
                    // let's make this dark
                }}
            >
                Dark
            </Button>
        </div>
    )
}

export default Editor
