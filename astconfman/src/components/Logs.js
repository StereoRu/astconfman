import React, { PropTypes } from 'react'

export default class Logs extends React.Component {
    constructor(props) {
      super(props);
//      console.log('props.Logs=', this.props)

      this.style_td_logs = {
        whiteSpace: 'nowrap',
        padding: '0px 3px 0px 3px'
      };
      this.style_tr_logs = {
        padding: 0
      };
    }

  componentDidMount() {
//    const logActions = this.props.logActions
//    this.props.eventListener.addEventListener('addLog', function(e) {
//      console.log( 'SSE. Receive event addLog ', e );
//      logActions.addLog(JSON.parse(e.data))
//    });
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

  render() {
    return (
        <div className='row'>
          <h3> {this.props.labels.conferenceLogLabel} <small><a className='btn btn-info btn-xs' href='{this.props.url.clearLogUrl}'>{this.props.labels.clearLogLabel}</a></small></h3>
          <div className='table-responsive'>
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

