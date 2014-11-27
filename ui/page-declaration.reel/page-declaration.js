/**
 * @module ui/page-declaration.reel
 */
var Page = require("core/ui/page").Page;

/**
 * @class PageDeclaration
 * @extends Component
 */
exports.PageDeclaration = Page.specialize(/** @lends PageDeclaration# */ {
    constructor: {
        value: function PageDeclaration() {
            this.super();
        }
    }
});
