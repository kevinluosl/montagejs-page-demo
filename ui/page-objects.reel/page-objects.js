/**
 * @module ui/page-objects.reel
 */
var Page = require("core/ui/page").Page;

/**
 * @class PageObjects
 * @extends Component
 */
exports.PageObjects = Page.specialize(/** @lends PageObjects# */ {
    constructor: {
        value: function PageObjects() {
            this.super();
        }
    }
});
