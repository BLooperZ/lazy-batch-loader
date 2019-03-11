import React, { useState } from 'react'

import { LazyBatchLoader } from '../lib'

const ListRenderer = ({ items }) => (
    <>
        { `# of loaded items: ${ items.length }` }
        <ol>
            { items.map((item, idx) => <li key={idx}>item #{item}</li>) }
        </ol>
    </>
)

const LazyListRenderer = LazyBatchLoader({ batchSize: 5 })(ListRenderer)

const addMoreItems = items => items.concat(Array.from({ length: 100 }, (x, idx) => items.length + idx + 1))
const mapItems = items => items.map(item => item + 1)
const both = items => addMoreItems(mapItems(items))
const emptyList = items => []

const App = () => {
    const [items, setItems] = useState(Array.from({ length: 100 }, (x, idx) => idx + 1))
    return (
        <div className="App">
            <button onClick={ () => setItems(both) }>
                More Items
            </button>
            <button onClick={ () => setItems(emptyList) }>
                Clear Items
            </button>
            <p>{ `# of items total: ${ items.length }` }</p>
            <LazyListRenderer items={ items } />
        </div>
    )
}

export default App
