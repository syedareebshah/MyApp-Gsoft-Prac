import { call, takeEvery, put } from 'redux-saga/effects'
import { getPostSuccess } from '../../../features/profileDetails/profileSlice';


function* fetchPosts() {
    const posts: { loginDetails: {}, posts: [], isLoading: boolean, json: any } = yield call(() => fetch('https://dummyjson.com/products'))
    const formattedPosts: { loginDetails: {}, posts: [], isLoading: boolean, json: any } = yield posts.json()
    // console.log(formattedPosts?.products,"=>");
    yield put(getPostSuccess(formattedPosts))

}

function* postSaga() {
    yield takeEvery('profileDetails/getPostFetch', fetchPosts)
}

export default postSaga