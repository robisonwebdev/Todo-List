function changeDisplay(target, bool) {
    const changeTargetDisplay = document.querySelector(target);

    bool ? changeTargetDisplay.style.display = 'flex' : changeTargetDisplay.style.display = 'none';
}

export default changeDisplay;