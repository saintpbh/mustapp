const translations = {
    en: {
        hero_title: "The Architecture of Inevitability",
        hero_subtitle: "Crafting digital necessities that empower humanity to evolve, thrive, and find collective happiness.",
        hero_btn_primary: "Explore Necessity",
        vision_tag: "The Philosophy",
        vision_title: "Beyond Marketing: Pure Enlightenment.",
        vision_desc: "Technology is either a distraction or a catalyst. At YouMustApp, we filter the noise of the digital age to create tools that are as essential as the air we breathe.",
        apps_title: "Digital Ecosystem",
        apps_tag: "A trilogy of human advancement.",
        app_mustapp_desc: "Synthesizing understanding through immersive shadowing. Technology that expands the mind's horizon.",
        app_lumina_desc: "The clarity of thought, refined. A digital sanctuary for knowledge architecture and deep focus.",
        app_prokvote_desc: "Decentralizing trust through real-time democratic integrity. Ensuring every voice resonates in the void.",
        badge_growth: "Growth",
        badge_wisdom: "Wisdom",
        badge_connection: "Connection",
        poem_1: "Design as a necessity.",
        poem_2: "Technology as a bridge.",
        poem_3: "Humanity as the core.",
        poem_4: "YOU MUST EVOLVE.",
        footer_copy: "Designing a better world through essential utility."
    },
    ko: {
        hero_title: "필연의 아키텍처",
        hero_subtitle: "인류가 진화하고, 번창하며, 집단적 행복을 찾을 수 있도록 돕는 디지털 필수품을 설계합니다.",
        hero_btn_primary: "필연성 탐구하기",
        vision_tag: "철학",
        vision_title: "마케팅을 넘어선 순수한 계몽",
        vision_desc: "기술은 산만함이거나 촉매제입니다. YouMustApp은 디지털 시대의 소음을 필터링하여 우리가 숨 쉬는 공기만큼 필수적인 도구를 만듭니다.",
        apps_title: "디지털 에코시스템",
        apps_tag: "인류 발전을 위한 세 가지 빛.",
        app_mustapp_desc: "몰입형 쉐도잉을 통한 이해의 합성. 마음의 지평을 넓히는 기술.",
        app_lumina_desc: "정제된 생각의 명료함. 지식 구조화와 깊은 집중을 위한 디지털 안식처.",
        app_prokvote_desc: "실시간 민주적 무결성을 통한 신뢰의 분권화. 모든 목소리가 공허 속에서 울려 퍼지도록 보장합니다.",
        badge_growth: "성장",
        badge_wisdom: "지혜",
        badge_connection: "연결",
        poem_1: "필수로서의 디자인.",
        poem_2: "가교로서의 기술.",
        poem_3: "핵심으로서의 인류.",
        poem_4: "당신은 반드시 진화해야 합니다.",
        footer_copy: "필수적인 유용성을 통해 더 나은 세상을 디자인합니다."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Experience: Three.js Nebula/Fluid Background
    const initThree = () => {
        const canvas = document.querySelector('#main-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 5;

        // Create a morphing "Necessary Sphere"
        const geometry = new THREE.IcosahedronGeometry(2, 6);
        const material = new THREE.MeshNormalMaterial({
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Ambient particles
        const pCount = 500;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 15;
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({ size: 0.02, color: 0x5D5FEF, transparent: true, opacity: 0.5 });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            sphere.rotation.y = elapsedTime * 0.15;
            sphere.rotation.x = elapsedTime * 0.1;

            // Sphere pulse
            const scale = 1 + Math.sin(elapsedTime * 0.5) * 0.1;
            sphere.scale.set(scale, scale, scale);

            // Follow mouse
            gsap.to(camera.position, {
                x: mouseX * 2,
                y: -mouseY * 2,
                duration: 2,
                ease: "power2.out"
            });

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };
        tick();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };
    initThree();

    // 2. High-End Scrolling: Lenis & GSAP
    const lens = new Lenis();
    lens.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lens.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // 3. Narrative Motion: GSAP Scrollytelling
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entrance
    const heroTl = gsap.timeline();
    heroTl.from(".logo-y, .logo-m, .logo-a", { y: -20, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" })
        .from(".kinetic-text", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=0.6")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".cta-liquid", { scale: 0.9, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

    // Bento Scroll Parallax
    gsap.from(".main-vision", {
        scrollTrigger: {
            trigger: "#vision",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
        },
        y: 100,
        opacity: 0,
    });

    // Poem Section Reveal
    gsap.utils.toArray(".poem-line").forEach((line, i) => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "expo.out"
        });
    });

    // Haptic Card Interaction
    const cards = document.querySelectorAll('.haptic-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = card;
            const x = (offsetX / clientWidth) - 0.5;
            const y = (offsetY / clientHeight) - 0.5;
            gsap.to(card.querySelector('.card-background img'), {
                x: x * 40,
                y: y * 40,
                scale: 1.15,
                duration: 0.8,
                ease: "power2.out"
            });
            gsap.to(card, {
                rotateY: x * 15,
                rotateX: -y * 15,
                duration: 0.8,
                ease: "power2.out"
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.card-background img'), { x: 0, y: 0, scale: 1, duration: 1 });
            gsap.to(card, { rotateY: 0, rotateX: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        });
    });

    // 4. Custom Liquid Cursor
    const cursor = document.querySelector('#liquid-cursor');
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.15,
            ease: "power2.out"
        });
    });

    document.querySelectorAll('a, button, .haptic-card').forEach(el => {
        el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 5, backgroundColor: "rgba(93, 95, 239, 0.2)", duration: 0.3 }));
        el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, backgroundColor: "#f8fafc", duration: 0.3 }));
    });

    // 5. Intelligent Language System
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        langBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
        localStorage.setItem('preferredLang', lang);
    }

    langBtns.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang'))));
    setLanguage(localStorage.getItem('preferredLang') || 'en');
});
