import React, { Component } from 'react'
import './App.css'

import LazyBatchLoader from './components/LazyBatchLoader'

const ListRenderer = ({ items }) => (
    <div>
        { items.map((item, idx) => <p key={idx}>{item}</p>) }
    </div>
)

const LazyListRenderer = LazyBatchLoader({ batchSize: 15, interval: 1000 })(ListRenderer)

class App extends Component {
    render() {
        return (
            <div className="App">
                <LazyListRenderer items={ Array.from({ length: 1000 }, (x, idx) => idx) } />
            </div>
        )
    }
}

export default App
