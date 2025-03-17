document.addEventListener("DOMContentLoaded", function () {
    document.body.style.zoom = "67%";
});


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

    const abouttext = document.getElementById("abouttext");
    const cardtext1 = document.getElementById("cardtext1");
    const cardtext2 = document.getElementById("cardtext2");
    const cardtext3 = document.getElementById("cardtext3");

    const cardtext11 = document.getElementById("cardtext11");
    const cardtext22 = document.getElementById("cardtext22");
    const cardtext33 = document.getElementById("cardtext33");

    const cardtext111 = document.getElementById("cardtext111");
    const cardtext222 = document.getElementById("cardtext222");
    const cardtext333 = document.getElementById("cardtext333");

    const aboutlootext = document.getElementById("aboutlootext");

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
            abouttext.textContent = "Веб-сайттарды құру бағасы";
            cardtext1.textContent = "Корпоративтік сайт";
            cardtext2.textContent = "✔ 1 - Жыл қол жетімді";
            cardtext3.textContent = "Сатып алу →";

            cardtext11.textContent = "Премиум сайт";
            cardtext22.textContent = "✔ 2 - Жыл қол жетімді";
            cardtext33.textContent = "Сатып алу →";

            cardtext111.textContent = "Интернет-дүкен";
            cardtext222.textContent = "✔ 8 - Ай қол жетімді";
            cardtext333.textContent = "Сатып алу →";


            aboutlootext.textContent = "ДЕМЕУШІЛЕР";
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

            abouttext.textContent = "Цены - на создание сайтов";
            cardtext1.textContent = "Корпоративный сайт";
            cardtext2.textContent = "✔ Доступно на 1 год";
            cardtext3.textContent = "Купить →";

            cardtext11.textContent = "Премиум сайт";
            cardtext22.textContent = "✔ Доступно на 2 года";
            cardtext33.textContent = "Купить →";

            cardtext111.textContent = "Интернет-магазин";
            cardtext222.textContent = "✔ Доступно на 8 месяцев";
            cardtext333.textContent = "Купить →";


            aboutlootext.textContent = "СПОНСОРЫ";
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

            abouttext.textContent = "Prices - for website creation";
            cardtext1.textContent = "Corporate website";
            cardtext2.textContent = "✔ Available for 1 year";
            cardtext3.textContent = "Buy →";

            cardtext11.textContent = "Premium website";
            cardtext22.textContent = "✔ Available for 2 years";
            cardtext33.textContent = "Buy →";

            cardtext111.textContent = "Online Store";
            cardtext222.textContent = "✔ Available for 8 months";
            cardtext333.textContent = "Buy →";


            aboutlootext.textContent = "SPONSORS";
        }
    }
});

document.getElementById("more-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартный переход по ссылке
    document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("headerlist2").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартный переход по ссылке
    document.querySelector(".about-logo").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("headerlist1").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартный переход по ссылке
    document.querySelector(".about-team-title").scrollIntoView({ behavior: "smooth" });
});
