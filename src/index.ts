import express, {Request, Response} from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import {videosRepository} from "./repositories/videos-repository";
import {videosRouter} from "./routes/videos-routes";
import {authMiddleware} from "./middlewares/auth-middleware";

// create express app
const app = express()
const port = 3003

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(authMiddleware)


// Для всего, что касается этого пути (справа м.б. что угодно),
// но если слева будет этот путь,
// обрабатывай эти видео с помощью veideoRouter'a
app.use('/lesson_01/api/videos', videosRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function getLastId(db: VideoRecordType[]) {
    let lastIndex = 0;
    db.forEach(el => {
        if (el.id > lastIndex) {
            lastIndex = el.id
        }
    })
    return lastIndex
}


type FieldErrorType = {
    message: string
    field: string
}

type APIResultType = {
    data: {}
    errorMessages: FieldErrorType[]
    resultCode: number
}

type ProblemDetailsType = {
    type: string
    title: string
    status: number
    detail: string
    instance: string
}

type VideoRecordType = {
    id: number
    title: string
    author: string
}
