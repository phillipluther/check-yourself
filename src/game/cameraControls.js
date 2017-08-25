import Menu from '../common/Menu';
import mod from '../mod';

import './cameraControls.css';

let cameraOptions = [
    { id: 'camRight' },
    { id: 'camDefault' },
    { id: 'camLeft' },
    { id: 'camUp' }
];

//
//
//
function handleSelection(e) {
    mod.set({
        perspective: e.target.id
    });
}

let cameraControls = new Menu({
    id: 'cameraControls',
    options: cameraOptions,
    onSelect: handleSelection,
});

mod.watch('playerX', (x) => {
    mod.set({
        focusX: x,
        focusY: mod.get('playerY')
    });
});

export default cameraControls;