const content = document.querySelector(".content");

export function menu() {
    content.innerHTML = "";  
    content.classList.add("menuClass"); 
    
      content.classList.remove("contactClass");


    const menuContainer1 = document.createElement("div");
    const menuContainer2 = document.createElement("div");
    const menuContainer3 = document.createElement("div");
    const menuContainer4 = document.createElement("div");
    const menuContainer5 = document.createElement("div");
    const menuContainer6 = document.createElement("div");

    menuContainer1.classList.add("menuContainer");
    menuContainer2.classList.add("menuContainer");
    menuContainer3.classList.add("menuContainer");
    menuContainer4.classList.add("menuContainer");
    menuContainer5.classList.add("menuContainer");
    menuContainer6.classList.add("menuContainer");

    content.appendChild(menuContainer1);
    content.appendChild(menuContainer2);
    content.appendChild(menuContainer3);
    content.appendChild(menuContainer4);
    content.appendChild(menuContainer5);
    content.appendChild(menuContainer6);

    const headingMenu1 = document.createElement("h1");
    headingMenu1.innerHTML = "📜 The Rustic Bar & Grill Menu 🍽️";
    const headingMenu2 = document.createElement("h1");
    headingMenu2.innerHTML = "🥩 Signature Mains"
    const headingMenu3 = document.createElement("h1");
    headingMenu3.innerHTML = "🍔 Burgers & Sandwiches";
    const headingMenu4 = document.createElement("h1");
    headingMenu4.innerHTML = "🍸 Drinks & Cocktails";
    const headingMenu5 = document.createElement("h1");
    headingMenu5.innerHTML = "🍰 Desserts";
    
    const headingMenu6 = document.createElement("h1");
    headingMenu6.innerHTML = "🔥 Specials of the Day";
    


    menuContainer1.appendChild(headingMenu1);
    menuContainer2.appendChild(headingMenu2);
    menuContainer3.appendChild(headingMenu3);
    menuContainer4.appendChild(headingMenu4);
    menuContainer5.appendChild(headingMenu5);
    menuContainer6.appendChild(headingMenu6);



    const menuItems1 = [
        "Smoky BBQ Wings – Slow-cooked wings tossed in house-made smoky BBQ sauce.",
        "Loaded Rustic Nachos – Crispy tortilla chips topped with melted cheese, jalapeños, sour cream, and fresh guacamole.",
        "Garlic Butter Shrimp Skillet – Sautéed shrimp in a garlic butter sauce, served with toasted baguette slices.",
        "Rustic Cheese Platter – A selection of aged cheeses, cured meats, and artisanal crackers."
    ];

    const menuItems2 = [
       " Rustic Ribeye Steak – 12oz flame-grilled ribeye, served with garlic mashed potatoes & grilled asparagus.",
        "BBQ Pulled Pork Burger – Slow-cooked pulled pork, caramelized onions, and house coleslaw on a brioche bun.",
        "Grilled Salmon with Herb Butter – Fresh Atlantic salmon grilled to perfection, served with wild rice & sautéed greens.",
        "The Rustic Veggie Wrap – Grilled zucchini, bell peppers, mushrooms, and hummus wrapped in a warm tortilla."
    ];

    const menuItems3 = [
        "The Classic Rustic Burger – Angus beef patty, cheddar cheese, lettuce, tomato, pickles, and house sauce.",
"Spicy Southwest Chicken Sandwich – Grilled chicken breast, pepper jack cheese, chipotle mayo, and avocado.",
"Mushroom Swiss Burger – Juicy beef patty topped with sautéed mushrooms, Swiss cheese, and truffle aioli.",
"Buffalo Crispy Chicken Wrap – Crispy fried chicken, buffalo sauce, lettuce, ranch dressing, and cheese."
    ];

    const menuItems4 = [
        "Rustic Old Fashioned – Bourbon, bitters, sugar, and an orange twist.",
"Citrus Mojito – Rum, fresh lime, mint, soda water, and a touch of honey.",
"Spiced Apple Mule – Vodka, ginger beer, apple cider, and a cinnamon stick.",
"Classic Margarita – Tequila, lime juice, orange liqueur, and salt rim.",
"Craft Beer Selection – Rotating selection of locally brewed craft beers."
    ];

    const menuItems5 = [
        "Warm Chocolate Lava Cake – Molten chocolate cake served with vanilla ice cream.",
"Caramel Pecan Cheesecake – Creamy cheesecake with a caramel drizzle and toasted pecans.",
"Rustic Apple Pie – Homemade apple pie with a flaky crust and cinnamon-sugar topping.",
"S'mores Skillet – Graham crackers, melted chocolate, and toasted marshmallows served in a cast-iron skillet."
    ];
const menuItems6 = [
    "💥 Tuesday: Half-price wings & beer specials!",
"🎶 Friday: Live music & BBQ platter night!",
"🍷 Sunday: Buy 1 Get 1 free on select cocktails!"
];
    menuItems1.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        menuContainer1.appendChild(p);
    });


    menuItems2.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        menuContainer2.appendChild(p);
    });

    menuItems3.forEach(item =>{
        const p = document.createElement("p");
        p.textContent = item;
        menuContainer3.appendChild(p);
    })
    menuItems4.forEach(item =>{
        const p = document.createElement("p");
        p.textContent = item;
        menuContainer4.appendChild(p);
    })
    menuItems5.forEach(item =>{
        const p = document.createElement("p");
        p.textContent = item;
        menuContainer5.appendChild(p);
    })
    menuItems6.forEach(item =>{
        const p = document.createElement("p");
        p.textContent = item;
        menuContainer6.appendChild(p);
    })

}

