import { combineReducers } from 'redux'
import app from '../reducers/app.js'
import colors from '../reducers/colors.js'
import wikis from '../reducers/wikis.js'
import widgets from '../reducers/widgets.js'
import welcomePage from '../reducers/welcomePage.js'

export default combineReducers({
  app,
  colors,
  wikis,
  widgets,
  welcomePage
})
