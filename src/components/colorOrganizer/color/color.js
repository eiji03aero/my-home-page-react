import { StarRating } from './StarRating.js'

import './color.scss'

export const Color = ({ colorInfo, starLimit, onRate, onRemove }) => {
  const { color, id, starSelected, title } = colorInfo

  return (
    <div className="color-container">
      <div className="color-header">
        <p className="_fs-36">{ title }</p>
        <button className="remove-color"
          onClick={() => onRemove(id)} >X</button>
      </div>
      <div className="color-display" style={ color } />
      <div className="color-description">
        <StarRating id={id}
          starLimit={starLimit}
          starSelected={starSelected}
          onRate={(num, id) => onRate(num, id)} />
      </div>
    </div>
  )
}

Color.propTypes = {
  colorInfo: PropTypes.object.isRequired,
  starLimit: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
