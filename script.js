// Menu data with veg/nonveg flags (edit typeTag if any tag is incorrect)
const menuData = [
    {
        type: "Soups",
        subtypes: [
            {
                name: "Chicken Soups", dishes: [
                    { name: "Chicken Soup", price: "100", typeTag: "nonveg", images: ["Chicken soup.jpg"] },
                    { name: "Chicken Manchaw Soup", price: "130", typeTag: "nonveg", images: ["Chicken manchow soup.jpg"] },
                    { name: "Chicken Sweetcorn Soup", price: "130", typeTag: "nonveg", images: ["Chicken sweetcorn soup.jpg"] },
                    { name: "Chicken Hot & Sour Soup", price: "130", typeTag: "nonveg", images: ["Chicken hot & sour soup.jpg"] },
                    { name: "Chicken Lemon Coriander Soup", price: "130", typeTag: "nonveg", images: ["chicken lemon coriander soup.jpeg"] }
                ]
            },
            {
                name: "Veg Soups", dishes: [
                    { name: "Veg Soup", price: "100", typeTag: "veg", images: ["veg soup.jpeg"] },
                    { name: "Veg Manchaw Soup", price: "130", typeTag: "veg", images: ["veg manchow soup.jpeg"] },
                    { name: "Veg Sweetcorn Soup", price: "130", typeTag: "veg", images: ["veg sweetcorn soup.jpeg"] },
                    { name: "Veg Hot & Sour Soup", price: "130", typeTag: "veg", images: ["veg hot & sour soup.jpeg"] },
                    { name: "Veg Lemon Coriander Soup", price: "130", typeTag: "veg", images: ["veg lemon coriander soup.jpeg"] }
                ]
            }
        ]
    },

    {
        type: "Salad & Papad",
        subtypes: [
            {
                name: "Sides", dishes: [
                    { name: "Papad Fry", price: "30", typeTag: "veg", images: ["papad fry.jpg"] },
                    { name: "Papad Roast", price: "30", typeTag: "veg", images: ["papad fry.jpg"] },
                    { name: "Masala Papad", price: "50", typeTag: "veg", images: ["masala papad.jpg"] },
                    { name: "Fresh Green Salad", price: "50", typeTag: "veg", images: ["fresh green salad.jpg"] },
                    { name: "Cucumber Salad", price: "50", typeTag: "veg", images: ["cucumber salad.jpeg"] },
                    { name: "Dahi Kachumbar", price: "80", typeTag: "veg", images: ["dahi kachumbar.jpeg"] }
                ]
            }
        ]
    },

    {
        type: "Tandoor Starters",
        subtypes: [
            {
                name: "Tandoor Starters", dishes: [
                    { name: "Chicken Tandoori", priceHalf: "160", priceFull: "320", typeTag: "nonveg", images: ["chicken tandoori.jpg"] },
                    { name: "Chicken Roasted Tandoori", priceHalf: "180", priceFull: "350", typeTag: "nonveg", images: ["chicken roasted tandoori.jpg"] },
                    { name: "Chicken Malai Tandoori", priceHalf: "200", priceFull: "400", typeTag: "nonveg", images: ["chicken malai tandoori.jpeg"] },
                    { name: "Chicken Garlic Tandoori", priceHalf: "200", priceFull: "400", typeTag: "nonveg", images: ["chicken garlic tandoori.jpg"] },
                    { name: "Chicken Albaik", price: "200", typeTag: "nonveg", images: ["chicken albaik.jpg"] },
                    { name: "Chicken Green Albaik", price: "220", typeTag: "nonveg", images: [] },
                    { name: "Chicken Tikka Boneless", price: "300", typeTag: "nonveg", images: ["chicken tikka boneless.jpg"] },
                    { name: "Chicken Pahadi Tikka", price: "300", typeTag: "nonveg", images: ["chicken pahadi tikka.jpg"] },
                    { name: "Chicken Garlic Tikka", price: "300", typeTag: "nonveg", images: [] },
                    { name: "Chicken Malai Tikka", price: "300", typeTag: "nonveg", images: ["chicken malai tikka.jpeg"] },
                    { name: "Chicken Cheese Malai Tikka", price: "350", typeTag: "nonveg", images: [] },
                    { name: "Chicken Chandni Kebab", price: "300", typeTag: "nonveg", images: [] },
                    { name: "Chicken Seekh Malai Kebab", price: "400", typeTag: "nonveg", images: ["Chicken-Malai-Seekh-Kebabs.png"] },
                    { name: "Chicken Shalimar Tikka", price: "300", typeTag: "nonveg", images: [] },
                    { name: "Chicken Black Pepper Tikka", price: "300", typeTag: "nonveg", images: ["chicken black paper tikka.jpg"] },
                    { name: "Chicken Nawab Special", price: "400", typeTag: "nonveg", images: [] },
                    { name: "Mutton Seekh Kebab", price: "400", typeTag: "nonveg", images: ["Chicken-Malai-Seekh-Kebabs.png"] },
                    { name: "Chicken Afghani Tangdi", priceHalf: "120", priceFull: "240", typeTag: "nonveg", images: ["chicken afgani tangdi.jpeg"] },
                    { name: "Chicken Hariyali Tangdi", priceHalf: "120", priceFull: "240", typeTag: "nonveg", images: ["Chicken-Hariyali-Tangdi-Kabab-10.jpg"] },
                    { name: "Chicken Garlic Tangdi", priceHalf: "120", priceFull: "240", typeTag: "nonveg", images: ["Chicken-Hariyali-Tangdi-Kabab-10.jpg"] }
                ]
            }
        ]
    },

    {
        type: "Sizzlers & Platters",
        subtypes: [
            {
                name: "Sizzlers", dishes: [
                    { name: "Nawab Special Sizzler", price: "400", typeTag: "nonveg", images: [] },
                    { name: "Mumtaz Sizzler", price: "400", typeTag: "nonveg", images: [] },
                    { name: "Chef Special Sizzler", price: "400", typeTag: "nonveg", images: [] }
                ]
            },
            {
                name: "Platters", dishes: [
                    { name: "Mix Platter (chicken)", price: "1000", typeTag: "nonveg", images: [] },
                    { name: "Tandoori Platter", price: "800", typeTag: "nonveg", images: [] },
                    { name: "Dosti Platter", price: "1200", typeTag: "nonveg", images: [] },
                    { name: "Nawab Special Platter", price: "600", typeTag: "nonveg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Chinese Starters",
        subtypes: [
            {
                name: "Chicken Chinese", dishes: [
                    { name: "Chicken Chilli Dry", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Manchurian Dry", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Schezwan Dry", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken 65", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Crispy", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Finger", price: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Lolipop (4 Pcs)", price: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Black Pepper", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Garlic", price: "200", typeTag: "nonveg", images: [] }
                ]
            },
            {
                name: "Veg Chinese", dishes: [
                    { name: "Veg Manchurian Dry", price: "150", typeTag: "veg", images: [] },
                    { name: "Veg Crispy", price: "150", typeTag: "veg", images: [] },
                    { name: "Veg Chilly Dry", price: "150", typeTag: "veg", images: [] },
                    { name: "Paneer 65", price: "250", typeTag: "veg", images: [] },
                    { name: "Paneer Chilly", price: "250", typeTag: "veg", images: [] },
                    { name: "Paneer Pahadi Tikka", price: "300", typeTag: "veg", images: [] },
                    { name: "Paneer Malai Tikka", price: "300", typeTag: "veg", images: [] },
                    { name: "Paneer Garlic Tikka", price: "300", typeTag: "veg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Fried Rice & Noodles",
        subtypes: [
            {
                name: "Chicken Fried Rice", dishes: [
                    { name: "Chicken Fried Rice", price: "150", typeTag: "nonveg", images: [] },
                    { name: "Chicken Schezwan Rice", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Malaysia Fried Rice", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Singapore Fried Rice", price: "200", typeTag: "nonveg", images: [] }
                ]
            },
            {
                name: "Veg Fried Rice", dishes: [
                    { name: "Veg Fried Rice", price: "150", typeTag: "veg", images: [] },
                    { name: "Veg Schezwan Fried Rice", price: "200", typeTag: "veg", images: [] },
                    { name: "Veg Malaysia Fried Rice", price: "200", typeTag: "veg", images: [] },
                    { name: "Veg Singapore Fried Rice", price: "200", typeTag: "veg", images: [] }
                ]
            },
            {
                name: "Chicken Noodles", dishes: [
                    { name: "Chicken Noodles", price: "150", typeTag: "nonveg", images: [] },
                    { name: "Chicken Hakka Noodles", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Schezwan Noodles", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Malaysia Noodles", price: "200", typeTag: "nonveg", images: [] },
                    { name: "Chicken Singapore Noodles", price: "200", typeTag: "nonveg", images: [] }
                ]
            },
            {
                name: "Veg Noodles", dishes: [
                    { name: "Veg Noodles", price: "150", typeTag: "veg", images: [] },
                    { name: "Veg Hakka Noodles", price: "200", typeTag: "veg", images: [] },
                    { name: "Veg Schezwan Noodles", price: "200", typeTag: "veg", images: [] },
                    { name: "Veg Malaysia Noodles", price: "200", typeTag: "veg", images: [] },
                    { name: "Veg Singapore Noodles", price: "200", typeTag: "veg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Mutton Main Course",
        subtypes: [
            {
                name: "Mutton Main", dishes: [
                    { name: "Mutton Masala", priceHalf: "180", priceFull: "330", typeTag: "nonveg", images: [] },
                    { name: "Mutton Korma", priceHalf: "180", priceFull: "330", typeTag: "nonveg", images: [] },
                    { name: "Mutton Afghani", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Mutton Lajawab", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Dum Mutton", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Mutton Bhoona", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Mutton Kasturi", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Mutton Kadai", priceHalf: "180", priceFull: "300", typeTag: "nonveg", images: [] },
                    { name: "Mutton Do Pyaza", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Mutton Chatpata", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Shahi Mutton", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] },
                    { name: "Mutton Mughlai", priceHalf: "180", priceFull: "300", typeTag: "nonveg", images: [] },
                    { name: "Mutton Nawab Special", priceHalf: "250", priceFull: "400", typeTag: "nonveg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Chicken Main Course",
        subtypes: [
            {
                name: "Chicken Gravies & Specials", dishes: [
                    { name: "Chicken Masala", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Korma", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Afghani", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Lajawab", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Dum Chicken", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Butter Chicken", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Bhoona", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Kasturi", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Kadai", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Do Pyaza", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Angara", priceHalf: "150", priceFull: "270", typeTag: "nonveg", images: [] },
                    { name: "Chicken Chatpata", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Tikka Masala", priceHalf: "200", priceFull: "300", typeTag: "nonveg", images: [] },
                    { name: "Shahi Chicken", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Mughlai", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Murg Musallam", priceHalf: "350", priceFull: "650", typeTag: "nonveg", images: [] },
                    { name: "Chicken Nawab Special", priceHalf: "200", priceFull: "350", typeTag: "nonveg", images: [] },
                    { name: "Chicken Nawabi Handi", price: "750 (12 Pcs)", typeTag: "nonveg", images: [] },
                    { name: "Chicken Hyderabadi Handi", price: "750 (12 Pcs)", typeTag: "nonveg", images: [] },
                    { name: "Chicken Kolhapuri", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] },
                    { name: "Chicken Punjabi", priceHalf: "150", priceFull: "250", typeTag: "nonveg", images: [] }
                ]
            },
            {
                name: "Chicken Main Courses", dishes: [
                    { name: "Gravy Roast", price: "350", typeTag: "nonveg", images: []},
                    { name: "Chicken Ptiala", price: "400", typeTag: "nonveg", images: []},
                    { name: "Chicken Kabuli", price: "400", typeTag: "nonveg", images: []},
                    { name: "Chicken Changezi", price: "300", typeTag: "nonveg", images: []},
                    { name: "Chicken Kashmiri", price: "300", typeTag: "nonveg", images: []},
                    { name: "Chicken Lababdar", price: "300", typeTag: "nonveg", images: []},
                    { name: "Chicken Lara", price: "250", typeTag: "nonveg", images: []},
                    { name: "Chicken Rasheeda", price: "250", typeTag: "nonveg", images: []},
                    { name: "Chicken Korma Fry", price: "250", typeTag: "nonveg", images: []}
                ]
            }
        ]
    },

    {
        type: "Roti & Breads",
        subtypes: [
            {
                name: "Rotis", dishes: [
                    { name: "Tandoori Roti", price: "10", typeTag: "veg", images: [] },
                    { name: "Butter Roti", price: "15", typeTag: "veg", images: [] },
                    { name: "Rumali Roti", price: "15", typeTag: "veg", images: [] },
                    { name: "Lachchha Paratha", price: "50", typeTag: "veg", images: [] },
                    { name: "Plain Naan", price: "50", typeTag: "veg", images: [] },
                    { name: "Butter Naan", price: "70", typeTag: "veg", images: [] },
                    { name: "Garlic Naan", price: "80", typeTag: "veg", images: [] },
                    { name: "Cheese Garlic Naan", price: "100", typeTag: "veg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Veg Main Course",
        subtypes: [
            {
                name: "Veg Main", dishes: [
                    { name: "Mix Veg", price: "180", typeTag: "veg", images: [] },
                    { name: "Veg Masala Kasturi", price: "180", typeTag: "veg", images: [] },
                    { name: "Sev Bhaji", price: "150", typeTag: "veg", images: [] },
                    { name: "Dal Tadka", price: "150", typeTag: "veg", images: [] },
                    { name: "Dal Fry", price: "150", typeTag: "veg", images: [] }
                ]
            },
            {
                name: "Paneer Main", dishes: [
                    { name: "Paneer Masala", price: "200", typeTag: "veg", images: [] },
                    { name: "Paneer Butter Masala", price: "200", typeTag: "veg", images: [] },
                    { name: "Paneer Butter Malai", price: "200", typeTag: "veg", images: [] },
                    { name: "Paneer Tikka Masala", price: "250", typeTag: "veg", images: [] },
                    { name: "Paneer Kadai", price: "200", typeTag: "veg", images: [] },
                    { name: "Paneer Kasturi", price: "200", typeTag: "veg", images: [] },
                    { name: "Paneer Bhurji", price: "200", typeTag: "veg", images: [] },
                    { name: "Palak Paneer", price: "200", typeTag: "veg", images: [] },
                    { name: "Paneer Handi", price: "250", typeTag: "veg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Egg Main Course",
        subtypes: [
            {
                name: "Egg Main", dishes: [
                    { name: "Egg Masala", price: "150", typeTag: "veg", images: [] },
                    { name: "Egg Curry", price: "100", typeTag: "veg", images: [] },
                    { name: "Egg Bhurji", price: "100", typeTag: "veg", images: [] },
                    { name: "Egg Mughlai", price: "150", typeTag: "veg", images: [] },
                    { name: "Egg Biryani", price: "150", typeTag: "veg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Biryani & Rice",
        subtypes: [
            {
                name: "Mutton Biryani", dishes: [
                    { name: "Mutton Biryani", priceHalf: "180", priceFull: "330", typeTag: "nonveg", images: [] },
                    { name: "Mutton Biryani (Special)", priceHalf: "200", priceFull: "350", typeTag: "nonveg", images: [] }
                ]
            },
            {
                name: "Chicken Biryani", dishes: [
                    { name: "Chicken Biryani", priceHalf: "80", priceFull: "150", typeTag: "nonveg", images: [] },
                    { name: "Chicken Biryani (Special)", priceHalf: "90", priceFull: "160", typeTag: "nonveg", images: [] }
                ]
            },
            {
                name: "Veg Biryani & Rice", dishes: [
                    { name: "Veg Biryani", price: "150", typeTag: "veg", images: [] },
                    { name: "Veg Paneer Pulao", price: "150", typeTag: "veg", images: [] },
                    { name: "Plain Rice", priceHalf: "70", priceFull: "140", typeTag: "veg", images: [] },
                    { name: "Jeera Rice", priceHalf: "80", priceFull: "150", typeTag: "veg", images: [] },
                    { name: "Garlic Rice", priceHalf: "90", priceFull: "150", typeTag: "veg", images: [] }
                ]
            }
        ]
    },

    {
        type: "Cold Drinks & Water",
        subtypes: [
            {
                name: "Bottles & Cold Drinks", dishes: [
                    { name: "Mineral Water 250 ml", price: "10", typeTag: "veg", images: [] },
                    { name: "Mineral Water 500 ml", price: "20", typeTag: "veg", images: [] },
                    { name: "Jeera Soda", price: "30", typeTag: "veg", images: [] },
                    { name: "Cold Drink 250 ml", price: "30", typeTag: "veg", images: [] },
                    { name: "Cold Drink 500 ml", price: "50", typeTag: "veg", images: [] }
                ]
            }
        ]
    }
];

// DOM refs
const menuRoot = document.getElementById('menu-root');
const searchInput = document.getElementById('menu-search');
const clearBtn = document.getElementById('clear-search');
const filterButtons = document.querySelectorAll('.filter-btn');

// current filter state
let vegFilter = 'all'; // 'all' | 'veg' | 'nonveg'

// Filtering logic (search + veg filter)
function filterMenu(query, vegFilterLocal) {
    if (!query) query = '';
    const q = query.trim().toLowerCase();

    const filtered = [];
    menuData.forEach(section => {
        const matchingSubtypes = [];
        section.subtypes.forEach(sub => {
            // filter dishes by name and vegFilter
            const matchingDishes = sub.dishes.filter(dish => {
                const name = (dish.name || '').toString().toLowerCase();
                const matchesText = name.includes(q) || sub.name.toLowerCase().includes(q) || section.type.toLowerCase().includes(q);
                // veg filter check
                const matchesVeg = (vegFilterLocal === 'all') ? true : (dish.typeTag === vegFilterLocal);
                return matchesText && matchesVeg;
            });

            // if subtype/title matches text and vegFilter allows at least one dish, show all subtype dishes (filtered by veg)
            if (sub.name.toLowerCase().includes(q)) {
                const dishesForSub = sub.dishes.filter(d => (vegFilterLocal === 'all') ? true : (d.typeTag === vegFilterLocal));
                if (dishesForSub.length) {
                    matchingSubtypes.push({ name: sub.name, dishes: dishesForSub });
                }
            } else if (matchingDishes.length) {
                matchingSubtypes.push({
                    name: sub.name,
                    dishes: matchingDishes
                });
            }
        });

        // If type name matches, include all subtypes but still obey vegFilter
        if (section.type.toLowerCase().includes(q)) {
            const subtypesAllowed = section.subtypes.map(s => {
                return { name: s.name, dishes: s.dishes.filter(d => (vegFilterLocal === 'all') ? true : (d.typeTag === vegFilterLocal)) };
            }).filter(s => s.dishes.length);
            if (subtypesAllowed.length) {
                filtered.push({ type: section.type, subtypes: subtypesAllowed });
            }
        } else if (matchingSubtypes.length) {
            filtered.push({ type: section.type, subtypes: matchingSubtypes });
        }
    });

    return filtered;
}

// create dish element with veg/nonveg indicator
function createDishElement(dish) {
    const dishEl = document.createElement('div');
    dishEl.className = 'dish';

    const btn = document.createElement('button');
    btn.className = 'dish-button';
    btn.setAttribute('aria-expanded', 'false');

    const indicatorColor = dish.typeTag === 'veg' ? 'var(--veg-color)' : 'var(--nonveg-color)';

    btn.innerHTML = `
      <div class="left">
        <div class="dish-indicator" style="background:${indicatorColor}"></div>
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

    // price UI (half/full or single)
    let priceHtml = '';
    if (dish.priceHalf || dish.priceFull) {
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

    // carousel images
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

    // toggle open/close dish panel
    btn.addEventListener('click', () => {
        const open = panel.classList.toggle('active');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.querySelector('.arrow').style.transform = open ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    // init carousel
    initCarousel(carouselId, images);

    // half/full pill behavior
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
        setActive(dish.priceHalf ? 'half' : 'full');
        pills.forEach(p => p.addEventListener('click', () => setActive(p.dataset.kind)));
    }

    return dishEl;
}

// render menu; subtypes collapsed by default
function renderMenu(data, expandMatches = true) {
    menuRoot.innerHTML = '';
    if (!data || data.length === 0) {
        const no = document.createElement('div');
        no.className = 'no-results';
        no.textContent = 'No dishes found';
        menuRoot.appendChild(no);
        return;
    }

    data.forEach(section => {
        const typeEl = document.createElement('div');
        typeEl.className = 'menu-type';
        typeEl.innerHTML = `<h2>${section.type}</h2>`;
        section.subtypes.forEach((sub, subIndex) => {
            const subWrap = document.createElement('div');
            subWrap.className = 'subtype';

            // header with small arrow on right
            const header = document.createElement('div');
            header.className = 'subtype-header';
            header.innerHTML = `
          <div class="subtype-left">
            <h3>${sub.name}</h3>
            <div class="sub-meta"></div>
          </div>
          <div class="sub-toggle" title="Collapse/Expand">&#9656;</div>
        `;
            subWrap.appendChild(header);

            // dish list container (collapsed by default)
            const dishList = document.createElement('div');
            dishList.className = 'dish-list';
            dishList.style.display = 'none'; // CLOSED by default

            // populate dishes
            sub.dishes.forEach(d => {
                const dishEl = createDishElement(d);
                dishList.appendChild(dishEl);
            });

            subWrap.appendChild(dishList);
            typeEl.appendChild(subWrap);

            // subtype toggle behavior (small arrow on right)
            const toggleBtn = header.querySelector('.sub-toggle');
            let collapsed = true; // default closed
            // initial arrow orientation (right)
            toggleBtn.style.transform = 'rotate(0deg)';
            toggleBtn.addEventListener('click', () => {
                collapsed = !collapsed;
                if (collapsed) {
                    dishList.style.display = 'none';
                    toggleBtn.style.transform = 'rotate(0deg)'; // pointing right
                } else {
                    dishList.style.display = '';
                    toggleBtn.style.transform = 'rotate(90deg)'; // pointing down
                }
            });

            // If expandMatches is true (search result), open the subtype if it contains results
            if (expandMatches && sub.dishes && sub.dishes.length > 0 && searchInput.value.trim() !== '') {
                // open to reveal search matches
                collapsed = false;
                dishList.style.display = '';
                toggleBtn.style.transform = 'rotate(90deg)';
            }
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

    // build dots
    images.forEach((_, i) => {
        const b = document.createElement('button');
        b.style.cursor = 'pointer';
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

// Search + Filter handling
function applySearchAndFilter() {
    const q = searchInput.value.trim();
    const filtered = filterMenu(q, vegFilter);
    // When user has typed something we expand matching subtypes so results are visible.
    // When no search text, keep all subtypes closed (per requirement).
    const expandMatches = q.length > 0;
    renderMenu(filtered, expandMatches);
}

function onSearchInput() {
    const q = searchInput.value.trim();
    if (q.length > 0) clearBtn.style.display = 'inline';
    else clearBtn.style.display = 'none';
    applySearchAndFilter();
}

// filter button clicks
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        vegFilter = btn.dataset.filter;
        applySearchAndFilter();
    });
});

// clear button
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    applySearchAndFilter();
    searchInput.focus();
});

searchInput.addEventListener('input', onSearchInput);

// initial render: all subtypes closed by default
renderMenu(menuData, false);
document.getElementById('year').textContent = new Date().getFullYear();
