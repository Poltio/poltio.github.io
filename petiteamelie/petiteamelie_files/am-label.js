import MODULE_CONFIG from './module-config.js';

import { Item } from './components/Item.js';
import { swatchRender } from "./actions/swatchRender.js";

const { VENDOR_NAME, MODULE_NAME } = MODULE_CONFIG;
const loaded = new Event(MODULE_CONFIG.MODULE_PATH + '.loaded');

if (!window[VENDOR_NAME]) {
    window[VENDOR_NAME] = {};
}

export let Module = window[VENDOR_NAME][MODULE_NAME] = {
    initialize: function (options) {
        this.options = options;

        swatchRender.initialize(options);
    }
};

window.dispatchEvent(loaded);

Module.class = {
    Item
};

Module.action = {
    swatchRender
};
