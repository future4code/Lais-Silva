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
exports.Customer = void 0;
var User_1 = require("./User");
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(id, email, name, password, creditCard) {
        var _this = _super.call(this, id, email, name, password) || this;
        _this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        _this.creditCard = creditCard;
        return _this;
    }
    Customer.prototype.getCreditCard = function () {
        return this.creditCard;
    };
    return Customer;
}(User_1.User));
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map