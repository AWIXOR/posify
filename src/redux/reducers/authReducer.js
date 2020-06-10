import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const authReducer = (state = initialState.auth, { type, payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.AUTH_END:
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case actions.AUTH_FAIL:
      return produce(state, (draft) => {
        draft.error = payload;
      });
    case actions.AUTH_SUCCESS:
      return produce(state, (draft) => {
        draft.error = false;
      });
    case actions.CLEAN_UP:
      return produce(state, (draft) => {
        draft.error = false;
        draft.loading = false;
      });
    default:
      return state;
  }
};
export default authReducer;