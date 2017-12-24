# *-* encoding: utf-8 *-*
import os
from flask.ext.babelex import lazy_gettext as _

# Default Language. Currenly only 'ru' and 'en' are supported.
LANGUAGE = 'en'

# Put here some random string
SECRET_KEY = 'change_me_here_to_random_key'

# BRAND_NAV - this defines the string on the right top navigation bar
BRAND_NAV = u'ROEK Conference Manager'
# BRAND_FOOTER - put here your company info
BRAND_FOOTER = _(u"""ROEK Ryazan | <a href="http://roek.ru/">www.roek.ru</a>""")
# BRAND_LOGO - replace logo.png or change here url to your own logo
BRAND_LOGO = 'static/asterisk_logo.png'
# URL to redirect when clicked on LOGO. Put here '#' if redirect is not required.
BRAND_LOGO_URL = 'http://'

# ASTERISK_IPADDR - IP Address of Asterisk server. All other requests will be denied.
ASTERISK_IPADDR = '10.1.1.142'
#ASTERISK_IPADDR = '192.168.1.37'

# LISTEN_URL
LISTEN_URL = '10.1.1.142'
#LISTEN_URL = '192.168.1.37'

# LISTEN_ADDRESS - Interfaces to bind to. '0.0.0.0' for all interfaces.
LISTEN_ADDRESS = '10.1.1.142'
#LISTEN_ADDRESS = '192.168.1.37'

# LISTEN_PORT - Port to listen on.
LISTEN_PORT = 5000

#SERVER_NAME = 'http://10.1.1.142:5000/'

# Always leave DEBUG=False in production. DEBUG=True is a security hole as it
# allows the execution of arbitrary Python code. Be warned!
DEBUG = True

# SQLALCHEMY_ECHO - prints SQL statements.
SQLALCHEMY_ECHO = False
SQLALCHEMY_TRACK_MODIFICATIONS = False

# See http://docs.sqlalchemy.org/en/rel_1_0/core/engines.html#database-urls
DATABASE_FILE = os.path.join(os.path.dirname(__file__), 'astconfman.db')
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + DATABASE_FILE

WTF_CSRF_ENABLED = True

SECURITY_REGISTERABLE = False
SECURITY_RECOVERABLE = False
SECURITY_SEND_PASSWORD_CHANGE_EMAIL = False
SECURITY_SEND_PASSWORD_RESET_EMAIL = False
SECURITY_SEND_PASSWORD_RESET_NOTICE_EMAIL = False
SECURITY_CONFIRM_SALT = 'Y)|%Wqh;8,B({4n5??.-evaGMWt!rA4}'
SECURITY_RESET_SALT = 'VK`5.K8pOfx?3U8\-jG7g+^PAU&DD&QX'
SECURITY_LOGIN_SALT = '1FKugL@+<%geWMq3Zvf*4q[obSI.QHFD'
SECURITY_REMEMBER_SALT = 'uUu7qAF{!EM@j[vDshWS]@H&~s}N\RL9'
SECURITY_USER_IDENTITY_ATTRIBUTES = 'email'
SECURITY_PASSWORD_HASH = 'sha512_crypt'
SECURITY_PASSWORD_SALT = '\7\PV:_6Pz@z+zT#BLn76?}Dw*s>=:S)'


# Asterisk
ASTERISK_SPOOL_DIR = '/var/spool/asterisk/outgoing/'
ASTERISK_MONITOR_DIR = '/var/spool/asterisk/monitor/'
ASTERISK_EXECUTABLE = '/usr/sbin/asterisk'
ASTERISK_SSH_ENABLED = False
ASTERISK_SSH_PORT = '22'
ASTERISK_SSH_HOST = '10.1.1.142'
#ASTERISK_SSH_HOST = '192.168.1.37'
ASTERISK_SSH_USER = 'asterisk'
ASTERISK_SSH_KEY = 'ssh-rsa AAAAB3NzaC1yc2EA...' # Put your key in instance config

# You can remove any tab by adding it here.
DISABLED_TABS = []

# Callout template.
CALLOUT_TEMPLATE = """Channel: Local/%(number)s@confman-dialout
Context: confman-bridge
Extension: %(confnum)s
Priority: 1
MaxRetries: 0
RetryTime: 15
WaitTime: 300
Set: participant_name=%(name)s
Set: participant_number=%(number)s
Set: conf_number=%(confnum)s
"""

# flask-mail
MAIL_SERVER = 'smtp.mail.ru'
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_USERNAME = 'demindima_88@mail.ru'
MAIL_PASSWORD = '$%CasablanCa4459'
MAIL_DEFAULT_SENDER = 'demindima_88@mail.ru'

# variables $name, $phone, $url
INVITE_EMAIL_TEMPLATE_SUBJECT = 'Приглашение в конференцию для $name $phone'
INVITE_EMAIL_TEMPLATE_BODY = '''
Уважаемый, $name!

Для просмотра online состояния конференции, необходимо перейти по ссылке:
$url
'''
