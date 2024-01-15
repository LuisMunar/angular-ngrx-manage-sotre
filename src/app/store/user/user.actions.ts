import { createAction, props } from '@ngrx/store'

import { UserInterface } from './user.interface'

export const updateUser = createAction(
  '[User] Update User',
  props<{ userData: UserInterface }>()
)
