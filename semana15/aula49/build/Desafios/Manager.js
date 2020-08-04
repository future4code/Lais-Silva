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
exports.Manager = void 0;
var Cashier_1 = require("./Cashier");
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(name, baseSalary, job) {
        if (job === void 0) { job = "Gerente"; }
        return _super.call(this, name, baseSalary, job) || this;
    }
    Manager.prototype.sayJob = function () {
        console.log("Minha função é: ", this.job);
    };
    return Manager;
}(Cashier_1.Cashier));
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map