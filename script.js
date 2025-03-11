document.addEventListener("DOMContentLoaded", () => {
    const kzBtn = document.getElementById("kz-btn");
    const ruBtn = document.getElementById("ru-btn");


    const headerlist1 = document.getElementById("headerlist1");
    const headerlist2 = document.getElementById("headerlist2");
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const moreBtn = document.getElementById("more-btn");

    let currentLang = localStorage.getItem("lang") || "kz";
    setLanguage(currentLang);

    kzBtn.addEventListener("click", () => {
        setLanguage("kz");
    });

    ruBtn.addEventListener("click", () => {
        setLanguage("ru");
    });

    function setLanguage(lang) {
        localStorage.setItem("lang", lang);

        if (lang === "kz") {
            kzBtn.classList.add("active");
            ruBtn.classList.remove("active");



            headerlist1.textContent = "БІЗ ТУРАЛЫ";
            headerlist2.textContent = "ДЕМЕУШІЛЕР";
            title.textContent = "SENIM.KZ - қысқа әрі, есте қаларлық";
            subtitle.textContent = "БІЗГЕ ТАПСЫРЫС БЕРІҢІЗ!";
            moreBtn.textContent = "ТОЛЫҒЫРАҚ ↗";
        } 
        
        
        else {
            ruBtn.classList.add("active");
            kzBtn.classList.remove("active");

            headerlist1.textContent = "О НАС";
            headerlist2.textContent = "СПОНСОРЫ";
            title.textContent = "SENIM.KZ - кратко и запоминающийся";
            subtitle.textContent = "ЗАКАЖИТЕ У НАС!";
            moreBtn.textContent = "ПОДРОБНЕЕ ↗";
        }
    }
});
