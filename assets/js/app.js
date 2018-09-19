import Settings from './Settings';
import Tooltips from './Tooltips';
document.addEventListener("DOMContentLoaded", () => {
    Tooltips.init();
});


const XIVAPI = {
    refreshTooltips: function () {
        Tooltips.refresh();
    },
    setOption: function(option, value) {
        Settings[option] = value;
    },
    getTooltips: function() {
        return Settings.storage;
    }
};

export default XIVAPI;
