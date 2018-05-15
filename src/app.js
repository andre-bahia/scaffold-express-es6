import express from 'express';

let app = express();

app.use('/', index);

app.listen(3000, () => {
    console.log("Server runnig in localhost:3000");
});

export default app;