"use strict";
cc._RF.push(module, '1ab80rn1gdGYrfpIT01xG5E', 'ObjectManager');
// script/ObjectManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
Object.defineProperty(exports, "__esModule", { value: true });
var BlockScript_1 = require("./BlockScript");
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectManager = /** @class */ (function (_super) {
    __extends(ObjectManager, _super);
    function ObjectManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cubePrefab = null;
        _this.blockPrefab = null;
        _this.targetPrefab = null;
        _this.cubePool = null;
        return _this;
        // update (dt) {}
    }
    ObjectManager.prototype.createCube = function (num) {
        var cube = null;
        if (this.cubePool.size() > 0) {
            cube = this.cubePool.get(this);
        }
        else {
            cube = cc.instantiate(this.cubePrefab);
        }
        // cube.getComponent(BlockScript).reuse(this);
        cube.getComponent(BlockScript_1.default).setNum(num);
        return cube;
    };
    ObjectManager.prototype.start = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], ObjectManager.prototype, "cubePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], ObjectManager.prototype, "blockPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], ObjectManager.prototype, "targetPrefab", void 0);
    ObjectManager = __decorate([
        ccclass
    ], ObjectManager);
    return ObjectManager;
}(cc.Component));
exports.default = ObjectManager;

cc._RF.pop();