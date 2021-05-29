import useSWR from 'swr';
import { User, Tweet } from '@prisma/client';

import { fetcher } from '../utils/fetcher';

type Feed = Tweet & { author: User };

export function useFeed() {
  const { data: feed }: { data?: Feed[] } = useSWR('/api/feed', fetcher);

  return { feed };
}
