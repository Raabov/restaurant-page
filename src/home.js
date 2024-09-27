export function displayHome(content) {
    let headerItem = document.createElement("h1");
    headerItem.textContent = 'Welcome to The Restaurant';
    headerItem.style.padding = '8px';
    content.innerHTML = '';
    content.appendChild(headerItem);

    let intro = document.createElement("div");
    intro.textContent = 'We have the best food! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.';
    intro.style.padding = '8px';
    intro.style.width = '500px';
    content.appendChild(intro);
}