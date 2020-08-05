"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestEmployee = void 0;
var RestEmployee = (function () {
    function RestEmployee(name, baseSalary, job) {
        this.name = name;
        this.baseSalary = baseSalary;
        this.job = job;
    }
    RestEmployee.prototype.getJob = function () {
        return this.job;
    };
    return RestEmployee;
}());
exports.RestEmployee = RestEmployee;
//# sourceMappingURL=RestEmployee.js.map