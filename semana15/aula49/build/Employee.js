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
exports.Employee = void 0;
var User_1 = require("./User");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(id, email, name, password, admissionDate, baseSalary) {
        var _this = _super.call(this, id, email, name, password) || this;
        _this.admissionDate = admissionDate;
        _this.baseSalary = baseSalary;
        return _this;
    }
    Employee.prototype.getAdmissionDate = function () {
        return this.admissionDate;
    };
    Employee.prototype.getBaseSalary = function () {
        return this.baseSalary;
    };
    Employee.prototype.calculateTotalSalary = function () {
        return this.baseSalary + Employee.BENNEFITS;
    };
    Employee.BENNEFITS = 400;
    return Employee;
}(User_1.User));
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map