import express from 'express';

const app = express();

app.listen(4444, () => {
    console.log('Server is running on port 4444');
});