document.addEventListener("DOMContentLoaded", function() {
    const figures = document.querySelectorAll(".figura");

    figures.forEach(fig => {
        fig.addEventListener("click", function() {
            if (this.classList.contains("small")) {
                this.classList.remove("small");
            } else {
                figures.forEach(f => f.classList.remove("small")); // Rimuove il resize da altre figurine
                this.classList.add("small");
            }
        });
    });
});

/* Stile CSS dinamico */
const style = document.createElement("style");
style.innerHTML = `
    .figura {
        width: 150px; /* Dimensione predefinita */
        transition: transform 0.3s ease;
    }
    .figura.small {
        transform: scale(0.8); /* Riduce la dimensione */
    }
`;
document.head.appendChild(style);
