import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import path from 'path'
// const port = import.meta.env.VITE_WEATHER_URL
// const env =import.meta.env.VITE_ENV
const env ="production"


dotenv.config()

const app = express()
const server = http.createServer(app)


if (env === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
    );
    } else {
      app.get('/', (req, res) => {
        res.send('API is running....');
      });
    } 

    server.listen(8080,()=>console.log(`server listening to localhost:${8080} `))      
