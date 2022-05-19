import { call, takeEvery, put } from 'redux-saga/effects'
import { getPostSuccess } from './features/profileDetails/profileSlice';


function* fetchPosts(){
    const posts = yield call(()=> fetch('https://dummyjson.com/products'))
    const formattedPosts = yield posts.json()
    yield put(getPostSuccess(formattedPosts))

}

function* postSaga(){
    yield takeEvery('profileDetails/getPostFetch',fetchPosts)
}

export default postSaga