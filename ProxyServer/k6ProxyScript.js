import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  const randomNum = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:5001/?${randomNum}`);
  http.get(`http://localhost:5001/carousel/${randomNum}`);
  sleep(1);
}