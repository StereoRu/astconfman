
    <div class="col-md-8">
        <div class="row">
            <div id="root" class="container">


=====================
Conference

                <div class="btn-group">
                    <button class="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {{_('Manage Conference')}} {{ model }}
                        <span class="caret"></span>
                    {% if confbridge.locked %}  <span class='glyphicon glyphicon-lock'></span> {% endif %} </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                        <li><a href="{{ url_for('.invite_participants', conf_id=model.id) }}"><span class='glyphicon glyphicon-phone-alt'></span> {{ _('Invite All Participants') }}</a></li>                                        
                        <li>
                            <form class="form" action="{{ url_for('.invite_guest', conf_id=model.id) }}" method="GET">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="phone" name="phone" placeholder="{{ _('Phone number') }}">
                                </div>
                                <div class="input-group-addon">
                                <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-phone-alt"></span> {{ _('Invite') }}</button>
                                </div>
                            </form>
                        </li>                        
                        <li><a href="{{ url_for('.mute', conf_id=model.id) }}"><span class="glyphicon glyphicon-volume-off"></span> {{ _('Mute All') }}</a></li>
                        <li><a href="{{ url_for('.unmute', conf_id=model.id) }}"><span class="glyphicon glyphicon-volume-up"></span> {{ _('Unmute All') }}</a></li>
                        <li><a href="{{ url_for('.record_start', conf_id=model.id) }}"><span class="glyphicon glyphicon-record"></span> {{ _('Start Recording') }}</a></li>
                        <li><a href="{{ url_for('.record_stop', conf_id=model.id) }}"><span class="glyphicon glyphicon-stop"></span> {{ _('Stop Recording') }}</a></li>
                        {% if confbridge.locked %}
                            <li><a href="{{ url_for('.unlock', conf_id=model.id) }}"><span class='glyphicon glyphicon-lock'></span> {{ _('Unlock') }}</a></li>
                        {% else %}
                            <li><a href="{{ url_for('.lock', conf_id=model.id) }}"><span class='glyphicon glyphicon-lock'></span> {{ _('Lock') }}</a></li>
                        {% endif %}
                        <li><a href="{{ url_for('.kick', conf_id=model.id) }}"><span class='glyphicon glyphicon-off'></span> {{ _('Kick All') }}</a></li>
                    </ul>
                </div>                

=====================

            </div>            

        </div>
        <br/>

        <div id="online_participants" class="row">
=====================
Participants
=====================
        </div>

    </div>

    <div class="col-md-4">
=====================
ConferenceLog

        <h3> {{_('Conference Log')}} <small><button><a href="{{url_for('.clear_log', conf_id=model.id)}}">{{ _('Clear Log') }}</a></button></small></h3>
        <div class='table-responsive'>
            <small><table id="logsTable" class="table">
                {% for log in model.logs | sort(attribute='added', reverse=True) %}
                  <script>
                  
                  </script>
                  <tr style="padding:0;">
                    <td style="white-space:nowrap; padding:0;">{% if log.added %}{{log.added.strftime('%Y-%m-%d %H:%M:%S')}}{% else %} {% endif %}</td>
                    <td style="white-space:nowrap; padding:0;">{{ log.message }}</td>
                  </tr>
                {% endfor %} 
            </table></small>
        </div>

=====================
    </div>


