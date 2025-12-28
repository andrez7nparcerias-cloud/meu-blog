function compartilhar() {
    const linkAtual = window.location.href;
    const btn = document.querySelector('.btn-share-floating');

    // Efeito Visual de "Up" via JS
    btn.style.transform = 'scale(1.1) translateY(-5px)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);

    if (navigator.share) {
        navigator.share({
            title: 'Perfil do André | @andrez7n_',
            text: 'Veja os links oficiais do André!',
            url: linkAtual // Auto-compartilhamento inteligente
        }).catch(err => console.log("Compartilhamento cancelado"));
    } else {
        // Fallback para PC: Copia o link
        navigator.clipboard.writeText(linkAtual);
        alert("Link copiado para a área de transferência!");
    }
}
