import { combineReducers } from 'redux'

import { loadingBarReducer } from 'react-redux-loading'

import authedUser from './authedUser'
import users from '../reducers/users'
import tweets from '../reducers/tweets'

export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer,
})