(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

  // Fungsi untuk membuka halaman
  function turnPage(pageNum) {
    const pages = document.querySelectorAll('#card-inside');
    
    if (pageNum < pages.length) {
        const currentPage = pages[pageNum-1];
        const prevPages = Array.from(pages).slice(0, pageNum-1);
        
        if (!currentPage.classList.contains('flipped')) {
            currentPage.classList.add('flipped');
            prevPages.forEach(page => {
                page.classList.add('prev-flipped');
            });
        } else {
            currentPage.classList.remove('flipped');
            prevPages.forEach(page => {
                page.classList.remove('prev-flipped');
            });
            for (let i = pageNum; i < pages.length; i++) {
                pages[i].classList.remove('flipped');
                pages[i].classList.remove('prev-flipped');
            }
        }
    }
  }

  // Event listener untuk card utama
  document.querySelector('#open').addEventListener('click', function() {
    document.querySelectorAll('#card-inside').forEach(page => {
        page.classList.remove('flipped');
        page.classList.remove('prev-flipped');
    });
  });

  // Tambahkan event listener untuk card kedua dan ketiga
  document.querySelector('.open-second').addEventListener('click', function() {
    document.getElementById('second-card').classList.toggle('opened');
  });

  document.querySelector('.open-third').addEventListener('click', function() {
    document.getElementById('third-card').classList.toggle('opened');
  });

  function createLoveParticles() {
    const container = document.querySelector('.love-particles');
    const colors = ['#ffb6b6', '#ff8080', '#ff6666', '#ff4d4d'];
    const symbols = ['❤', '♥', '💕', '💗', '💓'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'love-particle';
        
        // Set random properties
        const size = Math.random() * (30 - 15) + 15;
        const left = Math.random() * 100;
        const duration = Math.random() * (15 - 8) + 8;
        const delay = Math.random() * 5;
        const translateX = Math.random() * 200 - 100;
        const rotate = Math.random() * 360;
        
        // Set CSS variables
        particle.style.setProperty('--size', `${size}px`);
        particle.style.setProperty('--left', `${left}%`);
        particle.style.setProperty('--duration', `${duration}s`);
        particle.style.setProperty('--delay', `${delay}s`);
        particle.style.setProperty('--tx', `${translateX}px`);
        particle.style.setProperty('--tr', `${rotate}deg`);
        particle.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        
        // Set random love symbol
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        container.appendChild(particle);
        
        // Remove particle after animation
        particle.addEventListener('animationend', () => {
            particle.remove();
            createParticle();
        });
    }
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
        createParticle();
    }
  }

  // Panggil fungsi saat dokumen dimuat
  document.addEventListener('DOMContentLoaded', () => {
    createLoveParticles();
  });

  // Tambahkan fungsi untuk membuat floating hearts
  function createFloatingHearts() {
    const container = document.createElement('div');
    container.className = 'floating-hearts';
    document.body.appendChild(container);
    
    const colors = [
        'rgba(255, 150, 150, 0.8)',
        'rgba(255, 120, 120, 0.8)',
        'rgba(255, 100, 100, 0.8)',
        'rgba(255, 80, 80, 0.8)'
    ];
    const symbols = ['❤', '♥', '💖', '💗', '💓', '💝'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // Random properties
        const size = Math.random() * (30 - 15) + 15;
        const left = Math.random() * 100;
        const duration = Math.random() * (12 - 6) + 6;
        const delay = Math.random() * -20;
        
        // Set CSS variables
        heart.style.setProperty('--size', `${size}px`);
        heart.style.left = `${left}%`;
        heart.style.setProperty('--duration', `${duration}s`);
        heart.style.setProperty('--delay', `${delay}s`);
        heart.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        
        // Set random symbol
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        container.appendChild(heart);
        
        // Remove heart after animation
        heart.addEventListener('animationend', () => {
            heart.remove();
            createHeart();
        });
    }
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 300); // Delay each heart creation for smoother initial appearance
    }
  }

  // Panggil fungsi saat halaman dimuat
  document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
  });

}());

