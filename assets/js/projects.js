fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    const grid = document.getElementById("projects-grid");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = `
        relative group rounded-2xl overflow-hidden shadow-lg transition
        transform hover:-translate-y-2 hover:scale-105
      `;
      card.setAttribute("data-aos", "zoom-in");

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover transition duration-500">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <h3 class="text-white text-xl font-bold mb-2">${project.title}</h3>
          <p class="text-gray-200 mb-4 px-4 text-center">${project.description}</p>
          <a href="${project.url}" target="_blank" class="px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition">Ver Sitio</a>
        </div>
      `;

      // Touch friendly para mobile
      card.addEventListener('touchstart', () => {
        const overlay = card.querySelector('div');
        overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
      });

      grid.appendChild(card);
    });
  });
