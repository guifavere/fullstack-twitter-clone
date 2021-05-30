import { useState } from 'react';
import { mutate } from 'swr';
import { Button, message } from 'antd';

import { fetcher } from '../utils/fetcher';

export function LogoutButton(): JSX.Element {
  const [loading, setLoading] = useState(false);

  async function handleLogout(): Promise<void> {
    setLoading(true);

    const { error } = await fetcher('/api/logout');

    if (error) {
      message.error(error);
      setLoading(false);
      return;
    }

    await mutate('/api/me');
  }

  return (
    <Button
      loading={loading}
      onClick={handleLogout}
    >
      Log out
    </Button>
  );
}
