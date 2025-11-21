const hotelsPageContainer = document.getElementById('hotels-page');

// Helper function to create Google Maps embed URL
function getMapEmbedUrl(lat, lng, zoom = 15) {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=${zoom}`;
}

// Helper function to create Google Maps directions URL
function getDirectionsUrl(address) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

// Helper function to copy text to clipboard
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Copied!</span>
        `;
        buttonElement.classList.add('bg-pine-green');

        setTimeout(() => {
            buttonElement.innerHTML = originalText;
            buttonElement.classList.remove('bg-pine-green');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Render hotel card with map
function renderHotelCard(hotel) {
    return `
        <div class="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 hover:border-japan-gold/30 transition-all duration-500">
            <!-- Hotel Header -->
            <div class="flex items-start justify-between mb-8 pb-6 border-b border-white/10">
                <div class="flex-1">
                    <h2 class="text-4xl md:text-5xl font-bold font-serif text-white mb-3">${hotel.city}</h2>
                    <h3 class="text-2xl md:text-3xl text-japan-gold font-serif mb-4">${hotel.name}</h3>
                    <div class="flex flex-col gap-2 text-gray-300">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-pine-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span class="font-semibold">Check-in:</span>
                            <span>${hotel.checkIn}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-torii-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span class="font-semibold">Check-out:</span>
                            <span>${hotel.checkOut}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Hotel Address & Map -->
            <div class="mb-8">
                <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span class="w-1 h-6 bg-japan-gold rounded-full"></span>
                    Hotel Address
                </h4>
                <div class="bg-white/5 rounded-xl p-6 border border-white/5">
                    <div class="flex items-start gap-3 mb-4">
                        <svg class="w-6 h-6 text-japan-gold shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <p class="text-gray-300 text-lg flex-1">${hotel.address}</p>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex flex-wrap gap-3 mb-6">
                        <a href="${getDirectionsUrl(hotel.address)}" target="_blank" 
                           class="flex items-center gap-2 px-6 py-3 bg-torii-red hover:bg-red-700 text-white rounded-lg transition-all hover:scale-105 shadow-lg">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                            <span>Get Directions</span>
                        </a>
                        <button onclick="copyToClipboard('${hotel.address.replace(/'/g, "\\'")}', this)"
                                class="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span>Copy Address</span>
                        </button>
                    </div>

                    <!-- Embedded Map -->
                    <div class="rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="300"
                            style="border:0"
                            loading="lazy"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                            src="${getMapEmbedUrl(hotel.coordinates.lat, hotel.coordinates.lng)}">
                        </iframe>
                    </div>
                </div>
            </div>

            <!-- Nearest Train Station -->
            <div class="mb-8">
                <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span class="w-1 h-6 bg-japan-gold rounded-full"></span>
                    Nearest Train Station
                </h4>
                <div class="bg-white/5 rounded-xl p-6 border border-white/5">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3 flex-1">
                            <svg class="w-6 h-6 text-japan-gold shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <div>
                                <p class="text-white font-bold text-lg mb-1">${hotel.nearestStation.name}</p>
                                <p class="text-gray-400 mb-2">${hotel.nearestStation.address}</p>
                                <span class="inline-block px-3 py-1 bg-pine-green/20 text-pine-green rounded-full text-sm">
                                    ${hotel.nearestStation.walkingTime} walk
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex flex-wrap gap-3 mb-6">
                        <a href="${getDirectionsUrl(hotel.nearestStation.address)}" target="_blank" 
                           class="flex items-center gap-2 px-6 py-3 bg-torii-red hover:bg-red-700 text-white rounded-lg transition-all hover:scale-105 shadow-lg">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                            <span>Get Directions</span>
                        </a>
                        <button onclick="copyToClipboard('${hotel.nearestStation.address.replace(/'/g, "\\'")}', this)"
                                class="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span>Copy Address</span>
                        </button>
                    </div>

                    <!-- Embedded Map -->
                    <div class="rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="300"
                            style="border:0"
                            loading="lazy"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                            src="${getMapEmbedUrl(hotel.nearestStation.coordinates.lat, hotel.nearestStation.coordinates.lng)}">
                        </iframe>
                    </div>
                </div>
            </div>

            ${hotel.nearestYamato ? `
            <!-- Nearest Yamato Transport -->
            <div>
                <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span class="w-1 h-6 bg-japan-gold rounded-full"></span>
                    Nearest Yamato Transport
                </h4>
                <div class="bg-white/5 rounded-xl p-6 border border-white/5">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3 flex-1">
                            <svg class="w-6 h-6 text-japan-gold shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                            </svg>
                            <div>
                                <p class="text-white font-bold text-lg mb-1">${hotel.nearestYamato.name}</p>
                                <p class="text-gray-400 mb-2">${hotel.nearestYamato.address}</p>
                                <span class="inline-block px-3 py-1 bg-pine-green/20 text-pine-green rounded-full text-sm">
                                    ${hotel.nearestYamato.walkingTime} walk
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex flex-wrap gap-3 mb-6">
                        <a href="${getDirectionsUrl(hotel.nearestYamato.address)}" target="_blank" 
                           class="flex items-center gap-2 px-6 py-3 bg-torii-red hover:bg-red-700 text-white rounded-lg transition-all hover:scale-105 shadow-lg">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                            <span>Get Directions</span>
                        </a>
                        <button onclick="copyToClipboard('${hotel.nearestYamato.address.replace(/'/g, "\\'")}', this)"
                                class="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span>Copy Address</span>
                        </button>
                    </div>

                    <!-- Embedded Map -->
                    <div class="rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="300"
                            style="border:0"
                            loading="lazy"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                            src="${getMapEmbedUrl(hotel.nearestYamato.coordinates.lat, hotel.nearestYamato.coordinates.lng)}">
                        </iframe>
                    </div>
                </div>
            </div>
            ` : ''}
        </div>
    `;
}

function renderHotelsPage() {
    const hotelsHTML = hotels.map(hotel => renderHotelCard(hotel)).join('');

    hotelsPageContainer.innerHTML = `
        <div class="min-h-screen bg-night-indigo text-snow-white relative overflow-hidden">
            <!-- Global Background Elements -->
            <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
                ${generateSnowflakes(50)}
            </div>
            
            <!-- Decorative Background Elements -->
            <div class="absolute top-[10%] right-[5%] opacity-10 pointer-events-none animate-float-slow">
                ${getToriiGate('w-48 h-48 md:w-64 md:h-64 text-torii-red')}
            </div>
            <div class="absolute top-[50%] left-[3%] opacity-8 pointer-events-none animate-float-slow" style="animation-duration: 15s;">
                ${getLantern('w-32 h-48 md:w-48 md:h-72 text-white')}
            </div>
            
            <!-- Header -->
            <div class="fixed top-0 left-0 right-0 bg-night-indigo/90 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <a href="../index.html" class="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-japan-gold transition-colors group">
                        <svg class="group-hover:-translate-x-1 transition-transform w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        <span class="font-serif font-bold tracking-wide">Back to Home</span>
                    </a>
                    <div class="text-lg font-serif text-white tracking-widest">HOTELS & TRANSPORTATION</div>
                </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-10 pt-32 pb-20">
                <div class="max-w-6xl mx-auto px-4 md:px-8">
                    <!-- Hero Section -->
                    <div class="text-center mb-16">
                        <h1 class="text-5xl md:text-7xl font-bold font-serif text-white mb-6 tracking-tight">
                            Hotels & Transportation
                        </h1>
                        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            Your accommodations and nearby transit options
                        </p>
                        <div class="flex items-center justify-center gap-4 text-sm text-gray-500">
                            <span class="flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                                3 Hotels
                            </span>
                            <span class="text-japan-gold">•</span>
                            <span>December 29, 2025 - January 10, 2026</span>
                        </div>
                    </div>

                    <!-- Hotels -->
                    <div class="space-y-12">
                        ${hotelsHTML}
                    </div>

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
    renderHotelsPage();
});
