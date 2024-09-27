export function displayAbout(content) {
    let aboutUs = document.createElement("h1");
    aboutUs.textContent = 'About us';
    aboutUs.style.padding = '8px';
    content.innerHTML = '';
    content.appendChild(aboutUs);

    let aboutText = document.createElement("div");
    aboutText.textContent = 'We are a premium resturant providing all kind of breakfast items you could ever ask for.';
    aboutText.style.padding = '8px';
    aboutText.style.width = '500px';
    content.appendChild(aboutText);
}