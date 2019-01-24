import http from 'k6/http';
import { sleep } from "k6";

export let options = {
  duration: "5m",
  vus: 50,
  rps: 1000,
}

export default function () {
  const low = 8000000;
  const high = 10000000;
  const num = Math.floor(Math.random() * (high - low + 1)) + low;
  http.get(`http://localhost:3000/api/watches/${num}/photos`);
  sleep(1);
}
