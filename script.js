document.addEventListener("DOMContentLoaded", function () {

    const openingScreen = document.getElementById("openingScreen");
    const invitation = document.getElementById("invitation");

    let invitationOpened = false;

    // Lock scrolling until the invitation is opened.
    document.body.classList.add("invitation-locked");

    // Open invitation.
    function openInvitation() {

        if (invitationOpened) {
            return;
        }

        invitationOpened = true;

        openingScreen.classList.add("opening-hidden");
        invitation.classList.add("invitation-visible");
        invitation.setAttribute("aria-hidden", "false");

        document.body.classList.remove("invitation-locked");

        // Start invitation from the top.
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Open when user clicks anywhere on the first screen.
    if (openingScreen && invitation) {

        openingScreen.addEventListener("click", openInvitation);

        // Keyboard accessibility.
        openingScreen.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();
                openInvitation();

            }

        });
    }

});


/* ==========================================
   2. SCROLL REVEAL ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const invitationContainers = document.querySelectorAll(
        ".invitation-container"
    );

    // Check browser support.
    if (!("IntersectionObserver" in window)) {

        invitationContainers.forEach(function (container) {
            container.classList.add("is-visible");
        });

        return;
    }

    // Enable animation styles.
    document.body.classList.add("reveal-ready");

    // Observe invitation containers.
    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );

    invitationContainers.forEach(function (container) {
        revealObserver.observe(container);
    });

});


/* ==========================================
   3. LANGUAGE SWITCHER
   English / Urdu / Marathi
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const languageButtons = document.querySelectorAll(".lang-btn");

    const translatableElements = document.querySelectorAll(
        "[data-translate]"
    );

    // Check whether language buttons and translation elements exist.
    if (!languageButtons.length || !translatableElements.length) {

        console.warn(
            "Language switcher: buttons or data-translate elements were not found."
        );

        return;
    }


    /* ==========================================
       TRANSLATION DICTIONARY
    ========================================== */

    const translations = {

        /* ======================================
           ENGLISH
        ====================================== */

        en: {

            bismillah_translation:
                "In the name of Allah, The Most Gracious, The Most Merciful.",

            greeting_heading:
                "Assalamu Alaikum",

            greeting_subtitle:
                "Wa Rahmatullahi Wa Barakatuh",

            invitation_message:
                "With the blessings of Allah, we invite you to celebrate the beginning of a beautiful journey…",

            scroll_down:
                "Scroll Down",

            beauty_of_marriage:
                "THE BEAUTY OF MARRIAGE",

            quran_translation:
                "\"And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy.\"",

            quran_reference:
                "— QUR'AN 30:21",

            continue_reading:
                "Continue Reading",

            the_couple:
                "THE COUPLE",

            the_groom:
                "THE GROOM",

            son_of:
                "Son of",

            the_bride:
                "THE BRIDE",

            daughter_of:
                "Daughter of",

            couple_message:
                "Two souls, one journey, united by the blessings of Allah.",

            our_special_day:
                "Our Special Day",

            the_nikah:
                "THE NIKAH",

            nikah_intro:
                "A blessed beginning to a lifetime of togetherness.",

            nikah_date_label:
                "NIKAH DATE",

            nikah_time_label:
                "NIKAH TIME",

            add_to_calendar:
                "Add to Google Calendar",

            find_venue:
                "Find the Venue",

            the_venue:
                "THE VENUE",

            venue_note:
                "We look forward to welcoming you.",

            view_map:
                "VIEW LOCATION ON GOOGLE MAPS",

            beautiful_blessing:
                "A Beautiful Blessing",

            blessing_heading:
                "A BLESSING FOR THEIR JOURNEY",

            hadith_translation:
                "\"When a servant of Allah marries, they have fulfilled half of their religion; so let them fear Allah regarding the remaining half.\"",

            hadith_reference:
                "— PROPHET MUHAMMAD ﷺ",

            final_message:
                "With Allah's blessings, we begin a beautiful new chapter together. We would be honoured to have your presence and duas as we celebrate the union of two hearts, joined by His divine decree.",

            footer_note:
                "A new journey, by the grace of Allah."

        },


        /* ======================================
           URDU
        ====================================== */

        ur: {

            bismillah_translation:
                "اللہ کے نام سے جو نہایت مہربان، بے حد رحم فرمانے والا ہے۔",

            greeting_heading:
                "السلام علیکم",

            greeting_subtitle:
                "ورحمۃ اللہ وبرکاتہ",

            invitation_message:
                "اللہ کے فضل و کرم سے، ہم آپ کو ایک خوبصورت سفر کے آغاز کی خوشی میں شرکت کی دعوت دیتے ہیں۔",

            scroll_down:
                "نیچے جائیں",

            beauty_of_marriage:
                "نکاح کی خوبصورتی",

            quran_translation:
                "اور اس کی نشانیوں میں سے ہے کہ اس نے تمہارے لیے تم ہی میں سے جوڑے پیدا کیے تاکہ تم ان سے سکون حاصل کرو، اور اس نے تمہارے درمیان محبت اور رحمت رکھ دی۔",

            quran_reference:
                "— القرآن ۳۰:۲۱",

            continue_reading:
                "مزید پڑھیں",

            the_couple:
                "دولہا اور دلہن",

            the_groom:
                "دولہا",

            son_of:
                "صاحبزادہ",

            the_bride:
                "دلہن",

            daughter_of:
                "صاحبزادی",

            couple_message:
                "دو روحیں، ایک سفر، اللہ کی برکتوں کے ساتھ ایک دوسرے سے منسلک۔",

            our_special_day:
                "ہمارا خاص دن",

            the_nikah:
                "نکاح",

            nikah_intro:
                "زندگی بھر کے ساتھ کا ایک بابرکت آغاز۔",

            nikah_date_label:
                "نکاح کی تاریخ",

            nikah_time_label:
                "نکاح کا وقت",

            add_to_calendar:
                "گوگل کیلنڈر میں شامل کریں",

            find_venue:
                "تقریب کا مقام",

            the_venue:
                "تقریب کا مقام",

            venue_note:
                "ہم آپ کی آمد کے منتظر ہیں۔",

            view_map:
                "گوگل میپس پر مقام دیکھیں",

            beautiful_blessing:
                "ایک خوبصورت دعا",

            blessing_heading:
                "ان کے نئے سفر کے لیے دعا",

            hadith_translation:
                "جب بندہ نکاح کر لیتا ہے تو اس نے اپنا آدھا دین مکمل کر لیا؛ پس اسے باقی آدھے دین کے بارے میں اللہ سے ڈرنا چاہیے۔",

            hadith_reference:
                "— حضرت محمد ﷺ",

            final_message:
                "اللہ کی برکتوں کے ساتھ، ہم ایک نئے اور خوبصورت باب کا آغاز کر رہے ہیں۔ دو دلوں کے اس مبارک اتحاد کی خوشی میں آپ کی شرکت اور دعائیں ہمارے لیے باعثِ عزت ہوں گی۔",

            footer_note:
                "اللہ کے فضل سے ایک نئے سفر کا آغاز۔"

        },


        /* ======================================
           MARATHI
        ====================================== */

        mr: {

            bismillah_translation:
                "अत्यंत कृपाळू आणि परम दयाळू अल्लाहच्या नावाने.",

            greeting_heading:
                "अस्सलामु अलैकुम",

            greeting_subtitle:
                "व रहमतुल्लाही व बरकातुहू",

            invitation_message:
                "अल्लाहच्या आशीर्वादाने, एका सुंदर प्रवासाच्या सुरुवातीचा आनंद साजरा करण्यासाठी आम्ही आपणास आमंत्रित करीत आहोत.",

            scroll_down:
                "खाली स्क्रोल करा",

            beauty_of_marriage:
                "विवाहाचे सौंदर्य",

            quran_translation:
                "\"आणि त्याच्या निशाण्यांपैकी एक ही आहे की त्याने तुमच्यासाठी तुमच्यातूनच जोडीदार निर्माण केले, जेणेकरून तुम्हाला त्यांच्याजवळ शांतता मिळावी; आणि त्याने तुमच्यामध्ये प्रेम व दया निर्माण केली.\"",

            quran_reference:
                "— कुरआन ३०:२१",

            continue_reading:
                "पुढे वाचा",

            the_couple:
                "वधू आणि वर",

            the_groom:
                "वर",

            son_of:
                "सुपुत्र",

            the_bride:
                "वधू",

            daughter_of:
                "सुकन्या",

            couple_message:
                "दोन जीव, एक प्रवास, अल्लाहच्या आशीर्वादाने एकत्र आलेले.",

            our_special_day:
                "आमचा खास दिवस",

            the_nikah:
                "निकाह",

            nikah_intro:
                "आयुष्यभराच्या सहजीवनाची एक मंगलमय सुरुवात.",

            nikah_date_label:
                "निकाहची तारीख",

            nikah_time_label:
                "निकाहची वेळ",

            add_to_calendar:
                "Google Calendar मध्ये जोडा",

            find_venue:
                "कार्यस्थळ पाहा",

            the_venue:
                "कार्यस्थळ",

            venue_note:
                "आपल्या आगमनाची आम्ही आतुरतेने वाट पाहत आहोत.",

            view_map:
                "Google Maps वर ठिकाण पाहा",

            beautiful_blessing:
                "एक सुंदर आशीर्वाद",

            blessing_heading:
                "त्यांच्या नव्या प्रवासासाठी शुभेच्छा",

            hadith_translation:
                "\"जेव्हा अल्लाहचा सेवक विवाह करतो, तेव्हा तो आपला अर्धा धर्म पूर्ण करतो; म्हणून उर्वरित अर्ध्याबाबत त्याने अल्लाहचे भय बाळगावे.\"",

            hadith_reference:
                "— पैगंबर मुहम्मद ﷺ",

            final_message:
                "अल्लाहच्या आशीर्वादाने आम्ही एक सुंदर नवीन अध्याय सुरू करीत आहोत. दोन हृदयांच्या या पवित्र मिलनाच्या आनंदात आपली उपस्थिती आणि दुआ आमच्यासाठी सन्मानाची गोष्ट असेल.",

            footer_note:
                "अल्लाहच्या कृपेने एका नव्या प्रवासाची सुरुवात."

        }

    };


    /* ==========================================
       SAVE ORIGINAL ENGLISH TEXT
    ========================================== */

    translatableElements.forEach(function (element) {

        if (!element.dataset.originalText) {

            element.dataset.originalText =
                element.textContent.trim();

        }

    });


    /* ==========================================
       CHANGE WEBSITE LANGUAGE
    ========================================== */

    function changeLanguage(language) {

        if (!translations[language]) {
            return;
        }

        // Translate all elements having data-translate.
        translatableElements.forEach(function (element) {

            const key = element.dataset.translate;

            const translatedText = translations[language][key];

            if (language === "en" || !translatedText) {

                element.textContent = element.dataset.originalText;

            } else {

                element.textContent = translatedText;

            }

            // Set direction for translated text only.
            element.setAttribute(
                "dir",
                language === "ur" ? "rtl" : "ltr"
            );

        });


        // Update active language button.
        languageButtons.forEach(function (button) {

            const isActive =
                button.dataset.lang === language;

            button.classList.toggle("active", isActive);

            button.setAttribute(
                "aria-pressed",
                isActive ? "true" : "false"
            );

        });


        // Update page language metadata.
        // Do not change the overall page direction.
        document.documentElement.lang = language;

    }


    /* ==========================================
       LANGUAGE BUTTON CLICK EVENTS
    ========================================== */

    languageButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const selectedLanguage = button.dataset.lang;

            changeLanguage(selectedLanguage);

        });

    });


    // Set English as the default language.
    changeLanguage("en");

});
