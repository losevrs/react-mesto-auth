import React from 'react'

export default (props) => {

  let enabled = true;
  if (props.buttonEnabled !== undefined) {
    enabled = props.buttonEnabled;
  }

  return (
    <form className='signform'
      action='#'
      method='POST'
      name={`${props.name}`
      }
      noValidate
      onSubmit={props.onSubmit} >

      <h2 className='signform__title'>{`${props.title}`}</h2>

      { props.children}

      <button
        className={`signform__submit ${enabled ? '' : 'signform__submit_disabled'}`}
        disabled={enabled ? '' : 'disabled'}
        type='submit'>{props.buttonTitle}</button>

      <a href='#' className='signform__link' onClick={props.onRefClick}>{props.linkText}</a>

    </form >
  );
}
