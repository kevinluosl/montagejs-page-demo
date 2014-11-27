/**
 * @module ui/page-components.reel
 */
var Page = require("core/ui/page").Page;

/**
 * @class PageComponents
 * @extends Component
 */
exports.PageComponents = Page.specialize(/** @lends PageComponents# */ {
    constructor: {
        value: function PageComponents() {
            this.super();
        }
    }
});
