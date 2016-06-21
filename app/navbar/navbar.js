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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_metadata_1 = require('../shared/router.metadata');
var router_service_1 = require('../shared/router.service');
var Navbar = (function () {
    function Navbar(routerService) {
        this.routerService = routerService;
        this.menuItems = routerService.getRoutes();
    }
    Navbar.prototype.getMenuItemClasses = function (menuItem) {
        var menuItemClass = {
            "nav-item": menuItem.menuType === router_metadata_1.MenuType.LEFT || menuItem.menuType === router_metadata_1.MenuType.RIGHT,
            "pull-xs-right": menuItem.menuType === router_metadata_1.MenuType.RIGHT
        };
        return menuItemClass;
    };
    Navbar.prototype.getMenuItemAnchorClasses = function (menuItem) {
        var menuItemAnchorClass = {
            "navbar-brand": menuItem.menuType === router_metadata_1.MenuType.BRAND,
            "nav-link": menuItem.menuType === router_metadata_1.MenuType.LEFT || menuItem.menuType === router_metadata_1.MenuType.RIGHT
        };
        return menuItemAnchorClass;
    };
    Navbar = __decorate([
        core_1.Component({
            selector: 'navbar',
            properties: ['routes'],
            templateUrl: 'app/navbar/navbar.html',
            styles: [
                "\n    .nav-link {\n      color: #eee !important;\n    }\n    "
            ],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_service_1.RouterService])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;

//# sourceMappingURL=navbar.js.map