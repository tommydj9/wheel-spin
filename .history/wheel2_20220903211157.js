function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

function spin() {

    // Play the sound

    applause.play();


    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let MagicRoaster = shuffle([1890, 2250, 2610]);
    let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
    let RiceCooker = shuffle([1810, 2170, 2530]);
    let LunchBox = shuffle([1770, 2130, 2490]);
    let Sanken = shuffle([1750, 2110, 2470]);
    let Electrolux = shuffle([1630, 1990, 2350]);
    let JblSpeaker = shuffle([1570, 1930, 2290]);

    let Hasil = shuffle([
        MagicRoaster[0],
        Sepeda[0],
        RiceCooker[0],
        LunchBox[0],
        Sanken[0],
        Electrolux[0],
        JblSpeaker[0],
    ]);
    // console.log(Hasil[0]);

    // get the value of selected item
    if (MagicRoaster.includes(Hasil[0])) SelectedItem = "5$";
    if (Sepeda.includes(Hasil[0])) SelectedItem = "10$";
    if (RiceCooker.includes(Hasil[0])) SelectedItem = "20$";
    if (LunchBox.includes(Hasil[0])) SelectedItem = "40$";
    if (Sanken.includes(Hasil[0])) SelectedItem = "50$";
    if (Electrolux.includes(Hasil[0])) SelectedItem = "100$";
    if (JblSpeaker.includes(Hasil[0])) SelectedItem = "200$";

    // spin
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
        element.classList.add("animate");
    }, 5000);

    // alert
    setTimeout(function () {

        swal(
            "Congratulations",
            "You Won The " + SelectedItem + ".",
            "success"
        );
    }, 5500);

    // delay
    setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 10000);
}
