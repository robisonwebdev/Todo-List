function header() {
    const header = document.createElement('div');
    const icon = document.createElement('i');
    const title = document.createElement('h1');

    header.setAttribute('id', 'header');
    icon.setAttribute('class', 'las la-list-ul');
    title.setAttribute('id', 'headerTitle');

    title.innerText = 'Todo List';

    header.appendChild(icon);
    header.appendChild(title);

    return header;
}

export default header;