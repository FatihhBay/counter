

const dakika = document.querySelector("#dakika");
const saniye = document.querySelector("#saniye");

const secilenDk = document.querySelector("#secilen-dk");
const secilenSn = document.querySelector("#secilen-sn");

const baslat = document.querySelector("#baslat");
const sifirla = document.querySelector("#sifirla");

let dur = false;


secilenDk.addEventListener("change",()=>{
    dakika.textContent=secilenDk.value;
});

secilenSn.addEventListener("change",()=>{
    saniye.textContent = secilenSn.value < 10 ? "0" + secilenSn.value : secilenSn.value;
});

baslat.addEventListener("click", startTimer);

sifirla.addEventListener("click",()=>{
    dur = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
    secilenDk.value = "00";
    secilenSn.value = "00";
})

function startTimer(){
    let dk=dakika.textContent;
    let sn=saniye.textContent;
    
    const interval = setInterval(()=>{
        sn --;
        sn = sn < 10 ? "0" + sn : sn;
        
        if(sn=="0-1"){
            dk--;
            sn=59;
        }

        if((dk == 00 && sn == 0) || (dk == 0 && sn == 0)){
            clearInterval(interval);
            window.alert("Süre doldu");
            secilenDk.value = "00";
            secilenSn.value = "00";
        }

        if(dur) {
            clearInterval(interval);
            return;
        }





        dakika.textContent = dk;
        saniye.textContent = sn;


    },1000);
}
