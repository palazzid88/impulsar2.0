fetch("testimonios.json")
  .then(response => response.json())
  .then(testimonios => {
    const slider = document.getElementById("testimonials-slider");

    // Creamos las cards
    testimonios.forEach(t => crearCard(t, slider));

    // Duplicamos las mismas cards para scroll infinito
    testimonios.forEach(t => crearCard(t, slider));

    function crearCard(t, contenedor) {
      const card = document.createElement("div");
      card.className = `
        testimonial-card bg-white p-4 rounded-2xl shadow-lg flex-shrink-0 transition transform hover:-translate-y-1 hover:scale-105
      `;
      card.innerHTML = `
        <img src="${t.imagen}" alt="${t.nombre}" class="w-16 h-16 mb-4 mx-auto rounded-full">
        <h3 class="text-lg font-bold text-center mb-2">${t.nombre}</h3>
        <p class="text-gray-700 text-sm mb-2 text-center">"${t.mensaje}"</p>
        <a href="${t.instagram}" target="_blank" class="text-blue-500 text-sm block text-center">@${t.instagram.split('/').pop()}</a>
      `;
      contenedor.appendChild(card);
    }

    // Scroll automático
    let speed = 1; // pixeles por frame
    function autoScroll() {
      slider.scrollLeft += speed;
      // Cuando llegamos a la mitad del scroll (duplicado), reiniciamos
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  });
