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
    // --- 1. Three.js Particle Background ---
    const initThree = () => {
        const canvas = document.querySelector('#bg-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 3;

        // Particles
        const particlesGeometry = new THREE.SphereGeometry(1, 64, 64);
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: '#4f46e5',
            transparent: true,
            opacity: 0.6
        });

        // Create random points
        const count = 3000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const points = new THREE.Points(geometry, particlesMaterial);
        scene.add(points);

        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        const animate = () => {
            points.rotation.y += 0.001;
            points.rotation.x += 0.0005;

            // Subtle mouse interaction
            gsap.to(points.rotation, {
                x: mouseY * 0.2,
                y: mouseX * 0.2,
                duration: 2,
                ease: "power2.out"
            });

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };
    initThree();

    // --- 2. GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const tl = gsap.timeline();
    tl.from("#navbar", { y: -100, opacity: 0, duration: 1, ease: "expo.out" })
        .from("#hero h1", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=0.5")
        .from("#hero p", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .from(".hero-btns", { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

    // Feature Rows Scroll Animation
    gsap.utils.toArray(".feature-row").forEach((row, i) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 85%",
            },
            x: i % 2 === 0 ? 100 : -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        });
    });

    // Philosophy Section Animation
    gsap.from(".value-list li", {
        scrollTrigger: {
            trigger: ".value-list",
            start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Glass Orb Hover Effect
    const orb = document.querySelector('.glass-orb');
    if (orb) {
        orb.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;
            gsap.to(orb, {
                x: xPos * 50,
                y: yPos * 50,
                rotateX: -yPos * 30,
                rotateY: xPos * 30,
                duration: 0.6,
                ease: "power2.out"
            });
        });
        orb.addEventListener('mouseleave', () => {
            gsap.to(orb, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        });
    }

    // --- 3. Custom Cursor Logic ---
    const cursor = document.querySelector('#custom-cursor');
    const blur = document.querySelector('#cursor-blur');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0, });
        gsap.to(blur, { x: e.clientX - 16, y: e.clientY - 16, duration: 0.15 });
    });

    document.querySelectorAll('a, button, .app-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 4, opacity: 0.2, duration: 0.3 });
            gsap.to(blur, { scale: 1.5, borderColor: '#4f46e5', duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
            gsap.to(blur, { scale: 1, borderColor: '#4f46e5', duration: 0.3 });
        });
    });

    // --- 4. i18n Logic ---
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('preferredLang', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            gsap.to(navbar, { padding: "5px 0", backgroundColor: "rgba(255, 255, 255, 0.9)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", duration: 0.4 });
        } else {
            gsap.to(navbar, { padding: "15px 0", backgroundColor: "rgba(255, 255, 255, 0.8)", boxShadow: "none", duration: 0.4 });
        }
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, { duration: 1, scrollTo: target.offsetTop, ease: "power3.inOut" });
            }
        });
    });
});
