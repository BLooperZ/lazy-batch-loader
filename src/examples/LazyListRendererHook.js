import React from 'react'

import { useLazyLoader } from '../lib'

import SimpleListRenderer from './SimpleListRenderer' 

const LazyListRendererHook = ({ items }) => {
    const loadedItems = useLazyLoader(items, { batchSize: 5})
    return <SimpleListRenderer items={ loadedItems } />
}

export default LazyListRendererHook
