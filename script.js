document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('grid-container');
    const rows = 50;
    const cols = 50;

    // Function to add event listener to grid cells for changing color on hover
    function addHoverEffect() {
        const gridCells = document.querySelectorAll('.grid-col');

        gridCells.forEach(cell => {
            let hoverCount = 0; // Counter to track the number of times hovered

            cell.addEventListener('mouseover', function() {
                hoverCount++;
                let alpha = hoverCount / 10; // Calculate alpha value (0.1 increment per hover)
                this.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`; // Set background color with alpha channel
            });


        });
    }

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < cols; j++) {
            const col = document.createElement('div');
            col.classList.add('grid-col');
            row.appendChild(col);
        }

        container.appendChild(row);
    }

    addHoverEffect(); // Call the addHoverEffect function after creating the grid
});
