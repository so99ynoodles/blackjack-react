const endpoint = 'https://5d3o0rntjk.execute-api.ap-northeast-1.amazonaws.com/prd/card/draw';

export function getCard(drawnCards) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      drawnCards: drawnCards,
    }),
  })
    .then(res => {
      return res.json();
    })
    .then(data => ({
      payload: data.card,
    }))
    .catch(err => ({
      payload: err,
      error: true,
    }));
}
