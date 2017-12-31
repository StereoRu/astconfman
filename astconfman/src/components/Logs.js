import React, { PropTypes } from 'react'

export default class Logs extends React.Component {
    constructor(props) {
      super(props);
      this.sendClearLogRequest = this.sendClearLogRequest.bind(this)

      this.style_td_logs = {
        whiteSpace: 'nowrap',
        padding: '0px 3px 0px 3px'
      };
      this.style_tr_logs = {
        padding: 0
      };
      this.style_table_logs = {
        width: 500,
        height: 500
      };

    }

  componentDidMount() {
//    const logActions = this.props.logActions
//    this.props.eventListener.addEventListener('addLog', function(e) {
//      console.log( 'SSE. Receive event addLog ', e );
//      logActions.addLog(JSON.parse(e.data))
//    });
  }

  is_disabled() {
    if (this.props.current_participant.profile != 'administrator') {
      return 'disabled'
    } else {
      return ''
    } 
  }

  get_logs() { 
    return this.props.logs.map( (item, index) => {
        return (
          <tr key={index} style={this.style_tr_logs}>
            <td style={this.style_td_logs}>{ item.date }</td>
            <td style={this.style_td_logs}>  { item.message }</td>
          </tr>
        );
      }
    );
  }

  sendClearLogRequest() {
    if (this.props.current_participant.profile === 'administrator') {
      this.props.flashActions.updateFlash({severity: 'info', text: 'Вы отправили запрос на очистку лога конференции'})
      this.props.logActions.sendApiRequest({url: this.props.urls.clearLogUrl})
    }
  }

  render() {
    return (
        <div className='row'>
          <h3> {this.props.labels.conferenceLogLabel} <small><button className={'btn btn-info btn-xs ' + this.is_disabled()} onClick={this.sendClearLogRequest}>{this.props.labels.clearLogLabel}</button></small></h3>
          <div className='table-responsive' style={this.style_table_logs}>
              <small><table id='logsTable' className='table'>
              <tbody>
                {this.get_logs()}
              </tbody>
              </table></small>
          </div>
        </div>
      );
  }
}

Logs.propTypes = {
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    })
  )
};

