function header(iconClass, text) {
    const header = document.createElement('div');
    const icon = document.createElement('i');
    const title = document.createElement('p');

    header.setAttribute('id', 'header');
    icon.setAttribute('class', iconClass);
    title.setAttribute('id', 'headerTitle');

    title.innerText = text;

    header.appendChild(icon);
    header.appendChild(title);

    return header;
}

export default header;