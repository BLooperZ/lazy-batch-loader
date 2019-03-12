import React from 'react'

import { useLazyLoader } from '../lib'

const LazyListRendererHook = ({ items }) => {
    const [loadedItems,] = useLazyLoader(items, { batchSize: 5})

    return (
        <>
            { `# of loaded items: ${ loadedItems.length }` }
            <ol>
                { loadedItems.map((item, idx) => <li key={idx}>item #{item}</li>) }
            </ol>
        </>
    )
}

export default LazyListRendererHook
