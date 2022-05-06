import {videos} from "./db";

export const videosRepository = {
    getVideos() {
        return videos
    },
    getVideoById(id: number) {
        return videos.find(v => v.id === id);
    },
    deleteVideoById(id: number) {
        // реализация Димыча в видео, более предпочтительная.
        // итеративное программирование. Еще нужно глазами понимать что сделано.
        // НЕДОДЕЛАННАЯ ВЕРСИЯ, НЕ МОГУ СООБРАЗИТЬ ЧТО ВЕРНУТЬ, СПРОСИТЬ У ТП
        for (let i = 0; i < videos.length; i++) {
            if (videos[i].id === id) {
                videos.splice(i, 1);
                break;
            }
        }


        // реализация Димыча 2, почти как на саппорте, менее предпочтительная.
        /* декларативное программирование. Лучше так, потому что мы видим что делаем
        * тем более срабатывает внутренняя оптимизация движка -
        * он видит что мы собираемся делать, делает быстрее может быть.
        * Если там написать потом return, то цикл прервется, но будет
        * дальше итерироваться по циклу.
        * Остается только выкинуть ошибку.
        */

        // try {
        //     videos.forEach((e, index) => {
        //         if (e.id === id) {
        //             videos.splice(index, 1);
        //             throw new Error()
        //         }
        //     })
        // } catch {
        // }


         // реализация на саппорте с Лизой.
         const videos1 = [...videos]
         videos.forEach((v, index) => {
             if(v.id === id){
                 videos.splice(index)
             }
         })
        // const newVideos = videos.filter(v => v.id === id)
         if (videos1.length > videos.length) {
             return true
         } else {
            return false
         }
    },
    updateVideoById(id: number, title: string) {
        const video = videos.find(v => v.id === id)
        if (video) {
            video.title = title;
            return video
        } else {
            return null
        }
    },
    createVideo(title: string) {
        const newVideo = {
            id: +(new Date()),
            title: title,
            author: "it_incubator.eu"
        }
        videos.push(newVideo)
        return newVideo
    }
}

