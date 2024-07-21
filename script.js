function showCategory(category) {
    const cards = document.querySelectorAll('.link-card');
    cards.forEach(card => {
        if (card.dataset.category === category || category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchLinks() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.link-card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show all links by default
showCategory('all');

// Add event listener to the page title to show all links when clicked
document.getElementById('pageTitle').addEventListener('click', () => {
    showCategory('all');
});