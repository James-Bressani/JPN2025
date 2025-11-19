const fullItineraryContainer = document.getElementById('full-itinerary-page');

function renderFullItinerary() {
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