// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onCount = () => {
    const randomNomber = Math.ceil(Math.random(1, 100) * 100)
    this.setState(prevState => ({count: prevState.count + randomNomber}))
  }

  render() {
    const {count} = this.state

    let text

    if (count % 2 === 0) {
      text = 'Count is Even'
    } else {
      text = 'Count is Odd'
    }

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">{text}</p>
          <div>
            <button onClick={this.onCount} className="btn-style" type="button">
              Increment
            </button>
          </div>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
