function showCategory(category) {
    const cards = document.querySelectorAll('.link-card');
    const listView = document.getElementById('listView');
    const recommended = document.getElementById('recommended');

    cards.forEach(card => {
        if (card.dataset.category === category || category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    listView.style.display = 'none'; // 목록 화면 숨기기
    recommended.style.display = 'block'; // 추천 링크 화면 보이기
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

function showList() {
    const listView = document.getElementById('listView');
    const recommended = document.getElementById('recommended');
    const linkList = document.getElementById('linkList');
    const cards = document.querySelectorAll('.link-card');

    // 목록 초기화
    linkList.innerHTML = '';

    // 링크 카드를 목록 항목으로 추가
    cards.forEach(card => {
        const li = document.createElement('li');
        li.textContent = card.querySelector('h3').textContent;
        li.addEventListener('click', () => {
            showDetails(card);
        });
        linkList.appendChild(li);
    });

    listView.style.display = 'block'; // 목록 화면 보이기
    recommended.style.display = 'none'; // 추천 링크 화면 숨기기
}

function showDetails(card) {
    // 세부 정보를 표시하는 로직을 여기에 추가할 수 있습니다.
    // 여기서는 간단하게 alert를 사용합니다.
    alert(`Title: ${card.querySelector('h3').textContent}\nDescription: ${card.querySelector('p').textContent}`);
}

// Show all links by default
showCategory('all');

// Add event listener to the page title to show all links when clicked
document.getElementById('pageTitle').addEventListener('click', () => {
    showCategory('all');
    // Change the color of the page title
    const pageTitle = document.getElementById('pageTitle');
    pageTitle.classList.add('clicked');
});