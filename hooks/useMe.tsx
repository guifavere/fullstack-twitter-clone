import useSWR from 'swr';
import { User } from '@prisma/client';

import { fetcher } from '../utils/fetcher';

export function useMe() {
  const { data: me }: { data?: User } = useSWR('/api/me', fetcher);

  return { me };
}
