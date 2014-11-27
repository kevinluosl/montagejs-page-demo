/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    templateDidLoad:{
        value:function(){
            //Fetch page content substitution identifier
            var self = this;
            var getPageIdentifier = function(pIndex){
                return self.templateObjects.content._childComponents[pIndex].element.attributes['data-arg'].nodeValue
            };
           console.log(getPageIdentifier(0));
            console.log(getPageIdentifier(1));
            this.templateObjects.pageRangeController.content =  [
                {"label": "Components","identifier":getPageIdentifier(0)},
                {"label": "Declaration","identifier":getPageIdentifier(1)},
                {"label": "Objects","identifier":getPageIdentifier(2)},
                {"label": "Data Binding","identifier":getPageIdentifier(3)}
            ];
        }
    }
});
