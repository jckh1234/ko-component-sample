define(["http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.4.2.js"], 
    function(ko) {

        function SimpleComponentViewModel(initValue){
            var self = this;
            this.title = ko.observable("title");
            this.value = ko.isObservable(initValue) ? initValue : ko.observable(initValue);

            this.isReady = ko.observable(false);

            init();
            this.increase = function(){
                this.value(this.value()+1)
            }.bind(this);

            function init(){
                setTimeout(function(){
                    self.isReady(true);
                }, 5000)
            }
        }

        return {
            viewModel: {
                createViewModel: function(params, componentInfo){
                    console.log("calling createViewModel method");
                    return new SimpleComponentViewModel(params.initValue);

                }
            },
            template: "This is a simple component: <div data-bind='text:title'></div>\
                       <div data-bind='text:value()'></div>\
                       Am I Ready?<span data-bind='text:isReady'></span>\
                       <button data-bind='click:increase'>Increase</button>"
        }
});