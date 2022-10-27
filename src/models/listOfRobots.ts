export type Robot = {
    id: number;
    name: string;
    imageURL: string;
    speed: number;
    resistance: number;
    creationDate: string;
};

export const listOfRobots: Array<Robot> = [
    {
        id: Math.floor(Math.random() * 1000000),
        name: "Terminator",
        imageURL:
            "https://static.abc.es/media/tecnologia/2017/09/25/inteligencia-artificial-terminator-kKjH--1240x698.jpg",
        speed: 8,
        resistance: 9,
        creationDate: new Date().toLocaleDateString(),
    },
    {
        id: Math.floor(Math.random() * 1000000),
        name: "WALL-E",
        imageURL:
            "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/wall-e/galeria/3139610-3-esl-ES/Wall-E.jpg",
        speed: 2,
        resistance: 2,
        creationDate: new Date().toLocaleDateString(),
    },
    // {
    //     id: Math.floor(Math.random() * 1000000),
    //     name: "R2D2",
    //     imageURL:
    //         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R2-D2_-_Genuine_Movie_Star.jpg/800px-R2-D2_-_Genuine_Movie_Star.jpg",
    //     speed: 2,
    //     resistance: 5,
    //     creationDate: new Date().toLocaleDateString(),
    // },
];
