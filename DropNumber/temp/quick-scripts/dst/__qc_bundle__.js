
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/BlockScript');
require('./assets/script/GameManager');
require('./assets/script/ObjectManager');
require('./assets/script/transition');
require('./assets/script/transition2');
require('./assets/script/transition3');
require('./assets/script/transition4');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BlockScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e931Kwsk1CbZaEy4qlNCtF', 'BlockScript');
// script/BlockScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockScript = /** @class */ (function (_super) {
    __extends(BlockScript, _super);
    function BlockScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockNode = null;
        _this.num = null;
        _this.spBlock = null;
        _this.gameManager = null;
        return _this;
    }
    BlockScript.prototype.onLoad = function () {
        // this.setValue(2);
    };
    BlockScript.prototype.removeCube = function () {
        this.node.active = false;
        // this.node.destroy();
        // this.gameManager.Pool1.put(this.node);
    };
    //   removeCube() {
    // this.blockNode.active = false;
    //     this.gameManager.Pool1.put(this.node);
    // }
    BlockScript.prototype.setValue = function (num) {
        this.num.string = num.toString();
    };
    BlockScript.prototype.setNum = function (num, idx) {
        this.number = num;
        this.index = idx;
        var cubeSprite = this.node.getComponent(cc.Sprite);
        switch (num) {
            case 2:
                {
                    this.spBlock.spriteFrame = this.cubeArray[0];
                    // cubeSprite.spriteFrame = this.cubeArray[0];
                    this.setValue(2);
                }
                break;
            case 4:
                {
                    this.spBlock.spriteFrame = this.cubeArray[1];
                    // cubeSprite.spriteFrame = this.cubeArray[1];
                    this.setValue(4);
                }
                break;
            case 8:
                {
                    this.spBlock.spriteFrame = this.cubeArray[2];
                    // cubeSprite = this.cubeArray[2];
                    this.setValue(8);
                }
                break;
            case 16:
                {
                    this.spBlock.spriteFrame = this.cubeArray[3];
                    // cubeSprite = this.cubeArray[3];
                    this.setValue(16);
                }
                break;
            case 32:
                {
                    this.spBlock.spriteFrame = this.cubeArray[4];
                    // cubeSprite = this.cubeArray[4];
                    this.setValue(32);
                }
                break;
            case 64:
                {
                    this.spBlock.spriteFrame = this.cubeArray[5];
                    // cubeSprite = this.cubeArray[5];
                    this.setValue(64);
                }
                break;
            case 128:
                {
                    this.spBlock.spriteFrame = this.cubeArray[6];
                    // cubeSprite = this.cubeArray[6];
                    this.setValue(128);
                }
                break;
            case 256:
                {
                    this.spBlock.spriteFrame = this.cubeArray[7];
                    // cubeSprite = this.cubeArray[7];
                    this.setValue(256);
                }
                break;
            case 512:
                {
                    this.spBlock.spriteFrame = this.cubeArray[8];
                    // cubeSprite = this.cubeArray[8];
                    this.setValue(512);
                }
                break;
            case 1024:
                {
                    cubeSprite = this.cubeArray[9];
                    this.setValue(1024);
                }
                break;
            case 2048:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(2048);
                }
                break;
            case 4096:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(4096);
                }
                break;
            case 8192:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(8192);
                }
                break;
            case 16384:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(16384);
                }
                break;
            default:
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], BlockScript.prototype, "blockNode", void 0);
    __decorate([
        property(cc.Label)
    ], BlockScript.prototype, "num", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BlockScript.prototype, "cubeArray", void 0);
    __decorate([
        property(cc.Sprite)
    ], BlockScript.prototype, "spBlock", void 0);
    BlockScript = __decorate([
        ccclass
    ], BlockScript);
    return BlockScript;
}(cc.Component));
exports.default = BlockScript;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCbG9ja1NjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTJJQztRQXpJQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBSXhCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFNckIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFpQixJQUFJLENBQUE7O0lBOEhwQyxDQUFDO0lBdEhDLDRCQUFNLEdBQU47UUFDRSxvQkFBb0I7SUFDdEIsQ0FBQztJQUNELGdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsdUJBQXVCO1FBRXZCLHlDQUF5QztJQUM3QyxDQUFDO0lBQ0QsbUJBQW1CO0lBQ2YsaUNBQWlDO0lBQ3JDLDZDQUE2QztJQUM3QyxJQUFJO0lBSUYsOEJBQVEsR0FBUixVQUFTLEdBQVU7UUFHZixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFPckMsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxHQUFHLEVBQUUsR0FBRztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxRQUFRLEdBQUcsRUFBRTtZQUNYLEtBQUssQ0FBQztnQkFBQztvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxD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QkFDcEI7Z0JBQ0QsTUFBTTtZQUNOLEtBQUssSUFBSTtnQkFBQztvQkFDUixVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDcEI7Z0JBQ0QsTUFBTTtZQUNOLEtBQUssS0FBSztnQkFBQztvQkFDVCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDckI7Z0JBQ0QsTUFBTTtZQUNOO2dCQUNFLE1BQU07U0FDVDtJQUVILENBQUM7SUF2SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUTtJQUl4QjtRQUZDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUVFO0lBRXJCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2tEQUNGO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0s7SUFaUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkkvQjtJQUFELGtCQUFDO0NBM0lELEFBMklDLENBM0l3QyxFQUFFLENBQUMsU0FBUyxHQTJJcEQ7a0JBM0lvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL0dhbWVNYW5hZ2VyJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJsb2NrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgXHJcbiAgICBudW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgY3ViZUFycmF5OiBjYy5TcHJpdGVGcmFtZVxyXG5cclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwQmxvY2s6Y2MuU3ByaXRlID0gbnVsbDtcclxuICAgIGdhbWVNYW5hZ2VyIDogR2FtZU1hbmFnZXIgPSBudWxsXHJcbiAgc3RhdGljIG51bW9mQ29sdW1uczogYW55O1xyXG4gIHN0YXRpYyBudW1vZkxpbmVzOiBhbnk7XHJcbiAgbnVtYmVyOm51bWJlcjtcclxuICBpbmRleCA6IG51bWJlcjtcclxuICBcclxuXHJcbiBcclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyB0aGlzLnNldFZhbHVlKDIpO1xyXG4gIH1cclxuICByZW1vdmVDdWJlKCkge1xyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIFxyXG4gICAgLy8gdGhpcy5nYW1lTWFuYWdlci5Qb29sMS5wdXQodGhpcy5ub2RlKTtcclxufVxyXG4vLyAgIHJlbW92ZUN1YmUoKSB7XHJcbiAgICAvLyB0aGlzLmJsb2NrTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuLy8gICAgIHRoaXMuZ2FtZU1hbmFnZXIuUG9vbDEucHV0KHRoaXMubm9kZSk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuICBzZXRWYWx1ZShudW06bnVtYmVyKVxyXG4gIHtcclxuXHJcbiAgICAgIHRoaXMubnVtLnN0cmluZyA9IG51bS50b1N0cmluZygpOyBcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgXHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgfVxyXG4gXHJcbiAgc2V0TnVtKG51bSwgaWR4KXtcclxuICAgIHRoaXMubnVtYmVyID0gbnVtO1xyXG4gICAgdGhpcy5pbmRleCA9IGlkeDtcclxuICAgIGxldCBjdWJlU3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgc3dpdGNoIChudW0pIHtcclxuICAgICAgY2FzZSAyOntcclxuICAgICAgICB0aGlzLnNwQmxvY2suc3ByaXRlRnJhbWUgPSB0aGlzLmN1YmVBcnJheVswXVxyXG4gICAgICAgIC8vIGN1YmVTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmN1YmVBcnJheVswXTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKDIpO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6e1xyXG4gICAgICAgIHRoaXMuc3BCbG9jay5zcHJpdGVGcmFtZSA9IHRoaXMuY3ViZUFycmF5WzFdXHJcbiAgICAgICAgLy8gY3ViZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuY3ViZUFycmF5WzFdO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoNClcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSA4OntcclxuICAgICAgICB0aGlzLnNwQmxvY2suc3ByaXRlRnJhbWUgPSB0aGlzLmN1YmVBcnJheVsyXVxyXG4gICAgICAgIC8vIGN1YmVTcHJpdGUgPSB0aGlzLmN1YmVBcnJheVsyXTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKDgpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTY6e1xyXG4gICAgICAgIHRoaXMuc3BCbG9jay5zcHJpdGVGcmFtZSA9IHRoaXMuY3ViZUFycmF5WzNdXHJcbiAgICAgICAgLy8gY3ViZVNwcml0ZSA9IHRoaXMuY3ViZUFycmF5WzNdO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMTYpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzI6e1xyXG4gICAgICAgIHRoaXMuc3BCbG9jay5zcHJpdGVGcmFtZSA9IHRoaXMuY3ViZUFycmF5WzRdXHJcbiAgICAgICAgLy8gY3ViZVNwcml0ZSA9IHRoaXMuY3ViZUFycmF5WzRdO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMzIpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjQ6e1xyXG4gICAgICAgIHRoaXMuc3BCbG9jay5zcHJpdGVGcmFtZSA9IHRoaXMuY3ViZUFycmF5WzVdXHJcbiAgICAgICAgLy8gY3ViZVNwcml0ZSA9IHRoaXMuY3ViZUFycmF5WzVdO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoNjQpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTI4OntcclxuICAgICAgICB0aGlzLnNwQmxvY2suc3ByaXRlRnJhbWUgPSB0aGlzLmN1YmVBcnJheVs2XVxyXG4gICAgICAgIC8vIGN1YmVTcHJpdGUgPSB0aGlzLmN1YmVBcnJheVs2XTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKDEyOClcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSAyNTY6e1xyXG4gICAgICAgIHRoaXMuc3BCbG9jay5zcHJpdGVGcmFtZSA9IHRoaXMuY3ViZUFycmF5WzddXHJcbiAgICAgICAgLy8gY3ViZVNwcml0ZSA9IHRoaXMuY3ViZUFycmF5WzddO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMjU2KVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDUxMjp7XHJcbiAgICAgICAgdGhpcy5zcEJsb2NrLnNwcml0ZUZyYW1lID0gdGhpcy5jdWJlQXJyYXlbOF1cclxuICAgICAgICAvLyBjdWJlU3ByaXRlID0gdGhpcy5jdWJlQXJyYXlbOF07XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSg1MTIpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTAyNDp7XHJcbiAgICAgICAgY3ViZVNwcml0ZSA9IHRoaXMuY3ViZUFycmF5WzldO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMTAyNClcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSAyMDQ4OntcclxuICAgICAgICBjdWJlU3ByaXRlID0gdGhpcy5jdWJlQXJyYXlbMF07XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgyMDQ4KVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwOTY6e1xyXG4gICAgICAgIGN1YmVTcHJpdGUgPSB0aGlzLmN1YmVBcnJheVswXTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKDQwOTYpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgODE5Mjp7XHJcbiAgICAgICAgY3ViZVNwcml0ZSA9IHRoaXMuY3ViZUFycmF5WzBdO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoODE5MilcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSAxNjM4NDp7XHJcbiAgICAgICAgY3ViZVNwcml0ZSA9IHRoaXMuY3ViZUFycmF5WzBdO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMTYzODQpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/transition4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6917CBekREB5n2pKs3Yoss', 'transition4');
// script/transition4.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var transition4 = /** @class */ (function (_super) {
    __extends(transition4, _super);
    function transition4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    transition4.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
    };
    transition4.prototype.Next_Screen = function () {
        this.Load_Scene();
    };
    transition4.prototype.Load_Scene = function () {
        cc.director.loadScene("score");
    };
    transition4 = __decorate([
        ccclass
    ], transition4);
    return transition4;
}(cc.Component));
exports.default = transition4;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0cmFuc2l0aW9uNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDs7SUFlQSxDQUFDO0lBYkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0csSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQWJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZS9CO0lBQUQsa0JBQUM7Q0FmRCxBQWVDLENBZndDLEVBQUUsQ0FBQyxTQUFTLEdBZXBEO2tCQWZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRyYW5zaXRpb240IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBOZXh0X1NjcmVlbigpe1xyXG4gICAgICAgdGhpcy5Mb2FkX1NjZW5lKCk7XHJcblxyXG4gICAgfVxyXG4gICAgTG9hZF9TY2VuZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjb3JlXCIpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/transition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d232cZlHBN0pFuJtbOFpIV', 'transition');
// script/transition.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var transition = /** @class */ (function (_super) {
    __extends(transition, _super);
    function transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    transition.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
    };
    transition.prototype.Next_Screen = function () {
        this.Load_Scene();
    };
    transition.prototype.Load_Scene = function () {
        cc.director.loadScene("game");
    };
    transition = __decorate([
        ccclass
    ], transition);
    return transition;
}(cc.Component));
exports.default = transition;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0cmFuc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEOztJQWtCQSxDQUFDO0lBYkcsMkJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCwrQkFBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQWZnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBa0I5QjtJQUFELGlCQUFDO0NBbEJELEFBa0JDLENBbEJ1QyxFQUFFLENBQUMsU0FBUyxHQWtCbkQ7a0JBbEJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRyYW5zaXRpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuIFxyXG5cclxuICAgIFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgTmV4dF9TY3JlZW4oKXtcclxuICAgICB0aGlzLkxvYWRfU2NlbmUoKTtcclxuICAgIH1cclxuICAgIExvYWRfU2NlbmUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ObjectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxPYmplY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWtDQztRQWhDRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWdCLElBQUksQ0FBQzs7UUF1QjdCLGlCQUFpQjtJQUNyQixDQUFDO0lBckJHLGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUM7UUFDRCw4Q0FBOEM7UUFFOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFJRCw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDVztJQVJkLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FrQ2pDO0lBQUQsb0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQzBDLEVBQUUsQ0FBQyxTQUFTLEdBa0N0RDtrQkFsQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2tTY3JpcHQgZnJvbSAnLi9CbG9ja1NjcmlwdCc7XHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY3ViZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRhcmdldFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBjdWJlUG9vbDogY2MuTm9kZVBvb2wgPSBudWxsO1xyXG5cclxuICAgXHJcbiAgICBjcmVhdGVDdWJlKG51bSkge1xyXG4gICAgICAgIGxldCBjdWJlID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5jdWJlUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGN1YmUgPSB0aGlzLmN1YmVQb29sLmdldCh0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdWJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3ViZS5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpLnJldXNlKHRoaXMpO1xyXG5cclxuICAgICAgICBjdWJlLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCkuc2V0TnVtKG51bSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjdWJlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/transition2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4a74KXyspB7LSczkkWpIU2', 'transition2');
// script/transition2.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var transition2 = /** @class */ (function (_super) {
    __extends(transition2, _super);
    function transition2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    transition2.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
    };
    transition2.prototype.Next_Screen = function () {
        var _this = this;
        cc.tween(this.node)
            .to(1, { position: cc.v3(640, 360, 0) }, { easing: 'cubicInOut' })
            .call(function () { _this.Load_Scene(); })
            .to(1, { position: cc.v3(-640, 360, 0) }, { easing: 'cubicInOut' })
            .start;
    };
    transition2.prototype.Load_Scene = function () {
        cc.director.loadScene("endgame");
    };
    transition2 = __decorate([
        ccclass
    ], transition2);
    return transition2;
}(cc.Component));
exports.default = transition2;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0cmFuc2l0aW9uMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDs7SUFxQkEsQ0FBQztJQWxCRyw0QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFHLFlBQVksRUFBQyxDQUFDO2FBQzNELElBQUksQ0FBQyxjQUFNLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQzthQUMvQixFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUcsWUFBWSxFQUFDLENBQUM7YUFDNUQsS0FBSyxDQUFBO0lBRVYsQ0FBQztJQUNELGdDQUFVLEdBQVY7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBbEJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBcUIvQjtJQUFELGtCQUFDO0NBckJELEFBcUJDLENBckJ3QyxFQUFFLENBQUMsU0FBUyxHQXFCcEQ7a0JBckJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdHJhbnNpdGlvbjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBOZXh0X1NjcmVlbigpe1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMSx7cG9zaXRpb246IGNjLnYzKDY0MCwzNjAsMCl9LCB7ZWFzaW5nIDogJ2N1YmljSW5PdXQnfSlcclxuICAgICAgICAuY2FsbCgoKSA9Pnt0aGlzLkxvYWRfU2NlbmUoKTt9KVxyXG4gICAgICAgIC50bygxLHtwb3NpdGlvbjogY2MudjMoLTY0MCwzNjAsMCl9LCB7ZWFzaW5nIDogJ2N1YmljSW5PdXQnfSlcclxuICAgICAgICAuc3RhcnRcclxuXHJcbiAgICB9XHJcbiAgICBMb2FkX1NjZW5lKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kZ2FtZVwiKVxyXG4gICAgfVxyXG5cclxuICBcclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afc59sdE3dGCblnx4hSDgNE', 'GameManager');
// script/GameManager.ts

"use strict";
// import nodeso from "./nodeso";
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
var SIZE = { x: 130, y: 130 };
var COL = 5;
var ROW = 6;
var BASESIZE = 130;
var DROPSPEED = 6000;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.nodeso = null;
        _this_1.Pool1 = null;
        _this_1.touchNode = null;
        _this_1.TouchArea = null;
        _this_1.rowCurrent = ROW;
        _this_1.columnCurrent = Math.ceil(COL / 2);
        _this_1.columnTouchNew = Math.ceil(COL / 2);
        _this_1.isCanTouch = true;
        _this_1.maxIdxCheck = 0;
        _this_1.continue = true;
        _this_1.isBlockingToolRow = false;
        // @property(cc.Node)
        // playBoardArea: cc.Node = null;
        _this_1.nowPic = null;
        _this_1.currenBlock = null;
        return _this_1;
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        var _this_1 = this;
        cc.game.addPersistRootNode(this.node);
        this.onInitBlock();
        var _this = this;
        GameManager_1.instance = this;
        this.init();
        this.Pool1 = new cc.NodePool();
        for (var i = 0; i < 4; i++) {
            var enemy = cc.instantiate(this.nodeso);
            this.Pool1.put(enemy);
        }
        var self = this;
        this.currenBlock = this.spawn(2, 5);
        // this.spawn(0, 0);
        console.log("hehe 1", this.currenBlock.position.x, this.currenBlock.position.y);
        this.touchNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (!_this_1.isCanTouch)
                return;
            var mouse_pos = _this_1.touchNode.convertToNodeSpaceAR(event.getLocation()); //toa do tro chuot
            var board_idx = _this_1.convertPosToIndex(mouse_pos); // chuyen toa do tro chuot qua cot va hang
            var nodeso_pos = _this_1.convert(board_idx.col, 5); //chuyen toa do cot va hang thanh toa do nodeso
            _this_1.currenBlock.setPosition(nodeso_pos);
        }, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            // let mouse_pos = event.getLocation();
            // this.currenBlock.setPosition(mouse_pos);
            if (!_this_1.isCanTouch)
                return;
            var mouse_pos = _this_1.touchNode.convertToNodeSpaceAR(event.getLocation()); //toa do tro chuot
            var board_idx = _this_1.convertPosToIndex(mouse_pos); // chuyen toa do tro chuot qua cot va hang
            var nodeso_pos = _this_1.convert(board_idx.col, 5); //chuyen toa do cot va hang thanh toa do nodeso
            // console.log(
            //   "mouse_pos",
            //   mouse_pos.x,
            //   mouse_pos.y,
            //   "mouse moving",
            //   board_idx.col,
            //   board_idx.line
            // );
            _this_1.currenBlock.setPosition(nodeso_pos);
        }, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, function (_event) {
            if (!_this_1.isCanTouch)
                return;
            var blockscript = _this.block;
            var num = parseInt(_this.currenBlock.getComponent(BlockScript_1.default).num.string);
            // blockscript[27] = _this.currenBlock;
            // blockscript[27].num = parseInt(_this.currenBlock.getComponent(BlockScript).num.string)
            // var i : number
            // var j : number
            // var idx = _this.idx(i,j)
            _this_1.isCanTouch = false;
            var B = _this.convertPosToIndex(_this.currenBlock.position);
            var col = B.col;
            for (var j = 0; j < 6; j++) {
                if (_this.board[col][j] == null) {
                    _this.drop(_this.currenBlock, col, j);
                    // 
                    break;
                }
                //  _this.currenBlock.parent = _this.touchNode  
                //  _this.currenBlock = _this.spawn(2,5)
                if (_this.board[col][4] != null && num != blockscript[col + 4 * COL].num) {
                    _this_1.Load_Scene();
                }
            }
            // _this.currenBlock = _this.spawn(2, 5);
            // this.spawn(2,5)
        }, this);
    };
    GameManager.prototype.Load_Scene = function () {
        cc.director.loadScene("endgame");
    };
    GameManager.prototype.merge = function (idx, callback) {
        var blockscript = this.block;
        if (blockscript[idx].num == 0) {
            //Đáng lẽ nó phải được hợp nhất bởi những diem khác.
            callback(-100);
            return;
        }
        // blockscript[idx].pic = new cc.Node
        var mergeNumers = this.mergeNumers;
        var mergeDatas = mergeNumers[idx];
        var mergeCount = this.mergeCount;
        // var blockscript = this.block;
        mergeCount[idx] = mergeDatas.length;
        var _this = this;
        var mergeNum = blockscript[idx].num * Math.pow(2, mergeDatas.length - 1);
        for (var i = 0; i < mergeDatas.length; i++) {
            var subIdx = mergeDatas[i];
            var action = null;
            if (subIdx != idx) { //Khối tổng hợp nhấp nháy và biến mất.
                blockscript[subIdx].num = 0;
                (function (subIdx) {
                    action = cc.sequence(
                    // cc.fadeTo(0.1, 128),
                    // cc.fadeTo(0.1, 255),
                    cc.moveTo(0.06, _this.getBlockPosition(idx)).easing(cc.easeSineIn()), cc.callFunc(function () {
                        //TODO show anim remove
                        // blockscript[subIdx].pic.getComponent(BlockScript).removeCube();
                        _this.removeCubefromBoard(subIdx);
                        blockscript[subIdx].pic.removeFromParent(true);
                        // blockscript[subIdx].pic.active = false
                        blockscript[subIdx] = { num: 0, pic: null };
                        // blockscript[subIdx] = {num: 0, pic: null};
                        mergeCount[idx] = mergeCount[idx] - 1;
                        // block[subIdx].pic.getComponent("cubecomponent").removeCube();
                        // blockscript[subIdx].pic.getComponent(BlockScript).removeCube();
                        if (mergeCount[idx] == 0) {
                            callback(-100);
                        }
                    }));
                })(subIdx);
            }
            else { //Khối tổng hợp sẽ nhấp nháy, sau đó trở thành một khối mới và phóng to lại.
                (function (subIdx) {
                    action = cc.sequence(cc.fadeTo(0.05, 128), cc.fadeTo(0.05, 255), cc.callFunc(function () {
                        // blockscript[subIdx].pic.active = false
                        blockscript[subIdx].pic.removeFromParent(true);
                        _this.removeCubefromBoard[subIdx];
                        blockscript[subIdx].num = mergeNum;
                        blockscript[subIdx].pic = _this.createMergeBlock(mergeNum, subIdx);
                        blockscript[subIdx].pic.runAction(cc.sequence(cc.callFunc(function () {
                        }), cc.scaleTo(0.03, 2), cc.scaleTo(0.05, 1), cc.callFunc(function () {
                            mergeCount[idx] = mergeCount[idx] - 1;
                            if (mergeCount[idx] == 0) {
                                callback(mergeNum);
                            }
                        })));
                    }));
                })(subIdx);
            }
            blockscript[subIdx].pic.runAction(action);
        }
    };
    GameManager.prototype.removeCubeWithIdx = function (idx) {
        var cube = this.block[idx].pic;
        if (cube != null) {
            cube.getComponent(BlockScript_1.default).removeCube();
        }
        this.block[idx] = { num: 0, pic: null };
    };
    GameManager.prototype.removeCubefromBoard = function (idx) {
        // let cube = this.block[idx].pic
        var cube = this.block[idx].pic;
        var position = this.pos(idx);
        if (cube != null) {
            return this.board[position.x][position.y] = null;
        }
        this.block[idx] = { num: 0, pic: null };
    };
    // removeCube(a : cc.Node) {
    //   a.active = false;
    //   this.Pool1.put(a);
    // }
    GameManager.prototype.createMergeBlock = function (mergeNum, subIdx) {
        var mergeBlock = this.CreateCube(mergeNum);
        mergeBlock.getComponent(BlockScript_1.default).setNum(mergeNum, subIdx);
        // this.movingCube.getComponent("CubeComponent").isTarget = true;
        this.touchNode.addChild(mergeBlock);
        var pos = this.getBlockPosition(subIdx);
        mergeBlock.setPosition(this.convert(pos.x + 0.01, pos.y - 0.05));
        console.log("vi tri la" + pos);
        return mergeBlock;
    };
    GameManager.prototype.onInitBlock = function () {
        var blockscript = this.block;
        if (blockscript != null) {
            for (var i = 0; i < ROW * COL; i++) {
                blockscript[i].num = 0;
            }
        }
        else {
            blockscript = this.block = new Array();
            for (var i = 0; i < ROW * COL; i++) {
                blockscript[i] = { num: 0, pic: null };
            }
        }
    };
    GameManager.prototype.sortAfterMerge = function () {
        var blockscript = this.block;
        var needMerge = this.needMerge;
        if (!this.needMerge)
            return;
        var downNumbers = this.downNumbers = [];
        for (var col = 0; col < COL; col++) {
            var blank = false;
            //Binh change from row <= Row to Row
            for (var row = 0; row < ROW; row++) {
                var idx = this.idx(col, row);
                //99 is stone
                if (blockscript[idx].num == 0) {
                    blank = true;
                }
                else if (blank && blockscript[idx] != 0) {
                    //Check if stone not down it
                    downNumbers.push(idx);
                }
            }
        }
        var addCheckNumbers = [];
        for (var i = 0; i < needMerge.length; i++) {
            var has = false;
            for (var k in downNumbers) {
                if (downNumbers[k] == needMerge[i]) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                addCheckNumbers.push(needMerge[i]);
            }
        }
        var downNumbersCount = downNumbers.length;
        if (downNumbersCount == 0) {
            this.checkMerge(needMerge);
            return;
        }
        this.downCount = downNumbersCount;
        var _this = this;
        for (var i = 0; i < downNumbersCount; i++) {
            var idx_1 = downNumbers[i];
            var downIdx = idx_1 - COL;
            if (idx_1 > this.maxIdxCheck) {
                this.maxIdxCheck = idx_1;
            }
            while (downIdx - COL > 0) {
                if (blockscript[downIdx - COL].num == 0) {
                    downIdx = downIdx - COL;
                }
                else {
                    break;
                }
            }
            blockscript[downIdx].num = blockscript[idx_1].num;
            blockscript[downIdx].pic = blockscript[idx_1].pic;
            downNumbers[i] = downIdx;
            var downPos = this.pos(downIdx);
            var oldPos = this.pos(idx_1);
            _this.board[downPos.x][downPos.y] = _this.board[oldPos.x][oldPos.y];
            _this.board[oldPos.x][oldPos.y] = null;
            blockscript[idx_1] = { num: 0, pic: null };
            var action = cc.sequence(cc.moveBy(0.05, cc.v2(0, -BASESIZE * (idx_1 - downIdx) / COL)).easing(cc.easeIn(3)), cc.callFunc(function () {
                _this.downCount = _this.downCount - 1;
                if (_this.downCount == 0) {
                    for (var j = 0; j < addCheckNumbers.length; j++) {
                        //TODO // Lỗi nghiêm trọng, được lặp lại. Gxj đã nêu ra.
                        var downHas = false;
                        for (var k_1 = 0; k_1 < downNumbers.length; k_1++) {
                            if (downNumbers[k_1] == addCheckNumbers[j]) {
                                downHas = true;
                                break;
                            }
                        }
                        if (!downHas) {
                            downNumbers.push(addCheckNumbers[j]);
                        }
                    }
                    _this.checkMerge(downNumbers.reverse());
                    // blockscript[downIdx].pic = _this.board[a.x][a.y];
                    //  _this.board[b.x][b.y] = null;
                }
            }));
            blockscript[downIdx].pic.runAction(action);
        }
    };
    GameManager.prototype.CheckAround = function (mergeIdx, idx) {
        var i;
        var mergeDatas = this.mergeNumers[mergeIdx];
        for (var k in mergeDatas) {
            if (mergeDatas[k] == idx) {
                return;
            }
        }
        mergeDatas.push(idx);
        var pos = this.pos(idx);
        var x = pos.x;
        var y = pos.y;
        // var blockscript = this.currenBlock.getComponent(BlockScript)
        var blockscript = this.block;
        //   blockscript[i] = this.currenBlock
        // blockscript[i].num = parseInt(this.currenBlock.getComponent(BlockScript).num.string)
        var num = blockscript[idx].num;
        if (x > 0) { //left
            if (blockscript[this.idx(x - 1, y)].num == num) {
                //console.log("same left..")
                this.CheckAround(mergeIdx, this.idx(x - 1, y));
            }
        }
        if (x < COL - 1) { //right
            if (blockscript[this.idx(x + 1, y)].num == num) {
                //console.log("same right..")
                this.CheckAround(mergeIdx, this.idx(x + 1, y));
            }
        }
        if (y < ROW - 1) { //up
            if (blockscript[this.idx(x, y + 1)].num == num) {
                //console.log("same up..")
                this.CheckAround(mergeIdx, this.idx(x, y + 1));
            }
        }
        if (y > 0) { //down
            if (blockscript[this.idx(x, y - 1)].num == num) {
                //console.log("same down..")
                this.CheckAround(mergeIdx, this.idx(x, y - 1));
            }
        }
        return true;
        // for (let a = 0; a < around.length; a++) {
        //       let _i = i + around[a].i;
        //       let _j = j + around[a].j;
        //       if(this.board[_i][_j] === null) continue;
        //       let nearBlock = this.board[_i][_j].getComponent(BlockScript);
        //       if (blockscript.num === nearBlock.num) {
        //       } else {
        //       }
        //     }
    };
    GameManager.prototype.checkMerge = function (idxes) {
        // this.onInitBlock()
        var a = this.pos(idxes);
        var idx = this.idx(a.x, a.y);
        // var idx = this.idx(i,j)
        var b = parseInt(this.currenBlock.getComponent(BlockScript_1.default).num.string);
        // var num = blockscript[idx].num
        var mergeNumers = this.mergeNumers = [];
        this.mergeCount = [];
        var needMerge = this.needMerge = []; //需要合成的点 nhung diem can tong hop
        for (var i = 0; i < idxes.length; i++) {
            idx = idxes[i];
            if (b != 0) {
                if (this.continue) {
                    mergeNumers[idx] = []; //检查点上的相邻相同数Các số giống hệt nhau liền kề trên các trạm kiểm soát
                    this.CheckAround(idx, idx);
                    if (mergeNumers[idx].length >= 2) {
                        needMerge.push(idx);
                    }
                    //  this.continue = true;
                }
            }
        }
        var needMergeCount = needMerge.length;
        this.checkCount = needMergeCount;
        var _this = this;
        for (var i = 0; i < needMergeCount; i++) {
            this.merge(needMerge[i], function (mergeNumber) {
                console.log("Merge number" + mergeNumber);
                _this.checkCount = _this.checkCount - 1;
                if (_this.checkCount == 0) {
                    _this.sortAfterMerge();
                    return;
                }
            });
        }
    };
    GameManager.prototype.CreateCube = function (num) {
        var cube = null;
        if (this.Pool1.size() > 0) {
            cube = this.Pool1.get(this);
        }
        else {
            cube = cc.instantiate(this.nodeso);
        }
        cube.getComponent(BlockScript_1.default).setNum(num);
        return cube;
    };
    GameManager.prototype.idx = function (x, y) {
        // var COL = 5
        return (y) * COL + x; //Mang so
    };
    GameManager.prototype.pos = function (idx) {
        //day la ham cv
        var y = Math.ceil((idx + 1) / COL) - 1;
        var x = idx - (y) * COL;
        return cc.v2(x, y);
    };
    GameManager.prototype.getBlockPosition = function (idx) {
        var pos = this.pos(idx);
        this.convert(pos.x, pos.y);
        return cc.v2(pos.x, pos.y);
    };
    GameManager.prototype.init = function () {
        var numofColumns = 5;
        var numofLines = 6;
        this.board = [];
        for (var i = 0; i < numofColumns; i++) {
            var col = [];
            for (var j = 0; j < numofLines; j++) {
                var block = null;
                col.push(block);
            }
            this.board.push(col);
        }
        console.log("initboard", this.board);
    };
    GameManager.prototype.convert = function (col, line) {
        var _pos = cc.v2(col * SIZE.x + SIZE.x / 2, line * SIZE.y + SIZE.y / 2 + 10);
        return _pos;
    };
    GameManager.prototype.convertPosToIndex = function (pos) {
        var col;
        var line;
        pos.z = 0;
        col = Math.floor(pos.x / BASESIZE);
        if (col < 0) {
            col = 0;
        }
        if (col > 4) {
            col = 4;
        }
        line = Math.floor(pos.y / BASESIZE);
        if (line < 0) {
            line = 0;
        }
        if (line > 5) {
            line = 5;
        }
        console.log("pos =", col, line, Math.round(pos.x), Math.round(pos.y));
        return { col: col, line: line };
    };
    GameManager.prototype.spawn = function (colum, line) {
        // var colum = 2;
        // var line = 5;
        console.log("hehe 0");
        var enemy = null;
        if (this.Pool1.size() > 0) {
            enemy = this.Pool1.get();
        }
        else {
            enemy = cc.instantiate(this.nodeso);
        }
        enemy.parent = this.touchNode;
        enemy.getComponent(BlockScript_1.default).setNum(this.getRand(), 27);
        enemy.setPosition(this.convert(colum, line));
        return enemy;
    };
    GameManager.prototype.getRand = function () {
        var rand = Math.random();
        if (rand < 0.5) {
            return 2;
        }
        else if (0.5 <= rand && rand < 1) {
            return 4;
        }
        // else if( 0.4 <= rand&&rand < 0.7 ){
        //   return 8;
        // }
        // else if (0.7 <= rand&&rand < 0.8){
        //   return 16
        // }
        // else if (0.8 <= rand&&rand < 0.9){
        //   return 32
        // }
        // else if (0.9 <= rand&&rand < 0.96){
        //   return 64
        // }
        // else if (0.96 <= rand&&rand < 1){
        //   return 128
        // }
    };
    GameManager.prototype.getPoint = function (mergeNum) {
        var Point;
        Point = mergeNum;
    };
    GameManager.prototype.drop = function (currentblock, i, j) {
        console.log("drop xuong hang", j);
        var delay = cc.delayTime(1);
        var midle_column = 2;
        var highest_line = 5;
        var _this = this;
        var idx = this.idx(i, j);
        _this.currenBlock.parent = _this.touchNode;
        // var move = cc.moveTo(0.05,cc.v2(currentblock.position.x, j * 130 + 130/2))
        // var callFunc1 = cc.callFunc(function(){
        //     _this.board[i][j] = currentblock;
        //     _this.block[idx].num = parseInt(_this.currenBlock.getComponent(BlockScript).num.string);
        //    _this.block[idx].pic = _this.currenBlock;
        //    _this.checkMerge([idx]);
        //    _this.isCanTouch = true
        // })
        // var callFunc2 = cc.callFunc(function(){
        //   // _this.currenBlock.parent = _this.touchNode
        //   _this.currenBlock = _this.spawn(midle_column, highest_line);
        //   // _this.currenBlock.parent = _this.touchNode
        //   // _this.isCanTouch = true
        // })
        // currentblock.runAction((cc.sequence(move,callFunc1,delay,callFunc2)))
        cc.tween(currentblock)
            .to(1, { position: new cc.Vec3(currentblock.position.x, j * 130 + 130 / 2) })
            .call(function () {
            _this.board[i][j] = currentblock;
            _this.block[idx].num = parseInt(currentblock.getComponent(BlockScript_1.default).num.string);
            _this.block[idx].pic = _this.currenBlock;
            _this.checkMerge([idx]);
            delay;
            _this.currenBlock = _this.spawn(midle_column, highest_line);
            _this.isCanTouch = true;
        }
        // .call(function(){
        //     delay     })
        // .call(function(){
        //   _this.currenBlock = _this.spawn(midle_column, highest_line);
        //   _this.isCanTouch = true
        // })
        // //   // if(_this.continue = false){
        // //   //   _this.currenBlock = _this.spawn(midle_column, highest_line);
        // //   // }
        // //   // else{
        // //   // //  var ngu = cc.sequence(cc.callFunc(function(){
        // //   //    _this.checkMerge([idx]);
        // //   //   //  _this.spawn(2,5)
        // //   //  }
        // //   //  ))
        // // // _this.currenBlock.runAction(ngu)
        // //   // }
        // //  // _this.currenBlock = _this.spawn(midle_column, highest_line);
        //   // _this.isCanTouch = true
        ).start();
        // this.spawn(midle_column, highest_line);
    };
    var GameManager_1;
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "nodeso", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "touchNode", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsNkNBQXdDO0FBc0J4QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNaLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNaLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNuQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFFZixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHVFQTZ3QkM7UUExd0JDLGNBQU0sR0FBYyxJQUFJLENBQUM7UUFDekIsYUFBSyxHQUFnQixJQUFJLENBQUM7UUFLMUIsaUJBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsaUJBQVMsR0FBWSxJQUFJLENBQUM7UUFJMUIsa0JBQVUsR0FBVyxHQUFHLENBQUM7UUFDekIscUJBQWEsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxzQkFBYyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRzVDLGtCQUFVLEdBQVksSUFBSSxDQUFDO1FBTzNCLG1CQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFRLEdBQVcsSUFBSSxDQUFBO1FBTXZCLHlCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyxxQkFBcUI7UUFDckIsaUNBQWlDO1FBQ2pDLGNBQU0sR0FBRyxJQUFJLENBQUM7UUFxbEJkLG1CQUFXLEdBQVksSUFBSSxDQUFDOztJQW9KOUIsQ0FBQztvQkE3d0JvQixXQUFXO0lBdUM5Qiw0QkFBTSxHQUFOO1FBQUEsbUJBK0ZDO1FBN0ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBTWhCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEMsb0JBQW9CO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsUUFBUSxFQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUM1QixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUFPLElBQUksQ0FBQyxPQUFJLENBQUMsVUFBVTtnQkFBRSxPQUFPO1lBR3pGLElBQUksU0FBUyxHQUFHLE9BQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7WUFDNUYsSUFBSSxTQUFTLEdBQUcsT0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsMENBQTBDO1lBQzdGLElBQUksVUFBVSxHQUFHLE9BQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLCtDQUErQztZQUdoRyxPQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBRXBELHVDQUF1QztZQUN2QywyQ0FBMkM7WUFDekMsSUFBSSxDQUFDLE9BQUksQ0FBQyxVQUFVO2dCQUFFLE9BQU87WUFDN0IsSUFBSSxTQUFTLEdBQUcsT0FBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUM1RixJQUFJLFNBQVMsR0FBRyxPQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7WUFDN0YsSUFBSSxVQUFVLEdBQUcsT0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsK0NBQStDO1lBRWhHLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixLQUFLO1lBQ0wsT0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsTUFBTTtZQUNwRCxJQUFJLENBQUMsT0FBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTztZQUM3QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzFFLHVDQUF1QztZQUN2Qyx5RkFBeUY7WUFDekYsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQiwyQkFBMkI7WUFDM0IsT0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDM0QsSUFBSSxHQUFHLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBRTtZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUUxQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO29CQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxHQUFHO29CQUVELE1BQU07aUJBRU47Z0JBQ0YsZ0RBQWdEO2dCQUNoRCx3Q0FBd0M7Z0JBQ3hDLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDckUsT0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQjthQUVBO1lBQ0QseUNBQXlDO1lBRzdDLGtCQUFrQjtRQUlwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHUCxDQUFDO0lBSUgsZ0NBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFNQywyQkFBSyxHQUFMLFVBQU0sR0FBRyxFQUFFLFFBQVE7UUFFakIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQU03QixJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQzNCLG9EQUFvRDtZQUVwRCxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLE9BQU87U0FFVjtRQUNELHFDQUFxQztRQUVyQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pDLGdDQUFnQztRQUloQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUtwQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXpFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFLEVBQUUsc0NBQXNDO2dCQUN6RCxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxVQUFVLE1BQU07b0JBQ1YsTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRO29CQUVoQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUNwRSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUVSLHVCQUF1Qjt3QkFLdkIsa0VBQWtFO3dCQU1sRSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUE7d0JBQ2pDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9DLHlDQUF5Qzt3QkFFekMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUM7d0JBQzFDLDZDQUE2Qzt3QkFDN0MsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RDLGdFQUFnRTt3QkFDaEUsa0VBQWtFO3dCQUlsRSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3RCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQjtvQkFDSCxDQUFDLENBQUMsQ0FDUCxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2Q7aUJBQU0sRUFBRSw0RUFBNEU7Z0JBQ2pGLENBQUMsVUFBVSxNQUFNO29CQUNiLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUVoQixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFDcEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBRVIseUNBQXlDO3dCQUN6QyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUM5QyxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUE7d0JBQ2pDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO3dCQUVuQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFFLENBQUM7d0JBQ3BFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3pDLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBSVosQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ25CLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUVSLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUV0QyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQ3RCLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDdEI7d0JBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUNMLENBQUM7Z0JBRU4sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDZDtZQUVELFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBRzdDO0lBQ0wsQ0FBQztJQUNELHVDQUFpQixHQUFqQixVQUFrQixHQUFHO1FBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRS9CLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCx5Q0FBbUIsR0FBbkIsVUFBb0IsR0FBRztRQUNyQixpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFHLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFJdEMsQ0FBQztJQU1GLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLElBQUk7SUFDSixzQ0FBZ0IsR0FBaEIsVUFBaUIsUUFBUSxFQUFFLE1BQU07UUFDL0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxVQUFVLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUcvQixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsaUNBQVcsR0FBWDtRQUVFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFNUIsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTthQUN4QjtTQUNKO2FBQU07WUFDSCxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUd2QztTQUlKO0lBQ0gsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNsQixvQ0FBb0M7WUFDcEMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLGFBQWE7Z0JBQ2IsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtvQkFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFFaEI7cUJBQU0sSUFBSSxLQUFLLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdkMsNEJBQTRCO29CQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1NBQ0o7UUFDRCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2hCLEtBQUssSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO2dCQUN2QixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hDLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ1gsTUFBTTtpQkFDVDthQUNKO1lBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7UUFDRCxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDMUMsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQ25CLENBQUE7WUFDTixPQUFNO1NBRVQ7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxLQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLElBQUksT0FBTyxHQUFHLEtBQUcsR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxLQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFHLENBQUM7YUFDMUI7WUFFUyxPQUFPLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLFdBQVcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtvQkFDckMsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7aUJBQzNCO3FCQUNTO29CQUNGLE1BQU07aUJBRWI7YUFDSjtZQUdELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNoRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDaEQsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQTtZQUN4QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBSXZDLFdBQVcsQ0FBQyxLQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDO1lBQ3ZDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQ3BCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbEYsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDSixLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDN0Msd0RBQXdEO3dCQUN4RCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3BCLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxFQUFFOzRCQUN6QyxJQUFJLFdBQVcsQ0FBQyxHQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0NBQ2YsTUFBTTs2QkFDVDt5QkFDSjt3QkFDRCxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3hDO3FCQUNKO29CQUNELEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBR3hDLG9EQUFvRDtvQkFDcEQsaUNBQWlDO2lCQUVwQztZQUVMLENBQUMsQ0FFSixDQUFDLENBQUM7WUFFUCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUU5QztJQUVMLENBQUM7SUFPSCxpQ0FBVyxHQUFYLFVBQVksUUFBUSxFQUFFLEdBQUc7UUFDdkIsSUFBSSxDQUFVLENBQUE7UUFFZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLEtBQUssSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFO1lBQ3RCLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFFdEIsT0FBTzthQUNWO1NBQ0o7UUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDYiwrREFBK0Q7UUFDL0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUM5QixzQ0FBc0M7UUFDdEMsdUZBQXVGO1FBQ3JGLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTTtZQUNmLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQzVDLDRCQUE0QjtnQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRSxDQUFDLEVBQUUsRUFBRyxPQUFPO1lBQ3RCLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQzVDLDZCQUE2QjtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRSxDQUFDLEVBQUUsRUFBRyxJQUFJO1lBQ25CLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQzVDLDBCQUEwQjtnQkFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFHLE1BQU07WUFDaEIsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDNUMsNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7UUFDbkIsNENBQTRDO1FBQzVDLGtDQUFrQztRQUNsQyxrQ0FBa0M7UUFDbEMsa0RBQWtEO1FBQ2xELHNFQUFzRTtRQUN0RSxpREFBaUQ7UUFFakQsaUJBQWlCO1FBRWpCLFVBQVU7UUFDVixRQUFRO0lBQ04sQ0FBQztJQUtELGdDQUFVLEdBQVYsVUFBVyxLQUFLO1FBRWQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUszQiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkUsaUNBQWlDO1FBQ2pDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsZ0NBQWdDO1FBQ3JFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNWLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztvQkFDZixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsaUVBQWlFO29CQUN4RixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFM0IsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdkI7b0JBRUcseUJBQXlCO2lCQUM1QjthQUNKO1NBQ0o7UUFDRCxJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRXRDLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsV0FBVztnQkFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBRXhDLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDckIsT0FBTTtpQkFDVDtZQUNMLENBQUMsQ0FBQyxDQUFBO1NBRUw7SUFFRixDQUFDO0lBQ0YsZ0NBQVUsR0FBVixVQUFXLEdBQUc7UUFDWixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFFLENBQUMsRUFBQztZQUN0QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFN0I7YUFBTTtZQUNMLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQyxPQUFPLElBQUksQ0FBQTtJQUVWLENBQUM7SUFNRix5QkFBRyxHQUFILFVBQUksQ0FBQyxFQUFFLENBQUM7UUFDTixjQUFjO1FBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBQ2pDLENBQUM7SUFDRCx5QkFBRyxHQUFILFVBQUksR0FBRztRQUNMLGVBQWU7UUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLEdBQUc7UUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRXpCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBR0QsMEJBQUksR0FBSjtRQUNFLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFakI7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxJQUFZO1FBQy9CLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFFLENBQUM7UUFDNUUsT0FBTyxJQUFJLENBQUM7SUFFZCxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLEdBQVk7UUFDNUIsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBSSxJQUFZLENBQUM7UUFDakIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztZQUNULEdBQUcsR0FBRyxDQUFDLENBQUE7U0FDUjtRQUNELElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztZQUNULEdBQUcsR0FBRyxDQUFDLENBQUE7U0FDUjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUE7UUFDbkMsSUFBRyxJQUFJLEdBQUcsQ0FBQyxFQUFDO1lBQ1YsSUFBSSxHQUFHLENBQUMsQ0FBQTtTQUNUO1FBQ0QsSUFBRyxJQUFJLEdBQUcsQ0FBQyxFQUFDO1lBQ1YsSUFBSSxHQUFHLENBQUMsQ0FBQTtTQUNUO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3RFLE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFJRCwyQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLElBQVk7UUFFL0IsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksS0FBSyxHQUFZLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDTCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7UUFFRCxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUczRCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFJN0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBR0QsNkJBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSyxHQUFHLElBQUksSUFBSSxJQUFFLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDakMsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELHNDQUFzQztRQUN0QyxjQUFjO1FBQ2QsSUFBSTtRQUNKLHFDQUFxQztRQUNyQyxjQUFjO1FBQ2QsSUFBSTtRQUNKLHFDQUFxQztRQUNyQyxjQUFjO1FBQ2QsSUFBSTtRQUNKLHNDQUFzQztRQUN0QyxjQUFjO1FBQ2QsSUFBSTtRQUNKLG9DQUFvQztRQUNwQyxlQUFlO1FBQ2YsSUFBSTtJQUVOLENBQUM7SUFDRCw4QkFBUSxHQUFSLFVBQVMsUUFBUTtRQUNmLElBQUksS0FBYyxDQUFDO1FBQ25CLEtBQUssR0FBRyxRQUFRLENBQUE7SUFFbEIsQ0FBQztJQUdELDBCQUFJLEdBQUosVUFBSyxZQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLEdBQUcsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUN4QixLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFBO1FBQzFDLDZFQUE2RTtRQUU3RSwwQ0FBMEM7UUFFMUMsd0NBQXdDO1FBRXhDLCtGQUErRjtRQUUvRiwrQ0FBK0M7UUFFL0MsOEJBQThCO1FBRTlCLDZCQUE2QjtRQUU3QixLQUFLO1FBQ0wsMENBQTBDO1FBRTFDLGtEQUFrRDtRQUNsRCxpRUFBaUU7UUFDakUsa0RBQWtEO1FBQ2xELCtCQUErQjtRQUMvQixLQUFLO1FBRUwsd0VBQXdFO1FBS3ZFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3RCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDeEUsSUFBSSxDQUFDO1lBRUgsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7WUFFakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUVuRixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFBO1lBRXhDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUssQ0FBQTtZQUNMLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDNUQsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7UUFDekIsQ0FBQztRQUNELG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGlFQUFpRTtRQUNqRSw0QkFBNEI7UUFDNUIsS0FBSztRQUlMLHNDQUFzQztRQUN0Qyx5RUFBeUU7UUFDekUsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQiw0REFBNEQ7UUFDNUQsc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUdqQyxhQUFhO1FBRWIsY0FBYztRQUNkLHlDQUF5QztRQUN6QyxZQUFZO1FBQ1osc0VBQXNFO1FBQ3RFLCtCQUErQjtTQU8zQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBR1osMENBQTBDO0lBRTVDLENBQUM7O0lBeHdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNLO0lBTXpCO1FBSkMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBSVE7SUFUUCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNndCL0I7SUFBRCxrQkFBQztDQTd3QkQsQUE2d0JDLENBN3dCd0MsRUFBRSxDQUFDLFNBQVMsR0E2d0JwRDtrQkE3d0JvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IG5vZGVzbyBmcm9tIFwiLi9ub2Rlc29cIjtcclxuXHJcbmltcG9ydCBCbG9ja1NjcmlwdCBmcm9tICcuL0Jsb2NrU2NyaXB0JztcclxuaW1wb3J0IHRyYW5zaXRpb24gZnJvbSAnLi90cmFuc2l0aW9uJztcclxuaW1wb3J0IHRyYW5zaXRpb24yIGZyb20gJy4vdHJhbnNpdGlvbjInO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIFNJWkUgPSB7IHg6IDEzMCwgeTogMTMwIH07XHJcbnZhciBDT0wgPSA1O1xyXG52YXIgUk9XID0gNjtcclxudmFyIEJBU0VTSVpFID0gMTMwO1xyXG52YXIgRFJPUFNQRUVEID0gNjAwMDtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZU1hbmFnZXI7XHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICBub2Rlc286IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgUG9vbDE6IGNjLk5vZGVQb29sID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuIFxyXG5cclxuICBcclxuICB0b3VjaE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIFRvdWNoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgXHJcbiAgXHJcbiAgcG9zaXRpb246IGNjLlZlYzM7XHJcbiAgcm93Q3VycmVudDogbnVtYmVyID0gUk9XO1xyXG4gIGNvbHVtbkN1cnJlbnQ6IG51bWJlciA9IE1hdGguY2VpbChDT0wgLyAyKTtcclxuICBjb2x1bW5Ub3VjaE5ldzogbnVtYmVyID0gTWF0aC5jZWlsKENPTCAvIDIpO1xyXG4gIGJvYXJkOiBhbnlbXTtcclxuICBuZWVkTWVyZ2U6IGFueVtdO1xyXG4gIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGJsb2NrOiBhbnlbXTtcclxuICBtZXJnZU51bWVyczogYW55W107XHJcbiAgbWVyZ2VDb3VudDogYW55W107XHJcbiAgbm93TnVtOiBhbnk7XHJcbiAgZG93bk51bWJlcnM6IGFueVtdO1xyXG4gIGRvd25Db3VudDogbnVtYmVyO1xyXG4gIG1heElkeENoZWNrOiBudW1iZXIgPSAwO1xyXG4gIGNvbnRpbnVlOmJvb2xlYW4gPSB0cnVlXHJcbiAga2VlcDpib29sZWFuO1xyXG4gIFxyXG4gIG5leHROdW06IG51bWJlcjtcclxuICBjaGVja0NvdW50OiBudW1iZXI7XHJcbiAgXHJcbiAgaXNCbG9ja2luZ1Rvb2xSb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAvLyBwbGF5Qm9hcmRBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuICBub3dQaWMgPSBudWxsO1xyXG4gIGNvbWJvQ291bnQ6IG51bWJlcjtcclxuIFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIFxyXG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIHRoaXMub25Jbml0QmxvY2soKTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBHYW1lTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMuUG9vbDEgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGxldCBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZXNvKTtcclxuICAgICAgdGhpcy5Qb29sMS5wdXQoZW5lbXkpO1xyXG4gICAgfVxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB0aGlzLmN1cnJlbkJsb2NrID0gdGhpcy5zcGF3bigyLCA1KTtcclxuXHJcbiAgICAvLyB0aGlzLnNwYXduKDAsIDApO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiaGVoZSAxXCIsXHJcbiAgICAgIHRoaXMuY3VycmVuQmxvY2sucG9zaXRpb24ueCxcclxuICAgICAgdGhpcy5jdXJyZW5CbG9jay5wb3NpdGlvbi55XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHsgaWYgKCF0aGlzLmlzQ2FuVG91Y2gpIHJldHVybjsgXHJcbiAgICAgIFxyXG5cclxuICAgICAgbGV0IG1vdXNlX3BvcyA9IHRoaXMudG91Y2hOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpOyAvL3RvYSBkbyB0cm8gY2h1b3RcclxuICAgICAgbGV0IGJvYXJkX2lkeCA9IHRoaXMuY29udmVydFBvc1RvSW5kZXgobW91c2VfcG9zKTsgLy8gY2h1eWVuIHRvYSBkbyB0cm8gY2h1b3QgcXVhIGNvdCB2YSBoYW5nXHJcbiAgICAgIGxldCBub2Rlc29fcG9zID0gdGhpcy5jb252ZXJ0KGJvYXJkX2lkeC5jb2wsIDUpOyAvL2NodXllbiB0b2EgZG8gY290IHZhIGhhbmcgdGhhbmggdG9hIGRvIG5vZGVzb1xyXG4gICAgICBcclxuICAgICBcclxuICAgICAgdGhpcy5jdXJyZW5CbG9jay5zZXRQb3NpdGlvbihub2Rlc29fcG9zKTtcclxuICAgIFxyXG4gICAgfSwgdGhpcyk7XHJcbiAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgXHJcbiAgICAgIC8vIGxldCBtb3VzZV9wb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAvLyB0aGlzLmN1cnJlbkJsb2NrLnNldFBvc2l0aW9uKG1vdXNlX3Bvcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuICAgICAgICBsZXQgbW91c2VfcG9zID0gdGhpcy50b3VjaE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7IC8vdG9hIGRvIHRybyBjaHVvdFxyXG4gICAgICAgIGxldCBib2FyZF9pZHggPSB0aGlzLmNvbnZlcnRQb3NUb0luZGV4KG1vdXNlX3Bvcyk7IC8vIGNodXllbiB0b2EgZG8gdHJvIGNodW90IHF1YSBjb3QgdmEgaGFuZ1xyXG4gICAgICAgIGxldCBub2Rlc29fcG9zID0gdGhpcy5jb252ZXJ0KGJvYXJkX2lkeC5jb2wsIDUpOyAvL2NodXllbiB0b2EgZG8gY290IHZhIGhhbmcgdGhhbmggdG9hIGRvIG5vZGVzb1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIC8vICAgXCJtb3VzZV9wb3NcIixcclxuICAgICAgICAvLyAgIG1vdXNlX3Bvcy54LFxyXG4gICAgICAgIC8vICAgbW91c2VfcG9zLnksXHJcbiAgICAgICAgLy8gICBcIm1vdXNlIG1vdmluZ1wiLFxyXG4gICAgICAgIC8vICAgYm9hcmRfaWR4LmNvbCxcclxuICAgICAgICAvLyAgIGJvYXJkX2lkeC5saW5lXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICB0aGlzLmN1cnJlbkJsb2NrLnNldFBvc2l0aW9uKG5vZGVzb19wb3MpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChfZXZlbnQpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuICAgICAgdmFyIGJsb2Nrc2NyaXB0ID0gX3RoaXMuYmxvY2s7XHJcbiAgICAgIHZhciBudW0gPSBwYXJzZUludChfdGhpcy5jdXJyZW5CbG9jay5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpLm51bS5zdHJpbmcpXHJcbiAgICAgIC8vIGJsb2Nrc2NyaXB0WzI3XSA9IF90aGlzLmN1cnJlbkJsb2NrO1xyXG4gICAgICAvLyBibG9ja3NjcmlwdFsyN10ubnVtID0gcGFyc2VJbnQoX3RoaXMuY3VycmVuQmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrU2NyaXB0KS5udW0uc3RyaW5nKVxyXG4gICAgICAvLyB2YXIgaSA6IG51bWJlclxyXG4gICAgICAvLyB2YXIgaiA6IG51bWJlclxyXG4gICAgICAvLyB2YXIgaWR4ID0gX3RoaXMuaWR4KGksailcclxuICAgICAgdGhpcy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICB2YXIgQiA9IF90aGlzLmNvbnZlcnRQb3NUb0luZGV4KF90aGlzLmN1cnJlbkJsb2NrLnBvc2l0aW9uKSBcclxuICAgIHZhciBjb2wgPSAgQi5jb2wgO1xyXG4gICAgIGZvciAobGV0IGogPSAwOyBqIDwgNjsgaisrKSB7XHJcbiAgICAgICBcclxuICAgICAgIGlmIChfdGhpcy5ib2FyZFtjb2xdW2pdID09IG51bGwpIHtcclxuICAgICAgICBfdGhpcy5kcm9wKF90aGlzLmN1cnJlbkJsb2NrLCBjb2wgLCBqKTtcclxuICAgICAgLy8gXHJcbiAgICAgXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgIC8vICBfdGhpcy5jdXJyZW5CbG9jay5wYXJlbnQgPSBfdGhpcy50b3VjaE5vZGUgIFxyXG4gICAgICAvLyAgX3RoaXMuY3VycmVuQmxvY2sgPSBfdGhpcy5zcGF3bigyLDUpXHJcbiAgICAgIGlmKF90aGlzLmJvYXJkW2NvbF1bNF0gIT0gbnVsbCAmJiBudW0gIT0gYmxvY2tzY3JpcHRbY29sICsgNCpDT0xdLm51bSApe1xyXG4gICAgICAgIHRoaXMuTG9hZF9TY2VuZSgpO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gX3RoaXMuY3VycmVuQmxvY2sgPSBfdGhpcy5zcGF3bigyLCA1KTtcclxuICAgICBcclxuXHJcbiAgLy8gdGhpcy5zcGF3bigyLDUpXHJcblxyXG4gICAgICBcclxuICBcclxufSwgdGhpcyk7XHJcbiBcclxuXHJcbiAgfVxyXG4gIFxyXG4gXHJcblxyXG5Mb2FkX1NjZW5lKCl7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRnYW1lXCIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gXHJcbiAgbWVyZ2UoaWR4LCBjYWxsYmFjaykge1xyXG4gICAgXHJcbiAgICB2YXIgYmxvY2tzY3JpcHQgPSB0aGlzLmJsb2NrO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGlmIChibG9ja3NjcmlwdFtpZHhdLm51bSA9PSAwKSB7XHJcbiAgICAgICAgLy/EkMOhbmcgbOG6vSBuw7MgcGjhuqNpIMSRxrDhu6NjIGjhu6NwIG5o4bqldCBi4bufaSBuaOG7r25nIGRpZW0ga2jDoWMuXHJcbiAgICAgICBcclxuICAgICAgICBjYWxsYmFjaygtMTAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAvLyBibG9ja3NjcmlwdFtpZHhdLnBpYyA9IG5ldyBjYy5Ob2RlXHJcblxyXG4gICAgdmFyIG1lcmdlTnVtZXJzID0gdGhpcy5tZXJnZU51bWVycztcclxuICAgIHZhciBtZXJnZURhdGFzID0gbWVyZ2VOdW1lcnNbaWR4XTtcclxuICAgIHZhciBtZXJnZUNvdW50ID0gdGhpcy5tZXJnZUNvdW50O1xyXG4gICAgLy8gdmFyIGJsb2Nrc2NyaXB0ID0gdGhpcy5ibG9jaztcclxuICAgXHJcblxyXG4gXHJcbiAgICBtZXJnZUNvdW50W2lkeF0gPSBtZXJnZURhdGFzLmxlbmd0aDtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIG1lcmdlTnVtID0gYmxvY2tzY3JpcHRbaWR4XS5udW0gKiBNYXRoLnBvdygyLCBtZXJnZURhdGFzLmxlbmd0aCAtIDEpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lcmdlRGF0YXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgc3ViSWR4ID0gbWVyZ2VEYXRhc1tpXTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYWN0aW9uID0gbnVsbDtcclxuICAgICAgICBpZiAoc3ViSWR4ICE9IGlkeCkgeyAvL0to4buRaSB04buVbmcgaOG7o3AgbmjhuqVwIG5ow6F5IHbDoCBiaeG6v24gbeG6pXQuXHJcbiAgICAgICAgICBibG9ja3NjcmlwdFtzdWJJZHhdLm51bSA9IDA7XHJcbiAgICAgICAgIChmdW5jdGlvbiAoc3ViSWR4KSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuZmFkZVRvKDAuMSwgMTI4KSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5mYWRlVG8oMC4xLCAyNTUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA2LCBfdGhpcy5nZXRCbG9ja1Bvc2l0aW9uKGlkeCkpLmVhc2luZyhjYy5lYXNlU2luZUluKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPIHNob3cgYW5pbSByZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBibG9ja3NjcmlwdFtzdWJJZHhdLnBpYy5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpLnJlbW92ZUN1YmUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3ViZWZyb21Cb2FyZChzdWJJZHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc2NyaXB0W3N1YklkeF0ucGljLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJsb2Nrc2NyaXB0W3N1YklkeF0ucGljLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NjcmlwdFtzdWJJZHhdID0ge251bTogMCwgcGljOiBudWxsfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmxvY2tzY3JpcHRbc3ViSWR4XSA9IHtudW06IDAsIHBpYzogbnVsbH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlQ291bnRbaWR4XSA9IG1lcmdlQ291bnRbaWR4XSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJsb2NrW3N1YklkeF0ucGljLmdldENvbXBvbmVudChcImN1YmVjb21wb25lbnRcIikucmVtb3ZlQ3ViZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBibG9ja3NjcmlwdFtzdWJJZHhdLnBpYy5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpLnJlbW92ZUN1YmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVyZ2VDb3VudFtpZHhdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSkoc3ViSWR4KTtcclxuICAgICAgICB9IGVsc2UgeyAvL0to4buRaSB04buVbmcgaOG7o3Agc+G6vSBuaOG6pXAgbmjDoXksIHNhdSDEkcOzIHRy4bufIHRow6BuaCBt4buZdCBraOG7kWkgbeG7m2kgdsOgIHBow7NuZyB0byBs4bqhaS5cclxuICAgICAgICAgICAgKGZ1bmN0aW9uIChzdWJJZHgpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYy5mYWRlVG8oMC4wNSwgMTI4KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5mYWRlVG8oMC4wNSwgMjU1KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJsb2Nrc2NyaXB0W3N1YklkeF0ucGljLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc2NyaXB0W3N1YklkeF0ucGljLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3ViZWZyb21Cb2FyZFtzdWJJZHhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc2NyaXB0W3N1YklkeF0ubnVtID0gbWVyZ2VOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NjcmlwdFtzdWJJZHhdLnBpYyA9IF90aGlzLmNyZWF0ZU1lcmdlQmxvY2sobWVyZ2VOdW0sIHN1YklkeCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NjcmlwdFtzdWJJZHhdLnBpYy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjAzLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4wNSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VDb3VudFtpZHhdID0gbWVyZ2VDb3VudFtpZHhdIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXJnZUNvdW50W2lkeF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhtZXJnZU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkoc3ViSWR4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmxvY2tzY3JpcHRbc3ViSWR4XS5waWMucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5yZW1vdmVDdWJlV2l0aElkeChpZHgpIHtcclxuICBsZXQgY3ViZSA9IHRoaXMuYmxvY2tbaWR4XS5waWM7XHJcblxyXG4gIGlmIChjdWJlICE9IG51bGwpIHtcclxuICAgICAgY3ViZS5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpLnJlbW92ZUN1YmUoKTtcclxuICB9XHJcbiAgdGhpcy5ibG9ja1tpZHhdID0ge251bTogMCwgcGljOiBudWxsfTtcclxufVxyXG5yZW1vdmVDdWJlZnJvbUJvYXJkKGlkeCl7XHJcbiAgLy8gbGV0IGN1YmUgPSB0aGlzLmJsb2NrW2lkeF0ucGljXHJcbiAgbGV0IGN1YmUgID0gdGhpcy5ibG9ja1tpZHhdLnBpYztcclxuIHZhciBwb3NpdGlvbiA9IHRoaXMucG9zKGlkeCk7XHJcbiBpZihjdWJlICE9IG51bGwpe1xyXG4gICByZXR1cm4gdGhpcy5ib2FyZFtwb3NpdGlvbi54XVtwb3NpdGlvbi55XSA9IG51bGw7XHJcbiB9XHJcbiB0aGlzLmJsb2NrW2lkeF0gPSB7bnVtOiAwLCBwaWM6IG51bGx9O1xyXG5cclxuICBcclxuIFxyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHJlbW92ZUN1YmUoYSA6IGNjLk5vZGUpIHtcclxuLy8gICBhLmFjdGl2ZSA9IGZhbHNlO1xyXG4vLyAgIHRoaXMuUG9vbDEucHV0KGEpO1xyXG4vLyB9XHJcbmNyZWF0ZU1lcmdlQmxvY2sobWVyZ2VOdW0sIHN1YklkeCkge1xyXG4gIGxldCBtZXJnZUJsb2NrID0gdGhpcy5DcmVhdGVDdWJlKG1lcmdlTnVtKTtcclxuICBtZXJnZUJsb2NrLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCkuc2V0TnVtKG1lcmdlTnVtLCBzdWJJZHgpO1xyXG4gIC8vIHRoaXMubW92aW5nQ3ViZS5nZXRDb21wb25lbnQoXCJDdWJlQ29tcG9uZW50XCIpLmlzVGFyZ2V0ID0gdHJ1ZTtcclxuICB0aGlzLnRvdWNoTm9kZS5hZGRDaGlsZChtZXJnZUJsb2NrKTtcclxuXHJcbiAgbGV0IHBvcyA9IHRoaXMuZ2V0QmxvY2tQb3NpdGlvbihzdWJJZHgpO1xyXG4gIG1lcmdlQmxvY2suc2V0UG9zaXRpb24odGhpcy5jb252ZXJ0KHBvcy54ICsgMC4wMSxwb3MueSAtIDAuMDUpKTtcclxuICBjb25zb2xlLmxvZyhcInZpIHRyaSBsYVwiICsgcG9zKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIG1lcmdlQmxvY2s7XHJcbn1cclxub25Jbml0QmxvY2soKSB7XHJcbiAgXHJcbiAgdmFyIGJsb2Nrc2NyaXB0ID0gdGhpcy5ibG9ja1xyXG4gIFxyXG4gIGlmIChibG9ja3NjcmlwdCAhPSBudWxsKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgUk9XICogQ09MOyBpKyspIHtcclxuICAgICAgICAgYmxvY2tzY3JpcHRbaV0ubnVtID0gMFxyXG4gICAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgICAgYmxvY2tzY3JpcHQgPSB0aGlzLmJsb2NrID0gbmV3IEFycmF5KCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgUk9XICogQ09MOyBpKyspIHtcclxuICAgICAgICAgIGJsb2Nrc2NyaXB0W2ldID0ge251bTogMCxwaWM6IG51bGx9O1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5zb3J0QWZ0ZXJNZXJnZSgpe1xyXG4gIHZhciBibG9ja3NjcmlwdCA9IHRoaXMuYmxvY2s7XHJcbiAgdmFyIG5lZWRNZXJnZSA9IHRoaXMubmVlZE1lcmdlO1xyXG4gIGlmICghdGhpcy5uZWVkTWVyZ2UpIHJldHVybjtcclxuICB2YXIgZG93bk51bWJlcnMgPSB0aGlzLmRvd25OdW1iZXJzID0gW107XHJcbiAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgQ09MOyBjb2wrKykge1xyXG4gICAgdmFyIGJsYW5rID0gZmFsc2U7XHJcbiAgICAvL0JpbmggY2hhbmdlIGZyb20gcm93IDw9IFJvdyB0byBSb3dcclxuICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IFJPVzsgcm93KyspIHtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5pZHgoY29sLCByb3cpO1xyXG4gICAgICAgIC8vOTkgaXMgc3RvbmVcclxuICAgICAgICBpZiAoYmxvY2tzY3JpcHRbaWR4XS5udW0gPT0gMCkge1xyXG4gICAgICAgICAgICBibGFuayA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmIChibGFuayAmJiBibG9ja3NjcmlwdFtpZHhdICE9IDApIHtcclxuICAgICAgICAgICAgLy9DaGVjayBpZiBzdG9uZSBub3QgZG93biBpdFxyXG4gICAgICAgICAgICBkb3duTnVtYmVycy5wdXNoKGlkeCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnZhciBhZGRDaGVja051bWJlcnMgPSBbXTtcclxuZm9yICh2YXIgaSA9IDA7IGkgPCBuZWVkTWVyZ2UubGVuZ3RoOyBpKyspIHtcclxuICB2YXIgaGFzID0gZmFsc2U7XHJcbiAgZm9yICh2YXIgayBpbiBkb3duTnVtYmVycykge1xyXG4gICAgICBpZiAoZG93bk51bWJlcnNba10gPT0gbmVlZE1lcmdlW2ldKSB7XHJcbiAgICAgICAgICBoYXMgPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgaWYgKCFoYXMpIHtcclxuICAgICAgYWRkQ2hlY2tOdW1iZXJzLnB1c2gobmVlZE1lcmdlW2ldKTtcclxuICB9XHJcbn1cclxudmFyIGRvd25OdW1iZXJzQ291bnQgPSBkb3duTnVtYmVycy5sZW5ndGg7XHJcbmlmIChkb3duTnVtYmVyc0NvdW50ID09IDApIHtcclxuICAgIHRoaXMuY2hlY2tNZXJnZShuZWVkTWVyZ2VcclxuICAgICAgICAgKVxyXG4gICAgcmV0dXJuIFxyXG5cclxufVxyXG50aGlzLmRvd25Db3VudCA9IGRvd25OdW1iZXJzQ291bnQ7XHJcbnZhciBfdGhpcyA9IHRoaXM7XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgZG93bk51bWJlcnNDb3VudDsgaSsrKSB7XHJcbiAgbGV0IGlkeCA9IGRvd25OdW1iZXJzW2ldO1xyXG5cclxuICBsZXQgZG93bklkeCA9IGlkeCAtIENPTDtcclxuICBpZiAoaWR4ID4gdGhpcy5tYXhJZHhDaGVjaykge1xyXG4gICAgICB0aGlzLm1heElkeENoZWNrID0gaWR4O1xyXG4gIH1cclxuICBcclxuICAgICAgICAgICAgd2hpbGUgKGRvd25JZHggLSBDT0wgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tzY3JpcHRbZG93bklkeCAtIENPTF0ubnVtID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb3duSWR4ID0gZG93bklkeCAtIENPTDtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBibG9ja3NjcmlwdFtkb3duSWR4XS5udW0gPSBibG9ja3NjcmlwdFtpZHhdLm51bTtcclxuICAgICAgICAgICAgYmxvY2tzY3JpcHRbZG93bklkeF0ucGljID0gYmxvY2tzY3JpcHRbaWR4XS5waWM7XHJcbiAgICAgICAgICAgIGRvd25OdW1iZXJzW2ldID0gZG93bklkeFxyXG4gICAgICAgICAgICB2YXIgZG93blBvcyA9IHRoaXMucG9zKGRvd25JZHgpO1xyXG4gICAgICAgICAgICB2YXIgb2xkUG9zID0gdGhpcy5wb3MoaWR4KTtcclxuICAgICAgICAgICAgX3RoaXMuYm9hcmRbZG93blBvcy54XVtkb3duUG9zLnldID0gX3RoaXMuYm9hcmRbb2xkUG9zLnhdW29sZFBvcy55XTtcclxuICAgICAgICAgICAgX3RoaXMuYm9hcmRbb2xkUG9zLnhdW29sZFBvcy55XSA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJsb2Nrc2NyaXB0W2lkeF0gPSB7bnVtOiAwLCBwaWM6IG51bGx9O1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoMC4wNSwgY2MudjIoMCwgLUJBU0VTSVpFICogKGlkeCAtIGRvd25JZHgpIC8gQ09MICkpLmVhc2luZyhjYy5lYXNlSW4oMykpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kb3duQ291bnQgPSBfdGhpcy5kb3duQ291bnQgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZG93bkNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWRkQ2hlY2tOdW1iZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPIC8vIEzhu5dpIG5naGnDqm0gdHLhu41uZywgxJHGsOG7o2MgbOG6t3AgbOG6oWkuIEd4aiDEkcOjIG7DqnUgcmEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvd25IYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGRvd25OdW1iZXJzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb3duTnVtYmVyc1trXSA9PSBhZGRDaGVja051bWJlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25IYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb3duSGFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25OdW1iZXJzLnB1c2goYWRkQ2hlY2tOdW1iZXJzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja01lcmdlKGRvd25OdW1iZXJzLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmxvY2tzY3JpcHRbZG93bklkeF0ucGljID0gX3RoaXMuYm9hcmRbYS54XVthLnldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIF90aGlzLmJvYXJkW2IueF1bYi55XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYmxvY2tzY3JpcHRbZG93bklkeF0ucGljLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgQ2hlY2tBcm91bmQobWVyZ2VJZHgsIGlkeCkge1xyXG4gICAgdmFyIGkgOiBudW1iZXJcclxuICAgXHJcbiAgICB2YXIgbWVyZ2VEYXRhcyA9IHRoaXMubWVyZ2VOdW1lcnNbbWVyZ2VJZHhdO1xyXG4gICAgZm9yICh2YXIgayBpbiBtZXJnZURhdGFzKSB7XHJcbiAgICAgICAgaWYgKG1lcmdlRGF0YXNba10gPT0gaWR4KSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtZXJnZURhdGFzLnB1c2goaWR4KTtcclxuICAgICAgICB2YXIgcG9zID0gdGhpcy5wb3MoaWR4KTtcclxuICAgICAgICB2YXIgeCA9IHBvcy54IFxyXG4gICAgICAgIHZhciB5ID0gcG9zLnkgXHJcbiAgICAgICAgLy8gdmFyIGJsb2Nrc2NyaXB0ID0gdGhpcy5jdXJyZW5CbG9jay5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpXHJcbiAgICAgICAgdmFyIGJsb2Nrc2NyaXB0ID0gdGhpcy5ibG9ja1xyXG4gICAgICAvLyAgIGJsb2Nrc2NyaXB0W2ldID0gdGhpcy5jdXJyZW5CbG9ja1xyXG4gICAgICAvLyBibG9ja3NjcmlwdFtpXS5udW0gPSBwYXJzZUludCh0aGlzLmN1cnJlbkJsb2NrLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCkubnVtLnN0cmluZylcclxuICAgICAgICB2YXIgbnVtID0gYmxvY2tzY3JpcHRbaWR4XS5udW1cclxuICAgICAgICBpZiAoeCA+IDApIHsgLy9sZWZ0XHJcbiAgICAgICAgICAgIGlmIChibG9ja3NjcmlwdFt0aGlzLmlkeCh4IC0gMSwgeSldLm51bSA9PSBudW0pIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzYW1lIGxlZnQuLlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5DaGVja0Fyb3VuZChtZXJnZUlkeCwgdGhpcy5pZHgoeCAtIDEsIHkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA8IENPTCAtMSkgeyAgLy9yaWdodFxyXG4gICAgICAgICAgICBpZiAoYmxvY2tzY3JpcHRbdGhpcy5pZHgoeCArIDEsIHkpXS5udW0gPT0gbnVtKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2FtZSByaWdodC4uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNoZWNrQXJvdW5kKG1lcmdlSWR4LCB0aGlzLmlkeCh4ICsgMSwgeSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5IDwgUk9XIC0xKSB7ICAvL3VwXHJcbiAgICAgICAgICAgIGlmIChibG9ja3NjcmlwdFt0aGlzLmlkeCh4LCB5ICsgMSldLm51bSA9PSBudW0pIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzYW1lIHVwLi5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2hlY2tBcm91bmQobWVyZ2VJZHgsIHRoaXMuaWR4KHgsIHkgKyAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgPiAwKSB7ICAvL2Rvd25cclxuICAgICAgICAgICAgaWYgKGJsb2Nrc2NyaXB0W3RoaXMuaWR4KHgsIHkgLSAxKV0ubnVtID09IG51bSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhbWUgZG93bi4uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNoZWNrQXJvdW5kKG1lcmdlSWR4LCB0aGlzLmlkeCh4LCB5IC0gMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbi8vIGZvciAobGV0IGEgPSAwOyBhIDwgYXJvdW5kLmxlbmd0aDsgYSsrKSB7XHJcbi8vICAgICAgIGxldCBfaSA9IGkgKyBhcm91bmRbYV0uaTtcclxuLy8gICAgICAgbGV0IF9qID0gaiArIGFyb3VuZFthXS5qO1xyXG4vLyAgICAgICBpZih0aGlzLmJvYXJkW19pXVtfal0gPT09IG51bGwpIGNvbnRpbnVlO1xyXG4vLyAgICAgICBsZXQgbmVhckJsb2NrID0gdGhpcy5ib2FyZFtfaV1bX2pdLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCk7XHJcbi8vICAgICAgIGlmIChibG9ja3NjcmlwdC5udW0gPT09IG5lYXJCbG9jay5udW0pIHtcclxuICAgICAgICBcclxuLy8gICAgICAgfSBlbHNlIHtcclxuXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuICB9XHJcbiBcclxuXHJcbiBcclxuIFxyXG4gIGNoZWNrTWVyZ2UoaWR4ZXMpe1xyXG4gICBcclxuICAgIC8vIHRoaXMub25Jbml0QmxvY2soKVxyXG4gICAgdmFyIGEgPSB0aGlzLnBvcyhpZHhlcykgXHJcbiAgICB2YXIgaWR4ID0gdGhpcy5pZHgoYS54LGEueSlcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyB2YXIgaWR4ID0gdGhpcy5pZHgoaSxqKVxyXG4gICAgdmFyIGIgPSBwYXJzZUludCh0aGlzLmN1cnJlbkJsb2NrLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCkubnVtLnN0cmluZylcclxuICAgIC8vIHZhciBudW0gPSBibG9ja3NjcmlwdFtpZHhdLm51bVxyXG4gICAgdmFyIG1lcmdlTnVtZXJzID0gdGhpcy5tZXJnZU51bWVycyA9IFtdO1xyXG4gICAgdGhpcy5tZXJnZUNvdW50ID0gW11cclxuICAgIHZhciBuZWVkTWVyZ2UgPSB0aGlzLm5lZWRNZXJnZSA9IFtdOyAvL+mcgOimgeWQiOaIkOeahOeCuSBuaHVuZyBkaWVtIGNhbiB0b25nIGhvcFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZHhlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBpZHggPSBpZHhlc1tpXTtcclxuICAgICAgICBpZiAoYiAhPSAwKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmNvbnRpbnVlKXtcclxuICAgICAgICAgICAgbWVyZ2VOdW1lcnNbaWR4XSA9IFtdOyAvL+ajgOafpeeCueS4iueahOebuOmCu+ebuOWQjOaVsEPDoWMgc+G7kSBnaeG7kW5nIGjhu4d0IG5oYXUgbGnhu4FuIGvhu4EgdHLDqm4gY8OhYyB0cuG6oW0ga2nhu4NtIHNvw6F0XHJcbiAgICAgICAgICAgIHRoaXMuQ2hlY2tBcm91bmQoaWR4LCBpZHgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG1lcmdlTnVtZXJzW2lkeF0ubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIG5lZWRNZXJnZS5wdXNoKGlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAgdGhpcy5jb250aW51ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgbmVlZE1lcmdlQ291bnQgPSBuZWVkTWVyZ2UubGVuZ3RoO1xyXG4gICAgXHJcbiAgICB0aGlzLmNoZWNrQ291bnQgPSBuZWVkTWVyZ2VDb3VudDtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5lZWRNZXJnZUNvdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5tZXJnZShuZWVkTWVyZ2VbaV0sIGZ1bmN0aW9uIChtZXJnZU51bWJlcikge1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVyZ2UgbnVtYmVyXCIgKyBtZXJnZU51bWJlcik7XHJcbiAgICAgICAgICBfdGhpcy5jaGVja0NvdW50ID0gX3RoaXMuY2hlY2tDb3VudCAtIDE7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKF90aGlzLmNoZWNrQ291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zb3J0QWZ0ZXJNZXJnZSgpO1xyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgIFxyXG4gIH1cclxuICBcclxuIH1cclxuQ3JlYXRlQ3ViZShudW0pe1xyXG4gIGxldCBjdWJlID0gbnVsbDtcclxuICBpZih0aGlzLlBvb2wxLnNpemUoKT4gMCl7XHJcbiAgICBjdWJlID0gdGhpcy5Qb29sMS5nZXQodGhpcyk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBjdWJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2Rlc28pO1xyXG4gIH1cclxuICBjdWJlLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCkuc2V0TnVtKG51bSk7XHJcbiAgXHJcbiAgcmV0dXJuIGN1YmVcclxuXHJcbiAgIH1cclxuXHJcbiAgXHJcblxyXG4gXHJcbiBcclxuICBpZHgoeCwgeSkge1xyXG4gICAgLy8gdmFyIENPTCA9IDVcclxuICAgIHJldHVybiAoeSkgKiBDT0wgKyB4OyAvL01hbmcgc29cclxuICB9XHJcbiAgcG9zKGlkeCkge1xyXG4gICAgLy9kYXkgbGEgaGFtIGN2XHJcbiAgICB2YXIgeSA9IE1hdGguY2VpbCgoaWR4ICsgMSkgLyBDT0wpIC0gMTtcclxuICAgIHZhciB4ID0gaWR4ICAtICh5KSAqIENPTDtcclxuICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICB9XHJcbiBcclxuICBnZXRCbG9ja1Bvc2l0aW9uKGlkeCkge1xyXG4gICAgdmFyIHBvcyA9IHRoaXMucG9zKGlkeCk7XHJcbiAgICB0aGlzLmNvbnZlcnQocG9zLngscG9zLnkpXHJcbiAgIFxyXG4gICAgcmV0dXJuIGNjLnYyKHBvcy54LHBvcy55KVxyXG4gIH1cclxuXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgbnVtb2ZDb2x1bW5zID0gNTtcclxuICAgIGxldCBudW1vZkxpbmVzID0gNjtcclxuICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtb2ZDb2x1bW5zOyBpKyspIHtcclxuICAgICAgbGV0IGNvbCA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG51bW9mTGluZXM7IGorKykge1xyXG4gICAgICAgIGxldCBibG9jayA9IG51bGw7XHJcbiAgICAgICAgY29sLnB1c2goYmxvY2spO1xyXG4gICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9hcmQucHVzaChjb2wpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImluaXRib2FyZFwiLCB0aGlzLmJvYXJkKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnQoY29sOiBudW1iZXIsIGxpbmU6IG51bWJlcikge1xyXG4gICAgdmFyIF9wb3MgPSBjYy52MiggY29sICogU0laRS54ICsgU0laRS54LzIgICxsaW5lICogU0laRS55ICsgU0laRS55LzIgKyAxMCApO1xyXG4gICAgcmV0dXJuIF9wb3M7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnZlcnRQb3NUb0luZGV4KHBvczogY2MuVmVjMykge1xyXG4gICAgbGV0IGNvbDogbnVtYmVyO1xyXG4gICAgbGV0IGxpbmU6IG51bWJlcjtcclxuICAgIHBvcy56ID0gMDtcclxuICAgIGNvbCA9IE1hdGguZmxvb3IocG9zLnggLyBCQVNFU0laRSk7XHJcbiAgICBpZihjb2wgPCAwKXtcclxuICAgICAgY29sID0gMFxyXG4gICAgfVxyXG4gICAgaWYoY29sID4gNCl7XHJcbiAgICAgIGNvbCA9IDRcclxuICAgIH1cclxuICAgIGxpbmUgPSBNYXRoLmZsb29yKHBvcy55IC8gQkFTRVNJWkUpXHJcbiAgICBpZihsaW5lIDwgMCl7XHJcbiAgICAgIGxpbmUgPSAwXHJcbiAgICB9XHJcbiAgICBpZihsaW5lID4gNSl7XHJcbiAgICAgIGxpbmUgPSA1XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJwb3MgPVwiLCBjb2wsIGxpbmUsIE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4geyBjb2wsIGxpbmUgfTtcclxuICB9XHJcblxyXG4gIGN1cnJlbkJsb2NrOiBjYy5Ob2RlID0gbnVsbDtcclxuIFxyXG4gIHNwYXduKGNvbHVtOiBudW1iZXIsIGxpbmU6IG51bWJlcikge1xyXG4gIFxyXG4gICAgLy8gdmFyIGNvbHVtID0gMjtcclxuICAgIC8vIHZhciBsaW5lID0gNTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVoZSAwXCIpO1xyXG4gICAgbGV0IGVuZW15OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuUG9vbDEuc2l6ZSgpID4gMCkge1xyXG4gICAgICBlbmVteSA9IHRoaXMuUG9vbDEuZ2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZXNvKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmVteS5wYXJlbnQgPSB0aGlzLnRvdWNoTm9kZTtcclxuICAgXHJcbiAgICBlbmVteS5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpLnNldE51bSh0aGlzLmdldFJhbmQoKSwgMjcpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGVuZW15LnNldFBvc2l0aW9uKHRoaXMuY29udmVydChjb2x1bSwgbGluZSkpO1xyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiBlbmVteTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgZ2V0UmFuZCgpIHtcclxuICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcclxuICAgIGlmIChyYW5kIDwgMC41KSB7XHJcbiAgICAgIHJldHVybiAyO1xyXG4gICAgfSBlbHNlIGlmICggMC41IDw9IHJhbmQmJnJhbmQgPCAxICl7XHJcbiAgICAgIHJldHVybiA0O1xyXG4gICAgfVxyXG4gICAgLy8gZWxzZSBpZiggMC40IDw9IHJhbmQmJnJhbmQgPCAwLjcgKXtcclxuICAgIC8vICAgcmV0dXJuIDg7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIGlmICgwLjcgPD0gcmFuZCYmcmFuZCA8IDAuOCl7XHJcbiAgICAvLyAgIHJldHVybiAxNlxyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSBpZiAoMC44IDw9IHJhbmQmJnJhbmQgPCAwLjkpe1xyXG4gICAgLy8gICByZXR1cm4gMzJcclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2UgaWYgKDAuOSA8PSByYW5kJiZyYW5kIDwgMC45Nil7XHJcbiAgICAvLyAgIHJldHVybiA2NFxyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSBpZiAoMC45NiA8PSByYW5kJiZyYW5kIDwgMSl7XHJcbiAgICAvLyAgIHJldHVybiAxMjhcclxuICAgIC8vIH1cclxuICAgIFxyXG4gIH1cclxuICBnZXRQb2ludChtZXJnZU51bSl7XHJcbiAgICB2YXIgUG9pbnQgOiBudW1iZXI7XHJcbiAgICBQb2ludCA9IG1lcmdlTnVtXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGRyb3AoY3VycmVudGJsb2NrOiBjYy5Ob2RlLCBpLCBqKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRyb3AgeHVvbmcgaGFuZ1wiLCBqKTtcclxuICAgIHZhciBkZWxheSA9IGNjLmRlbGF5VGltZSgxKVxyXG4gICAgbGV0IG1pZGxlX2NvbHVtbiA9IDI7XHJcbiAgICAgIGxldCBoaWdoZXN0X2xpbmUgPSA1O1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHZhciBpZHggPSAgdGhpcy5pZHgoaSxqKVxyXG4gICAgX3RoaXMuY3VycmVuQmxvY2sucGFyZW50ID0gX3RoaXMudG91Y2hOb2RlXHJcbiAgICAvLyB2YXIgbW92ZSA9IGNjLm1vdmVUbygwLjA1LGNjLnYyKGN1cnJlbnRibG9jay5wb3NpdGlvbi54LCBqICogMTMwICsgMTMwLzIpKVxyXG4gICAgXHJcbiAgICAvLyB2YXIgY2FsbEZ1bmMxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICBcclxuICAgIC8vICAgICBfdGhpcy5ib2FyZFtpXVtqXSA9IGN1cnJlbnRibG9jaztcclxuICAgIFxyXG4gICAgLy8gICAgIF90aGlzLmJsb2NrW2lkeF0ubnVtID0gcGFyc2VJbnQoX3RoaXMuY3VycmVuQmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrU2NyaXB0KS5udW0uc3RyaW5nKTtcclxuICAgICAgICBcclxuICAgIC8vICAgIF90aGlzLmJsb2NrW2lkeF0ucGljID0gX3RoaXMuY3VycmVuQmxvY2s7XHJcbiAgICAgXHJcbiAgICAvLyAgICBfdGhpcy5jaGVja01lcmdlKFtpZHhdKTtcclxuICAgICAgIFxyXG4gICAgLy8gICAgX3RoaXMuaXNDYW5Ub3VjaCA9IHRydWVcclxuXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gdmFyIGNhbGxGdW5jMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcbiAgICAgIFxyXG4gICAgLy8gICAvLyBfdGhpcy5jdXJyZW5CbG9jay5wYXJlbnQgPSBfdGhpcy50b3VjaE5vZGVcclxuICAgIC8vICAgX3RoaXMuY3VycmVuQmxvY2sgPSBfdGhpcy5zcGF3bihtaWRsZV9jb2x1bW4sIGhpZ2hlc3RfbGluZSk7XHJcbiAgICAvLyAgIC8vIF90aGlzLmN1cnJlbkJsb2NrLnBhcmVudCA9IF90aGlzLnRvdWNoTm9kZVxyXG4gICAgLy8gICAvLyBfdGhpcy5pc0NhblRvdWNoID0gdHJ1ZVxyXG4gICAgLy8gfSlcclxuIFxyXG4gICAgLy8gY3VycmVudGJsb2NrLnJ1bkFjdGlvbigoY2Muc2VxdWVuY2UobW92ZSxjYWxsRnVuYzEsZGVsYXksY2FsbEZ1bmMyKSkpXHJcbiAgICBcclxuICAgICBcclxuICAgXHJcbiAgIFxyXG4gICAgIGNjLnR3ZWVuKGN1cnJlbnRibG9jaylcclxuICAgIC50bygxLCB7cG9zaXRpb246IG5ldyBjYy5WZWMzKGN1cnJlbnRibG9jay5wb3NpdGlvbi54LCBqICogMTMwICsgMTMwLzIpfSlcclxuICAgIC5jYWxsKGZ1bmN0aW9uKCkgeyBcclxuICAgICBcclxuICAgICAgIF90aGlzLmJvYXJkW2ldW2pdID0gY3VycmVudGJsb2NrO1xyXG4gICAgXHJcbiAgICAgICBfdGhpcy5ibG9ja1tpZHhdLm51bSA9IHBhcnNlSW50KGN1cnJlbnRibG9jay5nZXRDb21wb25lbnQoQmxvY2tTY3JpcHQpLm51bS5zdHJpbmcpXHJcbiAgICAgICBcclxuICAgICAgX3RoaXMuYmxvY2tbaWR4XS5waWMgPSBfdGhpcy5jdXJyZW5CbG9ja1xyXG4gICAgIFxyXG4gICAgICBfdGhpcy5jaGVja01lcmdlKFtpZHhdKTtcclxuICAgICAgZGVsYXlcclxuICAgICAgX3RoaXMuY3VycmVuQmxvY2sgPSBfdGhpcy5zcGF3bihtaWRsZV9jb2x1bW4sIGhpZ2hlc3RfbGluZSk7XHJcbiAgICAgIF90aGlzLmlzQ2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyAuY2FsbChmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIGRlbGF5ICAgICB9KVxyXG4gICAgLy8gLmNhbGwoZnVuY3Rpb24oKXtcclxuICAgIC8vICAgX3RoaXMuY3VycmVuQmxvY2sgPSBfdGhpcy5zcGF3bihtaWRsZV9jb2x1bW4sIGhpZ2hlc3RfbGluZSk7XHJcbiAgICAvLyAgIF90aGlzLmlzQ2FuVG91Y2ggPSB0cnVlXHJcbiAgICAvLyB9KVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgLy8gLy8gICAvLyBpZihfdGhpcy5jb250aW51ZSA9IGZhbHNlKXtcclxuICAgIC8vIC8vICAgLy8gICBfdGhpcy5jdXJyZW5CbG9jayA9IF90aGlzLnNwYXduKG1pZGxlX2NvbHVtbiwgaGlnaGVzdF9saW5lKTtcclxuICAgIC8vIC8vICAgLy8gfVxyXG4gICAgLy8gLy8gICAvLyBlbHNle1xyXG4gICAgLy8gLy8gICAvLyAvLyAgdmFyIG5ndSA9IGNjLnNlcXVlbmNlKGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAvLyAgIC8vICAgIF90aGlzLmNoZWNrTWVyZ2UoW2lkeF0pO1xyXG4gICAgLy8gLy8gICAvLyAgIC8vICBfdGhpcy5zcGF3bigyLDUpXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAvLyAvLyAgIC8vICB9XHJcblxyXG4gICAgLy8gLy8gICAvLyAgKSlcclxuICAgIC8vIC8vIC8vIF90aGlzLmN1cnJlbkJsb2NrLnJ1bkFjdGlvbihuZ3UpXHJcbiAgICAvLyAvLyAgIC8vIH1cclxuICAgIC8vIC8vICAvLyBfdGhpcy5jdXJyZW5CbG9jayA9IF90aGlzLnNwYXduKG1pZGxlX2NvbHVtbiwgaGlnaGVzdF9saW5lKTtcclxuICAgIC8vICAgLy8gX3RoaXMuaXNDYW5Ub3VjaCA9IHRydWVcclxuICAgIFxyXG4gXHJcbiAgXHJcbiAgICBcclxuICAgXHJcbiAgICAgIFxyXG4gICAgICAgKS5zdGFydCgpXHJcbiAgICBcclxuICBcclxuICAgIC8vIHRoaXMuc3Bhd24obWlkbGVfY29sdW1uLCBoaWdoZXN0X2xpbmUpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/transition3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '336b7MsmiNIb5RYFlS0HbrU', 'transition3');
// script/transition3.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
    };
    NewClass.prototype.Next_Screen = function () {
        this.Load_Scene();
    };
    NewClass.prototype.Load_Scene = function () {
        cc.director.loadScene("begin");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0cmFuc2l0aW9uMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFlQSxDQUFDO0lBWkcseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0csSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQWRnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZTVCO0lBQUQsZUFBQztDQWZELEFBZUMsQ0FmcUMsRUFBRSxDQUFDLFNBQVMsR0FlakQ7a0JBZm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICBcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE5leHRfU2NyZWVuKCl7XHJcbiAgICAgICB0aGlzLkxvYWRfU2NlbmUoKTtcclxuXHJcbiAgICB9XHJcbiAgICBMb2FkX1NjZW5lKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmVnaW5cIilcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------
