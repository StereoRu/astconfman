import React, { PropTypes } from 'react'

const Flash = (props) => {

//    console.log('props.flash=', props.flash)

    let getClass = () => {
      if (props.flash.severity == 'info') {
        return 'info'
      } else if (props.flash.severity == 'warning') {
        return 'warning';
      } else if (props.flash.severity == 'danger') {
        return 'danger';
      }
    };

    let getTextTitle = () => {
      if (props.flash.severity == 'info') {
        return ( <strong>Информация!</strong> )
      } else if (props.flash.severity == 'warning') {
        return ( <strong>Внимание!</strong> )
      } else if (props.flash.severity == 'danger') {
        return ( <strong>Ошибка!</strong> )
      }
    };

    if (props.flash.severity == 'empty') {
      return ( <div> </div>);
    }

    let closeFlash = () => {
      props.flashActions.updateFlash({severity: 'empty', text: ''})
    }

    return (
      <div className='col-md-12'>
        <div className='row'>
          <div className={ 'alert alert-' + getClass()}>
            <a href='#' className='close' onClick={closeFlash}>&times;</a>
            {getTextTitle()} {props.flash.text}
          </div>
        </div>
      </div>
      )
};

Flash.propTypes = {
  flash: PropTypes.shape({
    severity: PropTypes.oneOf(['info', 'warning', 'danger', 'empty']),
    text: PropTypes.string.isRequired
  })
};

export default Flash;
