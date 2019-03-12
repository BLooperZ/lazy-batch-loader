import { LazyBatchLoader } from '../lib'

import SimpleListRenderer from './SimpleListRenderer' 

export default LazyBatchLoader({ batchSize: 5 })(SimpleListRenderer)
