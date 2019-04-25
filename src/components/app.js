import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

import CustomModal from './modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default class App extends Component {
  state = {
    modalIsOpen: false
  }

  render() {
    return (
      <div>
        <SearchBar propClick={this.openModal} />
        <WeatherList />
        <CustomModal
          content={this._content}
          style={customStyles}
          isOpen={this.state.modalIsOpen}
          isClose={this.closeModal}
        />
      </div>
    )
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00'
  // }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  _content = () => {
    return (
      <div>
        <h3>HELP</h3>
        <p>검색을 원하는 도시이름을 영문으로 적어주세요</p>
      </div>
    )
  }
}
