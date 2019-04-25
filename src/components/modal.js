import React from 'react'
import Modal from 'react-modal'

const map = document.querySelector('.container')

Modal.setAppElement(map)

const CustomModal = props => {
  const { isOpen, isClose, style, content } = props

  const _handleClick = () => {
    isClose()
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={_handleClick}
        style={style}
        contentLabel="Example Modal"
      >
        {content()}
        <button type="button" className="btn btn-primary" onClick={_handleClick}>
          close
        </button>
      </Modal>
    </div>
  )
}

export default CustomModal
