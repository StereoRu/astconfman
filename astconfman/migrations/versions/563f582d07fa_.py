"""empty message

Revision ID: 563f582d07fa
Revises: 1a9f196d43b2
Create Date: 2015-08-17 18:06:50.928876

"""

# revision identifiers, used by Alembic.
revision = '563f582d07fa'
down_revision = '1a9f196d43b2'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
#    op.add_column('participant', sa.Column('is_invited', sa.Boolean(), nullable=True))
    pass
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
#    op.drop_column('participant', 'is_invited')
    pass
    ### end Alembic commands ###
