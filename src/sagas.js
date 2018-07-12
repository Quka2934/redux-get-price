import { takeLatest, call, put, select } from "redux-saga/effects";

// watcher saga
export default function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

const requestURL = `https://openservice.ctrip.com/openservice/serviceproxy.ashx?aid=310725&sid=789742&token=a6970ab2e1dd4901af13d992f3d97f2c4ba70b6ec5ada23d7372ecf7eec57727&e=r6&icode=5fd08a3e30c14fd49c5f4b11a6094b83&uuid=1a49d15sde2s1fa8c`;

// worker saga
function* workerSaga() {
  try {
    let bodyData = yield select();
    const hotelData = yield call(fetch_price, bodyData.data);
    yield put({ type: "API_CALL_SUCCESS", hotelData });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// fetch API function
function fetch_price(bodyData) {
  return fetch(requestURL, {
    method: "POST",
    body: bodyData
  })
  .then((response) => response.json())
  .then((responseJSON) => responseJSON);
}
