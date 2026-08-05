// COMPLETE EXACT MENU DATA WITH 100% WORKING DIRECT IMAGE LINKS
const menuData = [
    // REGULAR PIZZAS
    { id: 101, name: "Chicken Tikka Pizza", category: "regular-pizza", desc: "Chicken, Tomato Sauce, Bell Peppers", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 102, name: "The Euro Pizza", category: "regular-pizza", desc: "Chicken, Onion, Bell Peppers & Olives", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 103, name: "Chicken Fajita Pizza", category: "regular-pizza", desc: "Chicken Boti, Onion, Tomato, Bell Peppers", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 104, name: "Chicken Baq B.Q Pizza", category: "regular-pizza", desc: "Chicken Achari, Onion, Bell Peppers, Olives & Special Sauce", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 105, name: "Achari Pizza", category: "regular-pizza", desc: "Melted Layers of Cheese & Special Sauce", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 106, name: "Cheese Lovers Pizza", category: "regular-pizza", desc: "Veggie Sauce, Onions, Tomatoes, Sweet Corn & Mushroom", image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 107, name: "Pizza Vegetarian", category: "regular-pizza", desc: "Melted Layers of Cheese & Special Sauce", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 108, name: "Hot & Spicy Pizza", category: "regular-pizza", desc: "Spicy Beef or Spicy Chicken, Onion, Tomato & Mix Pepper", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 550, "Medium 10\"": 1000, "Large 13\"": 1350, "Family 15\"": 1800} },
    { id: 109, name: "2 Flavour Family Pizza", category: "regular-pizza", price: 2000, desc: "Choice of 2 Flavours in Family Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop" },

    // SPECIAL PIZZAS
    { id: 201, name: "A Pizza Club Special Pizza", category: "special-pizza", desc: "Chicken, Onion, Tomato, Bell Pepper, Olives, Mushroom, Sweets Corn, Sausage Pepperoni", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 650, "Medium 10\"": 1200, "Large 13\"": 1550, "Family 15\"": 2100} },
    { id: 202, name: "Malai Boti Pizza", category: "special-pizza", desc: "Spicy Chicken, Onion, Tomatoes, Green Peppers", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 650, "Medium 10\"": 1200, "Large 13\"": 1550, "Family 15\"": 2100} },
    { id: 203, name: "Behari Kabab Pizza", category: "special-pizza", desc: "Chapli Kabab Chicken, Onion, Tomato, Jalapenos, Mozzarella Cheese", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 650, "Medium 10\"": 1200, "Large 13\"": 1550, "Family 15\"": 2100} },
    { id: 204, name: "Crown Crust Pizza", category: "special-pizza", desc: "Fajita Sicilian Chicken with Green Pepper, Jalapenos, Onion & Cheese", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 650, "Medium 10\"": 1200, "Large 13\"": 1550, "Family 15\"": 2100} },
    { id: 205, name: "Lazania Special Pizza", category: "special-pizza", desc: "Chicken, Onion, Tomato, Bell Pepper, Olives, Mushroom, Sweets Corn, Sausage Pepperoni", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 650, "Medium 10\"": 1200, "Large 13\"": 1550, "Family 15\"": 2100} },
    { id: 206, name: "Donner Pizza", category: "special-pizza", desc: "Chicken, Onion, Tomato, Bell Pepper, Olives, Mushroom, Sweets Corn, Sausage Pepperoni", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop", sizes: {"Small 8\"": 650, "Medium 10\"": 1200, "Large 13\"": 1550, "Family 15\"": 2100} },

    // PIZZA DEALS
    { id: 301, name: "Student Deal", category: "pizza-deals", price: 650, desc: "1 Small Pizza + 1 Half Liter Drink", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop" },
    { id: 302, name: "Evening Deal", category: "pizza-deals", price: 1450, desc: "1 Large Pizza + 1 Liter Drink", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop" },
    { id: 303, name: "DEAL 1", category: "pizza-deals", price: 700, desc: "12 Hot Wings + 1 Half Liter Drink", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&auto=format&fit=crop" },
    { id: 304, name: "DEAL 2", category: "pizza-deals", price: 2800, desc: "2 Large Pizzas + 1.5 Liter Drink", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop" },
    { id: 305, name: "DEAL 3", category: "pizza-deals", price: 1900, desc: "5 Zinger Burgers + 1.5 Liter Drink", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },
    { id: 306, name: "DEAL 4", category: "pizza-deals", price: 2450, desc: "1 Large Pizza + 1 Medium Pizza + 1.5 Liter Drink", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop" },
    { id: 307, name: "DEAL 5", category: "pizza-deals", price: 950, desc: "1 Small Pizza + 1 Zinger Burger + 1 Half Liter Drink", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop" },
    { id: 308, name: "DEAL 6", category: "pizza-deals", price: 1750, desc: "1 Medium Pizza + 1 Zinger Burger + 1 Chicken Shawarma + 1.5 Liter Drink", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop" },
    { id: 309, name: "DEAL 7", category: "pizza-deals", price: 2100, desc: "1 Large Pizza + 1 Zinger Burger + Paratha Roll + 1.5 Liter Drink", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=500&auto=format&fit=crop" },
    { id: 310, name: "DEAL 8", category: "pizza-deals", price: 3400, desc: "1 Family Pizza + 1 Chicken Paratha + 1 Chicken Shawarma + 6 Pc Wings + 6 Pc Nuggets + 1 Reg Fries + 2.5 Liter Drink", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop" },
    { id: 311, name: "DEAL 9", category: "pizza-deals", price: 4300, desc: "1 Large Pizza + 1 Small Pizza + 1 Zinger Paratha + 2 Chicken Burger + 1 Chicken Shawarma + 8 Pc Wings + 8 Pc Nuggets + 1 Reg Fries + 2.5 Liter Drink", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop" },
    { id: 312, name: "Family Deal 1", category: "pizza-deals", price: 2900, desc: "1 Large Pizza + 1 Small Pizza + 1 Zinger Burger + 1 Chicken Burger + 1 Paratha Roll + 1.5 Liter Drink", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop" },
    { id: 313, name: "Family Deal 2", category: "pizza-deals", price: 5900, desc: "2 Large Pizzas + 2 Chicken Burgers + 2 Zinger Burgers + 2 Shawarmas + 2 Paratha Rolls + 10 Pc Hot Wings + 10 Pc Nuggets + 1.5 Liter Drink", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop" },
    { id: 314, name: "Special Combo - Family", category: "pizza-deals", price: 1900, desc: "1 Family Pizza + 1 Liter Drink", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop" },
    { id: 315, name: "Special Combo - Medium", category: "pizza-deals", price: 1100, desc: "1 Medium Pizza + 1 Liter Drink", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop" },

    // MEALS
    { id: 401, name: "Meal #1", category: "meals", price: 600, desc: "1 Zinger Burger + 1 Small Fries + 1 Half Liter Drink", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },
    { id: 402, name: "Meal #2", category: "meals", price: 550, desc: "1 Chicken Burger + 1 Small Fries + 1 Half Liter Drink", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop" },
    { id: 403, name: "Meal #3", category: "meals", price: 600, desc: "1 Zinger Burger + 3 Pc Wings + 1 Half Liter Drink", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&auto=format&fit=crop" },
    { id: 404, name: "Meal #4", category: "meals", price: 550, desc: "1 Chicken Burger + 3 Pc Wings + 1 Half Liter Drink", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },
    { id: 405, name: "Meal #5", category: "meals", price: 1100, desc: "1 Zinger Burger + 1 Chicken Burger + 1 Small Fries + 4 Pc Wings + 1 Liter Drink", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop" },
    { id: 406, name: "Meal #6", category: "meals", price: 1100, desc: "1 Zinger Burger + 1 Paratha Roll + 1 Small Fries + 4 Pc Nuggets + 1 Liter Drink", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=500&auto=format&fit=crop" },

    // SPECIAL BURGER DEALS
    { id: 451, name: "2 Shawarma + Drink", category: "burgers", price: 499, desc: "2 Shawarma + 500 ml Drink", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" },
    { id: 452, name: "2 Chicken Burger + Drink", category: "burgers", price: 620, desc: "2 Chicken Burger + 500 ml Drink", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop" },
    { id: 453, name: "2 Zinger Burger + Drink", category: "burgers", price: 740, desc: "2 Zinger Burger + 500 ml Drink", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },

    // BURGERS
    { id: 501, name: "Zinger Burger", category: "burgers", price: 350, desc: "Crispy fried chicken breast fillet with lettuce and mayo", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },
    { id: 502, name: "Zinger Cheese Burger", category: "burgers", price: 420, desc: "Crispy zinger fillet topped with melted cheddar slice", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop" },
    { id: 503, name: "Chicken Burger", category: "burgers", price: 290, desc: "Juicy chicken patty with special house sauce", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop" },
    { id: 504, name: "Chicken Cheese Burger", category: "burgers", price: 340, desc: "Classic chicken burger with cheese slice", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop" },
    { id: 505, name: "Zinger Tower Burger", category: "burgers", price: 500, desc: "Double zinger patty loaded with cheese & hash brown", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop" },
    { id: 506, name: "Beef Burger", category: "burgers", price: 550, desc: "Grilled juicy beef patty with caramelized onions", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop" },
    { id: 507, name: "Pizza Burger", category: "burgers", price: 500, desc: "Unique blend of pizza toppings inside a burger bun", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=500&auto=format&fit=crop" },

    // ROLLS & SHAWARMA
    { id: 601, name: "Chicken Shawarma", category: "rolls", price: 200, desc: "Spiced shredded chicken wrapped in pita bread", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" },
    { id: 602, name: "Chicken Cheese Shawarma", category: "rolls", price: 250, desc: "Shredded chicken and melted cheese in pita wrap", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop" },
    { id: 603, name: "Zinger Shawarma", category: "rolls", price: 300, desc: "Crispy zinger strip loaded shawarma", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" },
    { id: 604, name: "Zinger Cheese Shawarma", category: "rolls", price: 360, desc: "Crispy zinger with extra cheese slice wrap", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop" },
    { id: 605, name: "Chicken Paratha", category: "rolls", price: 250, desc: "Crispy fried paratha roll stuffed with chicken", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop" },
    { id: 606, name: "Chicken Cheese Paratha", category: "rolls", price: 290, desc: "Chicken paratha roll with extra cheese layer", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop" },
    { id: 607, name: "Zinger Paratha", category: "rolls", price: 320, desc: "Crispy zinger fillet wrapped in hot paratha", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" },
    { id: 608, name: "Zinger Cheese Paratha", category: "rolls", price: 360, desc: "Zinger paratha roll with melted cheddar cheese", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop" },
    { id: 609, name: "Kabab Roll", category: "rolls", price: 330, desc: "Flame grilled kabab wrapped in crispy paratha", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" },
    { id: 610, name: "Pizza Paratha", category: "rolls", price: 550, desc: "Stuffed paratha loaded with pizza toppings and cheese", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop" },

    // SIDES (FIXED Direct Image URLs for Fries, Wings, Pasta)
    { id: 701, name: "Hot Wings", category: "sides", desc: "Spicy fried chicken wings", image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Buffalo_wings_1.jpg", sizes: {"5 Pc": 300, "10 Pc": 550} },
    { id: 702, name: "Oven Baked Wings", category: "sides", desc: "Juicy oven baked spicy wings", image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Buffalo_wings_1.jpg", sizes: {"5 Pc": 300, "10 Pc": 600} },
    { id: 703, name: "Nuggets", category: "sides", desc: "Crispy chicken nuggets", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Chicken_Nuggets.jpg", sizes: {"5 Pc": 300, "10 Pc": 550} },
    { id: 704, name: "Regular Fries", category: "sides", price: 250, desc: "Golden salted potato fries", image: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries_Photo.jpg" },
    { id: 705, name: "Large Fries", category: "sides", price: 400, desc: "Large bucket of crispy french fries", image: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries_Photo.jpg" },
    { id: 706, name: "Loaded Fries", category: "sides", price: 650, desc: "Fries topped with melted cheese, jalapenos and chicken bits", image: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries_Photo.jpg" },
    { id: 707, name: "Special Pasta", category: "sides", price: 650, desc: "Creamy chicken pasta baked with cheese", image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spagetti_Italiano.JPG" },
    { id: 708, name: "Vegetarian Pasta", category: "sides", price: 550, desc: "Pasta tossed with vegetables and herbs", image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spagetti_Italiano.JPG" },
    { id: 709, name: "Cheese Stick", category: "sides", desc: "Cheesy garlic bread sticks", image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500&auto=format&fit=crop", sizes: {"Small": 1000, "Large": 1350} },

    // EXTRA TOPPINGS
    { id: 801, name: "Extra Topping Small (7\")", category: "toppings", price: 100, desc: "Extra cheese & pepperoni slice", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop" },
    { id: 802, name: "Extra Topping Medium (10\")", category: "toppings", price: 150, desc: "Extra cheese & pepperoni slice", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop" },
    { id: 803, name: "Extra Topping Large (13\")", category: "toppings", price: 200, desc: "Extra cheese & pepperoni slice", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop" },
    { id: 804, name: "Extra Topping Family (18\")", category: "toppings", price: 250, desc: "Extra cheese & pepperoni slice", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop" }
];

// Global Cart Array
let cart = [];

// 1. Render Menu Items Function
function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const defaultFallback = 'https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries_Photo.jpg';

    items.forEach((item) => {
        const hasSizes = item.sizes !== undefined;
        let sizeSelectorHTML = '';
        let defaultPrice = item.price;

        if (hasSizes) {
            const firstSize = Object.keys(item.sizes)[0];
            defaultPrice = item.sizes[firstSize];
            sizeSelectorHTML = `
                <div class="selector-box">
                    <select id="size-${item.id}" onchange="updatePrice(${item.id})">
                        ${Object.keys(item.sizes).map(s => `<option value="${s}" data-price="${item.sizes[s]}">${s} - Rs ${item.sizes[s]}</option>`).join('')}
                    </select>
                </div>
            `;
        }

        const itemImg = item.image || defaultFallback;

        grid.innerHTML += `
            <div class="product-card" data-aos="fade-up">
                <div class="card-img-wrapper">
                    <img src="${itemImg}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='${defaultFallback}';">
                </div>
                <div class="card-body">
                    <div>
                        <span class="badge-tag">${item.category.replace('-', ' ')}</span>
                        <div class="product-title">${item.name}</div>
                        ${item.desc ? `<div class="product-desc">${item.desc}</div>` : ''}
                    </div>
                    <div>
                        ${sizeSelectorHTML}
                        <div class="card-bottom">
                            <div class="product-price" id="price-${item.id}">Rs ${defaultPrice}</div>
                            <button class="add-btn" onclick="addToCart(${item.id})">
                                <i class="fa-solid fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// 2. Dropdown Size Change Price Update Handler
function updatePrice(itemId) {
    const select = document.getElementById(`size-${itemId}`);
    if (!select) return;
    const selectedOption = select.options[select.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    document.getElementById(`price-${itemId}`).innerText = `Rs ${price}`;
}

// 3. Category Filter Handler
function filterCategory(category, element) {
    document.querySelectorAll('.cat-tab').forEach(tab => tab.classList.remove('active'));
    if (element) element.classList.add('active');

    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// 4. Live Search Handler
function filterMenu() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const filtered = menuData.filter(item => 
        item.name.toLowerCase().includes(query) || 
        (item.desc && item.desc.toLowerCase().includes(query))
    );
    renderMenu(filtered);
}

// 5. Add to Cart Handler (Handles Multi-Size & Regular Items)
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    let itemTitle = item.name;
    let itemPrice = item.price;

    if (item.sizes) {
        const select = document.getElementById(`size-${itemId}`);
        const selectedOption = select.options[select.selectedIndex];
        const selectedSize = select.value;
        itemPrice = parseInt(selectedOption.getAttribute('data-price'));
        itemTitle = `${item.name} (${selectedSize})`;
    }

    const existingIndex = cart.findIndex(i => i.title === itemTitle);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ title: itemTitle, price: itemPrice, qty: 1 });
    }

    updateCartUI();
}

// 6. Change Item Quantity (+ / -)
function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

// 7. Update Cart UI Drawer & Count Badge
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let totalCount = 0;
    let totalPrice = 0;

    if (cartItems) {
        cartItems.innerHTML = cart.map((item, index) => {
            totalCount += item.qty;
            totalPrice += item.price * item.qty;
            return `
                <div class="cart-item-card" style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #eee;">
                    <div>
                        <h4 style="font-size: 0.95rem; margin-bottom: 4px;">${item.title}</h4>
                        <span style="color: var(--primary-red, #e63946); font-weight: 700;">Rs ${item.price * item.qty}</span>
                    </div>
                    <div class="qty-box" style="display:flex; align-items:center; gap:8px;">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>
            `;
        }).join('');

        if (cart.length === 0) {
            cartItems.innerHTML = `<p style="text-align: center; color: #888; padding: 20px 0;">Your cart is empty!</p>`;
        }
    }

    if (cartCount) cartCount.innerText = totalCount;
    if (cartTotal) cartTotal.innerText = `Rs ${totalPrice}`;
}

// 8. Open/Close Cart Drawer
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
}

// 9. Send Order via WhatsApp
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert("Aap ka cart khali hai!");
        return;
    }

    let message = "🍕 *NEW ORDER - A PIZZA CLUB* 🍕\n\n";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        message += `• ${item.title} x ${item.qty} = Rs ${itemTotal}\n`;
    });

    message += `\n*Total Amount:* Rs ${total}`;
    message += `\n\nPlease confirm my order!`;

    const whatsappNum = "923420446397";
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Initialize Menu & Animations on Load
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 500, once: true });
    }
    renderMenu(menuData);
});