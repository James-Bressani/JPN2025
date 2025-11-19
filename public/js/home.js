const homePageContainer = document.getElementById('home-page');

// --- SVG ICONS (Minimalist & Sleek) ---
// Using global helpers from data.js: getIcon, getToriiGate, etc.

// --- RENDER FUNCTIONS ---

function renderHomePage() {
    // 1. Hero Section
    const heroHTML = `
        <div class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            
            <!-- Background Image -->
            <div class="absolute inset-0 z-0">
                <img src="public/images/hero-bg.png" alt="Mount Fuji and Torii Gate" class="w-full h-full object-cover object-center" />
                <!-- Gradient Overlay for Text Readability -->
                <div class="absolute inset-0 bg-gradient-to-b from-night-indigo/60 via-night-indigo/20 to-night-indigo"></div>
                <div class="absolute inset-0 bg-black/20"></div>
            </div>

            <!-- Animated Particles Container (Fixed Overlay) -->
            <div class="fixed inset-0 overflow-hidden pointer-events-none z-50">
                ${generateSnowflakes(50)}
            </div>

            <!-- Hero Content -->
            <div class="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
                <div class="mb-8 animate-float">
                    <span class="inline-block py-2 px-6 rounded-full border border-japan-gold/50 bg-black/40 text-japan-gold text-sm tracking-[0.4em] uppercase backdrop-blur-md shadow-lg">
                        Winter Expedition
                    </span>
                </div>
                
                <h1 class="text-6xl md:text-9xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                    JAPAN
                </h1>
                <div class="text-4xl md:text-6xl font-serif text-torii-red font-bold mb-8 tracking-widest drop-shadow-md">
                    2025
                </div>
                
                <p class="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                    Experience the harmony of tradition and winter wonder.
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button onclick="scrollToTimeline()" class="group relative px-10 py-5 bg-torii-red text-white font-serif font-bold tracking-wider rounded-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,0,0,0.5)]">
                        <span class="relative z-10 flex items-center gap-3 text-lg">
                            Begin Journey ${getIcon('arrowRight', 'w-6 h-6 group-hover:translate-x-1 transition-transform')}
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <a href="public/full-itinerary.html" class="group px-10 py-5 border-2 border-white/30 text-white font-serif font-bold tracking-wider rounded-sm hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm">
                        View Full Itinerary
                    </a>
                </div>
            </div>

            <!-- Bottom Decoration -->
            <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-night-indigo via-night-indigo/80 to-transparent z-10"></div>
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20">
                ${getIcon('chevronDown', 'w-10 h-10 text-white drop-shadow-lg')}
            </div>
        </div>
    `;

    // 2. Timeline Section
    const timelineHTML = `
        <div class="w-full bg-night-indigo relative z-10">
            <div id="itinerary-timeline" class="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <!-- Vertical Line -->
                <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-japan-gold/30 to-transparent md:-translate-x-1/2"></div>

                <div class="space-y-24 relative z-10">
                    ${days.map((day, index) => renderDayCard(day, index)).join('')}
                </div>
            </div>
        </div>
    `;

    // 3. Footer
    const footerHTML = `
        <footer class="py-12 text-center text-gray-500 text-sm bg-black/20">
            <p class="font-serif tracking-widest">JAPAN 2025 • WINTER JOURNEY</p>
        </footer>
    `;

    homePageContainer.innerHTML = heroHTML + timelineHTML + footerHTML;

    // Initialize Scroll Observer
    initScrollObserver();
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
        case 1: dayIcon = getTokyoTower(iconClasses); break;
        case 2: dayIcon = getFerrisWheel(iconClasses); break;
        case 3: dayIcon = getToriiGate(iconClasses); break; // Use Torii for NYE on index as generic Japan symbol
        case 4: dayIcon = getDeer(iconClasses); break;
        case 5: dayIcon = getPagoda(iconClasses); break;
        case 6: dayIcon = getLuckyBag(iconClasses); break;
        case 7: dayIcon = getRollercoaster(iconClasses); break;
        case 8: dayIcon = getShinkansen(iconClasses); break;
        case 9: dayIcon = getBuddha(iconClasses); break;
        case 10: dayIcon = getSnowman(iconClasses); break;
        case 11: dayIcon = getCat(iconClasses); break;
        case 12: dayIcon = getSkytree(iconClasses); break;
        case 13: dayIcon = getPlane(iconClasses); break;
    }

    return `
        <div class="reveal-on-scroll flex flex-col ${alignmentClass} items-center gap-8 md:gap-16 group">
            
            <!-- Date Marker (Center) -->
            <div class="relative shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-night-indigo border border-japan-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10 group-hover:scale-110 transition-transform duration-500">
                <span class="font-serif font-bold text-japan-gold text-xl">${day.day}</span>
            </div>

            <!-- Content Card -->
            <div class="w-full md:w-[45%]">
                <div 
                    onclick="navigateToDay(${index})"
                    class="glass-panel p-8 rounded-xl cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-japan-gold/30 group-hover:-translate-y-2 relative overflow-hidden"
                >
                    <!-- Charm Icon -->
                    ${dayIcon}

                    <div class="flex flex-col ${textAlignment} relative z-10">
                        <span class="text-torii-red font-bold tracking-widest text-sm uppercase mb-2">${day.date}</span>
                        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white mb-2 group-hover:text-japan-gold transition-colors">${day.title}</h3>
                        <div class="flex items-center gap-2 text-gray-400 text-sm mb-6 ${isEven ? '' : 'md:justify-end'}">
                            ${getIcon('location', 'w-4 h-4')}
                            <span>${day.location}</span>
                        </div>
                        
                        <!-- Highlights (Always visible but subtle, pop on hover) -->
                        <div class="space-y-2 border-t border-white/10 pt-4">
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