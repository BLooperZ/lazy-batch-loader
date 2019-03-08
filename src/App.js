import React from 'react'

import LazyBatchLoader from './components/LazyBatchLoader'

const ListRenderer = ({ items }) => (
    <ol>
        { items.map((item, idx) => <li key={idx}>item #{item}</li>) }
    </ol>
)

const LazyListRenderer = LazyBatchLoader({ batchSize: 20, interval: 1000 })(ListRenderer)

const App = () => (
    <div className="App">
        <LazyListRenderer items={ Array.from({ length: 1000 }, (x, idx) => idx) } />
    </div>
)

export default App
