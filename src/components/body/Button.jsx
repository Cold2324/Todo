import './button.scss'

function Button({ openModal, setOpenModal }) {
  const toggle = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="button--container">
      <button onClick={toggle}>+</button>
    </div>
  )
}

export default Button
