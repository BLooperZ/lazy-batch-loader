import React, { useState, useEffect } from 'react'

const LazyBatchLoader = ({ batchSize = 1, propName = 'items' }) => (
    InnerComponent => (
        ({ [propName]: items = [], manualRefresh = false, ...rest }) => {
            // Load initial batch so it will be rendered immediately
            const [loadedItems, setLoadedItems] = useState(() => items.slice(0, batchSize))

            const loadMoreItems = prevItems => items.slice(0, prevItems.length + batchSize)

            // Load more items asynchonously
            useEffect(() => {
                setLoadedItems(loadMoreItems)
            }, [loadedItems.length, items])

            // Return the inner component with the items which have been loaded only
            return <InnerComponent { ...rest } { ...{ [propName]: loadedItems } } />
        }
    )
)

export default LazyBatchLoader
