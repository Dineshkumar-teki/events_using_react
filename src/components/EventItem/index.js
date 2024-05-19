// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  onClickEventItem = () => {
    const {eachEventObj, getEventId} = this.props
    const {id} = eachEventObj
    getEventId(id)
  }

  render() {
    const {eachEventObj, activeClass} = this.props
    const {imageUrl, name, location} = eachEventObj
    const outlineClassName = activeClass ? 'applyOutline' : ''
    return (
      <li className="eventItem">
        <button
          type="button"
          className={outlineClassName}
          onClick={this.onClickEventItem}
        >
          <img src={imageUrl} alt="event" className="eventImg" />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    )
  }
}

export default EventItem
