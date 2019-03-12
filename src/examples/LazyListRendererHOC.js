import React from 'react'

import { LazyBatchLoader } from '../lib'

const ListRenderer = ({ items }) => (
    <>
        { `# of loaded items: ${ items.length }` }
        <ol>
            { items.map((item, idx) => <li key={idx}>item #{item}</li>) }
        </ol>
    </>
)

export default LazyBatchLoader({ batchSize: 5 })(ListRenderer)
