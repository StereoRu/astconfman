#!/usr/bin/env python2.7

import urllib
from flask import Flask, url_for
from flask.ext.babelex import gettext
from flask.ext.migrate import MigrateCommand
from flask.ext.security import utils
from flask.ext.script import Manager
from app import app, db, migrate, user_datastore
from models import Contact, Conference, Participant
from models import ParticipantProfile, ConferenceProfile

manager = Manager(app)
manager.add_command('db', MigrateCommand)


@manager.command
def create_schema():
    db.create_all()


@manager.command
def create_admin_admin():
    user_datastore.create_role(name='admin', description='System administrator')
    user_datastore.create_role(name='user', description='Conference user')
    admin = user_datastore.create_user(username='admin',
                                email='admin@admin.ru',
                                password=utils.encrypt_password('admin'))
    user_datastore.add_role_to_user(admin, 'admin')
    db.session.commit()


@manager.command
def init():
    db.drop_all()
    db.create_all()

    # Create roles
    user_datastore.create_role(name='admin', description='System administrator')
    user_datastore.create_role(name='user', description='Conference user')
    admin = user_datastore.create_user(username='admin',
                                email='admin@admin.ru',
                                password=utils.encrypt_password('admin'))
    user = user_datastore.create_user(username='user',
                                email='user@user.ru',
                                password=utils.encrypt_password('user'))
    user_datastore.add_role_to_user(admin, 'admin')
    user_datastore.add_role_to_user(user, 'user')

    contacts = [
        ('3001', u'linphone', 'user1@mail.ru'),
        ('3011', u'xiaomi', 'user2@mail.ru'),
    ]
    for c in contacts:
        rec = Contact(phone=c[0], name=c[1], user=admin, email=c[2])
        db.session.add(rec)

    guest_user_profile = ParticipantProfile(name=gettext('Guest'), startmuted=True)
    db.session.add(guest_user_profile)
    marked_user_profile = ParticipantProfile(name=gettext('Marker'),marked=True)
    db.session.add(marked_user_profile)
    admin_user_profile = ParticipantProfile(name=gettext('Administrator'), admin=True)
    db.session.add(admin_user_profile)

    conf_profile = ConferenceProfile(name=gettext('Default'))
    db.session.add(conf_profile)

    conf = Conference(number=100,
                      name=gettext('Test Conference'),
                      conference_profile=conf_profile,
                      public_participant_profile=guest_user_profile,
                      is_public=True,
                      user=admin,
                      )
    db.session.add(conf)

    p1 = Participant(conference=conf, profile=admin_user_profile, phone='3001',
                     user=admin)
    p2 = Participant(conference=conf, profile=guest_user_profile, phone='3011',
                     user=admin)
    db.session.add(p1)
    db.session.add(p2)

    db.session.commit()

@manager.command
def list_routes():
    output = []
    for rule in app.url_map.iter_rules():

        methods = ','.join(rule.methods)
        line = urllib.unquote("{:40s} {:30s} {}".format(rule.endpoint, methods, rule))
        output.append(line)

    for line in sorted(output):
        print line

@manager.command
def start_conf(conf_num):
    conf = Conference.query.filter_by(number=conf_num).first()
    if conf:
        conf.invite_participants()


if __name__ == '__main__':
    manager.run()
