let container = document.querySelector('.container')


let url = document.location.href

let url_variables = url.split("?")

let exactSurah = url_variables[1].split("=")




ayahCounter = 0
const buildDom = (ayah , ayahNumber) => {

    if (ayahCounter < 1){

        let ayahSplit = ayah.split('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ')
        

        container.innerHTML += `<div class="bismillah"><a href="">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</a></div>`
        container.innerHTML += `<div class="aayah" ><a href="" dir="rtl" lang="ar" translate="no">${ayahSplit[1]} <img src="./assets/images/ayah.png" id="ayah-sign"><span class="ayah-number">${ayahNumber}</span></a></div>`
    }else{
        container.innerHTML += `<div class="aayah" style="padding-bottom: 50px;"><a href="" dir="rtl" lang="ar" translate="no">${ayah}<img src="./assets/images/ayah.png" id="ayah-sign"><span class="ayah-number" >${ayahNumber}</span></a></div>`
    }
    

    ayahCounter++
}



const reading = async (num) => {
    let response = await fetch(`http://api.alquran.cloud/v1/surah/${num}`)

    let surah = await response.json()

    surah.data.ayahs.forEach( (sura) => {
        // console.log(sura)

        buildDom(sura.text , sura.numberInSurah)
    });

    // console.log(surah)
}

reading(exactSurah[1])
// console.log(exactSurah[1])