const translations = {
    en: {
        nav_mission: "Our Mission",
        nav_apps: "Applications",
        nav_philosophy: "Philosophy",
        hero_title_1: "Essential Tools for",
        hero_title_2: "Your Best Life",
        hero_subtitle: "We create the apps you didn't know you needed, but now can't live without. Designed to empower, inspire, and simplify.",
        hero_btn_primary: "Start Your Journey",
        hero_btn_secondary: "Why You Must",
        mission_tag: "Our Vision",
        mission_title: "The Necessity of Pure Utility",
        mission_desc: "At YouMustApp, we believe technology should be an indispensable companion. We don't just build apps; we create digital environments that you MUST experience to truly unlock your potential and find daily happiness.",
        apps_tag: "The Ecosystem",
        apps_title: "Tools for Transformation",
        app_mustapp_desc: "Master new languages through immersion. MustApp turns every video into a personalized classroom with advanced shadowing tools and seamless media management.",
        app_lumina_desc: "A trilogy of light for your mind. From writing with clarity (Note), to distraction-free reading (Books), and capturing fleeting ideas (Vignettes).",
        app_prokvote_desc: "Empowering communities with transparent, real-time voting. A secure platform designed for fairness, ensuring every voice is heard in the moments that matter.",
        badge_growth: "Growth",
        badge_wisdom: "Wisdom",
        badge_connection: "Connection",
        download_soon: "Coming Summer 2026",
        phi_tag: "The Values",
        phi_title: "Designed with Heart",
        val_1_title: "Human-Centric",
        val_1_desc: "We prioritize your well-being over metrics. No dark patterns, just pure utility.",
        val_2_title: "Aesthetic Harmony",
        val_2_desc: "A clean digital space leads to a clean mind. We obsess over every pixel.",
        val_3_title: "Sustainable Growth",
        val_3_desc: "Tools that evolve with you, helping you become the best version of yourself.",
        footer_copy: "Creating an 이롭고 행복한 세상."
    },
    ko: {
        nav_mission: "우리의 미션",
        nav_apps: "애플리케이션",
        nav_philosophy: "철학",
        hero_title_1: "당신의 더 나은 삶을 위한",
        hero_title_2: "필수적인 도구들",
        hero_subtitle: "당신이 필요로 하는지 몰랐지만, 이제 없이는 살 수 없는 앱들을 만듭니다. 당신의 잠재력을 깨우고 일상을 단순하게 만들도록 디자인되었습니다.",
        hero_btn_primary: "여정 시작하기",
        hero_btn_secondary: "함께해야 하는 이유",
        mission_tag: "우리의 비전",
        mission_title: "순수한 유용성의 필연성",
        mission_desc: "YouMustApp은 기술이 당신의 떼어놓을 수 없는 동반자가 되어야 한다고 믿습니다. 우리는 단순히 앱을 만드는 것이 아니라, 당신이 반드시 경험해야 할 최적의 디지털 환경을 구축하여 잠재력을 실현하고 일상의 행복을 찾도록 돕습니다.",
        apps_tag: "에코시스템",
        apps_title: "변화를 위한 도구",
        app_mustapp_desc: "몰입을 통해 새로운 언어를 마스터하세요. MustApp은 모든 비디오를 고급 쉐도잉 도구와 완벽한 미디어 관리가 포함된 개인 맞춤형 강의실로 바꿉니다.",
        app_lumina_desc: "정신을 위한 세 가지 빛의 삼부작. 명확한 글쓰기(Note)부터 방해 없는 독서(Books), 그리고 스쳐가는 아이디어의 포착(Vignettes)까지.",
        app_prokvote_desc: "투명한 실시간 투표로 공동체에 힘을 실어줍니다. 공정함을 위해 설계된 안전한 플랫폼으로, 중요한 순간에 모든 목소리가 전달되도록 보장합니다.",
        badge_growth: "성장",
        badge_wisdom: "지혜",
        badge_connection: "연결",
        download_soon: "2026년 여름 출시 예정",
        phi_tag: "핵심 가치",
        phi_title: "진심을 담은 디자인",
        val_1_title: "사용자 중심",
        val_1_desc: "숫자보다 사용자의 웰빙을 최우선으로 생각합니다. 눈속임 없는 순수한 유용성을 지향합니다.",
        val_2_title: "미적 조화",
        val_2_desc: "깨끗한 디지털 공간이 깨끗한 마음을 만듭니다. 우리는 모든 픽셀에 집착합니다.",
        val_3_title: "지속 가능한 성장",
        val_3_desc: "당신과 함께 진화하며, 스스로 최고의 모습이 될 수 있도록 돕는 도구를 만듭니다.",
        footer_copy: "이롭고 행복한 세상을 만듭니다."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Translation Logic ---
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Button Active State
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Save preference
        localStorage.setItem('preferredLang', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Load saved language or default to 'en'
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);


    // --- Original Animations & Interactions ---
    const fadeElems = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElems.forEach(elem => {
        appearOnScroll.observe(elem);
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '5px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    setTimeout(() => {
        fadeElems.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('appear');
            }
        });
    }, 100);
});
