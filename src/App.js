import React, { Component } from 'react'
import styled from 'styled-components'
import CropperWrapper from './CropperWrapper'

class App extends Component {
  state={
    viewMode: 2,
    scale: 1
  }

  handleChange = event => {
    this.setState({viewMode: Number(event.target.value)})
  }

  render() {
    const {className} = this.props

    return (
      <div className={className}>
        <select onChange={this.handleChange} style={{margin: '0 auto'}} value={this.state.viewMode}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <CropperWrapper viewMode={this.state.viewMode} scale={this.state.scale}/>

        <input
          type="range"
          min="1"
          max="4"
          step=".05"
          value={this.state.scale}
          onChange={e => {
            const { value } = e.currentTarget
            const scale = Number(value)
            this.setState({ scale })
          }}
        />
      </div>
    )
  }
}

export default styled(App)`
margin: 0px auto;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
