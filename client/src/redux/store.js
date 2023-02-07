import rootReducer from './reducer/rootReducer'
import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export default { store, persistor }
