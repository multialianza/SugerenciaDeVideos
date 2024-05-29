//Desafío: Sugerencia de Videos

// 1. IIFE Module Pattern
let module = (() => {
    let privateVideo = (url, id) => {
        let element = document.getElementById(id);
        element.setAttribute("src", url);
    }

    return {
        publicVideo: (url, id) => {
            privateVideo(url, id);
        },
    };
})();

// 2. Clase padre denominada Multimedia
class Multimedia {
    constructor(url) {
        this._url = url;
    }
    // Getter for 'url'
    get url() {
        return this._url;
    }
    // Method to add time video start
    setStart() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// 3. Clase hija de la clase Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    // Getter for 'id'
    get id() {
        return this._id;
    }
    // call function IIFE
    playMultimedia() {
        module.publicVideo(this._url, this._id);
    }
    // Method to add time video start
    setStart(time) {
        // Catch element from DOM
        const element = document.getElementById(this._id);
        // Conditional to evaluate element catched
        if (element) {
            // show element if it's already in DOM then 
            element.setAttribute("src", `${this._url}?start=${time}`);
        } else {
            // error message for element not found
            console.error(`Elemento con ID '${this._id}' no encontrado.`);
        }
    }
}

// 4. Instances for music, movie & serie element

let music = new Reproductor("https://www.youtube.com/embed/vbvyNnw8Qjg?si=ZwP-jCzqCSeR43yR&amp", "video-music");

let movie = new Reproductor(
    "https://www.youtube.com/embed/a5Oq0Sru8TI?si=nUdvRHv3ixoHExDk",
    "video-movie"
);

let serie = new Reproductor(
    "https://www.youtube.com/embed/G84p7eCplkI", "video-serie"
);

// 5. Call methods to show videos in HTML
music.playMultimedia();
movie.playMultimedia();
serie.playMultimedia();

// 6. call setStart with time modifers
music.setStart(10);
movie.setStart(15);
serie.setStart(20);
