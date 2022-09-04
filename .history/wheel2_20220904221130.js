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
        openMetaMask();
    }, 5500);

    // delay
    setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 10000);


}

function openMetaMask() {


    // alert('ciao');
    // const accounts = ethereum.request({ method: 'eth_requestAccounts' });
    // const account = accounts[0];
    // alert('ti sei connseoo');


    ethereum
        .request({
            method: 'wallet_requestPermissions',
            params: [{ eth_accounts: {} }],
        })
        .then((permissions) => {
            const accountsPermission = permissions.find(
                (permission) => permission.parentCapability === 'eth_accounts'
            );
            if (accountsPermission) {
                console.log('eth_accounts permission successfully requested!');
            }
        })
        .catch((error) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Permissions needed to continue.');
            } else {
                console.error(error);
            }
        });





}

// let quitBtn = document.getElementById('CloseBtn');
// quitBtn.style.display = 'none';

function acc() {

    let panel = document.getElementById('account-panel');

    panel.classList.toggle('hidden');

    // let quitBtn = document.getElementById('CloseBtn');



    // var h4 = document.createElement('h4');
    // var button1 = document.createElement('button');
    // var div = document.createElement('div');
    // var img = document.createElement('img');
    // var div2 = document.createElement('div');

    // quitBtn.style.display = 'block';








    // div.appendChild(h4);
    // div2.appendChild(button1);

    // div.appendChild(img);




    // button1.innerHTML = 'ciao';



    // h4 = 'Account';




    // div.classList.add('achi');
    // div2.classList.add('achi2');

    // document.getElementById('achi').appendChild(div);
    // document.getElementById('achi2').appendChild(div2);













}


let accounts = [];

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    alert('Now you can do a transiction!!')
}



function quit() {

    var button2 = document.getElementById('button1');

    button2.style.display = 'none';






}