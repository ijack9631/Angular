"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.EmpName = 'ABC';
        this.Salary = 1000;
    }
    AppComponent.prototype.Increment = function () {
        this.Salary = this.Salary * 10;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-first-tag',
            //To check the html file in the same folder as the module js file
            templateUrl: './app.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product',
            //To check the html file in the same folder as the module js file
            template: '<h1>Customer</h1>',
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'customer',
            //To check the html file in the same folder as the module js file
            template: '<h1>Customer</h1>',
        })
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=app.component.js.map