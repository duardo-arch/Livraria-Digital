let cartCount = 0;

// Função para simular adição ao carrinho
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("eBook adicionado ao carrinho com sucesso!");
}

// Função para filtrar categorias
function filterBooks(category) {
    const cards = document.querySelectorAll('.book-card');
    
    cards.forEach(card => {
        if (category === 'todos') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}