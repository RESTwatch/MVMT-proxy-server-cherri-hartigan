const express = require('express');
const morgan = require('morgan');
const app = express();
const proxy = require('http-proxy-middleware');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/watches/:wid', express.static('public'));

app.use('/api/watches/:wid/photos', proxy({ target: 'http://54.211.73.211', changeOrigin: true }));
app.use('/api/watches/:wid/summary', proxy({ target: 'http://54.87.165.253', changeOrigin: true }));
app.use('/api/watches/:wid/details', proxy({ target: 'http://13.57.38.154', changeOrigin: true }));
app.use('/api/watches/:wid/reviews', proxy({ target: 'http://18.218.241.2', changeOrigin: true }));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
