document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-group .btn');
    const tiles = document.querySelectorAll('.tiles .tile');

    function handleButtonClick(event) {
        const selectedTag = event.target.getAttribute('data-tag');
        event.target.classList.toggle('active');
        updateTiles();
    }

    function updateTiles() {
        const selectedTags = Array.from(buttons)
            .filter(button => button.classList.contains('active'))
            .map(button => button.getAttribute('data-tag'));

        tiles.forEach(tile => {
            const tags = tile.getAttribute('data-tags').split(',');
            const isVisible = selectedTags.some(tag => tags.includes(tag));
            tile.style.display = isVisible || selectedTags.length === 0 ? 'block' : 'none';
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // Initialize with no buttons selected
    updateTiles();
});
