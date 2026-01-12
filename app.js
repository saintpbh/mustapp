const translations = {
    ko: {
        nav_brand: "YouMustApp",
        nav_contact: "Contact",
        hero_line1: "You Must Achieve",
        hero_line2: "Pure Purpose",
        problem_title: "우리는 도구의 무게에<br>짓눌려 살고 있습니다.",
        problem_desc: "산재한 앱, 끊임없는 알림, 복잡한 기능들.<br>도구가 목적을 압도하는 시대입니다.",
        solution_title: "도구는 거들 뿐,<br>본질은 당신의 <strong>목적</strong>입니다.",
        apps_label: "Selected Works",
        tag_growth: "Growth",
        tag_wisdom: "Wisdom",
        tag_connection: "Connection",
        mustapp_desc: "몰입형 쉐도잉을 통한 언어와 지식의 체득. 마음의 지평을 넓히는 가장 순수한 학습 도구.",
        lumina_desc: "정제된 생각의 명료함. 지식 구조화와 깊은 집중을 위한 디지털 안식처.",
        prok_desc: "실시간 민주적 무결성을 통한 신뢰의 분권화. 모든 목소리가 울려 퍼지는 공간.",
        outro_title: "당신의 본질을 위해,",
        outro_btn: "앱 살펴보기"
    },
    en: {
        nav_brand: "YouMustApp",
        nav_contact: "Contact",
        hero_line1: "You Must Achieve",
        hero_line2: "Pure Purpose",
        problem_title: "We are being crushed<br>by the weight of our tools.",
        problem_desc: "Scattered apps, constant notifications, complex features.<br>An era where tools overwhelm their purpose.",
        solution_title: "Tools only support,<br>the essence is your <strong>Purpose</strong>.",
        apps_label: "Selected Works",
        tag_growth: "Growth",
        tag_wisdom: "Wisdom",
        tag_connection: "Connection",
        mustapp_desc: "Mastering language and knowledge through immersive shadowing. The purest tool to expand your mind.",
        lumina_desc: "Clarity of refined thought. A digital sanctuary for knowledge architecture and deep focus.",
        prok_desc: "Decentralizing trust through real-time democratic integrity. A space where every voice resonates.",
        outro_title: "For your pure essence,",
        outro_btn: "Explore Apps"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 0. Language Switching Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        // Smooth transition
        gsap.to(translatableElements, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                translatableElements.forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang] && translations[lang][key]) {
                        el.innerHTML = translations[lang][key];
                    }
                });
                gsap.to(translatableElements, { opacity: 1, duration: 0.3 });
            }
        });

        langBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
        localStorage.setItem('preferredLang', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Set initial language
    const savedLang = localStorage.getItem('preferredLang') || 'ko';
    // Skip initial fade for the first load
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[savedLang] && translations[savedLang][key]) {
            el.innerHTML = translations[savedLang][key];
        }
    });
    langBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === savedLang));
    // 1. Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Custom Cursor Logic
    const cursor = document.querySelector('#custom-cursor');
    const follower = document.querySelector('#cursor-follower');

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
    });

    // 3. Narrative Animations (GSAP)
    gsap.registerPlugin(ScrollTrigger);

    // Navigation Visibility
    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            const nav = document.querySelector('#nav-system');
            if (self.direction === 1) { // Scrolling down
                nav.classList.add('visible');
            } else if (self.scroll() < 100) {
                nav.classList.remove('visible');
            }
        }
    });

    // SECTION 1: HERO -> Expand text on scroll
    gsap.to('.hero-text', {
        opacity: 1,
        scale: 1.1,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    });

    // SECTION 2: THE PROBLEM -> Falling Icons
    const fallingContainer = document.querySelector('#falling-container');
    const iconStyles = ['📱', '💬', '🔔', '📧', '🚀', '⭐', '🔥', '💎'];

    for (let i = 0; i < 40; i++) {
        const icon = document.createElement('div');
        icon.className = 'falling-icon';
        icon.textContent = iconStyles[Math.floor(Math.random() * iconStyles.length)];
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `-100px`;
        fallingContainer.appendChild(icon);

        gsap.fromTo(icon,
            { y: 0, opacity: 0 },
            {
                y: window.innerHeight + 200,
                opacity: 0.4,
                rotate: Math.random() * 360,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                ease: 'none',
                delay: Math.random() * 5,
                scrollTrigger: {
                    trigger: '#problem',
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play pause resume pause'
                }
            }
        );
    }

    // SECTION 3: THE SOLUTION -> Converge to Point
    const solutionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#solution',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
        }
    });

    solutionTl.from('.solution-title', { opacity: 0, y: 50 })
        .from('.glowing-point', { scale: 0, opacity: 0 }, '-=0.5');

    // SECTION 4: A.P.P DEFINITION -> Flow
    const defItems = document.querySelectorAll('.def-item');
    defItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 40%',
                scrub: 1,
            }
        });
    });

    // SECTION 5: APPS -> Entrance
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                scrub: 1,
            }
        });
    });

    // Initial Entrance
    gsap.to('.hero-text', { opacity: 1, scale: 1, duration: 2, ease: 'expo.out' });
});
