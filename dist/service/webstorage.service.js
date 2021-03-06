"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var webstorage_utiltiy_1 = require("../utility/webstorage.utiltiy");
var WebStorageService = /** @class */ (function () {
    function WebStorageService(storage) {
        this.storage = storage;
    }
    WebStorageService.prototype.get = function (key) {
        return webstorage_utiltiy_1.WebStorageUtility.get(this.storage, key);
    };
    WebStorageService.prototype.set = function (key, value) {
        webstorage_utiltiy_1.WebStorageUtility.set(this.storage, key, value);
    };
    WebStorageService.prototype.remove = function (key) {
        webstorage_utiltiy_1.WebStorageUtility.remove(this.storage, key);
    };
    WebStorageService.prototype.clear = function () {
        this.storage.clear();
    };
    return WebStorageService;
}());
exports.WebStorageService = WebStorageService;
var LocalStorageService = /** @class */ (function (_super) {
    __extends(LocalStorageService, _super);
    function LocalStorageService() {
        return _super.call(this, localStorage) || this;
    }
    LocalStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}(WebStorageService));
exports.LocalStorageService = LocalStorageService;
var SessionStorageService = /** @class */ (function (_super) {
    __extends(SessionStorageService, _super);
    function SessionStorageService() {
        return _super.call(this, sessionStorage) || this;
    }
    SessionStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}(WebStorageService));
exports.SessionStorageService = SessionStorageService;
//# sourceMappingURL=webstorage.service.js.map