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
exports.Seller = void 0;
var Employee_1 = require("./Employee");
var Seller = (function (_super) {
    __extends(Seller, _super);
    function Seller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.salesQuantity = 0;
        return _this;
    }
    Seller.prototype.setSalesQuantity = function (value) {
        this.salesQuantity = this.salesQuantity + value;
    };
    Seller.prototype.getSalesQuantity = function () {
        return this.salesQuantity;
    };
    Seller.prototype.calculateTotalSalary = function () {
        return this.baseSalary + 400 + (Seller.COMISSION * this.salesQuantity);
    };
    Seller.COMISSION = 5;
    return Seller;
}(Employee_1.Employee));
exports.Seller = Seller;
//# sourceMappingURL=Seller.js.map