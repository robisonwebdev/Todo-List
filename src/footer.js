function footer(text, name, address) {
    const footer = document.createElement('div');
    const small = document.createElement('small');
    const link = document.createElement('a');

    footer.setAttribute('id', 'footer');
    small.setAttribute('id', 'footerSmall');
    link.setAttribute('id', 'footerLink');
    link.setAttribute('href', address);
    link.setAttribute('target', '_blank');

    small.innerText = text;
    link.innerText = name;

    small.appendChild(link);
    footer.appendChild(small);

    return footer;
}

export default footer;