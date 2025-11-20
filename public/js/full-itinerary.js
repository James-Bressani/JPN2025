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
        // Small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            img.classList.remove('scale-95');
            img.classList.add('scale-100');
        });
        document.body.style.overflow = 'hidden'; // Prevent scrolling
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
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);
    };

    // Helper for image gallery
    const renderImageGallery = (images) => {
        if (!images || images.length === 0) return '';

        // Fix paths for being inside public/ directory
        const fixedImages = images.map(img => img.replace('public/', ''));

        const getImageStyle = (src) => {
            const lowerSrc = src.toLowerCase();
            if (lowerSrc.includes('buddha') || lowerSrc.includes('cat') || lowerSrc.includes('gundam')) {
                return 'object-top';
            }
            return 'object-center';
        };

        if (fixedImages.length === 1) {
            return `
                <div class="mb-8 rounded-xl overflow-hidden h-64 sm:h-96 relative group cursor-zoom-in" onclick="openLightbox('${fixedImages[0]}')">
                    <img src="${fixedImages[0]}" alt="Day Image" class="w-full h-full object-cover ${getImageStyle(fixedImages[0])} transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-night-indigo/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    </div>
                </div>
            `;
        }

        return `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                ${fixedImages.map((img, i) => `
                    <div class="rounded-xl overflow-hidden h-48 sm:h-64 relative group cursor-zoom-in ${i === 0 && fixedImages.length % 2 !== 0 ? 'sm:col-span-2 sm:h-80' : ''}" onclick="openLightbox('${img}')">
                        <img src="${img}" alt="Day Image ${i + 1}" class="w-full h-full object-cover ${getImageStyle(img)} transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    };

    let fullItineraryHTML = days.map(day => {
        let highlightsHTML = day.highlights.map((highlight, index) => `
            <div class="group relative glass-panel p-6 sm:p-8 rounded-xl transition-all duration-300 hover:bg-white/10 border border-white/5 hover:border-japan-gold/30">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-japan-gold transition-colors font-serif">
                            ${highlight.name}
                        </h3>
                        <div class="flex items-center gap-2 text-gray-400 group-hover:text-gray-300">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span class="text-base sm:text-lg">${highlight.location}</span>
                        </div>
                    </div>
                    <div class="text-4xl sm:text-5xl font-bold text-white/5 group-hover:text-japan-gold/20 transition-colors ml-4 font-serif">
                        ${index + 1}
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div class="mb-20 relative">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-torii-red to-transparent rounded-full opacity-50"></div>
                <div class="pl-8">
                    <div class="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
                        <h2 class="text-3xl sm:text-4xl font-bold text-white font-serif">Day ${day.day}</h2>
                        <span class="text-xl text-japan-gold font-light tracking-wider border-b border-japan-gold/30 pb-1">${day.title}</span>
                    </div>
                    
                    <!-- Image Gallery -->
                    ${renderImageGallery(day.images)}

                    <div class="grid gap-4">
                        ${highlightsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    fullItineraryContainer.innerHTML = `
        <div class="min-h-screen bg-night-indigo text-snow-white relative overflow-hidden">
            <!-- Global Background Elements -->
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                ${generateSnowflakes(40)}
            </div>
            
            <!-- Decorative Japanese Elements -->
            <div class="absolute top-40 right-20 opacity-10 pointer-events-none animate-float">
                ${getToriiGate("w-64 h-64 text-torii-red")}
            </div>
            <div class="absolute bottom-20 left-20 opacity-10 pointer-events-none animate-float" style="animation-duration: 10s;">
                ${getMountFuji("w-96 h-48 text-white")}
            </div>

            <!-- Header -->
            <div class="fixed top-0 left-0 right-0 bg-night-indigo/90 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <a href="../index.html" class="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-japan-gold transition-colors group">
                        <svg class="group-hover:-translate-x-1 transition-transform w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        <span class="font-serif font-bold tracking-wide">Back to Home</span>
                    </a>
                    <div class="text-lg font-serif text-white tracking-widest">FULL ITINERARY</div>
                </div>
            </div>
            
            <!-- Content -->
            <div class="pt-32 pb-20">
                <div class="max-w-5xl mx-auto px-4 sm:px-6">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mb-4">The Journey</h1>
                        <p class="text-gray-400 max-w-2xl mx-auto">A detailed breakdown of our winter expedition across Japan.</p>
                    </div>
                    ${fullItineraryHTML}
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderFullItinerary();
});