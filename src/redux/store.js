import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga'
import { fetchCollectionsStart } from './shop/shop.saga.js'


const sagaMiddleware = createSagaMiddleware();



const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV == 'development') {
    middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares))


sagaMiddleware.run(fetchCollectionsStart)


export const persistor = persistStore(store);

export default { store, persistor };
