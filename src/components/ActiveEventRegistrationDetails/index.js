// Write your code here
import './index.css'

const eventStatusObj = {
  intial: 'Initial',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const initialSection = () => (
    <div className="initialEventContainer">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const yetToRegister = () => (
    <div className="yetToRegisterEventContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const registered = () => (
    <div className="registeredEventContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="registrationClosedEventContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const eventStatusChecker = () => {
    switch (eventStatus) {
      case eventStatusObj.intial:
        return initialSection()
      case eventStatusObj.yetToRegister:
        return yetToRegister()
      case eventStatusObj.registered:
        return registered()
      case eventStatusObj.registrationClosed:
        return registrationClosed()
      default:
        return null
    }
  }
  return <div className="eventHandler">{eventStatusChecker()}</div>
}

export default ActiveEventRegistrationDetails
