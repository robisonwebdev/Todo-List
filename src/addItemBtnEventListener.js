import changeDisplay from './changeDisplay';

function addItemBtnEventListener(target) {
    target.addEventListener('click', () => {
        changeDisplay(`#${target.id}`, false);
        // console.log(target.id);
    })
}

export default addItemBtnEventListener;