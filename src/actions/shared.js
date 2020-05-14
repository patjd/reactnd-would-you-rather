import { _getUsers } from '../utils/_DATA'
import { getUsers } from './login'

export function handleInitialData () {
  return (dispatch) => {
    return _getUsers().then((users) => dispatch(getUsers(users)))
  }
} 