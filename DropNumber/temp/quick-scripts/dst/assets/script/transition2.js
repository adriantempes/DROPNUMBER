
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