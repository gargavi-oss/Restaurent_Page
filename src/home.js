import barImage from "./bar.png.jpg";


const content = document.querySelector(".content");

export function home() {
    content.classList.remove("menuClass");
    content.classList.remove("contactClass");
    content.innerHTML = ""; // Clears previous content before adding new elements

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "The Rustic Bar & Grill";
    content.appendChild(heading);

    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);

    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");

    paragraph.textContent = 
        "Welcome to The Rustic Bar & Grill! Nestled in the heart of the city, we bring you a blend of classic comfort food and creative cocktails in a cozy, rustic setting. "
        + "Whether you're in the mood for a casual dinner with friends or a celebratory night out, we've got something to satisfy every craving. "
        + "This venue combines live music with a vibrant dining atmosphere. Known for its spacious outdoor seating and rustic decor, it offers a lively environment for patrons. "
        + "You can explore their Instagram page for images and more details."
        + "You can explore their Instagram page for images and more details."
        + "You can explore their Instagram page for images and more details."
        + "You can explore their Instagram page for images and more details.";
    container.appendChild(paragraph);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    const img = document.createElement("img");
    img.classList.add("barImage");
    img.src = barImage;
    img.alt = "The Rustic Bar & Grill";
    
    imageDiv.appendChild(img);
    container.appendChild(imageDiv);
}