function clearItemsContainer() {
    const itemsContainer = document.querySelector('#itemsContainer');

    return itemsContainer.innerHTML = '';
}

export default clearItemsContainer;