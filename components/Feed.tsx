import { Card, Spin } from 'antd';

import { DeleteButton } from './DeleteTweetButton';
import { useFeed } from '../hooks/useFeed';
import { useMe } from '../hooks/useMe';

export function Feed(): JSX.Element {
  const { feed } = useFeed();
  const { me } = useMe();

  if (feed === undefined) {
    return <Spin />
  }

  return (
    <>
      {feed.map(({ id, text, author }, i) => {
        const canShowDeleteButton = me?.id === author.id;

        return (
          <Card key={i}>
            {canShowDeleteButton && <DeleteButton id={id} feeds={feed} />}
            <h4>{text}</h4>
            <span>{author.username}</span>
          </Card>
        );
      })}
    </>
  );
}
