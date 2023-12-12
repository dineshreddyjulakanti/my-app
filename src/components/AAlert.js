import React from 'react'

export default function AAlert(props) {
  
  return (
   props.Alert &&<div className={`alert alert-${props.Alert.type}warning alert-dismissible fade show`} role="alert">
    <strong>{props.Alert.type}</strong>{props.Alert.mess}
</div>
  )
}