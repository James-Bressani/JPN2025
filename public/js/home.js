const homePageContainer = document.getElementById('home-page');

// --- SVG ICONS (Minimalist & Sleek) ---
// Using global helpers from data.js: getIcon, getToriiGate, etc.

// --- RENDER FUNCTIONS ---

function renderHomePage() {
    // 1. Hero Section (Living Painting)
    const heroHTML = `
        <div id="hero-container" class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            
            <!-- Cinematic Letterboxes -->
            <div class="letterbox-bar letterbox-top"></div>
            <div class="letterbox-bar letterbox-bottom"></div>

            <!-- Layer 1: Breathing Background Image -->
            <div class="absolute inset-0 z-0 overflow-hidden">
                <img id="hero-bg" src="public/images/hero-bg.png" alt="Mount Fuji and Torii Gate" class="w-full h-full object-cover object-center animate-breathe scale-100" />
                <!-- Gradient Overlay for Text Readability -->
                <div class="absolute inset-0 bg-gradient-to-b from-night-indigo/60 via-night-indigo/20 to-night-indigo"></div>
                <div class="absolute inset-0 bg-black/20"></div>
            </div>

            <!-- Layer 2: Drifting Fog/Mist -->
            <div class="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-screen">
                <div class="absolute bottom-0 left-0 w-[200%] h-1/2 bg-gradient-to-t from-white/20 to-transparent animate-drift"></div>
            </div>

            <!-- Layer 3: Particles (Snow & Sakura) -->
            <div class="fixed inset-0 overflow-hidden pointer-events-none z-20">
                ${generateSnowflakes(50)}
                ${generatePetals(30)}
            </div>

            <!-- Hero Content -->
            <div class="relative z-30 text-center px-4 max-w-5xl mx-auto mt-10 perspective-1000">
                <div id="hero-badge" class="mb-8 opacity-0-start">
                    <span class="inline-block py-2 px-6 rounded-full border border-japan-gold/30 bg-black/20 text-japan-gold text-sm tracking-[0.4em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        Winter Season
                    </span>
                </div>
                
                <h1 id="hero-title" data-text="JAPAN" class="text-6xl md:text-9xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] opacity-0-start">
                    JAPAN
                </h1>
                <div id="hero-year" class="text-4xl md:text-6xl font-serif text-torii-red font-bold mb-8 drop-shadow-md opacity-0-start flex items-center justify-center">
                    <span>202</span>
                    <span id="year-digit" class="inline-block relative" style="width: 0.55em; perspective: 1000px;">
                        <span id="year-digit-current" class="inline-block">5</span>
                    </span>
                </div>
                
                <p id="hero-desc" class="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md opacity-0-start font-japanese" style="font-weight: 900;">
                    伝統と冬の調和
                </p>

                <!-- Decorative Japanese Text (Vertical) -->
                <div id="jp-text-left" class="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 writing-vertical font-japanese text-5xl md:text-7xl text-white/5 pointer-events-none select-none z-0 mix-blend-overlay opacity-0-start">
                    日本旅行
                </div>
                <div id="jp-text-right" class="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 writing-vertical font-japanese text-5xl md:text-7xl text-white/5 pointer-events-none select-none z-0 mix-blend-overlay opacity-0-start">
                    二千二十五年
                </div>

                <div id="hero-buttons" class="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0-start">
                    <button onclick="scrollToTimeline()" class="group relative px-10 py-5 bg-torii-red text-white font-serif font-bold tracking-wider rounded-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] border border-white/10">
                        <span class="relative z-10 flex items-center gap-3 text-lg">
                            Begin ${getIcon('arrowRight', 'w-6 h-6 group-hover:translate-x-1 transition-transform')}
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-r from-red-900 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                    
                    <a href="public/full-itinerary.html" class="group px-10 py-5 border border-white/20 text-white font-serif font-bold tracking-wider rounded-sm hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm shadow-lg">
                        View Full Itinerary
                    </a>
                </div>
            </div>

            <!-- Bottom Decoration -->
            <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-night-indigo via-night-indigo/80 to-transparent z-20"></div>
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-30">
                ${getIcon('chevronDown', 'w-10 h-10 text-white drop-shadow-lg')}
            </div>
        </div>
    `;

    // 2. Timeline Section
    const timelineHTML = `
        <div class="w-full bg-night-indigo relative z-10">
            <div id="itinerary-timeline" class="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <!-- Vertical Line -->
                <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-japan-gold/20 to-transparent md:-translate-x-1/2"></div>

                <div class="space-y-24 relative z-10">
                    ${days.map((day, index) => renderDayCard(day, index)).join('')}
                </div>
            </div>
        </div>
    `;

    // 3. Footer
    const footerHTML = `
        <footer class="py-12 text-center text-gray-500 text-sm bg-black/20 border-t border-white/5">
            <p class="font-serif tracking-widest">JAPAN 2025-26 • WINTER</p>
        </footer>
    `;

    homePageContainer.innerHTML = heroHTML + timelineHTML + footerHTML;

    // Initialize Animations
    initScrollObserver();
    initCinematicEntrance();
    initParallax();
}

// --- ANIMATION LOGIC ---

function initCinematicEntrance() {
    // 1. Open Letterboxes & Start Ken Burns (0.5s delay)
    setTimeout(() => {
        document.querySelectorAll('.letterbox-bar').forEach(el => el.classList.add('letterbox-open'));
        document.getElementById('hero-bg').classList.add('animate-ken-burns');
    }, 500);

    // 2. Title Entrance (1.5s)
    setTimeout(() => {
        const title = document.getElementById('hero-title');
        title.classList.remove('opacity-0-start');
        title.classList.add('elegant-entrance', 'layered-text', 'glitch-text');

        // Year fade in slightly after
        setTimeout(() => {
            const year = document.getElementById('hero-year');
            year.classList.remove('opacity-0-start');
            year.classList.add('fade-in-reveal');
        }, 200);
    }, 1500);

    // 3. Vertical Text Fade In (2.0s)
    setTimeout(() => {
        const left = document.getElementById('jp-text-left');
        const right = document.getElementById('jp-text-right');

        left.classList.remove('opacity-0-start');
        left.classList.add('fade-in-reveal');

        right.classList.remove('opacity-0-start');
        right.classList.add('fade-in-reveal');
        right.style.animationDelay = '0.2s'; // Stagger
    }, 2000);

    // 4. Subtitles & Buttons (2.5s)
    setTimeout(() => {
        const badge = document.getElementById('hero-badge');
        const desc = document.getElementById('hero-desc');
        const buttons = document.getElementById('hero-buttons');

        [badge, desc, buttons].forEach((el, i) => {
            el.classList.remove('opacity-0-start');
            el.classList.add('fade-in-reveal');
            el.style.animationDelay = `${i * 0.1}s`;
        });
    }, 2500);

    // 5. Year Digit Drop Animation (5s) - Countdown style transition from 5 to 6
    setTimeout(() => {
        const digitContainer = document.getElementById('year-digit');
        const currentDigit = document.getElementById('year-digit-current');

        // Create the new digit element
        const newDigit = document.createElement('span');
        newDigit.textContent = '6';
        newDigit.className = 'inline-block absolute top-0 left-0 digit-drop-in';
        newDigit.style.width = '100%';

        // Animate out the old digit
        currentDigit.classList.add('digit-drop-out');

        // Add the new digit
        digitContainer.appendChild(newDigit);

        // Clean up after animation completes
        setTimeout(() => {
            currentDigit.remove();
            newDigit.id = 'year-digit-current';
            newDigit.classList.remove('digit-drop-in');
            newDigit.style.position = 'static';
            newDigit.style.marginTop = '0'; // Reset margin for the 6
        }, 1000); // Match animation duration
    }, 5000);
}

function initParallax() {
    const container = document.getElementById('hero-container');
    const jpLeft = document.getElementById('jp-text-left');
    const jpRight = document.getElementById('jp-text-right');

    container.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;

        // Apply parallax only to decorative vertical text, not the main title
        jpLeft.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) translateY(-50%)`; // Maintain vertical centering
        jpRight.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) translateY(-50%)`;
    });
}

function renderDayCard(day, index) {
    const isEven = index % 2 === 0;
    // On mobile, everything is left-aligned (timeline on left). On desktop, alternate.
    // We'll use flex-row-reverse for odd items on desktop.

    const alignmentClass = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
    const textAlignment = isEven ? 'md:text-left' : 'md:text-right';
    const fadeDirection = isEven ? 'translate-x-[-50px]' : 'translate-x-[50px]'; // Initial offset for animation

    // Get the specific icon for this day
    let dayIcon = '';
    const iconClasses = "absolute -bottom-4 -right-4 w-24 h-24 text-white/5 group-hover:text-white/10 transition-colors duration-500 pointer-events-none";

    switch (day.day) {
        case 1: dayIcon = getPlane(iconClasses); break; // Arrival at Haneda
        case 2: dayIcon = getFerrisWheel(iconClasses); break; // Yokohama
        case 3: dayIcon = getToriiGate(iconClasses); break; // NYE - using torii as Japan symbol
        case 4: dayIcon = getToriiGate(iconClasses); break; // New Year's shrine visits
        case 5: dayIcon = getPagoda(iconClasses); break; // Kyoto
        case 6: dayIcon = getLuckyBag(iconClasses); break; // Shopping
        case 7: dayIcon = getRollercoaster(iconClasses); break; // Universal Studios
        case 8: dayIcon = getShinkansen(iconClasses); break; // Travel to Tokyo
        case 9: dayIcon = getBuddha(iconClasses); break; // Enoshima island torii
        case 10: dayIcon = getSnowman(iconClasses); break; // Ski mountain
        case 11: dayIcon = getCat(iconClasses); break; // Tokyo
        case 12: dayIcon = getSkytree(iconClasses); break; // Tokyo Skytree
        case 13: dayIcon = getPlane(iconClasses); break; // Departure
    }

    return `
        <div class="reveal-on-scroll flex flex-col ${alignmentClass} items-center gap-8 md:gap-16 group">
            
            <!-- Date Marker (Center) -->
            <div class="relative shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-night-indigo border border-japan-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] z-10 group-hover:scale-110 transition-transform duration-500">
                <span class="font-serif font-bold text-japan-gold text-xl">${day.day}</span>
            </div>

            <!-- Content Card -->
            <div class="w-full md:w-[45%] relative group/card">
                <!-- Dynamic Glow Effect -->
                <div class="absolute -inset-0.5 bg-gradient-to-br ${day.theme} rounded-xl opacity-0 group-hover/card:opacity-40 blur-lg transition duration-700"></div>

                <div 
                    onclick="navigateToDay(${index})"
                    class="glass-panel p-0 rounded-xl cursor-pointer relative overflow-hidden h-full flex flex-col"
                >
                    <!-- Image Section -->
                    <div class="relative h-48 overflow-hidden">
                        <img src="${day.images[0]}" alt="${day.title}" class="w-full h-full object-cover ${day.images[0].toLowerCase().includes('buddha') || day.images[0].toLowerCase().includes('cat') || day.images[0].toLowerCase().includes('gundam') ? 'object-top' : 'object-center'} transition-transform duration-700 group-hover/card:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-night-indigo/90 to-transparent"></div>
                        
                        <!-- Charm Icon (Overlaid on image) -->
                        <div class="absolute bottom-2 right-2 opacity-80">
                           ${dayIcon.replace('w-24 h-24', 'w-12 h-12').replace('-bottom-4 -right-4', '')}
                        </div>
                    </div>

                    <div class="p-8 flex flex-col ${textAlignment} relative z-10 grow">
                        <span class="text-torii-red font-bold tracking-widest text-sm uppercase mb-2">${day.date}</span>
                        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white mb-2 group-hover/card:text-japan-gold transition-colors">${day.title}</h3>
                        <div class="flex items-center gap-2 text-gray-400 text-sm mb-6 ${isEven ? '' : 'md:justify-end'}">
                            ${getIcon('location', 'w-4 h-4')}
                            <span>${day.location}</span>
                        </div>
                        
                        <!-- Highlights (Always visible but subtle, pop on hover) -->
                        <div class="space-y-2 border-t border-white/10 pt-4 mt-auto">
                            ${day.highlights.slice(0, 3).map(h => `
                                <div class="flex items-center gap-3 text-gray-300 text-sm">
                                    <span class="w-1.5 h-1.5 rounded-full bg-pine-green"></span>
                                    <span>${h.name}</span>
                                </div>
                            `).join('')}
                            ${day.highlights.length > 3 ? `<div class="text-xs text-gray-500 italic mt-2">+ ${day.highlights.length - 3} more...</div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Empty Spacer for Desktop Alignment -->
            <div class="hidden md:block w-[45%]"></div>
        </div>
    `;
}

// generateSnowflakes is now in data.js

// --- INTERACTION ---

function scrollToTimeline() {
    const timeline = document.getElementById('itinerary-timeline');
    timeline.scrollIntoView({ behavior: 'smooth' });
}

function navigateToDay(dayIndex) {
    if (dayIndex < 0 || dayIndex >= days.length) return;
    window.location.href = `public/pages/day${dayIndex + 1}.html?day=${dayIndex}`;
}

function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
});