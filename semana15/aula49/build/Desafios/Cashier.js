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
exports.Cashier = void 0;
var RestEmployee_1 = require("./RestEmployee");
var Cashier = (function (_super) {
    __extends(Cashier, _super);
    function Cashier(name, baseSalary, job) {
        if (job === void 0) { job = "Caixa"; }
        return _super.call(this, name, baseSalary, job) || this;
    }
    Cashier.prototype.calculateBill = function (plates) {
        var sum = 0;
        for (var _i = 0, plates_1 = plates; _i < plates_1.length; _i++) {
            var plate = plates_1[_i];
            sum = sum + plate.price;
        }
        return sum;
    };
    Cashier.prototype.sayJob = function () {
        console.log("Minha função é: ", this.job);
    };
    return Cashier;
}(RestEmployee_1.RestEmployee));
exports.Cashier = Cashier;
//# sourceMappingURL=Cashier.js.map