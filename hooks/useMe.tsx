import useSWR from 'swr';
import { User } from '@prisma/client';

import { fetcher } from '../utils/fetcher';

function useMe() {
  const { data: me }: { data?: User } = useSWR('/api/me', fetcher);

  return { me };
}

export { useMe };
export type { User };
