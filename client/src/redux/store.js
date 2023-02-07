import rootReducer from './reducer/rootReducer'
import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

export default { store, persistor }
