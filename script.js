// Menu auto-filled from your uploaded PDF. :contentReference[oaicite:1]{index=1}
// Each dish may have:
// - price: single price (string/number)
// - priceHalf & priceFull: for half/full options (strings/numbers)
// images: array of image paths (placeholders included)
const menuData = [
    {
        type: "Soups",
        subtypes: [
            {
                name: "Chicken Soups", dishes: [
                    { name: "Chicken Soup", price: "100", images: ["Chicken soup.jpg"] },
                    { name: "Chicken Manchaw Soup", price: "130", images: ["Chicken manchow soup.jpg"] },
                    { name: "Chicken Sweetcorn Soup", price: "130", images: ["Chicken sweetcorn soup.jpg"] },
                    { name: "Chicken Hot & Sour Soup", price: "130", images: ["Chicken hot & sour soup.jpg"] },
                    { name: "Chicken Lemon Coriander Soup", price: "130", images: ["chicken lemon coriander soup.jpeg"] }
                ]
            },
            {
                name: "Veg Soups", dishes: [
                    { name: "Veg Soup", price: "100", images: ["veg soup.jpeg"] },
                    { name: "Veg Manchaw Soup", price: "130", images: ["veg manchow soup.jpeg"] },
                    { name: "Veg Sweetcorn Soup", price: "130", images: ["veg sweetcorn soup.jpeg"] },
                    { name: "Veg Hot & Sour Soup", price: "130", images: ["veg hot & sour soup.jpeg"] },
                    { name: "Veg Lemon Coriander Soup", price: "130", images: ["veg lemon coriander soup.jpeg"] }
                ]
            }
        ]
    },

    {
        type: "Salad & Papad",
        subtypes: [
            {
                name: "Sides", dishes: [
                    { name: "Papad Fry", price: "30", images: ["papad fry.jpg"] },
                    { name: "Papad Roast", price: "30", images: ["papad fry.jpg"] },
                    { name: "Masala Papad", price: "50", images: ["masala papad.jpg"] },
                    { name: "Fresh Green Salad", price: "50", images: ["fresh green salad.jpg"] },
                    { name: "Cucumber Salad", price: "50", images: ["cucumber salad.jpeg"] },
                    { name: "Dahi Kachumbar", price: "80", images: ["dahi kachumbar.jpeg"] }
                ]
            }
        ]
    },

    {
        type: "Tandoor Starters",
        subtypes: [
            {
                name: "Tandoor Starters", dishes: [
                    { name: "Chicken Tandoori", price: "320", images: ["chicken tandoori.jpg"] },
                    { name: "Chicken Roasted Tandoori", price: "350", images: ["chicken roasted tandoori.jpg"] },
                    { name: "Chicken Malai Tandoori", price: "400", images: ["chicken malai tandoori.jpeg"] },
                    { name: "Chicken Garlic Tandoori", price: "400", images: ["chicken garlic tandoori.jpg"] },
                    { name: "Chicken Albaik", price: "200", images: ["chicken albaik.jpg"] },
                    { name: "Chicken Green Albaik", price: "220", images: [] },
                    { name: "Chicken Tikka Boneless", price: "300", images: ["chicken tikka boneless.jpg"] },
                    { name: "Chicken Pahadi Tikka", price: "300", images: ["chicken pahadi tikka.jpg"] },
                    { name: "Chicken Garlic Tikka", price: "300", images: [] },
                    { name: "Chicken Malai Tikka", price: "300", images: ["chicken malai tikka.jpeg"] },
                    { name: "Chicken Cheese Malai Tikka", price: "350", images: [] },
                    { name: "Chicken Chandni Kebab", price: "300", images: [] },
                    { name: "Chicken Seekh Malai Kebab", price: "400", images: ["Chicken-Malai-Seekh-Kebabs.png"] },
                    { name: "Chicken Shalimar Tikka", price: "300", images: [] },
                    { name: "Chicken Black Pepper Tikka", price: "300", images: ["chicken black paper tikka.jpg"] },
                    { name: "Chicken Nawab Special", price: "400", images: [] },
                    { name: "Mutton Seekh Kebab", price: "400", images: ["Chicken-Malai-Seekh-Kebabs.png"] },
                    { name: "Chicken Afghani Tangdi", price: "240", images: ["chicken afgani tangdi.jpeg"] },
                    { name: "Chicken Hariyali Tangdi", price: "240", images: ["Chicken-Hariyali-Tangdi-Kabab-10.jpg"] },
                    { name: "Chicken Garlic Tangdi", price: "240", images: ["Chicken-Hariyali-Tangdi-Kabab-10.jpg"] }
                ]
            },
            
            {
                name: "Half / Full note", dishes: [
                    { name: "Half / Full portions available for selected tandoor items", price: "Varies", images: ["Chicken-Hariyali-Tangdi-Kabab-10.jpg"] }
                ]
            }
        ]
    },

    {
        type: "Sizzlers & Platters",
        subtypes: [
            {
                name: "Sizzlers", dishes: [
                    { name: "Chicken Sizzler", price: "400", images: [] },
                    { name: "Nawab Special Sizzler", price: "400", images: [] },
                    { name: "Mumtaz Sizzler", price: "400", images: [] },
                    { name: "Chef Special Sizzler", price: "400", images: [] }
                ]
            },
            {
                name: "Platters", dishes: [
                    { name: "Mix Platter (chicken)", price: "1000", images: [] },
                    { name: "Tandoori Platter", price: "800", images: [] },
                    { name: "Dosti Platter", price: "1200", images: [] },
                    { name: "Nawab Special Platter", price: "600", images: [] }
                ]
            }
        ]
    },

    {
        type: "Chinese Starters",
        subtypes: [
            {
                name: "Chicken Chinese", dishes: [
                    { name: "Chicken Chilli Dry", price: "200", images: [] },
                    { name: "Chicken Manchurian Dry", price: "200", images: [] },
                    { name: "Chicken Schezwan Dry", price: "200", images: [] },
                    { name: "Chicken 65", price: "200", images: [] },
                    { name: "Chicken Crispy", price: "200", images: [] },
                    { name: "Chicken Finger", price: "250", images: [] },
                    { name: "Chicken Lolipop (4 Pcs)", price: "250", images: [] },
                    { name: "Chicken Black Pepper", price: "200", images: [] },
                    { name: "Chicken Garlic", price: "200", images: [] }
                ]
            },
            {
                name: "Veg Chinese", dishes: [
                    { name: "Veg Manchurian Dry", price: "150", images: [] },
                    { name: "Veg Crispy", price: "150", images: [] },
                    { name: "Veg Chilly Dry", price: "150", images: [] },
                    { name: "Paneer 65", price: "250", images: [] },
                    { name: "Paneer Chilly", price: "250", images: [] },
                    { name: "Paneer Pahadi Tikka", price: "300", images: [] },
                    { name: "Paneer Malai Tikka", price: "300", images: [] },
                    { name: "Paneer Garlic Tikka", price: "300", images: [] }
                ]
            }
        ]
    },

    {
        type: "Fried Rice & Noodles",
        subtypes: [
            {
                name: "Chicken Fried Rice", dishes: [
                    { name: "Chicken Fried Rice", price: "150", images: [] },
                    { name: "Chicken Schezwan Rice", price: "200", images: [] },
                    { name: "Chicken Malaysia Fried Rice", price: "200", images: [] },
                    { name: "Chicken Singapore Fried Rice", price: "200", images: [] }
                ]
            },
            {
                name: "Veg Fried Rice", dishes: [
                    { name: "Veg Fried Rice", price: "150", images: [] },
                    { name: "Veg Schezwan Fried Rice", price: "200", images: [] },
                    { name: "Veg Malaysia Fried Rice", price: "200", images: [] },
                    { name: "Veg Singapore Fried Rice", price: "200", images: [] }
                ]
            },
            {
                name: "Chicken Noodles", dishes: [
                    { name: "Chicken Noodles", price: "150", images: [] },
                    { name: "Chicken Hakka Noodles", price: "200", images: [] },
                    { name: "Chicken Schezwan Noodles", price: "200", images: [] },
                    { name: "Chicken Malaysia Noodles", price: "200", images: [] },
                    { name: "Chicken Singapore Noodles", price: "200", images: [] }
                ]
            },
            {
                name: "Veg Noodles", dishes: [
                    { name: "Veg Noodles", price: "150", images: [] },
                    { name: "Veg Hakka Noodles", price: "200", images: [] },
                    { name: "Veg Schezwan Noodles", price: "200", images: [] },
                    { name: "Veg Malaysia Noodles", price: "200", images: [] },
                    { name: "Veg Singapore Noodles", price: "200", images: [] }
                ]
            }
        ]
    },

    {
        type: "Mutton Main Course",
        subtypes: [
            {
                name: "Mutton Main", dishes: [
                    { name: "Mutton Masala", price: "330", images: [] },
                    { name: "Mutton Korma", price: "330", images: [] },
                    { name: "Mutton Afghani", price: "400", images: [] },
                    { name: "Mutton Lajawab", price: "400", images: [] },
                    { name: "Dum Mutton", price: "400", images: [] },
                    { name: "Mutton Bhoona", price: "400", images: [] },
                    { name: "Mutton Kasturi", price: "400", images: [] },
                    { name: "Mutton Kadai", price: "300", images: [] },
                    { name: "Mutton Do Pyaza", price: "400", images: [] },
                    { name: "Mutton Chatpata", price: "400", images: [] },
                    { name: "Shahi Mutton", price: "400", images: [] },
                    { name: "Mutton Mughlai", price: "330", images: [] },
                    { name: "Mutton Nawab Special", price: "400", images: [] }
                ]
            }
        ]
    },

    {
        type: "Chicken Main Course",
        subtypes: [
            {
                name: "Chicken Gravies & Specials", dishes: [
                    { name: "Chicken Masala", price: "250", images: [] },
                    { name: "Chicken Korma", price: "250", images: [] },
                    { name: "Chicken Afghani", price: "250", images: [] },
                    { name: "Chicken Lajawab", price: "250", images: [] },
                    { name: "Dum Chicken", price: "250", images: [] },
                    { name: "Butter Chicken", price: "250", images: [] },
                    { name: "Chicken Bhoona", price: "250", images: [] },
                    { name: "Chicken Kasturi", price: "250", images: [] },
                    { name: "Chicken Kadai", price: "250", images: [] },
                    { name: "Chicken Do Pyaza", price: "250", images: [] },
                    { name: "Chicken Angara", price: "270", images: [] },
                    { name: "Chicken Chatpata", price: "250", images: [] },
                    { name: "Chicken Tikka Masala", price: "300", images: [] },
                    { name: "Shahi Chicken", price: "250", images: [] },
                    { name: "Chicken Mughlai", price: "250", images: [] },
                    { name: "Murg Musallam", price: "650", images: [] },
                    { name: "Chicken Nawab Special", price: "350", images: [] },
                    { name: "Chicken Nawabi Handi", price: "750", images: [] },
                    { name: "Chicken Hyderabadi Handi", price: "750", images: [] },
                    { name: "Chicken Kolhapuri", price: "250", images: [] },
                    { name: "Chicken Punjabi", price: "250", images: [] }
                ]
            }
        ]
    },

    {
        type: "Roti & Breads",
        subtypes: [
            {
                name: "Rotis", dishes: [
                    { name: "Tandoori Roti", price: "10", images: [] },
                    { name: "Butter Roti", price: "15", images: [] },
                    { name: "Rumali Roti", price: "15", images: [] },
                    { name: "Lachchha Paratha", price: "50", images: [] },
                    { name: "Plain Naan", price: "50", images: [] },
                    { name: "Butter Naan", price: "70", images: [] },
                    { name: "Garlic Naan", price: "80", images: [] },
                    { name: "Cheese Garlic Naan", price: "100", images: [] }
                ]
            }
        ]
    },

    {
        type: "Gravy Roast / Regional Specials",
        subtypes: [
            {
                name: "Gravy Roast & Specials", dishes: [
                    { name: "Chicken Ptiala", price: "350", images: [] },
                    { name: "Chicken Kabuli", price: "400", images: [] },
                    { name: "Chicken Changezi", price: "400", images: [] },
                    { name: "Chicken Kashmiri", price: "300", images: [] },
                    { name: "Chicken Lababdar", price: "300", images: [] },
                    { name: "Chicken Lara", price: "300", images: [] },
                    { name: "Chicken Rasheeda", price: "250", images: [] },
                    { name: "Chicken Korma Fry", price: "250", images: [] }
                ]
            }
        ]
    },

    {
        type: "Veg Main Course",
        subtypes: [
            {
                name: "Veg Main", dishes: [
                    { name: "Mix Veg", price: "180", images: [] },
                    { name: "Veg Masala Kasturi", price: "180", images: [] },
                    { name: "Sev Bhaji", price: "150", images: [] },
                    { name: "Dal Tadka", price: "150", images: [] },
                    { name: "Dal Fry", price: "150", images: [] }
                ]
            },
            {
                name: "Paneer Main", dishes: [
                    { name: "Paneer Masala", price: "200", images: [] },
                    { name: "Paneer Butter Masala", price: "200", images: [] },
                    { name: "Paneer Butter Malai", price: "200", images: [] },
                    { name: "Paneer Tikka Masala", price: "250", images: [] },
                    { name: "Paneer Kadai", price: "200", images: [] },
                    { name: "Paneer Kasturi", price: "200", images: [] },
                    { name: "Paneer Bhurji", price: "200", images: [] },
                    { name: "Palak Paneer", price: "200", images: [] },
                    { name: "Paneer Handi", price: "250", images: [] }
                ]
            }
        ]
    },

    {
        type: "Eggs",
        subtypes: [
            {
                name: "Egg Main", dishes: [
                    { name: "Egg Masala", price: "150", images: [] },
                    { name: "Egg Curry", price: "100", images: [] },
                    { name: "Egg Bhurji", price: "100", images: [] },
                    { name: "Egg Mughlai", price: "150", images: [] },
                    { name: "Egg Biryani", price: "150", images: [] }
                ]
            }
        ]
    },

    {
        type: "Biryani & Rice",
        subtypes: [
            {
                name: "Mutton Biryani", dishes: [
                    { name: "Mutton Biryani (Half)", priceHalf: "330", priceFull: "350", images: [] },
                    { name: "Mutton Biryani (Special) (Half)", priceHalf: "180", priceFull: "200", images: [] }
                ]
            },
            {
                name: "Chicken Biryani", dishes: [
                    { name: "Chicken Biryani (Half)", priceHalf: "150", priceFull: "160", images: [] },
                    { name: "Chicken Biryani (Special) (Half)", priceHalf: "80", priceFull: "90", images: [] }
                ]
            },
            {
                name: "Veg Biryani & Rice", dishes: [
                    { name: "Veg Biryani", price: "150", images: [] },
                    { name: "Veg Paneer Pulao", price: "150", images: [] },
                    { name: "Plain Rice", price: "140", images: [] },
                    { name: "Jeera Rice", price: "150", images: [] },
                    { name: "Garlic Rice", price: "150", images: [] }
                ]
            }
        ]
    },

    {
        type: "Cold Drinks & Water",
        subtypes: [
            {
                name: "Bottles & Cold Drinks", dishes: [
                    { name: "Mineral Water 250 ml", price: "10", images: [] },
                    { name: "Mineral Water 500 ml", price: "20", images: [] },
                    { name: "Jeera Soda", price: "30", images: [] },
                    { name: "Cold Drink 250 ml", price: "30", images: [] },
                    { name: "Cold Drink 500 ml", price: "50", images: [] }
                ]
            }
        ]
    }
];

// -------------------------
// Rendering & UI logic
// -------------------------
const menuRoot = document.getElementById('menu-root');

function createDishElement(dish) {
    const dishEl = document.createElement('div');
    dishEl.className = 'dish';

    const btn = document.createElement('button');
    btn.className = 'dish-button';
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = `
      <div class="left">
        <div style="width:12px;height:12px;border-radius:3px;background:${dish.images && dish.images.length ? '#b33939' : '#ccc'}"></div>
        <div>
          <div class="dish-name">${dish.name}</div>
          <div class="dish-meta">${dish.price ? ('₹ ' + dish.price) : (dish.priceHalf ? ('Half/Full available') : '')}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        <div class="arrow">&#9656;</div>
      </div>
    `;

    const panel = document.createElement('div');
    panel.className = 'dish-panel';

    // Determine display: single price OR half/full
    let priceHtml = '';
    if (dish.priceHalf || dish.priceFull) {
        // interactive pill buttons
        const half = dish.priceHalf ? dish.priceHalf : null;
        const full = dish.priceFull ? dish.priceFull : null;
        priceHtml = `
        <div style="display:flex;flex-direction:column">
          <div class="price-toggle" role="tablist">
            ${half !== null ? `<div class="pill" data-kind="half">Half</div>` : ''}
            ${full !== null ? `<div class="pill" data-kind="full">Full</div>` : ''}
          </div>
          <div class="single-price" aria-live="polite">₹ ${half !== null ? half : full}</div>
        </div>
      `;
    } else {
        priceHtml = `<div class="single-price">₹ ${dish.price ? dish.price : '-'}</div>`;
    }

    // carousel area (images)
    const images = (dish.images && dish.images.length) ? dish.images : ['assets/dishes/placeholder.jpg'];
    const carouselId = 'c_' + Math.random().toString(36).slice(2, 9);
    panel.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:10px">
        <div style="font-weight:700">${dish.name}</div>
        <div class="carousel" id="${carouselId}">
          <img src="${images[0]}" alt="${dish.name}">
          <div class="dots"></div>
        </div>
        ${priceHtml}
      </div>
    `;

    dishEl.appendChild(btn);
    dishEl.appendChild(panel);

    // toggle open/close
    btn.addEventListener('click', () => {
        const open = panel.classList.toggle('active');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.querySelector('.arrow').style.transform = open ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    // init carousel
    initCarousel(carouselId, images);

    // setup half/full pill behavior if present
    if (dish.priceHalf || dish.priceFull) {
        const pills = panel.querySelectorAll('.pill');
        const priceBox = panel.querySelector('.single-price');
        function setActive(kind) {
            pills.forEach(p => {
                p.classList.toggle('active', p.dataset.kind === kind);
            });
            if (kind === 'half' && dish.priceHalf) priceBox.textContent = '₹ ' + dish.priceHalf;
            if (kind === 'full' && dish.priceFull) priceBox.textContent = '₹ ' + dish.priceFull;
        }
        // default selection: half if exists, else full
        setActive(dish.priceHalf ? 'half' : 'full');
        pills.forEach(p => p.addEventListener('click', () => setActive(p.dataset.kind)));
    }

    return dishEl;
}

function renderMenu(data) {
    menuRoot.innerHTML = '';
    data.forEach(section => {
        const typeEl = document.createElement('div');
        typeEl.className = 'menu-type';
        typeEl.innerHTML = `<h2>${section.type}</h2>`;
        section.subtypes.forEach(sub => {
            const subWrap = document.createElement('div');
            subWrap.className = 'subtype';
            subWrap.innerHTML = `<h3>${sub.name}</h3>`;
            const dishList = document.createElement('div');
            dishList.className = 'dish-list';
            sub.dishes.forEach(dish => {
                const dishEl = createDishElement(dish);
                dishList.appendChild(dishEl);
            });
            subWrap.appendChild(dishList);
            typeEl.appendChild(subWrap);
        });
        menuRoot.appendChild(typeEl);
    });
}

// Carousel implementation (auto-rotate, dots, pause on hover)
function initCarousel(id, images) {
    const root = document.getElementById(id);
    if (!root) return;
    const img = root.querySelector('img');
    const dots = root.querySelector('.dots');
    let idx = 0;

    // create dots
    images.forEach((_, i) => {
        const b = document.createElement('button');
        b.addEventListener('click', () => { idx = i; update(); });
        dots.appendChild(b);
    });

    function update() {
        img.src = images[idx] || images[0];
        Array.from(dots.children).forEach((d, i) => {
            d.style.opacity = i === idx ? '1' : '.5';
            d.style.transform = i === idx ? 'scale(1.15)' : 'scale(1)';
        });
    }
    update();

    let interval = setInterval(() => {
        idx = (idx + 1) % images.length;
        update();
    }, 3500);

    root.addEventListener('mouseenter', () => clearInterval(interval));
    root.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            idx = (idx + 1) % images.length;
            update();
        }, 3500);
    });
}

// render and setup
renderMenu(menuData);
document.getElementById('year').textContent = new Date().getFullYear();
