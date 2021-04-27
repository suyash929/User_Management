import express from 'express';
import {db} from './config/db';

const app: any = express();
const PORT: number = 3000;

db.authenticate()
.then(() => {
    console.log("Connection established ....");
}).catch(connectionErr => {
    console.log("Error in connection => " + connectionErr);
});

app.use(express.json()); // for parsing json in request

app.use((req, res) => {
// Invalid request
    res.json({
        error: {
            'name':'Error',
            'status':404,
            'message':'Invalid Request',
            'statusCode':404,
            'stack':'http://localhost:3000/'
        },
        message: 'Testing!'
    });
});

db.sync()
.then(() => {
    // start the Express server
    app.listen( PORT, () => {
        console.log( `server started at http://localhost:${ PORT }` );
    });
}).catch(dbSyncErr => console.log("Error while db syncing => "+ dbSyncErr));