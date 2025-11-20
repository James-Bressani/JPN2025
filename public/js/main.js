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

    // --- Interleave Images and Highlights ---
    const highlights = day.highlights;
    const images = day.images || [];
    // Fix image paths: 'public/images/' -> '../images/'
    const fixedImages = images.map(img => img.replace('public/images/', '../images/'));

    let contentHTML = '';
    const totalItems = Math.max(highlights.length, fixedImages.length);

    // Strategy: We want to distribute images somewhat evenly.
    // If we have more highlights than images, we sprinkle images in.
    // If we have more images (unlikely for this data), we group them.
    // Simple approach: 
    // 1. Always show a highlight.
    // 2. After some highlights, show an image if available.

    let imageIndex = 0;

    // Calculate roughly how often to insert an image
    // e.g. 4 highlights, 2 images -> insert after index 0 and 2? or 1 and 3?
    // Let's just try to spread them out.
    const imageInterval = fixedImages.length > 0 ? Math.ceil(highlights.length / fixedImages.length) : highlights.length + 1;

    highlights.forEach((highlight, index) => {
        // Render Highlight
        contentHTML += `
            <div class="group relative glass-panel p-6 sm:p-8 rounded-xl transition-all duration-300 hover:bg-white/10 border border-white/5 hover:border-japan-gold/30 mb-8">
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
        `;

        // Decide if we should insert an image after this highlight
        // We want to ensure we use all images by the end.
        // A simple greedy approach: if (images left) and ( (index+1) % interval == 0 OR we are at the end )

        const isLastHighlight = index === highlights.length - 1;
        const shouldInsertImage = (imageIndex < fixedImages.length) && (((index + 1) % imageInterval === 0) || isLastHighlight);

        if (shouldInsertImage) {
            // If we are at the last highlight, dump all remaining images
            const imagesToRender = isLastHighlight ? fixedImages.slice(imageIndex) : [fixedImages[imageIndex]];

            imagesToRender.forEach(imgSrc => {
                const getImageStyle = (src) => {
                    const lowerSrc = src.toLowerCase();
                    if (lowerSrc.includes('buddha') || lowerSrc.includes('cat') || lowerSrc.includes('gundam') || lowerSrc.includes('skytree') || lowerSrc.includes('pagoda')) {
                        return 'object-top';
                    }
                    return 'object-center';
                };

                contentHTML += `
                    <div class="mb-12 rounded-xl overflow-hidden h-64 sm:h-96 relative group cursor-zoom-in shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02]" onclick="openLightbox('${imgSrc}')">
                        <img src="${imgSrc}" alt="Day Image" class="w-full h-full object-cover ${getImageStyle(imgSrc)} transition-transform duration-700 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-night-indigo/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                        </div>
                    </div>
                `;
            });
            imageIndex += imagesToRender.length;
        }
    });

    // Fallback: if there are images but no highlights (unlikely), just show them
    if (highlights.length === 0 && fixedImages.length > 0) {
        fixedImages.forEach(imgSrc => {
            contentHTML += `
                <div class="mb-12 rounded-xl overflow-hidden h-64 sm:h-96 relative group cursor-zoom-in shadow-2xl border border-white/10" onclick="openLightbox('${imgSrc}')">
                    <img src="${imgSrc}" alt="Day Image" class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105">
                </div>
            `;
        });
    }


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

    // --- LIGHTBOX LOGIC ---
    const lightboxHTML = `
        <div id="lightbox-modal" class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4" onclick="closeLightbox()">
            <button class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img id="lightbox-img" src="" alt="Full View" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-95 transition-transform duration-300" onclick="event.stopPropagation()">
        </div>
    `;

    // Inject lightbox if not present
    if (!document.getElementById('lightbox-modal')) {
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    window.openLightbox = (src) => {
        const modal = document.getElementById('lightbox-modal');
        const img = document.getElementById('lightbox-img');
        img.src = src;
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            img.classList.remove('scale-95');
            img.classList.add('scale-100');
        });
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = () => {
        const modal = document.getElementById('lightbox-modal');
        const img = document.getElementById('lightbox-img');
        modal.classList.add('opacity-0');
        img.classList.remove('scale-100');
        img.classList.add('scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
            img.src = '';
            document.body.style.overflow = '';
        }, 300);
    };


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
                <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
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

                <!-- Itinerary Timeline (Images + Highlights) -->
                <div class="max-w-3xl mx-auto px-4 sm:px-6">
                    <div class="relative">
                        <!-- Vertical Line (Timeline) -->
                        <div class="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden sm:block"></div>
                        
                        <div class="grid gap-8">
                            ${contentHTML}
                        </div>
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