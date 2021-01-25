import {all, call} from 'redux-saga/effects'
import { fetchCollectionsSuccess } from './shop/shop.action'
import {fetchCollectionsStart, fetchCollectionsAsync} from './shop/shop.saga'
import {userSagas} from './user/user.sagas'

export default function* rootSaga() {

    yield all ([call(fetchCollectionsStart),call(userSagas)])
}