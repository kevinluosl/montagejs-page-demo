/**
 * @module ui/page-container.reel
 */
var Component = require("montage/ui/component").Component;
var Substitution =  require("montage/ui/substitution.reel").Substitution;

/**
 * @class PageContainer
 * @extends Component
 */
exports.PageContainer = Substitution.specialize(/** @lends PageContainer# */ {
    constructor: {
        value: function PageContainer() {
            this.super();
        }
    },
    contentController: {
        value: null
    },
    templateDidLoad: {
        value: function () {
            //Observe the selection for changes
        }
    }
});
