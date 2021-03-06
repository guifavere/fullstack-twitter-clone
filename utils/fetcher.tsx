export function fetcher(endpoint: string, data?: any) {
  return fetch(window.location.origin + endpoint, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(r => r.json());
}
