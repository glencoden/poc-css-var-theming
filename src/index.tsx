import React from 'react'
import { createRoot } from 'react-dom/client'
import Editor from './features/Editor/Editor'
import Preview from './features/Preview/Preview'
import './index.css'

const rootElement = document.getElementById('root')

if (rootElement === null) {
    throw new Error('Root element not found')
}

const root = createRoot(rootElement)

const App: React.FC = () => (
    <div>
        <Editor />
        <Preview />
    </div>
)

root.render(<App />)
