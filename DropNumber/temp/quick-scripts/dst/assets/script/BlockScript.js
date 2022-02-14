
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