/**
 * @module ui/content.reel
 */
//var Component = require("montage/ui/component").Component;
var Substitution =  require("montage/ui/substitution.reel").Substitution;
/**
 * @class Content
 * @extends Component
 */
exports.Content = Substitution.specialize(/** @lends Content# */ {
    constructor: {
        value: function Content() {
            this.super();
        }
    },
    contentController:{value:null}
});
