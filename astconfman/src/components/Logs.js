import React, { PropTypes } from 'react'

const Logs = (props) => {

    const style_td_logs = {
      whiteSpace: 'nowrap',
      padding: 0
    };
    const style_tr_logs = {
      padding: 0
    };

    let get_logs = props.logs.map( (item, index) => {
        return (
          <tr key={index} style={style_tr_logs}>
            <td style={style_td_logs}>{ item.data }</td>
            <td style={style_td_logs}>{ item.message }</td>
          </tr>
        );
      }
    );

    return (
        <div className='row'>
          <h3> {props.labels.conferenceLogLabel} <small><button><a href='{props.url.clearLogUrl}'>{props.labels.clearLogLabel}</a></button></small></h3>
          <div className='table-responsive'>
              <small><table id='logsTable' className='table'>
              <tbody>
                {get_logs}
              </tbody>
              </table></small>
          </div>
        </div>
      );
};

Logs.propTypes = {
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    })
  )
};

export default Logs;
