import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'
import styled from 'styled-components'

// const StyledForm = styled.form`
//   display: inline;
// `

const StyledButton = styled.button`
  margin-right: 10px;
  float: left;
`

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

    this._onInputChange = this._onInputChange.bind(this)
    this._onFormSubmit = this._onFormSubmit.bind(this)
    this._handleClick = this._handleClick.bind(this)
  }

  render() {
    return (
      <div>
        <StyledButton className="btn btn-danger" onClick={this._handleClick} >HELP</StyledButton>
        <form className="input-group" onSubmit={this._onFormSubmit}>
          <input
            placeholder="검색"
            className="form-control"
            value={this.state.term}
            onChange={this._onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    )
  }
  _handleClick() {
    this.props.propClick()
  }

  _onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }
  _onFormSubmit(e) {
    e.preventDefault()

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
