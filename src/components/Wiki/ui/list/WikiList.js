import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ListItem from './ListItem.js'
import { getAllWikis } from '../../../../redux/actions/wikis.js'

import '../../stylesheets/WikiList.scss'

const propTypes = {
  wikis: PropTypes.array,
  getWikis: PropTypes.func
}

const defaultProps = {
  wikis: [],
  getWikis: f => f
}

const mapStateToProps = state =>
  ({
    wikis: state.wikis
  })

const mapDispatchToProps = dispatch =>
  ({
    getWikis () {
      dispatch(getAllWikis())
    }
  })

class  WikiList extends React.Component {

  componentWillMount () {
    const { getWikis } = this.props
    getWikis()
  }

  render () {
    const { wikis } = this.props
    return wikis.length <= 0 ?
      <p><Link to="/wiki/new">Create new</Link></p> :
      <div className="WikiList">
        <p><Link to="/wiki/new">Create new</Link></p>
        { wikis.map((wiki, i) => {
          return <ListItem key={i} wiki={wiki} />
        })}
      </div>
  }
}

WikiList.propTypes = propTypes
WikiList.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(WikiList)
