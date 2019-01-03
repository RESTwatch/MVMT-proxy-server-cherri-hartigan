const express = require('express');
const morgan = require('morgan');
const app = express();
const proxy = require('http-proxy-middleware');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/watches/:wid', express.static('public'));

app.use('/api/watches/:wid/photos', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/watches/:wid/summary', proxy({ target: 'http://localhost:3002', changeOrigin: true }));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
