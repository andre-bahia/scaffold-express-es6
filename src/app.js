import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.json'
import index from './routes/index.route';

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({
    limit: config.bodyLimit
}));

/* Definition routes */
app.use('/', index);

app.listen(3000, () => {
    console.log("Server runnig in localhost:3000");
});

export default app;