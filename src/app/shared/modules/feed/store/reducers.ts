import { createReducer, on } from "@ngrx/store";
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "src/app/shared/modules/feed/store/actions/getFeed.action";

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: true,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })
  )
);

export function reducers(state, action) {
  return feedReducer(state, action);
}
