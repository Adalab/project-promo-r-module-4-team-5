const Api = (data) => {
  return fetch(
    'https://project-promo-r-module-4-team-5-production.up.railway.app/card',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default Api;
