import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store'

import { updateUser } from './user.actions'
import * as fromUser from './user.reducer'

export interface UserState {
  data: any
}

export const initialState: UserState = {
  data: null,
}

export const userReducer = createReducer(
  initialState,

  on(updateUser, (state, { userData }) => {
    return {
      ...state,
      data: userData
    }
  })
)

export const selectUserState = createFeatureSelector<fromUser.UserState>('user')

// Create a selector to get the user data
export const selectUserData = createSelector(
  selectUserState,
  (state) => state.data
)
