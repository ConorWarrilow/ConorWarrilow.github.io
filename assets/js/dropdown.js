

document.addEventListener('DOMContentLoaded', function() {
    const chBoxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');
    const dpBtn = document.getElementById('multiSelectDropdown');
    const tiles = document.querySelectorAll('.tiles .tile');

    function handleCB() {
        const selectedTags = Array.from(chBoxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // Update dropdown button text
        dpBtn.innerText = selectedTags.length > 0
            ? selectedTags.join(' | ')
            : 'Select';

        // Filter tiles
        tiles.forEach(tile => {
            const tags = tile.getAttribute('data-tags').split(',');
            const isVisible = selectedTags.some(tag => tags.includes(tag));
            tile.style.display = isVisible || selectedTags.length === 0 ? 'block' : 'none';
        });
    }

    // Set all checkboxes to checked and trigger filtering
    chBoxes.forEach(checkbox => checkbox.checked = false);
    handleCB();

    // Add event listeners for checkboxes
    chBoxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCB);
    });
});