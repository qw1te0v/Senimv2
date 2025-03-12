document.addEventListener("DOMContentLoaded", () => {
    const kzBtn = document.getElementById("kz-btn");
    const ruBtn = document.getElementById("ru-btn");
    const enBtn = document.getElementById("en-btn");


    const headerlist1 = document.getElementById("headerlist1");
    const headerlist2 = document.getElementById("headerlist2");
    const headerlist3 = document.getElementById("headerlist3");
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

    enBtn.addEventListener("click", () => {
        setLanguage("en");
    });

    function setLanguage(lang) {
        localStorage.setItem("lang", lang);

        if (lang === "kz") {
            kzBtn.classList.add("active");
            ruBtn.classList.remove("active");
            enBtn.classList.remove("active");



            headerlist1.textContent = "БІЗ ТУРАЛЫ";
            headerlist2.textContent = "ДЕМЕУШІЛЕР";
            headerlist3.textContent = "БЛОГ";
            title.textContent = "SENIM.KZ - қысқа әрі, есте қаларлық";
            subtitle.textContent = "БІЗГЕ ТАПСЫРЫС БЕРІҢІЗ!";
            moreBtn.textContent = "ТОЛЫҒЫРАҚ ↗";
        } 
        
        
        else if (lang === "ru") {
            ruBtn.classList.add("active");
            kzBtn.classList.remove("active");
            enBtn.classList.remove("active");

            headerlist1.textContent = "О НАС";
            headerlist2.textContent = "СПОНСОРЫ";
            headerlist3.textContent = "БЛОГ";
            title.textContent = "SENIM.KZ - кратко и запоминающийся";
            subtitle.textContent = "ЗАКАЖИТЕ У НАС!";
            moreBtn.textContent = "ПОДРОБНЕЕ ↗";
        }

        else if (lang === "en") {
            enBtn.classList.add("active");
            kzBtn.classList.remove("active");
            ruBtn.classList.remove("active");

            headerlist1.textContent = "ABOUT US";
            headerlist2.textContent = "SPONSORS";
            headerlist3.textContent = "BLOG";
            title.textContent = "SENIM.KZ - short and memorable";
            subtitle.textContent = "ORDER FROM US!";
            moreBtn.textContent = "MORE ↗";
        }
    }
});
