import { connect } from 'react-redux'

export const ColorShow = ({ match }) => {
  const { id } = match.params
  return (
    <div>
      <h2>here comes your component man!</h2>
      <p>{ id }</p>
    </div>
  )
}

export default connect(null, null)(ColorShow)