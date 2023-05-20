// Define helper functions
export const fetchApi = (method: string, url: string, body?: any) => {
  return Promise.resolve(
    fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((rs) => rs.json())
  )
}
