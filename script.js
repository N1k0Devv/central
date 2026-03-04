// ============================================
// CENTRAL HOTEL KUTAISI - PREMIUM JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Preloader ----------
    const preloader = document.getElementById('preloader');
    setTimeout(function () {
        preloader.classList.add('hidden');
    }, 800);

    // ---------- Content Refresh ----------
    const mapUrl = 'https://maps.app.goo.gl/8KS8979kN33KCUDH6';
    const hotelsUrl = 'https://www.hotels.com/ho3363967936/central-hotel-kutaisi-kutaisi-georgia/';
    const iconStar = '\u2605';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasGsapMotion = !prefersReducedMotion && typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
    const hasGsapScroll = hasGsapMotion && typeof window.ScrollToPlugin !== 'undefined';
    const hasLenis = typeof window.Lenis !== 'undefined' && !prefersReducedMotion;
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');

    const navBookBtn = document.querySelector('.nav-book-btn');
    if (navBookBtn) {
        navBookBtn.textContent = 'View Details';
        navBookBtn.setAttribute('href', '#contact');
    }

    document.title = 'Central Hotel Kutaisi | City Centre Stay in Kutaisi';

    const heroParallaxElement = document.querySelector('.hero-parallax');
    if (heroParallaxElement) {
        heroParallaxElement.style.backgroundImage = "url('images/64017f6d.avif')";
    }

    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.textContent = 'City Centre Stay';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'A central Kutaisi stay with free breakfast, free WiFi, free parking, and quick access to the city\'s main sights';
    }

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) {
        heroButtons[0].textContent = 'See Rooms';
        heroButtons[0].setAttribute('href', '#rooms');
    }
    if (heroButtons[1]) {
        heroButtons[1].textContent = 'View on Maps';
        heroButtons[1].setAttribute('href', mapUrl);
        heroButtons[1].setAttribute('target', '_blank');
        heroButtons[1].setAttribute('rel', 'noreferrer');
    }

    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        aboutImage.src = 'images/005951fd.avif';
        aboutImage.alt = 'Central Hotel reception';
    }

    const expNumber = document.querySelector('.exp-number');
    if (expNumber) {
        expNumber.setAttribute('data-target', '12');
        expNumber.textContent = '0';
    }

    const expText = document.querySelector('.exp-text');
    if (expText) {
        expText.innerHTML = 'Tbilisi<br>Street';
    }

    const aboutTitle = document.querySelector('.about-content .section-title');
    if (aboutTitle) {
        aboutTitle.innerHTML = 'A Practical City-Centre<br>Base in Kutaisi';
    }

    const aboutText = document.querySelectorAll('.about-text');
    if (aboutText[0]) {
        aboutText[0].textContent = 'Central Hotel is a city-centre property in Kutaisi with an on-site restaurant and a straightforward location for short stays, stopovers, and quick city visits.';
    }
    if (aboutText[1]) {
        aboutText[1].textContent = 'The saved listing places the hotel close to Kutaisi State Historical Museum and about a 14-minute walk from Bagrati Cathedral, while the Google Maps listing points to 12 Tbilisi Street in central Kutaisi.';
    }

    const statNumbers = document.querySelectorAll('.about-stats .stat-number');
    const statLabels = document.querySelectorAll('.about-stats .stat-label');
    const statTargets = ['7', '3', '24'];
    const statText = ['Recent Reviews', 'Free Perks', 'Hour Front Desk'];
    statNumbers.forEach(function (stat, index) {
        if (statTargets[index]) {
            stat.setAttribute('data-target', statTargets[index]);
            stat.textContent = '0';
        }
    });
    statLabels.forEach(function (label, index) {
        if (statText[index]) {
            label.textContent = statText[index];
        }
    });

    const roomsSubtitle = document.querySelector('.rooms-section .section-subtitle');
    if (roomsSubtitle) {
        roomsSubtitle.textContent = 'The current property listing focuses on comfort-forward rooms with fireplaces, soundproofing, premium bedding, and free WiFi.';
    }

    const roomCardsContent = [
        {
            image: 'images/259d634a.avif',
            alt: 'Elite Room',
            action: 'Contact',
            badge: '1 Bedroom',
            title: 'Elite Room',
            desc: 'A one-bedroom room type shown in the property listing, paired with a fireplace, free WiFi, and a separate dining area.',
            features: [
                iconStar + ' Fireplace',
                iconStar + ' Free WiFi',
                iconStar + ' Dining Area',
                iconStar + ' Private Bathroom'
            ]
        },
        {
            image: 'images/1c977cc4.avif',
            alt: 'Premium bedding and Select Comfort mattress',
            action: 'Contact',
            badge: 'Sleep Focused',
            title: 'Comfort Setup',
            desc: 'Room details call out soundproofing, premium bedding, Select Comfort mattresses, and a minibar for a quieter overnight stay.',
            features: [
                iconStar + ' Soundproofed',
                iconStar + ' Premium Bedding',
                iconStar + ' Select Comfort Bed',
                iconStar + ' Minibar'
            ]
        },
        {
            image: 'images/2876c5ef.avif',
            alt: 'In-room slippers',
            action: 'Contact',
            badge: 'Included',
            title: 'Guest Essentials',
            desc: 'The listing also highlights practical extras such as slippers, free bottled water, housekeeping on request, and everyday comfort touches.',
            features: [
                iconStar + ' Slippers',
                iconStar + ' Bottled Water',
                iconStar + ' Housekeeping',
                iconStar + ' Exterior Access'
            ]
        }
    ];

    const roomCardsForContent = document.querySelectorAll('.room-card');
    roomCardsForContent.forEach(function (card, index) {
        const content = roomCardsContent[index];
        if (!content) {
            return;
        }

        const roomImg = card.querySelector('img');
        const roomAction = card.querySelector('.room-image-overlay .btn');
        const roomBadge = card.querySelector('.room-price');
        const roomName = card.querySelector('.room-name');
        const roomDesc = card.querySelector('.room-desc');
        const roomFeatureItems = card.querySelectorAll('.room-feature');

        if (roomImg) {
            roomImg.src = content.image;
            roomImg.alt = content.alt;
        }
        if (roomAction) {
            roomAction.textContent = content.action;
        }
        if (roomBadge) {
            roomBadge.textContent = content.badge;
        }
        if (roomName) {
            roomName.textContent = content.title;
        }
        if (roomDesc) {
            roomDesc.textContent = content.desc;
        }
        roomFeatureItems.forEach(function (feature, featureIndex) {
            if (content.features[featureIndex]) {
                feature.textContent = content.features[featureIndex];
            }
        });
    });

    const amenitiesSubtitle = document.querySelector('.amenities-section .section-subtitle');
    if (amenitiesSubtitle) {
        amenitiesSubtitle.textContent = 'These are the practical perks highlighted in the current property listing.';
    }

    const amenitiesContent = [
        ['Free Breakfast', 'Free daily buffet breakfast is included each morning.'],
        ['Free WiFi', 'Complimentary WiFi is listed as available throughout the property.'],
        ['On-Site Restaurant', 'The hotel includes a restaurant for convenient meals on site.'],
        ['24-Hour Front Desk', 'Late arrivals and guest questions can be handled at any hour.'],
        ['Free Parking', 'Free self parking is available on site.'],
        ['Soundproofed Rooms', 'Room details emphasize quieter stays with soundproofing.'],
        ['Fireplaces', 'Guest rooms include a fireplace feature in the current listing.'],
        ['Housekeeping on Request', 'Room freshening is available when needed.']
    ];

    const amenityCards = document.querySelectorAll('.amenity-card');
    amenityCards.forEach(function (card, index) {
        const content = amenitiesContent[index];
        if (!content) {
            return;
        }

        const title = card.querySelector('.amenity-name');
        const desc = card.querySelector('.amenity-desc');
        if (title) {
            title.textContent = content[0];
        }
        if (desc) {
            desc.textContent = content[1];
        }
    });

    const gallerySubtitle = document.querySelector('.gallery-section .section-subtitle');
    if (gallerySubtitle) {
        gallerySubtitle.textContent = 'Real property photos from the local image folder.';
    }

    const galleryContent = [
        ['images/64017f6d.avif', 'Central Hotel exterior', 'Exterior'],
        ['images/005951fd.avif', 'Reception area', 'Reception'],
        ['images/a18c5dd2.avif', 'Hotel restaurant', 'Restaurant'],
        ['images/259d634a.avif', 'Elite room', 'Elite Room'],
        ['images/7ac8cb18.webp', 'Free daily buffet breakfast', 'Buffet Breakfast'],
        ['images/fa61e82e.webp', 'Reception lounge', 'Reception Lounge']
    ];

    const galleryItemsForContent = document.querySelectorAll('.gallery-item');
    galleryItemsForContent.forEach(function (item, index) {
        const content = galleryContent[index];
        if (!content) {
            return;
        }

        const img = item.querySelector('img');
        const label = item.querySelector('.gallery-label');
        if (img) {
            img.src = content[0];
            img.alt = content[1];
        }
        if (label) {
            label.textContent = content[2];
        }
    });

    const diningParallaxElement = document.querySelector('.dining-parallax');
    if (diningParallaxElement) {
        diningParallaxElement.style.backgroundImage = "url('images/7ac8cb18.webp')";
    }

    const diningTag = document.querySelector('.dining-text .section-tag');
    const diningTitle = document.querySelector('.dining-text .section-title');
    const diningDesc = document.querySelector('.dining-desc');
    const diningFeatures = document.querySelectorAll('.dining-feature');
    const diningButton = document.querySelector('.dining-text .btn');

    if (diningTag) {
        diningTag.textContent = 'Included Dining';
    }
    if (diningTitle) {
        diningTitle.textContent = 'Breakfast & Restaurant';
    }
    if (diningDesc) {
        diningDesc.textContent = 'The current listing highlights a free daily buffet breakfast and an on-site restaurant, making the hotel a practical option for early starts, short stays, and quick city breaks.';
    }

    const diningContent = [
        ['Buffet Breakfast', 'Included each morning as part of the stay'],
        ['On-Site Restaurant', 'Easy meals without leaving the property'],
        ['Walkable Centre', 'Set on Tbilisi Street near central Kutaisi landmarks']
    ];

    diningFeatures.forEach(function (feature, index) {
        const content = diningContent[index];
        if (!content) {
            return;
        }

        const heading = feature.querySelector('h4');
        const text = feature.querySelector('p');
        if (heading) {
            heading.textContent = content[0];
        }
        if (text) {
            text.textContent = content[1];
        }
    });

    if (diningButton) {
        diningButton.textContent = 'Open in Google Maps';
        diningButton.setAttribute('href', mapUrl);
        diningButton.setAttribute('target', '_blank');
        diningButton.setAttribute('rel', 'noreferrer');
    }

    const testimonialHeaderTag = document.querySelector('.testimonials-section .section-tag');
    const testimonialHeaderTitle = document.querySelector('.testimonials-section .section-title');
    if (testimonialHeaderTag) {
        testimonialHeaderTag.textContent = 'Stay Snapshot';
    }
    if (testimonialHeaderTitle) {
        testimonialHeaderTitle.textContent = 'Useful Guest Notes';
    }

    const testimonialContent = [
        ['Location', 'City-centre location with a short 6-minute walk to Kutaisi State Historical Museum and about 14 minutes on foot to Bagrati Cathedral.', 'WB', 'Walkable Base', 'Near key landmarks'],
        ['Hours', 'Check-in starts at 2:00 PM, late check-in runs until midnight, and check-out is at noon.', 'AW', 'Arrival Window', 'Property policy'],
        ['Rooms', 'Room details include fireplaces, soundproofing, premium bedding, Select Comfort mattresses, and free WiFi.', 'CN', 'Comfort Notes', 'Room amenities'],
        ['Perks', 'Breakfast, WiFi, and parking are included, supported by an on-site restaurant and a 24-hour front desk.', 'IE', 'Included Extras', 'Hotel highlights']
    ];

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(function (card, index) {
        const content = testimonialContent[index];
        if (!content) {
            return;
        }

        const label = card.querySelector('.testimonial-stars');
        const text = card.querySelector('.testimonial-text');
        const avatar = card.querySelector('.testimonial-avatar');
        const name = card.querySelector('.testimonial-name');
        const origin = card.querySelector('.testimonial-origin');

        if (label) {
            label.textContent = content[0];
        }
        if (text) {
            text.textContent = content[1];
        }
        if (avatar) {
            avatar.textContent = content[2];
        }
        if (name) {
            name.textContent = content[3];
        }
        if (origin) {
            origin.textContent = content[4];
        }
    });

    const contactTag = document.querySelector('.contact-section .section-tag');
    const contactTitle = document.querySelector('.contact-section .section-title');
    if (contactTag) {
        contactTag.textContent = 'Find the Hotel';
    }
    if (contactTitle) {
        contactTitle.textContent = 'Location & Stay Details';
    }

    const contactCards = document.querySelectorAll('.contact-info-card');
    if (contactCards[0]) {
        const title = contactCards[0].querySelector('h4');
        const text = contactCards[0].querySelector('p');
        if (title) {
            title.textContent = 'Address';
        }
        if (text) {
            text.innerHTML = '12 Tbilisi St<br>Kutaisi, Georgia<br><a href="' + mapUrl + '" target="_blank" rel="noreferrer">Open in Google Maps</a>';
        }
    }
    if (contactCards[1]) {
        const title = contactCards[1].querySelector('h4');
        const text = contactCards[1].querySelector('p');
        if (title) {
            title.textContent = 'Guest Score';
        }
        if (text) {
            text.innerHTML = '9.8/10 on the saved Hotels.com listing<br>Based on 7 guest reviews';
        }
    }
    if (contactCards[2]) {
        const title = contactCards[2].querySelector('h4');
        const text = contactCards[2].querySelector('p');
        if (title) {
            title.textContent = 'Nearby';
        }
        if (text) {
            text.innerHTML = '6 min walk to Kutaisi State Historical Museum<br>14 min walk to Bagrati Cathedral';
        }
    }
    if (contactCards[3]) {
        const title = contactCards[3].querySelector('h4');
        const text = contactCards[3].querySelector('p');
        if (title) {
            title.textContent = 'Check-In & Check-Out';
        }
        if (text) {
            text.innerHTML = 'Check-in: 2:00 PM to midnight<br>Check-out: noon';
        }
    }

    const contactMapWrapper = document.querySelector('.contact-form-wrapper');
    if (contactMapWrapper) {
        contactMapWrapper.innerHTML = [
            '<div class="contact-map-card">',
            '    <h3 class="form-title">Find Central Hotel</h3>',
            '    <p class="contact-map-lead">Use the live map to preview the exact spot on Tbilisi Street, then open Google Maps for directions or the current hotel listing for fresh details.</p>',
            '    <div class="contact-map-frame">',
            '        <iframe',
            '            src="https://www.google.com/maps?q=Central%20Hotel%2C%2012%20Tbilisi%20St%2C%20Kutaisi%2C%20Georgia&output=embed"',
            '            loading="lazy"',
            '            referrerpolicy="no-referrer-when-downgrade"',
            '            title="Map of Central Hotel Kutaisi">',
            '        </iframe>',
            '    </div>',
            '    <div class="contact-map-actions">',
            '        <a href="' + mapUrl + '" class="btn btn-primary btn-sm" target="_blank" rel="noreferrer">Open Google Maps</a>',
            '        <a href="' + hotelsUrl + '" class="btn btn-outline btn-sm" target="_blank" rel="noreferrer">Open Listing</a>',
            '    </div>',
            '</div>'
        ].join('');
    }

    const footerDesc = document.querySelector('.footer-desc');
    if (footerDesc) {
        footerDesc.textContent = 'Central Hotel Kutaisi is a city-centre stay on Tbilisi Street with free breakfast, free WiFi, free parking, and an on-site restaurant.';
    }

    const socialLinks = document.querySelectorAll('.footer-social .social-link');
    if (socialLinks[0]) {
        socialLinks[0].setAttribute('href', mapUrl);
        socialLinks[0].setAttribute('target', '_blank');
        socialLinks[0].setAttribute('rel', 'noreferrer');
        socialLinks[0].setAttribute('aria-label', 'Google Maps');
    }
    if (socialLinks[1]) {
        socialLinks[1].setAttribute('href', hotelsUrl);
        socialLinks[1].setAttribute('target', '_blank');
        socialLinks[1].setAttribute('rel', 'noreferrer');
        socialLinks[1].setAttribute('aria-label', 'Hotels.com');
    }

    const quickLinksList = document.querySelector('.footer-grid .footer-col:nth-child(2) .footer-links');
    if (quickLinksList) {
        const quickLinks = quickLinksList.querySelectorAll('a');
        if (quickLinks[3]) {
            quickLinks[3].textContent = 'Breakfast & Dining';
        }
    }

    const newsletterText = document.querySelector('.footer-newsletter-text');
    if (newsletterText) {
        newsletterText.textContent = 'Subscribe for updates, then verify current availability on the live listing pages.';
    }

    const awardBadges = document.querySelectorAll('.award-badge');
    if (awardBadges[0]) {
        awardBadges[0].textContent = 'Breakfast Included';
    }
    if (awardBadges[1]) {
        awardBadges[1].textContent = 'Parking Included';
    }

    // ---------- Navbar Scroll Effect ----------
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section, .hero-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function handleNavScroll() {
        if (!navbar) {
            return;
        }

        if (getScrollPosition() > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ---------- Active Nav Link on Scroll ----------
    function updateActiveLink() {
        var currentScroll = getScrollPosition();
        let current = '';
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;
            if (currentScroll >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // ---------- Hamburger Menu ----------
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');

    function setMobileMenuState(isOpen) {
        if (!hamburger || !navLinksContainer) {
            return;
        }

        hamburger.classList.toggle('active', isOpen);
        navLinksContainer.classList.toggle('active', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

        if (smoothScroller) {
            if (isOpen) {
                smoothScroller.stop();
            } else {
                smoothScroller.start();
            }
        }
    }

    if (hamburger && navLinksContainer) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');

        hamburger.addEventListener('click', function () {
            setMobileMenuState(!navLinksContainer.classList.contains('active'));
        });

        navLinksContainer.addEventListener('click', function (event) {
            if (event.target === navLinksContainer) {
                setMobileMenuState(false);
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && navLinksContainer.classList.contains('active')) {
                setMobileMenuState(false);
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768 && navLinksContainer.classList.contains('active')) {
                setMobileMenuState(false);
            }
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            setMobileMenuState(false);
        });
    });

    // ---------- Smooth Scroll Engine ----------
    let smoothScroller = null;

    function defaultEase(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function getScrollPosition() {
        if (smoothScroller) {
            if (typeof smoothScroller.animatedScroll === 'number') {
                return smoothScroller.animatedScroll;
            }

            if (typeof smoothScroller.scroll === 'number') {
                return smoothScroller.scroll;
            }
        }

        return window.scrollY || window.pageYOffset || 0;
    }

    function updateScrollProgress() {
        if (!scrollProgress || hasGsapMotion) {
            return;
        }

        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        var progress = maxScroll > 0 ? getScrollPosition() / maxScroll : 0;
        var clampedProgress = Math.max(0, Math.min(progress, 1));
        scrollProgress.style.transform = 'scaleX(' + clampedProgress + ')';
    }

    function scrollToTarget(target, offset) {
        var topOffset = typeof offset === 'number' ? offset : -80;

        if (smoothScroller) {
            smoothScroller.scrollTo(target, {
                offset: topOffset,
                duration: 1.35,
                easing: defaultEase,
                lock: false
            });
            return;
        }

        if (typeof target === 'number') {
            if (hasGsapScroll) {
                window.gsap.to(window, {
                    duration: 1.15,
                    scrollTo: {
                        y: Math.max(0, target),
                        autoKill: true
                    },
                    ease: 'power3.inOut'
                });
            } else {
                window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
            }
            return;
        }

        if (target) {
            var computedTop = target.offsetTop + topOffset;
            if (hasGsapScroll) {
                window.gsap.to(window, {
                    duration: 1.15,
                    scrollTo: {
                        y: Math.max(0, computedTop),
                        autoKill: true
                    },
                    ease: 'power3.inOut'
                });
            } else {
                window.scrollTo({ top: Math.max(0, computedTop), behavior: 'smooth' });
            }
        }
    }

    if (hasLenis) {
        smoothScroller = new window.Lenis({
            lerp: 0.085,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.1
        });

        smoothScroller.on('scroll', function () {
            syncScrollEffects();
        });

        if (!hasGsapMotion) {
            function lenisRaf(time) {
                smoothScroller.raf(time);
                requestAnimationFrame(lenisRaf);
            }

            requestAnimationFrame(lenisRaf);
        }
    }

    // ---------- Parallax Effect ----------
    const heroParallax = document.querySelector('.hero-parallax');
    const diningParallax = document.querySelector('.dining-parallax');

    function handleParallax() {
        if (hasGsapMotion) {
            return;
        }
        const scrollY = getScrollPosition();
        if (heroParallax) {
            heroParallax.style.transform = 'translateY(' + scrollY * 0.25 + 'px) scale(1.02)';
        }
        if (diningParallax) {
            const diningSection = document.querySelector('.dining-section');
            const diningTop = diningSection.offsetTop;
            const diningOffset = scrollY - diningTop;
            if (diningOffset > -window.innerHeight && diningOffset < diningSection.offsetHeight) {
                diningParallax.style.transform = 'translateY(' + diningOffset * 0.15 + 'px) scale(1.02)';
            }
        }
    }

    // ---------- Scroll Reveal Animations ----------
    // Select all reveal elements; we no longer exclude any major blocks so that
    // the site still displays correctly even if GSAP fails to load.
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    if (hasGsapMotion) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        if (window.ScrollToPlugin) {
            window.gsap.registerPlugin(window.ScrollToPlugin);
        }

        if (smoothScroller) {
            smoothScroller.on('scroll', window.ScrollTrigger.update);
            window.gsap.ticker.add(function (time) {
                smoothScroller.raf(time * 1000);
            });
            window.gsap.ticker.lagSmoothing(0);
            window.ScrollTrigger.addEventListener('refresh', function () {
                if (typeof smoothScroller.resize === 'function') {
                    smoothScroller.resize();
                }
            });
        }

        var heroTimeline = window.gsap.timeline({
            defaults: {
                ease: 'power3.out'
            }
        });

        heroTimeline
            .from('#navbar', {
                y: -28,
                autoAlpha: 0,
                duration: 0.75
            }, 0)
            .from('.hero-badge', {
                y: -24,
                autoAlpha: 0,
                duration: 0.65
            }, 0.08)
            .from('.hero-title .hero-line', {
                yPercent: 120,
                autoAlpha: 0,
                duration: 0.95,
                stagger: 0.12
            }, 0.18)
            .from('.hero-subtitle', {
                y: 26,
                autoAlpha: 0,
                duration: 0.75
            }, 0.48)
            .from('.hero-buttons .btn', {
                y: 24,
                autoAlpha: 0,
                scale: 0.96,
                duration: 0.7,
                stagger: 0.1
            }, 0.62)
            .from('.hero-scroll-indicator', {
                y: 18,
                autoAlpha: 0,
                duration: 0.65
            }, 0.9);

        if (scrollProgress) {
            window.gsap.set(scrollProgress, {
                scaleX: 0,
                transformOrigin: '0% 50%'
            });

            window.gsap.to(scrollProgress, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: document.body,
                    start: 0,
                    end: 'max',
                    scrub: 0.25
                }
            });
        }

        var heroScrollIndicator = document.querySelector('.hero-scroll-indicator');
        if (heroScrollIndicator) {
            window.gsap.to(heroScrollIndicator, {
                y: 28,
                autoAlpha: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.4
                }
            });
        }

        if (heroParallax) {
            window.gsap.to(heroParallax, {
                yPercent: 18,
                scale: 1.08,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.2
                }
            });
        }

        if (diningParallax) {
            window.gsap.to(diningParallax, {
                yPercent: 12,
                scale: 1.06,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.dining-section',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.1
                }
            });
        }

        function animateGroup(selector, triggerSelector, vars) {
            var items = window.gsap.utils.toArray(selector);
            var triggerEl = document.querySelector(triggerSelector);
            var config = Object.assign({
                autoAlpha: 0,
                duration: 0.95,
                ease: 'power3.out',
                stagger: 0.12,
                clearProps: 'transform,opacity,visibility,filter'
            }, vars || {});

            if (!items.length || !triggerEl) {
                return;
            }

            delete config.start;
            config.scrollTrigger = {
                trigger: triggerEl,
                start: (vars && vars.start) || 'top 82%',
                once: true
            };

            window.gsap.from(items, config);
        }

        window.gsap.utils.toArray('.section-header').forEach(function (header) {
            var headerItems = header.querySelectorAll('.section-tag, .section-title, .gold-divider, .section-subtitle');
            if (!headerItems.length) {
                return;
            }

            window.gsap.from(headerItems, {
                y: 42,
                autoAlpha: 0,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.08,
                clearProps: 'transform,opacity,visibility',
                scrollTrigger: {
                    trigger: header,
                    start: 'top 84%',
                    once: true
                }
            });
        });
        animateGroup('.rooms-grid .room-card', '.rooms-grid', {
            y: 76,
            rotateX: 10,
            transformOrigin: '50% 100%',
            stagger: 0.14
        });
        animateGroup('.amenities-grid .amenity-card', '.amenities-grid', {
            y: 60,
            stagger: 0.08
        });
        animateGroup('.gallery-grid .gallery-item', '.gallery-grid', {
            y: 52,
            scale: 0.94,
            filter: 'blur(8px)',
            stagger: 0.1
        });
        animateGroup('.dining-text > *', '.dining-section', {
            y: 46,
            stagger: 0.1
        });
        animateGroup('.testimonials-carousel', '.testimonials-section', {
            y: 58,
            scale: 0.98,
            stagger: 0,
            start: 'top 84%'
        });
        animateGroup('.contact-info .contact-info-card', '.contact-section', {
            x: -32,
            y: 18,
            stagger: 0.1,
            start: 'top 84%'
        });
        animateGroup('.contact-form-wrapper', '.contact-section', {
            x: 40,
            y: 18,
            stagger: 0,
            start: 'top 84%'
        });
        animateGroup('.footer-grid .footer-col', '.footer', {
            y: 48,
            stagger: 0.11,
            start: 'top bottom-=40'
        });

        revealElements.forEach(function (el) {
            var offsetX = 0;
            var offsetY = 48;
            var delay = parseFloat(el.style.animationDelay || '0');
            el.classList.add('revealed');

            if (el.classList.contains('reveal-left')) {
                offsetX = -70;
                offsetY = 0;
            } else if (el.classList.contains('reveal-right')) {
                offsetX = 70;
                offsetY = 0;
            }

            window.gsap.fromTo(el, {
                autoAlpha: 0,
                x: offsetX,
                y: offsetY,
                filter: 'blur(6px)'
            }, {
                autoAlpha: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.05,
                delay: Math.min(delay, 0.35),
                ease: 'power3.out',
                clearProps: 'transform,filter,opacity,visibility',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 86%',
                    once: true
                }
            });
        });

        window.ScrollTrigger.refresh();
        window.addEventListener('load', function () {
            window.ScrollTrigger.refresh();
        }, { once: true });
    }

    function revealOnScroll() {
        if (hasGsapMotion) {
            return;
        }
        const windowHeight = window.innerHeight;
        revealElements.forEach(function (el) {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = windowHeight - 80;
            if (elementTop < revealPoint) {
                el.classList.add('revealed');
            }
        });
    }

    // ---------- Counter Animation ----------
    const counters = document.querySelectorAll('.stat-number, .exp-number');
    const counterObserverOptions = { threshold: 0.5 };
    let countersAnimated = new Set();

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2200;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easeOut * target);
            el.textContent = current;
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
                countersAnimated.add(entry.target);
                animateCounter(entry.target);
            }
        });
    }, counterObserverOptions);

    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });

    // ---------- Testimonials Carousel ----------
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    let currentSlide = 0;
    let totalSlides = 0;
    let autoSlideInterval;

    if (track) {
        const slides = track.querySelectorAll('.testimonial-card');
        totalSlides = slides.length;

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function () {
                goToSlide(i);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }

        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
            updateDots();
        }

        function updateDots() {
            var dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach(function (dot, i) {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        }

        nextBtn.addEventListener('click', function () {
            nextSlide();
            resetAutoSlide();
        });

        prevBtn.addEventListener('click', function () {
            prevSlide();
            resetAutoSlide();
        });

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        startAutoSlide();

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        track.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        track.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
                resetAutoSlide();
            } else if (touchEndX - touchStartX > 50) {
                prevSlide();
                resetAutoSlide();
            }
        }, { passive: true });
    }

    // ---------- Gallery Lightbox ----------
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    galleryItems.forEach(function (item) {
        item.style.setProperty('--glow-x', '50%');
        item.style.setProperty('--glow-y', '50%');

        item.addEventListener('mousemove', function (e) {
            if (window.innerWidth <= 768) {
                return;
            }

            var rect = item.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var rotateY = ((x - rect.width / 2) / rect.width) * 12;
            var rotateX = ((rect.height / 2 - y) / rect.height) * 12;

            item.style.setProperty('--tilt-x', rotateX.toFixed(2) + 'deg');
            item.style.setProperty('--tilt-y', rotateY.toFixed(2) + 'deg');
            item.style.setProperty('--glow-x', (x / rect.width * 100).toFixed(2) + '%');
            item.style.setProperty('--glow-y', (y / rect.height * 100).toFixed(2) + '%');
        });

        item.addEventListener('mouseleave', function () {
            item.style.setProperty('--tilt-x', '0deg');
            item.style.setProperty('--tilt-y', '0deg');
            item.style.setProperty('--glow-x', '50%');
            item.style.setProperty('--glow-y', '50%');
        });

        item.addEventListener('click', function () {
            var img = item.querySelector('img');
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (smoothScroller) {
                smoothScroller.stop();
            }
        });
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            if (smoothScroller) {
                smoothScroller.start();
            }
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            if (smoothScroller) {
                smoothScroller.start();
            }
        }
    });

    // ---------- Back to Top Button ----------
    function handleBackToTop() {
        if (!backToTop) {
            return;
        }

        if (getScrollPosition() > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    function syncScrollEffects() {
        handleNavScroll();
        updateActiveLink();
        handleParallax();
        revealOnScroll();
        handleBackToTop();
        updateScrollProgress();
    }

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            scrollToTarget(0, 0);
        });
    }

    // ---------- Contact Form ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = contactForm.querySelector('button[type="submit"]');
            var originalHTML = btn.innerHTML;
            var successHTML = '<span>Message Sent! &#10003;</span>';
            btn.innerHTML = '<span>Message Sent! ✓</span>';
            btn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
            btn.innerHTML = successHTML;
            btn.style.boxShadow = '0 8px 25px rgba(46, 204, 113, 0.3)';
            setTimeout(function () {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.style.boxShadow = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ---------- Newsletter Form ----------
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = newsletterForm.querySelector('button');
            btn.textContent = '✓';
            btn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
            btn.textContent = '\u2713';
            setTimeout(function () {
                btn.textContent = '→';
                btn.style.background = '';
                btn.textContent = '\u2192';
                newsletterForm.reset();
            }, 2500);
        });
    }

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var href = this.getAttribute('href');
            // Ignore placeholder links like "#" which do not point to a real target
            if (!href || href === '#') {
                return;
            }
            var target = document.querySelector(href);
            if (target) {
                scrollToTarget(target, -80);
            }
        });
    });

    // ---------- Scroll Event Listener (Optimized with RAF) ----------
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (smoothScroller) {
            return;
        }

        if (!ticking) {
            requestAnimationFrame(function () {
                syncScrollEffects();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial calls
    syncScrollEffects();

    // ---------- 3D Tilt Effect on Room Cards ----------
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / 25;
            var rotateY = (centerX - x) / 25;
            card.style.transform = 'translateY(-12px) perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    // ---------- Magnetic Hover on Buttons ----------
    var magneticBtns = document.querySelectorAll('.hero-buttons .btn, .nav-book-btn');
    magneticBtns.forEach(function (btn) {
        btn.addEventListener('mousemove', function (e) {
            var rect = btn.getBoundingClientRect();
            var x = e.clientX - rect.left - rect.width / 2;
            var y = e.clientY - rect.top - rect.height / 2;
            btn.style.setProperty('--magnetic-x', (x * 0.08) + 'px');
            btn.style.setProperty('--magnetic-y', (y * 0.08) + 'px');
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.setProperty('--magnetic-x', '0px');
            btn.style.setProperty('--magnetic-y', '0px');
        });
    });

    // ---------- Smooth Image Loading ----------
    var allImages = document.querySelectorAll('img');
    allImages.forEach(function (img) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.6s ease';
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function () {
                img.style.opacity = '1';
            });
            img.addEventListener('error', function () {
                img.style.opacity = '1';
            });
        }
    });

    // ---------- Cursor Glow on Hero ----------
    var heroSection = document.querySelector('.hero-section');
    if (heroSection && window.innerWidth > 768) {
        heroSection.addEventListener('mousemove', function (e) {
            var rect = heroSection.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            heroSection.style.setProperty('--mouse-x', x + 'px');
            heroSection.style.setProperty('--mouse-y', y + 'px');
        });
    }

});
