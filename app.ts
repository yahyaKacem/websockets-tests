import * as ws from 'ws';

const
  url = 'ws://localhost:9000/ws/updates?lc_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNTMyMDc5NjA1MDMyIiwidXNlcklEIjoiYjJiZWZmNzUtN2M0NC00YTZmLWE3NjItMDY3MTBkOTg5NzM2In0.HoS0Sn8C4sLEzW4yRqPeaORrHix_2z-HqvRHnbY2xJo',
  connection: ws = new ws(url, {headers: {Authorisation: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNTMyMDc5NjA1MDMyIiwidXNlcklEIjoiYjJiZWZmNzUtN2M0NC00YTZmLWE3NjItMDY3MTBkOTg5NzM2In0.HoS0Sn8C4sLEzW4yRqPeaORrHix_2z-HqvRHnbY2xJo'}});
connection.on('open', () => console.log('opening connection'));
connection.on('message', (data) => console.log(data));
