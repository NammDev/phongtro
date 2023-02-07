import rootReducer from './reducer/rootReducer'
import { persistStore } from 'redux-persist'
import { createStore } from 'redux'

export const store = createStore(rootReducer)
export const persistor = persistStore(store)

export default { store, persistor }
