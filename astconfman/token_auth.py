from flask import request, g
from models import Conference, Participant

def participant_is_autentificated():
    if hasattr(g, 'current_participant'):
        return True
    else:
        return False

def login_participant(func):
    def wrapper(view_obj):
        token = request.args.get('token', '0')
        conf_id = request.args.get('id', 0)

        participant = Participant.query.filter_by(conference_id=conf_id, token=token).first()

        if participant is not None:
            g.current_participant_profile = participant.profile.name.lower()
            g.current_participant = {
                'id': participant.id,
                'phone': participant.phone,
                'name': participant.name,
                'email': participant.email,
                'token': participant.token,
                'conference_id': participant.conference_id,
                'profile_id': participant.profile_id
                }

        return func(view_obj)

    return wrapper
