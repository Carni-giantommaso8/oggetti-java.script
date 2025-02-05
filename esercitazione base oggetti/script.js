const animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4
};
const animale2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4
};
const animale3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2
}
function mostraAnimale(animal) {
    if (animal === 0) {
        document.getElementById("info1").innerHTML = animale1.specie;
        document.getElementById("info2").innerHTML = animale1.razza;
        document.getElementById("info3").innerHTML = animale1.zampe;
    } else if (animal === 1) {
        document.getElementById("info4").innerHTML = animale2.specie;
        document.getElementById("info5").innerHTML = animale2.razza;
        document.getElementById("info6").innerHTML = animale2.zampe;
    } else if (animal === 2) {
        document.getElementById("info7").innerHTML = animale3["specie"];
        document.getElementById("info8").innerHTML = animale3["razza"];
        document.getElementById("info9").innerHTML = animale3["zampe"];
    }
}