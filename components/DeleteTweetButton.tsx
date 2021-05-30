import { Button } from 'antd';
import { mutate } from 'swr';

import { Feed } from '../hooks/useFeed';

import { fetcher } from '../utils/fetcher';

interface Props {
  id: number;
  feeds: Feed[];
}

export function DeleteButton({ id, feeds }: Props): JSX.Element {
  async function handleDestroy(): Promise<void> {
    await fetcher('/api/tweet/delete', { id });

    await mutate(
      '/api/feed',
      feeds.filter(t => t.id !== id),
    );
  }

  return (
    <Button
      style={{ float: 'right' }}
      danger
      type="dashed"
      onClick={handleDestroy}
    >
      x
    </Button>
  );
}
