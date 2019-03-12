import React, { useState, useEffect } from 'react'

const useLazyLoader = (items = [], { batchSize = 1 } = {}) => {

    // Load initial batch so it will be rendered immediately
    const [loadedItems, setLoadedItems] = useState(() => items.slice(0, batchSize))

    const loadNextBatch = prevItems => items.slice(0, prevItems.length + batchSize)

    // Load more items asynchonously
    useEffect(() => {
        setLoadedItems(loadNextBatch)
    }, [loadedItems.length, items])

    // Return only the items which have been loaded
    return loadedItems
}

const LazyBatchLoader = ({ batchSize = 1, propName = 'items' } = {}) => (
    InnerComponent => (
        ({ [propName]: items = [], ...rest }) => {

            const loadedItems = useLazyLoader(items, { batchSize })

            // Return the inner component with the items which have been loaded only
            return <InnerComponent { ...rest } { ...{ [propName]: loadedItems } } />
        }
    )
)

export { LazyBatchLoader as default, useLazyLoader }
