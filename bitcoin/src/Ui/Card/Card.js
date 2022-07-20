import React from 'react'

export const Card = (props) => {
  return (
    <div className={props.className}>{props.children}</div>
  )
}
