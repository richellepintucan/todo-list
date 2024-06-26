import data from '../data.js';
import dom from '../dom.js';

const deleteTodoHandler = (id) => {
    // delete item from the data
    data.items = data.items.filter((item) => item.id !== id);

    // delete from the DOM
    document.getElementById(id).remove();
    dom.submitBtn.innerText = 'Submit';
    dom.input.value = '';
};

export default deleteTodoHandler;
