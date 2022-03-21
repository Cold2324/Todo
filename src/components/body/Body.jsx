import React from 'react'
import '../../sass/body/body.scss'
function Body(props) {

  return (
    <section>
      {props.children}
    </section>
  )
}

export default Body