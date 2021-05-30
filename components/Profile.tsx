import { Col, Row } from 'antd';

import { LogoutButton } from './LogoutButton';
import { SignupForm } from './SignupForm';
import { useMe, User } from '../hooks/useMe';

function isUserLoggedIn(me?: User): me is User {
  return me !== undefined;
}

function Profile(): JSX.Element {
  const { me } = useMe();

  return (
    <Row style={{ padding: '1.5rem' }}>
      {isUserLoggedIn(me) ? (
        <Col>
          Logged in as: <strong>{me.username}</strong>
          <LogoutButton />
        </Col>
      ) : <SignupForm />}
    </Row>
  );
}

export { Profile };
