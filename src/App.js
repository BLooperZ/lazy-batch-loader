import React from 'react'
import './App.css'

import LazyBatchLoader from './components/LazyBatchLoader'

const ListRenderer = ({ items }) => (
    <>
        { items.map((item, idx) => <p key={idx}>{item}</p>) }
    </>
)

const LazyListRenderer = LazyBatchLoader({ batchSize: 15, interval: 1000 })(ListRenderer)

const App = () => (
    <div className="App">
        <LazyListRenderer items={ Array.from({ length: 1000 }, (x, idx) => idx) } />
    </div>
)

export default App
