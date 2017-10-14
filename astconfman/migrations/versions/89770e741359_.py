"""empty message

Revision ID: 89770e741359
Revises: 563f582d07fa
Create Date: 2017-08-19 18:12:29.928950

"""

# revision identifiers, used by Alembic.
revision = '89770e741359'
down_revision = '563f582d07fa'

from alembic import op
import sqlalchemy as sa


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('conference_profile',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Unicode(length=128), nullable=True),
    sa.Column('max_members', sa.Integer(), nullable=True),
    sa.Column('record_conference', sa.Boolean(), nullable=True),
    sa.Column('internal_sample_rate', sa.String(length=8), nullable=True),
    sa.Column('mixing_interval', sa.String(length=2), nullable=True),
    sa.Column('video_mode', sa.String(length=16), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('contact',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Unicode(length=128), nullable=True),
    sa.Column('phone', sa.String(length=32), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_contact_name'), 'contact', ['name'], unique=False)
    op.create_table('participant_profile',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Unicode(length=128), nullable=True),
    sa.Column('admin', sa.Boolean(), nullable=True),
    sa.Column('marked', sa.Boolean(), nullable=True),
    sa.Column('startmuted', sa.Boolean(), nullable=True),
    sa.Column('music_on_hold_when_empty', sa.Boolean(), nullable=True),
    sa.Column('music_on_hold_class', sa.String(length=64), nullable=True),
    sa.Column('quiet', sa.Boolean(), nullable=True),
    sa.Column('announce_user_count', sa.Boolean(), nullable=True),
    sa.Column('announce_user_count_all', sa.String(length=4), nullable=True),
    sa.Column('announce_only_user', sa.Boolean(), nullable=True),
    sa.Column('announcement', sa.String(length=128), nullable=True),
    sa.Column('wait_marked', sa.Boolean(), nullable=True),
    sa.Column('end_marked', sa.Boolean(), nullable=True),
    sa.Column('dsp_drop_silence', sa.Boolean(), nullable=True),
    sa.Column('dsp_talking_threshold', sa.Integer(), nullable=True),
    sa.Column('dsp_silence_threshold', sa.Integer(), nullable=True),
    sa.Column('talk_detection_events', sa.Boolean(), nullable=True),
    sa.Column('denoise', sa.Boolean(), nullable=True),
    sa.Column('jitterbuffer', sa.Boolean(), nullable=True),
    sa.Column('pin', sa.String(), nullable=True),
    sa.Column('announce_join_leave', sa.Boolean(), nullable=True),
    sa.Column('dtmf_passthrough', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_participant_profile_admin'), 'participant_profile', ['admin'], unique=False)
    op.create_index(op.f('ix_participant_profile_marked'), 'participant_profile', ['marked'], unique=False)
    op.create_index(op.f('ix_participant_profile_pin'), 'participant_profile', ['pin'], unique=False)
    op.create_table('conference',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('number', sa.String(length=16), nullable=True),
    sa.Column('name', sa.Unicode(length=128), nullable=True),
    sa.Column('is_public', sa.Boolean(), nullable=True),
    sa.Column('conference_profile_id', sa.Integer(), nullable=True),
    sa.Column('public_participant_profile_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['conference_profile_id'], ['conference_profile.id'], ),
    sa.ForeignKeyConstraint(['public_participant_profile_id'], ['participant_profile.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('number')
    )
    op.create_table('conference_log',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('added', sa.DateTime(), nullable=True),
    sa.Column('message', sa.Unicode(length=1024), nullable=True),
    sa.Column('conference_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['conference_id'], ['conference.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('participant',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('phone', sa.String(length=32), nullable=True),
    sa.Column('name', sa.Unicode(length=128), nullable=True),
    sa.Column('is_invited', sa.Boolean(), nullable=True),
    sa.Column('conference_id', sa.Integer(), nullable=True),
    sa.Column('profile_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['conference_id'], ['conference.id'], ),
    sa.ForeignKeyConstraint(['profile_id'], ['participant_profile.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('conference_id', 'phone', name='uniq_phone')
    )
    op.create_index(op.f('ix_participant_phone'), 'participant', ['phone'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_participant_phone'), table_name='participant')
    op.drop_table('participant')
    op.drop_table('conference_log')
    op.drop_table('conference')
    op.drop_index(op.f('ix_participant_profile_pin'), table_name='participant_profile')
    op.drop_index(op.f('ix_participant_profile_marked'), table_name='participant_profile')
    op.drop_index(op.f('ix_participant_profile_admin'), table_name='participant_profile')
    op.drop_table('participant_profile')
    op.drop_index(op.f('ix_contact_name'), table_name='contact')
    op.drop_table('contact')
    op.drop_table('conference_profile')
    # ### end Alembic commands ###
