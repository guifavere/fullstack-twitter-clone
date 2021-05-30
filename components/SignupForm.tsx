import { useState, FormEvent } from 'react';
import { mutate } from 'swr';
import { Row, Col, Button, message, Input } from 'antd';

import { fetcher } from '../utils/fetcher';

export function SignupForm(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) {
      message.error("Uh oh: you can't have a blank username or password.");
    }

    setLoading(true);

    const { error } = await fetcher(
      `/api/${login ? 'login' : 'signup'}`,
      { username, password },
    );

    if (error) {
      message.error(error);
      setLoading(false);
      return;
    }

    await mutate('/api/me');
  }

  return (
    <Row>
      <Col>
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="name"
              placeholder="Username"
            />

            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <Button htmlType="submit" loading={loading}>
              {loading ? 'Login' : 'Sign up'}
            </Button>
          </div>
          <div>
            <a onClick={() => setLogin(!login)}>
              {login ? 'New? Sing up' : 'Already a user? Log in'}
            </a>
          </div>
        </form>
      </Col>
    </Row>
  );
}
