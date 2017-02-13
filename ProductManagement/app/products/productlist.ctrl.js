(function() {
    "use strict";
    angular
        .module("ProductManagement")
        .controller("ProductListCtrl", ProductListCtrl);

    
    function ProductListCtrl() {

        var vm = this;

        vm.showImage = false;
        vm.products = [
            {" productId": 1,
                "productName": "Leaf RakeX",
                "productCode": "GDX-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": [ "leaf", "tool" ],
                "imageUrl": "23.jpg"
            },
             {" productId": 2,
                "productName": "Leaf1 RakeX",
                "productCode": "GDX-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 20.95,
                "category": "garden",
                "tags": [ "leaf", "tool" ],
                "imageUrl": "23.jpg"
            },{
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved claw steel hammer",
                "cost": 1.00,
                "price": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "24L.bmp"
            }];

            vm.toggleImage = function() {
                vm.showImage = !vm.showImage;
            }
    }

}());