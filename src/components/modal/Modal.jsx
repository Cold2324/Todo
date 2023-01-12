import ReactDom from 'react-dom'
// import '../../sass/body/createTask.scss'

function Modal({ children }) {
  return ReactDom.createPortal(
    <div className="Modal--create-task-container">{children}</div>,
    document.getElementById('modal')
  )
}

export default Modal
