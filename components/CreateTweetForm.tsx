import { useState, FormEvent } from 'react';
import { Button, message, Row, Col, Input } from 'antd';
import { mutate } from 'swr';

import { useFeed } from '../hooks/useFeed';
import { useMe } from '../hooks/useMe';

import { fetcher } from '../utils/fetcher';

export function CreateTweetForm(): JSX.Element {
  const [input, setInput] = useState('');

  const { feed } = useFeed();
  const { me } = useMe();

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    if (input.length < 1) {
      message.error("Oops! You can't create empty tweets.");
      return;
    }

    if (!me || !me.username) {
      message.error("You must be logged in to tweet.");
      return;
    }

    mutate(
      '/api/feed',
      [{ text: input, author: me }, ...feed || []],
      false,
    );

    fetcher('/api/tweet/create', { text: input });

    setInput('');
  }

  return (
    <form
      style={{ padding: '2rem' }}
      onSubmit={handleSubmit}
    >
      <Row>
        <Col>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </Col>

        <Col>
          <Button htmlType="submit">Tweet</Button>
        </Col>
      </Row>
    </form>
  );
}
