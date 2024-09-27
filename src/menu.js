export function displayMenu(content) {
    let menuItem = document.createElement("h1");
    menuItem.textContent = 'Our delicous dishes';
    menuItem.style.padding = '8px';
    content.innerHTML = '';
    content.appendChild(menuItem);

    let tea = document.createElement("div");
    tea.textContent = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!';
    tea.style.padding = '8px';
    tea.style.width = '500px';
    content.appendChild(tea);
}