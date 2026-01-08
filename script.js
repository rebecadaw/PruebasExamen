document.getElementById('loadMoreBtn').addEventListener('click', function() {
  const timeline = document.getElementById('timeline');
  
  // Nuevos elementos de la línea del tiempo
  const newItems = [
    {
      year: 'Década de 2020',
      description: 'Los videojuegos se integran más con la tecnología VR y AR. Juegos como "The Last of Us Part II" y "Cyberpunk 2077" capturan la atención de los jugadores.'
    },
    {
      year: 'Futuro',
      description: 'La industria de los videojuegos sigue creciendo con avances en la inteligencia artificial, experiencias inmersivas y juegos en la nube.'
    }
  ];
  
  newItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('timeline-item');
    
    div.innerHTML = `
      <h2>${item.year}</h2>
      <p>${item.description}</p>
    `;
    
    timeline.appendChild(div);
  });
  
  // Desaparecer el botón después de cargar más contenido
  this.style.display = 'none';
});

