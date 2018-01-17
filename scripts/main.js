requirejs(["http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.4.2.js",
    "simple-component"], 
    function(ko, com) {

        function viewModel(){
            this.showComponent = ko.observable(false);
            this.count = ko.observable(100);
            this.toggleComponent = function(){
                var pValue = this.showComponent();
                this.showComponent(!pValue);
            }.bind(this);
        }

        ko.components.register('simple-component', com);
        ko.applyBindings(new viewModel());
});