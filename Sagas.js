import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { take } from 'redux-saga/effects'
import { select } from 'redux-saga/effects'
import api from "./Api"

export function* helloSaga() {
  console.log('Hello Saga! I am a saga')
}


export function* watchFirstThreeAsync() {
  for (let i = 0; i < 3; i++) {
    console.log("watchFirstThreeAsync", i)
    const action = yield take('INCREMENT_ASYNC')
  }
  console.log("putting another INCREMENT");
  yield put({type: 'INCREMENT'})
}

export function* watchAndLog() {
  //while (true) {
    const action = yield take('*')
    const state = yield select()
    console.log("Haha I am watchAndLog")
    console.log('action', action)
    console.log('state after', state)
  //}
}

export function* incrementAsync(duration) {
  duration = duration.payload || 1
  console.log('duration', duration);

  yield call(delay, 1000 * duration)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    console.log("i am watching watchIncrementAsync")
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchCourseList()
{
    console.log('fetchCourseList');
    const url = "http://vlms.dev/course/api/categories?slug=xpeak&page=1&items_per_page=2&_v=2&_sand_app_id=boca_juniors&_sand_app_name=xpeak&_sand_platform=1&_sand_ts=1480736604&_sand_device_id=dummy"
    const data = yield call(api.fetch, url)
    //TODO: dispatch the counter
    console.log(data);
}

export function* watchFetch(){
    console.log('watchFetch');
    yield takeEvery('FETCH_COURSE_LIST', fetchCourseList)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    watchAndLog(),
    watchFirstThreeAsync(),
    watchFetch()
  ]
}
