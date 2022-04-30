import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()

const corsMiddleware = cors();
app.use(corsMiddleware)

// получаем мидлварь
const jsonBodyMiddleware = bodyParser.json()
// этот мидлварь засовываем сюда:
app.use(jsonBodyMiddleware)
// app.use(bodyParser.json()) - в оригинале


const port = 3001



app.get('/', (req: Request, res: Response ) => {
    res.send('videos')
})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})