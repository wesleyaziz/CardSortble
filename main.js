
document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('cardContainer');

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('success')
            data.pokemon.forEach(pokemon => {
                const card = document.createElement('div');
                card.classList.add('card');
        
                card.innerHTML = `
                    <img class="member_pic" src="${pokemon.pic}">
                    <div class="name">
                        <h3>${pokemon.ChName}</h3>
                        <p>${pokemon.EnName}</p>
                    </div>
                    <div class="attributes">
                        <div class="${pokemon.attributes1}">${pokemon.attributes1}</div>
                        ${pokemon.attributes2 ? `<div class="${pokemon.attributes2}">${pokemon.attributes2}</div>` : ''}
                    </div>
                `;
        
                cardContainer.appendChild(card);
            });

            // 使用Sortablejs使卡片可拖曳
            new Sortable(cardContainer, {
                animation: 250,
                ghostClass: 'sortable-ghost'
            });
        })
        .catch(error => console.error('Error:', error));
});
