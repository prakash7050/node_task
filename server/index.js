import routes from './router.js'
import timeout from 'connect-timeout'
import express from 'express'
const app = express()

const port = process.env.PORT || 8000

app.use('/api/v0.1.1',timeout('60s'), routes);

app.use(function (req, res, next) {
	next() // otherwise continue
  })


app.listen(port, function() {
  console.log("Runnning on " + port);
});

export default app;