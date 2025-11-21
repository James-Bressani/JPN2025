const fullItineraryContainer = document.getElementById('full-itinerary-page');

function renderFullItinerary() {
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

    // Helper to get day-specific icon
    const getDayIcon = (dayNumber) => {
        const iconClasses = "w-12 h-12 text-japan-gold/60";
        switch (dayNumber) {
            case 1: return getPlane(iconClasses);
            case 2: return getFerrisWheel(iconClasses);
            case 3: return getToriiGate(iconClasses);
            case 4: return getToriiGate(iconClasses);
            case 5: return getPagoda(iconClasses);
            case 6: return getLuckyBag(iconClasses);
            case 7: return getRollercoaster(iconClasses);
            case 8: return getShinkansen(iconClasses);
            case 9: return getIslandTorii(iconClasses);
            case 10: return getSnowman(iconClasses);
            case 11: return getCat(iconClasses);
            case 12: return getSkytree(iconClasses);
            case 13: return getPlane(iconClasses);
            default: return '';
        }
    };

    // Helper to fix image paths
    const fixImagePath = (img) => img.replace('public/', '');

    const getImageStyle = (src) => {
        const lowerSrc = src.toLowerCase();
        if (lowerSrc.includes('buddha') || lowerSrc.includes('cat') || lowerSrc.includes('gundam')) {
            return 'object-top';
        }
        return 'object-center';
    };

    // Helper function to match images to activities based on keywords
    const matchImageToActivity = (activityName, images) => {
        const activityLower = activityName.toLowerCase();

        // Define keyword mappings for better matching
        const keywordMap = {
            'yokohama': ['yokohama'],
            'aquarium': ['aquarium', 'kaiyukan'],
            'ghibli': ['ghibli'],
            'nunobiki': ['nunobiki', 'ropeway'],
            'kobe harbor exploration': ['kobe harbor', 'kobeharb'],
            'kobe beef': ['kobeharbornight', 'kobe harbor night'],
            'namba yasaka': ['namba yasaka', 'yasaka'],
            'dotonbori': ['dotonbori'],
            'deer': ['deer', 'nara'],
            'tōdai-ji': ['tōdai-ji', 'todai'],
            'osaka castle': ['osaka castle', 'osakacastle'],
            'fushimi inari': ['fushimi', 'inari'],
            'teamlab biovortex': ['biovortex'],
            'yasaka pagoda': ['yasaka pagoda', 'pagoda'],
            'gion district': ['gion'],
            'fukubukuro': ['luckybag', 'fukubukuro', 'grandfrontosaka'],
            'shinsekai': ['shinsekai'],
            'universal studios': ['universal'],
            'ginza': ['ginza'],
            'akihabara': ['akihabara'],
            'great buddha': ['buddha', 'daibutsu'],
            'enoden': ['enoden', 'streetcar'],
            'jewel of shonan': ['jewel', 'shonan', 'illumination'],
            'gala yuzawa': ['yuzawa', 'ski'],
            'giant cat': ['cat billboard', 'giant cat'],
            'shibuya': ['shibuya'],
            'teamlab planets': ['planets'],
            'tokyo skytree': ['skytree'],
            'odaiba exploration': ['odaiba gundam', 'gundam'],
            'depart from haneda': ['odaiba']
        };

        // Find matching image
        for (const image of images) {
            const imageLower = image.toLowerCase();

            // Check direct keyword matches
            for (const [activity, keywords] of Object.entries(keywordMap)) {
                if (activityLower.includes(activity)) {
                    for (const keyword of keywords) {
                        if (imageLower.includes(keyword)) {
                            return image;
                        }
                    }
                }
            }
        }

        return null;
    };

    // Render each day with images shown alongside their respective activities
    const renderDay = (day, index) => {
        const fixedImages = day.images.map(fixImagePath);
        const usedImages = new Set(); // Track which images have been used

        // Find hotel information for this day
        const hotelCheckIn = hotels.find(h => h.days[0] === day.day);
        const hotelCheckOut = hotels.find(h => h.days[h.days.length - 1] === day.day && h.days.length > 1);

        return `
            <div class="mb-16 glass-panel p-8 md:p-12 rounded-2xl border border-white/10 hover:border-japan-gold/30 transition-all duration-500 cursor-pointer group" onclick="window.location.href='pages/day13.html?day=${day.day - 1}'">
                <!-- Day Header -->
                <div class="flex items-center gap-6 mb-8 pb-6 border-b border-white/10">
                    <div class="shrink-0">
                        ${getDayIcon(day.day)}
                    </div>
                    <div class="flex-1">
                        <div class="flex items-baseline gap-4 mb-2">
                            <h2 class="text-4xl md:text-5xl font-bold font-serif text-white group-hover:text-japan-gold transition-colors">Day ${day.day}</h2>
                            <span class="text-torii-red font-bold tracking-wider text-lg">${day.date}</span>
                        </div>
                        <h3 class="text-2xl md:text-3xl text-japan-gold font-serif mb-2">${day.title}</h3>
                        <div class="flex items-center gap-2 text-gray-400">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span class="text-lg">${day.location}</span>
                        </div>
                        
                        ${hotelCheckIn || hotelCheckOut ? `
                        <div class="mt-4 flex flex-wrap gap-3">
                            ${hotelCheckOut ? `
                            <div class="flex items-center gap-2 px-4 py-2 bg-torii-red/20 border border-torii-red/30 rounded-lg text-sm">
                                <svg class="w-4 h-4 text-torii-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                <span class="text-white">Check-out: ${hotelCheckOut.city}</span>
                            </div>
                            ` : ''}
                            ${hotelCheckIn ? `
                            <div class="flex items-center gap-2 px-4 py-2 bg-pine-green/20 border border-pine-green/30 rounded-lg text-sm">
                                <svg class="w-4 h-4 text-pine-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                                <span class="text-white">Check-in: ${hotelCheckIn.city}</span>
                            </div>
                            ` : ''}
                        </div>
                        ` : ''}
                    </div>
                </div>


                <!-- Activities with Images -->
                <div class="space-y-6">
                    <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span class="w-1 h-6 bg-japan-gold rounded-full"></span>
                        Activities & Highlights
                    </h4>
                    <div class="grid gap-6">
                        ${day.highlights.map((highlight, idx) => {
            // Match image to this specific activity
            const activityImage = matchImageToActivity(highlight.name, fixedImages.filter(img => !usedImages.has(img)));
            if (activityImage) {
                usedImages.add(activityImage);
            }

            return `
                                <div class="flex flex-col gap-6 p-6 md:p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-japan-gold/20" onclick="event.stopPropagation()">
                                    <!-- Activity Header -->
                                    <div class="flex items-start gap-4">
                                        <!-- Activity Number Badge -->
                                        <div class="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${day.theme} flex items-center justify-center text-white font-bold text-lg">
                                            ${idx + 1}
                                        </div>
                                        
                                        <!-- Activity Info -->
                                        <div class="flex-1">
                                            <h5 class="text-xl md:text-2xl font-bold text-white mb-2">${highlight.name}</h5>
                                            <div class="flex items-center gap-2 text-gray-400">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <span class="text-base md:text-lg">${highlight.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Activity Image (if available) - Full width, more prominent -->
                                    ${activityImage ? `
                                        <div class="rounded-xl overflow-hidden h-64 md:h-80 lg:h-96 cursor-zoom-in group shadow-2xl" onclick="event.stopPropagation(); openLightbox('${activityImage}')">
                                            <img src="${activityImage}" alt="${highlight.name}" class="w-full h-full object-cover ${getImageStyle(activityImage)} transition-transform duration-700 group-hover:scale-105">
                                        </div>
                                    ` : ''}
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>
            </div>
        `;
    };

    const daysHTML = days.map((day, index) => renderDay(day, index)).join('');

    fullItineraryContainer.innerHTML = `
        <div class="min-h-screen bg-night-indigo text-snow-white relative overflow-hidden">
            <!-- Global Background Elements -->
            <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
                ${generateSnowflakes(50)}
            </div>
            
            <!-- Decorative Background Elements -->
            <div class="absolute top-[10%] right-[5%] opacity-10 pointer-events-none animate-float-slow">
                ${getToriiGate('w-48 h-48 md:w-64 md:h-64 text-torii-red')}
            </div>
            <div class="absolute top-[30%] left-[3%] opacity-8 pointer-events-none animate-float-slow" style="animation-duration: 15s;">
                ${getPagoda('w-40 h-48 md:w-56 md:h-64 text-white')}
            </div>
            <div class="absolute top-[60%] right-[8%] opacity-10 pointer-events-none animate-float-slow" style="animation-duration: 13s;">
                ${getMountFuji('w-64 h-40 md:w-80 md:h-52 text-white')}
            </div>
            
            <!-- Header -->
            <div class="fixed top-0 left-0 right-0 bg-night-indigo/90 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <a href="../index.html" class="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-japan-gold transition-colors group">
                        <svg class="group-hover:-translate-x-1 transition-transform w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        <span class="font-serif font-bold tracking-wide">Back to Home</span>
                    </a>
                    <div class="flex items-center gap-6">
                        <a href="hotels.html" class="text-gray-300 hover:text-japan-gold transition-colors font-serif tracking-wide hidden sm:block">
                            Hotels & Transportation
                        </a>
                        <div class="text-lg font-serif text-white tracking-widest">FULL ITINERARY</div>
                    </div>
                </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-10 pt-32 pb-20">
                <div class="max-w-6xl mx-auto px-4 md:px-8">
                    <!-- Hero Section -->
                    <div class="text-center mb-16">
                        <h1 class="text-5xl md:text-7xl font-bold font-serif text-white mb-6 tracking-tight">
                            Itinerary
                        </h1>
                        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            Complete trip across Japan
                        </p>
                        <div class="flex items-center justify-center gap-4 text-sm text-gray-500">
                            <span class="flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                December 29, 2025 - January 10, 2026
                            </span>
                            <span class="text-japan-gold">•</span>
                            <span>13 Days</span>
                        </div>
                    </div>

                    <!-- Days -->
                    ${daysHTML}

                    <!-- Footer -->
                    <div class="text-center mt-20 pt-12 border-t border-white/10">
                        <p class="text-gray-500 font-serif tracking-widest text-sm">
                            JAPAN 2025-26 • WINTER EXPEDITION
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderFullItinerary();
});