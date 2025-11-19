const dayPageContainer = document.getElementById('day-page');

// --- SVG HELPER FUNCTIONS ---
// These functions are now in data.js, so we don't need to redefine them here.
// We will rely on the global functions: getIcon, getToriiGate, getLantern, getMountFuji, getCherryBlossom, generateSnowflakes, generateFireworks

// --- PAGE RENDERING FUNCTIONS ---

/**
 * Generates the HTML for the current Day Page and injects it.
 */
function renderDayPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayIndex = parseInt(urlParams.get('day'));
    const day = days[dayIndex];

    // Special Themes
    const isNewYearsEve = day.day === 3; // Dec 31
    const isNewYearsDay = day.day === 4; // Jan 1

    // Theme Configuration
    let themeClass = day.theme ? `bg-gradient-to-b ${day.theme}` : "bg-gradient-to-b from-slate-900 to-blue-900";
    let accentColor = "text-white";
    let headerBg = "bg-night-indigo/90";

    if (isNewYearsEve) {
        accentColor = "text-japan-gold";
    } else if (isNewYearsDay) {
        accentColor = "text-white";
    }

    let highlightsHTML = day.highlights.map((highlight, index) => `
        <div class="group relative glass-panel p-6 sm:p-8 rounded-xl transition-all duration-300 hover:bg-white/10 border border-white/5 hover:border-japan-gold/30">
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-japan-gold transition-colors font-serif">
                        ${highlight.name}
                    </h3>
                    <div class="flex items-center gap-2 text-gray-400 group-hover:text-gray-300">
                        ${getIcon('location', 'w-5 h-5')}
                        <span class="text-base sm:text-lg">${highlight.location}</span>
                    </div>
                </div>
                <div class="text-4xl sm:text-5xl font-bold text-white/5 group-hover:text-japan-gold/20 transition-colors ml-4 font-serif">
                    ${index + 1}
                </div>
            </div>
        </div>
    `).join('');

    let prevButtonHTML = '';
    let nextButtonHTML = '';

    if (dayIndex > 0) {
        prevButtonHTML = `
            <button onclick="navigateToDay(${dayIndex - 1})" class="group flex items-center gap-4 px-6 py-4 rounded-lg hover:bg-white/5 transition-all text-left">
                ${getIcon('chevronLeft', 'text-gray-400 group-hover:text-white transition-colors w-6 h-6')}
                <div>
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Previous</div>
                    <div class="text-lg font-serif text-gray-300 group-hover:text-white">Day ${days[dayIndex - 1].day}</div>
                </div>
            </button>
        `;
    }

    if (dayIndex < days.length - 1) {
        nextButtonHTML = `
            <button onclick="navigateToDay(${dayIndex + 1})" class="group flex items-center gap-4 px-6 py-4 rounded-lg hover:bg-white/5 transition-all text-right ${dayIndex === 0 ? 'ml-auto' : ''}">
                <div>
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Next</div>
                    <div class="text-lg font-serif text-gray-300 group-hover:text-white">Day ${days[dayIndex + 1].day}</div>
                </div>
                ${getIcon('chevronRight', 'text-gray-400 group-hover:text-white transition-colors w-6 h-6')}
            </button>
        `;
    }

    // Special Elements
    const nyeFireworks = isNewYearsEve ? `
        <!-- Fireworks Canvas Container -->
        <div id="fireworks-container" class="absolute inset-0 pointer-events-none"></div>
    ` : '';

    const nydElements = isNewYearsDay ? `
        <!-- Rising Sun Effect -->
        <div class="rising-sun"></div>
        <!-- Torii Gate Background -->
        <div class="bg-torii">
            ${getToriiGate("w-full h-full text-red-700 opacity-20")}
        </div>
    ` : '';

    // Day-Specific Icons
    let dayIcon = '';
    const iconClasses = "fixed bottom-0 right-[-5%] w-[40vh] h-[40vh] text-white/5 pointer-events-none z-0 animate-float-slow";

    switch (day.day) {
        case 1: dayIcon = getPlane(iconClasses); break; // Arrival at Haneda
        case 2: dayIcon = getFerrisWheel(iconClasses); break; // Yokohama
        // Day 3 is NYE (Fireworks)
        case 4: dayIcon = getToriiGate(iconClasses); break; // New Year's shrine visits
        case 5: dayIcon = getPagoda(iconClasses); break; // Kyoto Pagodas
        case 6: dayIcon = getLuckyBag(iconClasses); break; // New Year Shopping
        case 7: dayIcon = getRollercoaster(iconClasses); break; // Universal Studios Japan
        case 8: dayIcon = getShinkansen(iconClasses); break; // Train to Tokyo
        case 9: dayIcon = getBuddha(iconClasses); break; // Enoshima Island (island torii)
        case 10: dayIcon = getSnowman(iconClasses); break; // Ski mountain
        case 11: dayIcon = getCat(iconClasses); break; // Tokyo
        case 12: dayIcon = getSkytree(iconClasses); break; // Tokyo Skytree
        case 13: dayIcon = getPlane(iconClasses); break; // Departure
    }

    // Global Effects
    let backgroundEffects = '';

    if (isNewYearsEve) {
        // Fireworks INSTEAD of snow for NYE
        backgroundEffects = generateFireworksCanvas();
    } else {
        // Snow only for regular days AND NYD (serene snow for shrine visit)
        backgroundEffects = `
            ${generateSnowflakes(50)}
        `;
    }

    dayPageContainer.innerHTML = `
        <div class="min-h-screen ${themeClass} text-snow-white relative overflow-hidden">
            <!-- Global Background Elements -->
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                ${backgroundEffects}
            </div>
            
            ${nydElements}
            ${dayIcon}

            <!-- Decorative Japanese Elements -->
            <div class="absolute top-20 right-10 opacity-10 pointer-events-none animate-float" style="animation-duration: 8s;">
                ${getLantern("w-32 h-48 text-japan-gold")}
            </div>
            <div class="absolute bottom-40 left-10 opacity-10 pointer-events-none animate-float" style="animation-duration: 12s;">
                ${getCherryBlossom("w-40 h-40 text-pink-200")}
            </div>

            <!-- Header -->
            <div class="fixed top-0 left-0 right-0 ${headerBg} backdrop-blur-md shadow-lg z-50 border-b border-white/10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <button onclick="navigateToHome()" class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                        ${getIcon('home', 'w-5 h-5 group-hover:scale-110 transition-transform')}
                        <span class="font-serif font-bold tracking-wide hidden sm:block">Home</span>
                    </button>
                    
                    <div class="flex items-center gap-4">
                        <span class="text-sm text-gray-400 uppercase tracking-widest">Day</span>
                        <span class="text-3xl font-serif font-bold ${accentColor}">${day.day}</span>
                    </div>
                    
                    <div class="w-20"></div> <!-- Spacer -->
                </div>
            </div>

            <!-- Main Content -->
            <div class="pt-32 pb-20 relative z-10">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
                    <div class="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span class="text-sm font-bold tracking-widest uppercase text-gray-300">${day.date}</span>
                    </div>
                    
                    <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg">
                        ${day.title}
                    </h1>
                    
                    <div class="flex items-center justify-center gap-2 text-gray-400">
                        ${getIcon('location', 'w-5 h-5')}
                        <span class="text-lg">${day.location}</span>
                    </div>
                </div>

                <!-- Highlights -->
                <div class="max-w-3xl mx-auto px-4 sm:px-6">
                    <div class="grid gap-4">
                        ${highlightsHTML}
                    </div>
                </div>

                <!-- Navigation Footer -->
                <div class="max-w-4xl mx-auto px-4 sm:px-6 mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
                    ${prevButtonHTML}
                    ${nextButtonHTML}
                </div>
            </div>
        </div>
    `;

    // Initialize Canvas Fireworks if present
    if (isNewYearsEve) {
        startFireworks('fireworks-canvas', 5); // High intensity for holidays
    }
}

// --- NAVIGATION FUNCTIONS ---
// These functions update the state and re-render the appropriate page

/**
 * Shows the Home page and hides the Day page.
 */
function navigateToHome() {
    window.location.href = '../../index.html';
}

/**
 * Shows the Day page for a specific day index and hides the Home page.
 * @param {number} dayIndex - The index of the day to display.
 */
function navigateToDay(dayIndex) {
    // Ensure dayIndex is within bounds
    if (dayIndex < 0 || dayIndex >= days.length) {
        return;
    }
    window.location.href = `day${dayIndex + 1}.html?day=${dayIndex}`;
}

// --- INITIALIZATION ---
// Run these functions when the script first loads

document.addEventListener('DOMContentLoaded', () => {
    if (dayPageContainer) {
        renderDayPage();
    }
});