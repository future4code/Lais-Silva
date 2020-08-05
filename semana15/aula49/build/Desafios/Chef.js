"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
var RestEmployee_1 = require("./RestEmployee");
var Chef = (function (_super) {
    __extends(Chef, _super);
    function Chef(name, baseSalary, job) {
        if (job === void 0) { job = "Chef"; }
        return _super.call(this, name, baseSalary, job) || this;
    }
    Chef.prototype.removeDishFromMenu = function (name, menu) {
        var newMenu = [];
        for (var _i = 0, menu_1 = menu; _i < menu_1.length; _i++) {
            var plate = menu_1[_i];
            if (plate.name !== name) {
                newMenu.push(plate);
            }
        }
        return newMenu;
    };
    Chef.prototype.addDishFromMenu = function (dish, menu) {
        menu.push(dish);
        return menu;
    };
    return Chef;
}(RestEmployee_1.RestEmployee));
exports.Chef = Chef;
//# sourceMappingURL=Chef.js.map