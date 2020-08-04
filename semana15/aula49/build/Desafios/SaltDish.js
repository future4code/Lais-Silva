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
exports.SaltDish = void 0;
var Dish_1 = require("./Dish");
var SaltDish = (function (_super) {
    __extends(SaltDish, _super);
    function SaltDish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SaltDish;
}(Dish_1.Dish));
exports.SaltDish = SaltDish;
//# sourceMappingURL=SaltDish.js.map