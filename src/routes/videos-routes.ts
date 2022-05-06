import {Request, Response, Router} from 'express'
import {videosRepository} from "../repositories/videos-repository";

// put here array with videos
export const videosRouter = Router({})

//bind here videosRouter with all handlers

//'/lesson_01/api/videos'

videosRouter.get('/', (req: Request, res: Response) => {
    const videos = videosRepository.getVideos()
    res.send(videos)
})
    .post('/', (req: Request, res: Response) => {
    const newVideo = videosRepository.createVideo(req.body.title)
    res.status(201).send(newVideo)

    // // create array with type FieldErrorType
    // const errors: FieldErrorType[] = []
    // if (!req.body.title) {
    //     const error: FieldErrorType = {
    //         field: "title",
    //         message: "Type error: field is empty"
    //     }
    //     errors.push(error)
    // }
    // if (req.body.title.length > 40) {
    //     const error: FieldErrorType = {
    //         field: "title",
    //         message: "Title should be less than 40 symbols"
    //     }
    //     errors.push(error)
    // }
    // // if title is not a string
    // if (typeof req.body.title !== "string") {
    //     // create Error Object
    //     const error: FieldErrorType = {
    //         field: "title",
    //         message: "Type error: field is not string"
    //     }
    //     //push this error to array with errors
    //     errors.push(error)
    // }
    // // the same for author
    // if (typeof req.body.author !== "string") {
    //     const error: FieldErrorType = {
    //         field: "author",
    //         message: "Type error: field is not string"
    //     }
    //     errors.push(error)
    // }
    // // if array is more than 0
    // if (errors.length !== 0) {
    //     // create response object with special fields/attributes
    //     const responseObj: APIResultType = {
    //         data: {},
    //         errorMessages: errors,
    //         resultCode: 400
    //     }
    //
    //     res.status(400).send(responseObj)
    //     //return
    // } else {
    //     // create video object with special fields/attributes
    //     const video: VideoRecordType = {
    //         id: getLastId(videos) + 1,
    //         title: req.body.title,
    //         author: req.body.author
    //     }
    //     // push this video to the array with videos
    //     videos.push(video)
    //     res.status(201)
    //     res.send(video)
    // }
})
    .get('/:id', (req: Request, res: Response) => {
    // const errors: FieldErrorType[] = []
    // if (!req.params.id) {
    //     //if ('/lesson_01/api/videos/'){
    //     const error: FieldErrorType = {
    //         field: "title",
    //         message: "Type error: you should specify the id"
    //     }
    //     errors.push(error)
    // }
    // if (errors.length !== 0) {
    //     // create response object with special fields/attributes
    //     const responseObj: APIResultType = {
    //         data: {},
    //         errorMessages: errors,
    //         resultCode: 400
    //     }
    //
    //     res.status(400).send(responseObj)
    // } else {
    //     const id = +req.params.id;
    //     const video = videosRepository.getVideoById(id)
    //     res.status(200)
    //     res.send(video)
    // }
    const id = parseInt(req.params.id);
    const video = videosRepository.getVideoById(id);
    if (video) {
        res.send(video)
    } else {
        res.send(404)
    }

})
    .put('/:id', (req: Request, res: Response) => {
    // create array with type FieldErrorType
    // const errors: FieldErrorType[] = []
    // const id = +req.params.id;
    // const video = videos.find(v => v.id === id)
    // if (!req.body.title) {
    //     const error: FieldErrorType = {
    //         field: "title",
    //         message: "Type error: field is empty"
    //     }
    //     errors.push(error)
    // }
    // if (req.body.title.length > 40) {
    //     const error: FieldErrorType = {
    //         field: "title",
    //         message: "Title should be less than 40 symbols"
    //     }
    //     errors.push(error)
    // }
    // if (typeof req.body.title !== "string") {
    //     // create Error Object
    //     const error: FieldErrorType = {
    //         field: "title",
    //         message: "Type error: title is not string"
    //     }
    //     //push this error to array with errors
    //     errors.push(error)
    // }
    //
    // if (errors.length !== 0) {
    //     // create response object with special fields/attributes
    //     const responseObj: APIResultType = {
    //         data: {},
    //         errorMessages: errors,
    //         resultCode: 400
    //     }
    //     res.status(400).send(responseObj)
    //     //return
    // }
    // if (!video) {
    //     const problemDetails: ProblemDetailsType = {
    //         type: "Problem Type",
    //         title: "There is no video with such Id in the array",
    //         status: 404,
    //         detail: "Put another video with the right id",
    //         instance: "some instance"
    //     }
    //     res.send(problemDetails)
    // } else {
    //     video.title = req.body.title;
    //     res.send(204)
    // }
    const id = parseInt(req.params.id);
    const updatedVideo = videosRepository.updateVideoById(id, req.body.title)
    if (updatedVideo) {
        res.send(updatedVideo)
    } else {
        res.send(404)
    }
})
    .delete('/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const isDeleted = videosRepository.deleteVideoById(id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})
