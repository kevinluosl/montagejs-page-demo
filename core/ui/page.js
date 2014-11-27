/**
 * @module core/ui/page
 */
var Component = require("montage/ui/component").Component;

/**
 * @class UserContact
 * @extends Component
 */
exports.Page = Component.specialize(/** @lends Page# */ {
    constructor: {
        value: function Page() {
            this.super();
        }
    }
});
