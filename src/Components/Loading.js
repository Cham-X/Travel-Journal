import React from 'react'
import Style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={Style.loading}>
      <div>
        <h1>Loading</h1>
      </div>
      <div className={Style.loader}>
        <span className={Style.loaderElement}></span>
        <span className={Style.loaderElement}></span>
        <span className={Style.loaderElement}></span>
      </div>
    </div>
  )
}

export default Loading
