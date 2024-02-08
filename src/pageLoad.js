import './style.css';
import coffee from './coffee.svg';
import bake from './food-croissant.svg';
import cake from './cupcake.svg';

let holder = document.getElementById("holder");
function resetHolder(){
    holder.innerHTML = "";
    holder.className = "";
}
function loadAboutUs (){
    resetHolder();

    let heading = document.createElement("h1");
    heading.appendChild(document.createTextNode("Mr Andy's Home Cafe"));
    let p1 = document.createElement("p")
    p1.appendChild(document.createTextNode("Welcome to Mr. Andy's, where every cup tells a story and every dish is made with love."));
    let p2 = document.createElement("p")
    p2.appendChild(document.createTextNode("Our journey began decades ago, rooted in a passion for great coffee and homemade recipes passed down through generations. What started as a humble kitchen experiment has blossomed into a cherished family tradition and a beloved community gathering place."))
    let p3 = document.createElement("p")
    p3.appendChild(document.createTextNode("At Mr. Andy's, family isn't just a word; it's the heart and soul of everything we do. From our warm hospitality to our handcrafted beverages and delicious pastries, we strive to create an atmosphere where everyone feels like part of our extended family."))
    let p4 = document.createElement("p")
    p4.appendChild(document.createTextNode("Our commitment to quality extends beyond our ingredients to the relationships we build—with our customers, our suppliers, and our community. We source the finest locally roasted coffee beans and freshest seasonal produce to ensure every bite and sip is a delight to the senses."))
    holder.appendChild(heading);
    holder.appendChild(p1);
    holder.appendChild(p2);  
    holder.appendChild(p3);  
    holder.appendChild(p4);

}

function createCoffees(panel){
    let coffeePanel = document.createElement('div');
    coffeePanel.classList.add("items");

    let sizes = document.createElement('p');
    sizes.appendChild(document.createTextNode("Sizes: Jr.Andy, Mrs.Andy, Mr.Andy"))
    sizes.classList.add("size");

    let coffees = document.createElement('div');
    let coffee1 = document.createElement('p');
    coffee1.appendChild(document.createTextNode("Regular"));
    let coffee2 = document.createElement('p');
    coffee2.appendChild(document.createTextNode("Cappucino"));
    let coffee3 = document.createElement('p');
    coffee3.appendChild(document.createTextNode("Americano"));
    let coffee4 = document.createElement('p');
    coffee4.appendChild(document.createTextNode("Espresso"));
    let coffee5 = document.createElement('p');
    coffee5.appendChild(document.createTextNode("Latte"));
    let coffee6 = document.createElement('p');
    coffee6.appendChild(document.createTextNode("Mocha"));


    coffees.append(sizes);
    coffees.appendChild(coffee1);
    coffees.appendChild(coffee2);
    coffees.appendChild(coffee3);
    coffees.appendChild(coffee4);
    coffees.appendChild(coffee5);
    coffees.appendChild(coffee6);
    coffeePanel.appendChild(coffees);
    panel.appendChild(coffeePanel);

}

function createBake(panel){
    let bakeryPanel = document.createElement('div');
    bakeryPanel.classList.add("items")

    let bakedGoods = document.createElement('div');
    let item1 = document.createElement('p');
    item1.appendChild(document.createTextNode("Croissants"));
    let item2 = document.createElement('p');
    item2.appendChild(document.createTextNode("House Muffins"));
    let item3 = document.createElement('p');
    item3.appendChild(document.createTextNode("Savory Twists"));
    let item4 = document.createElement('p');
    item4.appendChild(document.createTextNode("Donuts"));

    bakedGoods.appendChild(item1);
    bakedGoods.appendChild(item2);
    bakedGoods.appendChild(item3);
    bakedGoods.appendChild(item4);
    bakeryPanel.appendChild(bakedGoods);
    panel.appendChild(bakeryPanel);

}

function createDessert(panel){
    let dessertPanel = document.createElement('div');
    dessertPanel.classList.add("items")

    let desserts = document.createElement('div');
    let item1 = document.createElement('p');
    item1.appendChild(document.createTextNode("Cheese Cake"));
    let item2 = document.createElement('p');
    item2.appendChild(document.createTextNode("Pumpkin Pie"));
    let item3 = document.createElement('p');
    item3.appendChild(document.createTextNode("Lemon Cake"));
    let item4 = document.createElement('p');
    item4.appendChild(document.createTextNode("Berry Turnovers"));
    let item5 = document.createElement('p');
    item5.appendChild(document.createTextNode("House Special Treat"));

    desserts.appendChild(item1);
    desserts.appendChild(item2);
    desserts.appendChild(item3);
    desserts.appendChild(item4);
    desserts.appendChild(item5);
    dessertPanel.appendChild(desserts);
    panel.appendChild(dessertPanel);

}
function createHeaders(panel){
    let coffeHeader = document.createElement("div");
    let coffeeTitle = document.createElement('h1');
    let coffeePicture = document.createElement('img');
    coffeePicture.src = coffee;
    coffeeTitle.appendChild(document.createTextNode("House Coffees"));
    coffeHeader.appendChild(coffeeTitle);
    coffeHeader.appendChild(coffeePicture);
    coffeHeader.classList.add("itemHeader");
    panel.appendChild(coffeHeader);

    let bakeryHeader = document.createElement("div");
    let bakeryTitle = document.createElement('h1');
    let bakeryPicture = document.createElement('img');
    bakeryPicture.src = bake;
    bakeryTitle.appendChild(document.createTextNode("Baked Goods"));
    bakeryHeader.appendChild(bakeryTitle);
    bakeryHeader.appendChild(bakeryPicture);
    bakeryHeader.classList.add("itemHeader");
    panel.appendChild(bakeryHeader);

    let dessertHeader = document.createElement("div");
    let dessertTitle = document.createElement('h1');
    let dessertPicture = document.createElement('img');
    dessertPicture.src = cake;
    dessertTitle.appendChild(document.createTextNode("Dessert"));
    dessertHeader.appendChild(dessertTitle);
    dessertHeader.appendChild(dessertPicture);
    dessertHeader.classList.add("itemHeader");
    panel.appendChild(dessertHeader);


}
function loadMenu(){
    resetHolder();
    holder.classList.add("menu");
    let heading = document.createElement("h1");
    heading.appendChild(document.createTextNode("Menu"));
    
    let panel = document.createElement("div");
    panel.id = "menuItems"
   
    createHeaders(panel);
    createCoffees(panel);
    createBake(panel);
    createDessert(panel)
    holder.appendChild(heading);
    holder.appendChild(panel);
}
function loadContact(){
    resetHolder();

    let heading = document.createElement("h1");
    heading.appendChild(document.createTextNode("Contact Us"));
    let p1 = document.createElement("p")
    p1.appendChild(document.createTextNode("For inquiries, reservations, or further assistance, please don't hesitate to reach out to us. Our team at Mr.Andy's is dedicated to providing exceptional service and addressing any questions you may have."));
    let p2 = document.createElement("p")
    p2.appendChild(document.createTextNode("Phone: 090-078-601"))
    let p3 = document.createElement("p")
    p3.appendChild(document.createTextNode("Email: Mr.Andersons@coldmail.com"))
    let p4 = document.createElement("p")
    p4.appendChild(document.createTextNode("Address: 420, BlazeIt St"))
    holder.appendChild(heading);
    holder.appendChild(p1);
    holder.appendChild(p2);  
    holder.appendChild(p3);  
    holder.appendChild(p4);
}
export { loadAboutUs, loadMenu, loadContact};
