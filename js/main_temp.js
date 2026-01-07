/**
 * Renders active page of insights into grid container.
 */
function renderAllInsightsInGrid() {
    const cardContainer = document.getElementById('insightContainer');
    const counter = document.getElementById('insightCounter');
    const prevBtn = document.getElementById('prevInsightBtn');
    const nextBtn = document.getElementById('nextInsightBtn');

    if (!cardContainer || !window.quoteJourneyState) return;

    const allQuotes = window.quoteJourneyState.quoteData.quotes;
    const totalQuotes = allQuotes.length;
    const totalPages = Math.ceil(totalQuotes / QUOTES_PER_PAGE);

    // Calculate slice
    const startIndex = currentPage * QUOTES_PER_PAGE;
    const endIndex = Math.min(startIndex + QUOTES_PER_PAGE, totalQuotes);
    const quotesToDisplay = allQuotes.slice(startIndex, endIndex);

    // Update Counter (Force update)
    if (counter) {
        // Use a localized format if possible, otherwise standard "Page X / Y"
        counter.textContent = `Page ${currentPage + 1} / ${totalPages}`;
    }

    // Generate HTML
    cardContainer.innerHTML = quotesToDisplay.map((quote, index) => {
        const staggerClass = index < 3 ? ` reveal-stagger-${index + 1}` : '';

        // Determine Book Link
        let bookLink = "#";

        // Use localized text from uiTextTranslations
        const linkText = getUIText('viewBookContents') + ' →';

        if (quote.source.work.includes("Do You Read Me")) {
            bookLink = "/books/do-you-read-me.html";
        } else if (quote.source.work.includes("Triumphant Victim")) {
            bookLink = "/books/triumphant-victim.html";
        }

        return `
        <div class="reveal ${staggerClass} insight-card p-6 text-cream cursor-pointer" tabindex="${index + 1}">
            <h3 class="text-xl font-bold text-gold">${quote.title}</h3>
            <p class="quote-text">"${quote.quote}"</p>
            <div class="insight-reveal-content text-sm mt-4">
                <p>${quote.context}</p>
                <div class="meta-info mt-3 opacity-75 text-xs">
                    <strong>Source:</strong> ${quote.source.work}
                </div>
            </div>
            <div class="mt-6 pt-4 border-t border-gold/30">
                <a href="${bookLink}" class="text-gold font-bold hover:text-cream transition-colors duration-300 inline-flex items-center">
                    ${linkText}
                </a>
            </div>
        </div>
        `;
    }).join('');

    // Update Button States
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;

    reinitializeScrollObserver();
}
