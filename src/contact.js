const content = document.querySelector(".content");


export function contact(){
    content.classList.remove("menuClass");
    content.classList.add("contactClass");
    content.textContent = "";
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    content.appendChild(contactContainer);

    const heading = document.createElement("h1");
    heading.innerHTML = "📍 Contact Information";
    contactContainer.appendChild(heading);
    const contactItems = [
        "The Rustic Bar & Grill",
        "📍 Address: 123 Main Street, Downtown, NY 10001",
        "📞 Phone: +1 (555) 987-6543",
        "📧 Email: info@rusticbargrill.com",
        "🕒 Working Hours:",
        
        "Mon - Thu: 11:00 AM - 11:00 PM",
        "Fri - Sat: 11:00 AM - 1:00 AM",
        "Sunday: 12:00 PM - 10:00 PM",
    ];
    contactItems.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        contactContainer.appendChild(p);
    });


}