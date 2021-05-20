import React from 'react'

 const AlertDismissable = ({ condition, message, alertColor }) => {

  const resetAlert = () => {
    condition = !condition;
  }
  return (
    <div
      className={`alert ${condition === 200 ? "alert-danger" : "alert-info"} alert-dismissible fade ${!condition ? "d-none" : "show"} mt-3`} 
      role="alert">
      {message}
      <button 
        type="button" 
        className="btn-close" 
        data-bs-dismiss="alert" 
        aria-label="Close"
        onClick={resetAlert}
      ></button>
    </div>
  )
}


export default AlertDismissable;