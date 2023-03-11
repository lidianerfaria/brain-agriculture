import { all, call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../api/api";
import { ADD } from "./actions";

function* addTodo({ title }) {
  const todoResponse = yield call(api.get);

  const data = { ...todoResponse };

  yield put(ADD(data));
}

export default all[takeLatest("@todo/ADD_TODO", addTodo)];
