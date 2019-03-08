import React, { useState, useEffect } from 'react'

const LazyBatchLoader = ({ batchSize = 1, interval = 0 }) => (
    InnerComponent => (
        ({ items = [], ...rest }) => {
            // Load initial batch so it will be rendered immediately
            const [loadedItems, setLoadedItems] = useState(items.slice(0, batchSize))

            const loadMore = prevItems => items.slice(0, prevItems.length + batchSize)
            // Load more items asynchonously
            useEffect(() => {
                // Stop updating when all items are loaded
                if (loadedItems.length < items.length) {
                    // setTimeout is used to allow specifying custom interval - useEffect is already async 
                    setTimeout(() => setLoadedItems(loadMore), interval)
                }
            })
            // Return the inner component with the items which have been loaded only
            return <InnerComponent { ...rest } items={ loadedItems } />
        }
    )
)

export default LazyBatchLoader
