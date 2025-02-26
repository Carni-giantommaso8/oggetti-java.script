const CanzoneBBE = {
    titoloDellaCanzone: "il titolo è BBE",
    annoDiPubblicazione: "la canzone è stata pubblicata nel 2024",
    autore: "l'autore è Anna Pepe",
    link: 'il link al video della canzone per vederla su yt è : <a href="https://youtu.be/rvsazCnoO4s">Link per vedere il video</a>'
};

const CanzoneBON = {
    titoloDellaCanzone: "il titolo è Bon Ton",
    annoDiPubblicazione: "la canzone è stata pubblicata nel 2023",
    autore: "l'autore è Anna Lazza",
    link: 'il link al video della canzone per vederla su yt è : <a href="https://www.youtube.com/watch?v=OH8Y4-d0usA">Link per vedere il video</a>'
};

const CanzoneScuola = {
    titoloDellaCanzone: "il titolo è Scuola",
    annoDiPubblicazione: "la canzone è stata pubblicata nel 2021",
    autore: "l'autore è Tha Supreme",
    link: 'il link al video della canzone per vederla su yt è : <a href="https://www.youtube.com/watch?v=wRS8Bw8onq0">Link per vedere il video</a>'
};

function toggleInfo(ids, canzone) {
    const element = document.getElementById(ids[0]);
    if (element.innerHTML === "") {
        document.getElementById(ids[0]).innerHTML = canzone.titoloDellaCanzone;
        document.getElementById(ids[1]).innerHTML = canzone.annoDiPubblicazione;
        document.getElementById(ids[2]).innerHTML = canzone.autore;
        document.getElementById(ids[3]).innerHTML = canzone.link;
    } else {
        document.getElementById(ids[0]).innerHTML = "";
        document.getElementById(ids[1]).innerHTML = "";
        document.getElementById(ids[2]).innerHTML = "";
        document.getElementById(ids[3]).innerHTML = "";
    }
}

function Canzone1() {
    toggleInfo(["i1", "i2", "i3", "i4"], CanzoneBBE);
}

function Canzone2() {
    toggleInfo(["i5", "i6", "i7", "i8"], CanzoneBON);
}

function Canzone3() {
    toggleInfo(["i9", "i10", "i11", "i12"], CanzoneScuola);
}
