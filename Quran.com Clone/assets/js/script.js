let surahs_container = document.querySelector('.surahs-part')

// console.log(surah)

const buildDom = (surahEnglish , surahArabic , surahArabicLatino ,surahNumber , numberOfAyahs ) => {
    surahs_container.innerHTML += `
    <a href="http://127.0.0.1:5500/surah.html?id=${surahNumber}" class="surah">
        <div class="left-part">
            <div class="background"></div>
            <div class="number">
                <p class="surah-number">${surahNumber}</p>
            </div>
             <div class="surah-name">
                <div class="latino-ar-name">
                    <p class="surahEn">${surahArabicLatino}</p>
                </div>
                <div class="en-name">
                    <p>${surahEnglish}</p>
                </div>
            </div>
        </div>
        <div class="right-part">
            <div class="ar-name">
                <span translate="no" class="surahAr">${surahArabic}</span>
            </div>
            <div class="ayah-number">
                <p>${numberOfAyahs} Aayahs</p>
            </div>
        </div>
    </a>`

    // console.log(surahs_container.innerHTML)
}


const getAllSurah =  async () => {
    let response = await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')

    let surah = await response.json()

    surah.data.surahs.forEach( (sura) => {
        buildDom(sura.englishNameTranslation , sura.name , sura.englishName , sura.number , sura.ayahs.length)
        // console.log(sura)
    });
}



getAllSurah()

document.addEventListener('input' , (e) =>{


    let surah = surahs_container.querySelectorAll('.surah')

    let term = e.target.value.toUpperCase()

    surah.forEach( (currSurah) => {
        let surahEn = currSurah.querySelector('.surahEn').textContent.toUpperCase()

        let surahAr = currSurah.querySelector('.surahAr').innerText.toUpperCase()

        // console.log(surahAr)

        if (surahEn.indexOf(term) > -1 || surahAr.indexOf(term) > -1){
            currSurah.style.display = 'flex'
        }else{
            currSurah.style.display = 'none'
        }
    })

    // console.log(term)
})
