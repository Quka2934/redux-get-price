import { takeLatest, call, put } from "redux-saga/effects";
let url = `https://openservice.ctrip.com/openservice/serviceproxy.ashx?aid=310725&sid=789742&token=a6970ab2e1dd4901af13d992f3d97f2c4ba70b6ec5ada23d7372ecf7eec57727&e=r6&icode=5fd08a3e30c14fd49c5f4b11a6094b83&uuid=1a49d15sde2s1fa8c`;

// watcher saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// worker saga
function* workerSaga() {
  try {
    const response = yield call(fetch_price);
    const data = response.json();
    yield put({ type: "API_CALL_SUCCESS", data });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// fetch API function
function fetch_price(e) {
  fetch(url, {
    method: "POST",
    body: bodyData
  });
}

let bodyData = JSON.stringify({
  CheckInTime: `2018-07-12T00:00:00`,
  CheckOuttime: `2018-07-13T00:00:00`,
  HotelIDs: `[345001]`,
  Language: "en_US",
  Currency: `USD`,
  QueryType: "SP",
  Adults: 2,
  Device: "Desktop",
  AllianceID: 310725,
  SID: 789742,
  QueryKey: ""
});
// .then(data => data.json())
//     .then(json => {
//       let rooms = json.DataResponse.Hotel[0].SubRoom;
//       rooms.map(room => {
//         document.getElementById(
//           "output"
//         ).innerHTML += `<div class="teal white-text">
//       <ul>
//       <li>Room Name:  ${room.RoomInfo.RoomName}</li>
//       <li>Days stay: ${room.RoomRates.DayCount}</li>
//       <li>Price: ${room.RoomRates.Price} ${this.state.currency}/day</li>
//       <li>Total Cost: ${room.RoomRates.TotalPrice} ${this.state.currency}</li>
//       </ul></div>`;
//       });
//     });
