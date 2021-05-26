import { Card, Spin } from 'antd';
import { DeleteButton } from './DeleteTweetButton';
import { useFeed, useMe } from './util/hooks';

export const Feed = () => {
  const { feed } = useFeed();
  const { me } = useMe();

  return feed ? (
    <>
    {feed.map(({ id, text, author }, i) => (
      <Card key={i}>
        {me && author.id === me.id && (
          <DeleteButton id={id} feed={feed} />
        )}
        <h4>{text}</h4>
        <span>{author?.username}</span>
      </Card>
    ))}
    </>
  ): <Spin />;
}
