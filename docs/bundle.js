/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ \"./src/game.ts\");\n\r\nvar game = new _src_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_scenes_others_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/scenes/others/intro */ \"./src/game/scenes/others/intro.ts\");\n/* harmony import */ var _game_scenes_levels_level1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/scenes/levels/level1 */ \"./src/game/scenes/levels/level1.ts\");\n/* harmony import */ var _game_scenes_levels_level2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/scenes/levels/level2 */ \"./src/game/scenes/levels/level2.ts\");\n/* harmony import */ var _game_scenes_levels_level3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/scenes/levels/level3 */ \"./src/game/scenes/levels/level3.ts\");\n/* harmony import */ var _game_scenes_others_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/scenes/others/ui */ \"./src/game/scenes/others/ui.ts\");\n/* harmony import */ var _game_scenes_others_win__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/scenes/others/win */ \"./src/game/scenes/others/win.ts\");\n/* harmony import */ var _game_scenes_others_gameover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/scenes/others/gameover */ \"./src/game/scenes/others/gameover.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        return _super.call(this, config) || this;\r\n    }\r\n    return default_1;\r\n}(Phaser.Game));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\nvar config = {\r\n    type: Phaser.AUTO,\r\n    width: 800,\r\n    height: 600,\r\n    scene: [_game_scenes_others_intro__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _game_scenes_levels_level1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _game_scenes_levels_level2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _game_scenes_levels_level3__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _game_scenes_others_ui__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _game_scenes_others_win__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _game_scenes_others_gameover__WEBPACK_IMPORTED_MODULE_7__[\"default\"]],\r\n    parent: \"game\",\r\n    physics: {\r\n        default: 'arcade',\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/game/characters/player.ts":
/*!***************************************!*\
  !*** ./src/game/characters/player.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playerInventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerInventory */ \"./src/game/characters/playerInventory.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1(scene, x, y, texture, frame) {\r\n        var _this = _super.call(this, scene, x, y, texture, frame) || this;\r\n        _this.jumpTweens = { start: undefined, middle: undefined, end: undefined };\r\n        _this.canDamage = true;\r\n        _this.startX = x;\r\n        _this.startY = y;\r\n        _this.parentScene = scene;\r\n        _this.parentScene.add.existing(_this);\r\n        _this.initPhysics();\r\n        _this.addJumpTween();\r\n        _this.emitter = _this.parentScene.add.particles('player');\r\n        _this.inventory = new _playerInventory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.parentScene);\r\n        _this.UILayer = scene.scene.get('ui');\r\n        return _this;\r\n    }\r\n    default_1.prototype.initPhysics = function () {\r\n        this.parentScene.physics.add.existing(this);\r\n        this.setCollideWorldBounds(true);\r\n        this.setBounce(0.2);\r\n        this.setGravity(0, 500);\r\n        //this.setCircle(25)\r\n    };\r\n    default_1.prototype.move = function (inputX, inputY, deltatime) {\r\n        if (this.body.touching.down) {\r\n            if (inputX !== 0)\r\n                this.setVelocityX(inputX * deltatime);\r\n            if (inputY !== 0) {\r\n                this.jumpTweens.start.play();\r\n            }\r\n            this.setVelocityX(this.body.velocity.x * .89);\r\n        }\r\n        else {\r\n            this.setVelocityX(this.body.velocity.x * .986);\r\n        }\r\n        if (this.y > 550) {\r\n            this.die();\r\n        }\r\n    };\r\n    default_1.prototype.reset = function () {\r\n        this.x = this.startX;\r\n        this.y = this.startY;\r\n        this.inventory.setHealth(100);\r\n        this.UILayer.setHealth(100);\r\n        this.canDamage = true;\r\n    };\r\n    default_1.prototype.onCoinTake = function () {\r\n        this.inventory.setCoins(this.inventory.coins + 1);\r\n        this.UILayer.setCoins(this.inventory.coins.toString());\r\n    };\r\n    default_1.prototype.thorneDamage = function () {\r\n        var _this = this;\r\n        if (this.canDamage) {\r\n            this.parentScene.sound.play('hit');\r\n            this.canDamage = false;\r\n            this.setVelocityY(-200);\r\n            if (this.inventory.health < 11) {\r\n                this.inventory.setHealth(0);\r\n                this.UILayer.setHealth(this.inventory.health);\r\n                this.die();\r\n            }\r\n            else {\r\n                this.inventory.setHealth(this.inventory.health - 10);\r\n                this.UILayer.setHealth(this.inventory.health);\r\n                setTimeout(function () { _this.canDamage = true; }, 500);\r\n            }\r\n        }\r\n    };\r\n    default_1.prototype.blockThorneDamage = function (player, block) {\r\n        if (this.canDamage && block.body.touching.down) {\r\n            this.parentScene.sound.play('hit');\r\n            this.canDamage = false;\r\n            if (this.inventory.health < 11) {\r\n                this.inventory.setHealth(0);\r\n                this.UILayer.setHealth(this.inventory.health);\r\n                this.die();\r\n            }\r\n            else {\r\n                this.inventory.setHealth(this.inventory.health - 10);\r\n                this.UILayer.setHealth(this.inventory.health);\r\n                this.canDamage = true;\r\n            }\r\n        }\r\n    };\r\n    default_1.prototype.die = function () {\r\n        var _this = this;\r\n        if (this.visible) {\r\n            this.parentScene.sound.play('hit');\r\n            this.visible = false;\r\n            this.inventory.setHealth(0);\r\n            this.UILayer.setHealth(this.inventory.health);\r\n            var emit_1 = this.emitter.createEmitter({\r\n                scale: .2,\r\n                speed: 50,\r\n                x: this.x,\r\n                y: this.y,\r\n                lifespan: 500,\r\n                emitZone: { type: 'random', source: new Phaser.Geom.Circle(0, 0, 20) }\r\n            });\r\n            setTimeout(function () {\r\n                emit_1.stop();\r\n                setTimeout(function () {\r\n                    _this.UILayer.setLives((--_this.inventory.lives).toString());\r\n                    _this.reset();\r\n                    _this.visible = true;\r\n                }, 500);\r\n            }, 200);\r\n        }\r\n    };\r\n    default_1.prototype.addJumpTween = function () {\r\n        var _this = this;\r\n        this.jumpTweens.start = this.parentScene.add.tween({ targets: this, scaleY: .6, duration: 100 });\r\n        this.jumpTweens.middle = this.parentScene.add.tween({ targets: this, scaleY: 1.1, scaleX: .9, duration: 400, yoyo: true, ease: 'Cubic.easeOut' });\r\n        this.jumpTweens.start.on('complete', function () {\r\n            _this.jumpTweens.middle.play();\r\n            _this.setVelocityY(-300);\r\n            if (!_this.canDamage)\r\n                _this.setVelocity(_this.body.velocity.y - 150);\r\n            _this.parentScene.sound.play('jump');\r\n        });\r\n    };\r\n    return default_1;\r\n}(Phaser.Physics.Arcade.Sprite));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/characters/player.ts?");

/***/ }),

/***/ "./src/game/characters/playerInventory.ts":
/*!************************************************!*\
  !*** ./src/game/characters/playerInventory.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar default_1 = /** @class */ (function () {\r\n    function default_1(scene) {\r\n        this.coins = 0;\r\n        this.health = 100;\r\n        this.lives = 3;\r\n    }\r\n    default_1.prototype.setCoins = function (value) {\r\n        this.coins = value;\r\n    };\r\n    default_1.prototype.setHealth = function (value) {\r\n        this.health = value;\r\n    };\r\n    default_1.prototype.setLives = function (value) {\r\n        this.lives = value;\r\n    };\r\n    return default_1;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/characters/playerInventory.ts?");

/***/ }),

/***/ "./src/game/scenes/levels/level1.ts":
/*!******************************************!*\
  !*** ./src/game/scenes/levels/level1.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _levelBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelBase */ \"./src/game/scenes/levels/levelBase.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        return _super.call(this, 'level1') || this;\r\n    }\r\n    default_1.prototype.init = function () {\r\n        _super.prototype.init.call(this, undefined);\r\n        this.scene.get('ui').togglePlayerInventory();\r\n        //this.scene.start('level2')\r\n    };\r\n    default_1.prototype.preload = function () {\r\n    };\r\n    default_1.prototype.create = function () {\r\n        _super.prototype.create.call(this);\r\n        //this.sound.play('music')\r\n        this.platforms.scene1();\r\n        this.thornes.scene1();\r\n        this.coins.scene1();\r\n        this.coins.addTween(this);\r\n        this.door = this.add.image(1800, 424, 'door').getBounds();\r\n    };\r\n    default_1.prototype.update = function (elapsedTime) {\r\n        _super.prototype.update.call(this, elapsedTime);\r\n        if (this.door.contains(this.player.x, this.player.y)) {\r\n            this.scene.start('level2', { playerInventory: this.player.inventory });\r\n        }\r\n    };\r\n    return default_1;\r\n}(_levelBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/levels/level1.ts?");

/***/ }),

/***/ "./src/game/scenes/levels/level2.ts":
/*!******************************************!*\
  !*** ./src/game/scenes/levels/level2.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _levelBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelBase */ \"./src/game/scenes/levels/levelBase.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        return _super.call(this, 'level2') || this;\r\n    }\r\n    default_1.prototype.init = function () {\r\n        _super.prototype.init.call(this, undefined);\r\n    };\r\n    default_1.prototype.preload = function () { };\r\n    default_1.prototype.create = function () {\r\n        _super.prototype.create.call(this);\r\n        this.player.setY(this.player.startY = 200);\r\n        //this.player.setX(this.player.startX = 1000)\r\n        this.platforms.scene3();\r\n        this.movingPlatforms.scene3();\r\n        this.thornes.scene3();\r\n        this.coins.scene3();\r\n        this.coins.addTween(this);\r\n        this.door = this.add.image(1800, 474, 'door').getBounds();\r\n    };\r\n    default_1.prototype.update = function (elapsedTime) {\r\n        _super.prototype.update.call(this, elapsedTime);\r\n        if (this.door.contains(this.player.x, this.player.y)) {\r\n            this.scene.start('level3', { playerInventory: this.player.inventory });\r\n        }\r\n    };\r\n    return default_1;\r\n}(_levelBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/levels/level2.ts?");

/***/ }),

/***/ "./src/game/scenes/levels/level3.ts":
/*!******************************************!*\
  !*** ./src/game/scenes/levels/level3.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _levelBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelBase */ \"./src/game/scenes/levels/levelBase.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        return _super.call(this, 'level3') || this;\r\n    }\r\n    default_1.prototype.init = function (data) {\r\n        _super.prototype.init.call(this, undefined);\r\n        this.playerInventoryBase = data.playerInventory;\r\n    };\r\n    default_1.prototype.preload = function () {\r\n    };\r\n    default_1.prototype.create = function () {\r\n        _super.prototype.create.call(this);\r\n        this.player.inventory = this.playerInventoryBase;\r\n        this.platforms.scene2(this);\r\n        this.movingPlatforms.scene2();\r\n        this.thornes.scene2();\r\n        this.coins.scene2();\r\n        this.coins.addTween(this);\r\n        this.door = this.add.image(1800, 424, 'door').getBounds();\r\n    };\r\n    default_1.prototype.update = function (elapsedTime) {\r\n        _super.prototype.update.call(this, elapsedTime);\r\n        if (this.door.contains(this.player.x, this.player.y)) {\r\n            this.scene.start('win');\r\n        }\r\n    };\r\n    return default_1;\r\n}(_levelBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/levels/level3.ts?");

/***/ }),

/***/ "./src/game/scenes/levels/levelBase.ts":
/*!*********************************************!*\
  !*** ./src/game/scenes/levels/levelBase.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _characters_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../characters/player */ \"./src/game/characters/player.ts\");\n/* harmony import */ var _world_platforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../world/platforms */ \"./src/game/world/platforms.ts\");\n/* harmony import */ var _world_movingPlatforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../world/movingPlatforms */ \"./src/game/world/movingPlatforms.ts\");\n/* harmony import */ var _world_thornes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../world/thornes */ \"./src/game/world/thornes.ts\");\n/* harmony import */ var _world_coins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../world/coins */ \"./src/game/world/coins.ts\");\n/* harmony import */ var _utils_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/inputs */ \"./src/game/utils/inputs.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1(key) {\r\n        var _this = _super.call(this, key) || this;\r\n        _this.lastTime = 0;\r\n        return _this;\r\n    }\r\n    default_1.prototype.init = function (data) {\r\n        this.lastTime = this.time.now;\r\n        this.cameras.main.setBounds(0, 0, 1920, 600);\r\n        this.physics.world.setBounds(0, 0, 1920, 600, true, true, false, false);\r\n    };\r\n    default_1.prototype.preload = function () {\r\n    };\r\n    default_1.prototype.create = function () {\r\n        this.inputs = new _utils_inputs__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this);\r\n        this.platforms = new _world_platforms__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.physics.world, this);\r\n        this.movingPlatforms = new _world_movingPlatforms__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.physics.world, this);\r\n        this.thornes = new _world_thornes__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.physics.world, this);\r\n        this.coins = new _world_coins__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.physics.world, this);\r\n        this.player = new _characters_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, 50, 300, 'player');\r\n        this.cameras.main.startFollow(this.player);\r\n        this.physics.add.collider(this.player, this.platforms);\r\n        this.physics.add.collider(this.player, this.movingPlatforms, this.player.blockThorneDamage, undefined, this.player);\r\n        this.physics.add.collider(this.player, this.thornes, this.player.thorneDamage, undefined, this.player);\r\n    };\r\n    default_1.prototype.update = function (elapsedTime) {\r\n        if (this.player.visible)\r\n            this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime);\r\n        this.movingPlatforms.updateMovingPlatforms();\r\n        var coin = this.coins.checkOverllap(this.player);\r\n        if (coin)\r\n            this.onCoinTake(coin);\r\n        if (this.player.inventory.lives <= 0)\r\n            this.scene.start('gameOver');\r\n        this.lastTime = this.time.now;\r\n    };\r\n    default_1.prototype.onCoinTake = function (coin) {\r\n        if (coin.active) {\r\n            this.sound.play('coin');\r\n            coin.active = false;\r\n            this.player.onCoinTake();\r\n            this.tweens.add({ targets: coin, y: \"-=200\", duration: 500, ease: 'Linear' })\r\n                .on('complete', function () {\r\n                coin.destroy();\r\n            });\r\n        }\r\n    };\r\n    return default_1;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/levels/levelBase.ts?");

/***/ }),

/***/ "./src/game/scenes/others/gameover.ts":
/*!********************************************!*\
  !*** ./src/game/scenes/others/gameover.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        var _this = _super.call(this, 'gameOver') || this;\r\n        _this.gameOverText = null;\r\n        return _this;\r\n    }\r\n    default_1.prototype.create = function () {\r\n        var _this = this;\r\n        this.gameOverText = this.add.text(400, 300, 'Game Over', { fontSize: '80px', color: '#ff0000', fontFamily: 'Arial' })\r\n            .setOrigin(.5)\r\n            .setInteractive();\r\n        this.input.on('gameobjectdown', function (p, go) {\r\n            _this.scene.start('intro');\r\n        });\r\n    };\r\n    return default_1;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/others/gameover.ts?");

/***/ }),

/***/ "./src/game/scenes/others/intro.ts":
/*!*****************************************!*\
  !*** ./src/game/scenes/others/intro.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_graphicHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/graphicHelpers */ \"./src/game/utils/graphicHelpers.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        var _this = _super.call(this, 'intro') || this;\r\n        _this.graphics = null;\r\n        _this.loadingText = null;\r\n        return _this;\r\n    }\r\n    default_1.prototype.init = function () {\r\n        this.graphics = this.add.graphics();\r\n        this.loadingText = this.add.text(400, 300, 'loading...', { fontSize: '80px', color: '#ff0000', fontFamily: 'Arial' })\r\n            .setOrigin(.5);\r\n    };\r\n    default_1.prototype.preload = function () {\r\n        Object(_utils_graphicHelpers__WEBPACK_IMPORTED_MODULE_0__[\"generateGameTextures\"])(this.graphics);\r\n        this.game.scene.start('ui');\r\n        //this.load.audio('music', 'https://raw.githubusercontent.com/medmor/platform-phaser/local/docs/sounds/music1.mp3')\r\n        this.load.audio('coin', 'https://raw.githubusercontent.com/medmor/platform-phaser/local/docs/sounds/coin.wav');\r\n        this.load.audio('jump', 'https://raw.githubusercontent.com/medmor/platform-phaser/local/docs/sounds/jump.wav');\r\n        this.load.audio('hit', 'https://raw.githubusercontent.com/medmor/platform-phaser/local/docs/sounds/hit.mp3');\r\n    };\r\n    default_1.prototype.create = function () {\r\n        var _this = this;\r\n        this.scene.get('ui').togglePlayerInventory();\r\n        this.loadingText.setInteractive();\r\n        this.loadingText.setText('Press enter to play');\r\n        this.input.on('gameobjectdown', function (p, go) {\r\n            _this.scene.start('level1');\r\n        });\r\n        this.input.keyboard.on('keydown', function (event) {\r\n            if (event.key === \"Enter\")\r\n                this.scene.start('level1');\r\n        }, this);\r\n    };\r\n    return default_1;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/others/intro.ts?");

/***/ }),

/***/ "./src/game/scenes/others/ui.ts":
/*!**************************************!*\
  !*** ./src/game/scenes/others/ui.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar textStyle = { fontSize: '30px', color: '#ffffff', fontFamily: 'Arial' };\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        return _super.call(this, 'ui') || this;\r\n    }\r\n    default_1.prototype.create = function () {\r\n        this.coinsText = this.add.text(85, 15, '0', textStyle);\r\n        this.coinsImage = this.add.image(50, 30, 'coin');\r\n        this.livesText = this.add.text(195, 15, '3', textStyle);\r\n        this.livesImage = this.add.image(160, 15, 'heart').setScale(.85, 1);\r\n        this.healthText = this.add.text(525, 15, '100', textStyle);\r\n        this.healthBarBackground = this.add.rectangle(680, 30, 200, 30, 0xff0000);\r\n        this.healthBarForground = this.add.rectangle(680, 30, 200, 30, 0xffffff);\r\n        this.playerInventory = this.add.group();\r\n        this.playerInventory.addMultiple([this.coinsImage, this.coinsText, this.livesText, this.livesImage, this.healthText, this.healthBarBackground, this.healthBarForground]);\r\n    };\r\n    default_1.prototype.togglePlayerInventory = function () {\r\n        this.playerInventory.toggleVisible();\r\n    };\r\n    default_1.prototype.setCoins = function (value) {\r\n        this.coinsText.setText(value);\r\n    };\r\n    default_1.prototype.setLives = function (value) {\r\n        this.livesText.setText(value);\r\n    };\r\n    default_1.prototype.setHealth = function (value) {\r\n        this.healthText.setText(value.toString());\r\n        if (value <= 0)\r\n            this.healthBarForground.width = 0;\r\n        else\r\n            this.healthBarForground.width = (value / 100) * this.healthBarBackground.width;\r\n    };\r\n    return default_1;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/others/ui.ts?");

/***/ }),

/***/ "./src/game/scenes/others/win.ts":
/*!***************************************!*\
  !*** ./src/game/scenes/others/win.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1() {\r\n        var _this = _super.call(this, 'win') || this;\r\n        _this.winText = null;\r\n        return _this;\r\n    }\r\n    default_1.prototype.create = function () {\r\n        var _this = this;\r\n        this.winText = this.add.text(400, 300, 'You win', { fontSize: '80px', color: '#ff0000', fontFamily: 'Arial' })\r\n            .setOrigin(.5)\r\n            .setInteractive();\r\n        this.input.on('gameobjectdown', function (p, go) {\r\n            _this.scene.start('intro');\r\n        });\r\n    };\r\n    return default_1;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/scenes/others/win.ts?");

/***/ }),

/***/ "./src/game/utils/graphicHelpers.ts":
/*!******************************************!*\
  !*** ./src/game/utils/graphicHelpers.ts ***!
  \******************************************/
/*! exports provided: generateGameTextures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateGameTextures\", function() { return generateGameTextures; });\n/* harmony import */ var _graphicsFunctions_playerTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphicsFunctions/playerTexture */ \"./src/game/utils/graphicsFunctions/playerTexture.ts\");\n/* harmony import */ var _graphicsFunctions_groundTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphicsFunctions/groundTexture */ \"./src/game/utils/graphicsFunctions/groundTexture.ts\");\n/* harmony import */ var _graphicsFunctions_blockTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphicsFunctions/blockTexture */ \"./src/game/utils/graphicsFunctions/blockTexture.ts\");\n/* harmony import */ var _graphicsFunctions_thorneTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphicsFunctions/thorneTexture */ \"./src/game/utils/graphicsFunctions/thorneTexture.ts\");\n/* harmony import */ var _graphicsFunctions_coinTexture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphicsFunctions/coinTexture */ \"./src/game/utils/graphicsFunctions/coinTexture.ts\");\n/* harmony import */ var _graphicsFunctions_doorTexture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphicsFunctions/doorTexture */ \"./src/game/utils/graphicsFunctions/doorTexture.ts\");\n/* harmony import */ var _graphicsFunctions_blockThorneTexture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphicsFunctions/blockThorneTexture */ \"./src/game/utils/graphicsFunctions/blockThorneTexture.ts\");\n/* harmony import */ var _graphicsFunctions_heartTexture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphicsFunctions/heartTexture */ \"./src/game/utils/graphicsFunctions/heartTexture.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction generateGameTextures(graphics) {\r\n    Object(_graphicsFunctions_playerTexture__WEBPACK_IMPORTED_MODULE_0__[\"generatePlayerTexture\"])(graphics);\r\n    Object(_graphicsFunctions_groundTexture__WEBPACK_IMPORTED_MODULE_1__[\"generateGroundTexture\"])(graphics);\r\n    Object(_graphicsFunctions_blockTexture__WEBPACK_IMPORTED_MODULE_2__[\"generateBlockTexture\"])(graphics);\r\n    Object(_graphicsFunctions_thorneTexture__WEBPACK_IMPORTED_MODULE_3__[\"generateThorneTexture\"])(graphics);\r\n    Object(_graphicsFunctions_coinTexture__WEBPACK_IMPORTED_MODULE_4__[\"generateCoinTexture\"])(graphics);\r\n    Object(_graphicsFunctions_doorTexture__WEBPACK_IMPORTED_MODULE_5__[\"generateDoorTexture\"])(graphics);\r\n    Object(_graphicsFunctions_blockThorneTexture__WEBPACK_IMPORTED_MODULE_6__[\"generateBlockThorneTexture\"])(graphics);\r\n    Object(_graphicsFunctions_heartTexture__WEBPACK_IMPORTED_MODULE_7__[\"generateHeartTexture\"])(200, 200, 300, 300, 50, 50, 0xffffff, graphics);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicHelpers.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/blockTexture.ts":
/*!**********************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/blockTexture.ts ***!
  \**********************************************************/
/*! exports provided: generateBlockTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateBlockTexture\", function() { return generateBlockTexture; });\nfunction generateBlockTexture(graphics) {\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.strokeRect(1, 1, 100, 50); //100*50\r\n    graphics.generateTexture('block1', 102, 52);\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.strokeRect(1, 1, 100, 100); //100*100\r\n    graphics.generateTexture('block2', 102, 102);\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.strokeRect(1, 1, 50, 100); //50*100\r\n    graphics.generateTexture('block3', 52, 102);\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.strokeRect(1, 1, 150, 150); //150*150\r\n    graphics.generateTexture('block4', 152, 152);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/blockTexture.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/blockThorneTexture.ts":
/*!****************************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/blockThorneTexture.ts ***!
  \****************************************************************/
/*! exports provided: generateBlockThorneTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateBlockThorneTexture\", function() { return generateBlockThorneTexture; });\nfunction generateBlockThorneTexture(graphics) {\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.strokeRect(1, 1, 100, 40); //100*50\r\n    graphics.lineStyle(2, 0xffffff);\r\n    var x = 1.5;\r\n    graphics.moveTo(x, 42);\r\n    for (var i = 0; i < 25; i++) {\r\n        graphics.lineTo(x += 5, i % 2 == 0 ? 50 : 42);\r\n    }\r\n    graphics.stroke();\r\n    graphics.generateTexture('blockThorne', 102, 52);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/blockThorneTexture.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/coinTexture.ts":
/*!*********************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/coinTexture.ts ***!
  \*********************************************************/
/*! exports provided: generateCoinTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCoinTexture\", function() { return generateCoinTexture; });\n/* harmony import */ var _drawStar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawStar */ \"./src/game/utils/graphicsFunctions/drawStar.ts\");\n\r\nfunction generateCoinTexture(graphics) {\r\n    graphics.clear();\r\n    graphics.lineStyle(4, 0xCFB53B);\r\n    Object(_drawStar__WEBPACK_IMPORTED_MODULE_0__[\"drawStar\"])(21, 21, 5, 12, 9, graphics);\r\n    graphics.lineStyle(2, 0xCFB53B);\r\n    graphics.strokeCircle(21, 21, 1);\r\n    graphics.strokeCircle(21, 21, 20);\r\n    graphics.save();\r\n    graphics.generateTexture('coin', 42, 42);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/coinTexture.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/doorTexture.ts":
/*!*********************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/doorTexture.ts ***!
  \*********************************************************/
/*! exports provided: generateDoorTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDoorTexture\", function() { return generateDoorTexture; });\nfunction generateDoorTexture(graphics) {\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.moveTo(1, 150);\r\n    graphics.lineTo(1, 51);\r\n    graphics.arc(51, 51, 50, 0, Math.PI, true);\r\n    graphics.moveTo(101, 51);\r\n    graphics.lineTo(101, 150);\r\n    graphics.lineTo(1, 150);\r\n    graphics.stroke();\r\n    graphics.generateTexture('door', 102, 152);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/doorTexture.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/drawStar.ts":
/*!******************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/drawStar.ts ***!
  \******************************************************/
/*! exports provided: drawStar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawStar\", function() { return drawStar; });\nfunction drawStar(cx, cy, spikes, outerRadius, innerRadius, graphics) {\r\n    var rot = Math.PI / 2 * 3;\r\n    var x = cx;\r\n    var y = cy;\r\n    var step = Math.PI / spikes;\r\n    graphics.moveTo(cx, cy - outerRadius);\r\n    for (var i = 0; i < spikes; i++) {\r\n        x = cx + Math.cos(rot) * outerRadius;\r\n        y = cy + Math.sin(rot) * outerRadius;\r\n        graphics.lineTo(x, y);\r\n        rot += step;\r\n        x = cx + Math.cos(rot) * innerRadius;\r\n        y = cy + Math.sin(rot) * innerRadius;\r\n        graphics.lineTo(x, y);\r\n        rot += step;\r\n    }\r\n    graphics.lineTo(cx, cy - outerRadius);\r\n    graphics.stroke();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/drawStar.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/groundTexture.ts":
/*!***********************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/groundTexture.ts ***!
  \***********************************************************/
/*! exports provided: generateGroundTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateGroundTexture\", function() { return generateGroundTexture; });\nfunction generateGroundTexture(graphics) {\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.moveTo(1, 1);\r\n    graphics.lineTo(200, 1);\r\n    graphics.stroke();\r\n    graphics.generateTexture('ground1', 200 + 2, 4);\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.moveTo(1, 1);\r\n    graphics.lineTo(300, 1);\r\n    graphics.stroke();\r\n    graphics.generateTexture('ground2', 300 + 2, 4);\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.moveTo(1, 1);\r\n    graphics.lineTo(400, 1);\r\n    graphics.stroke();\r\n    graphics.generateTexture('ground3', 400 + 2, 4);\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.moveTo(1, 1);\r\n    graphics.lineTo(500, 1);\r\n    graphics.stroke();\r\n    graphics.generateTexture('ground4', 500 + 2, 4);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/groundTexture.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/heartTexture.ts":
/*!**********************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/heartTexture.ts ***!
  \**********************************************************/
/*! exports provided: generateHeartTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHeartTexture\", function() { return generateHeartTexture; });\nfunction generateHeartTexture(fromx, fromy, tox, toy, lw, hlen, color, graphics) {\r\n    graphics.clear();\r\n    graphics.fillStyle(0xffffff);\r\n    graphics.beginPath();\r\n    graphics.moveTo(25, 75);\r\n    graphics.lineTo(0, 52);\r\n    graphics.lineTo(0, 50);\r\n    graphics.lineTo(50, 50);\r\n    graphics.lineTo(50, 52);\r\n    graphics.lineTo(25, 75);\r\n    graphics.closePath();\r\n    graphics.fill();\r\n    graphics.arc(12.5, 50, 12.5, 0, Math.PI, true, 0);\r\n    graphics.arc(37.5, 50, 12.5, 0, Math.PI, true, 0);\r\n    graphics.fillStyle(0xffffff);\r\n    graphics.fill();\r\n    graphics.generateTexture('heart', 50, 75);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/heartTexture.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/playerTexture.ts":
/*!***********************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/playerTexture.ts ***!
  \***********************************************************/
/*! exports provided: generatePlayerTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePlayerTexture\", function() { return generatePlayerTexture; });\nfunction generatePlayerTexture(graphics) {\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.strokeRect(1, 1, 50, 50);\r\n    graphics.generateTexture('player', 52, 52);\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.strokeCircle(26, 26, 25);\r\n    graphics.generateTexture('player1', 52, 52);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/playerTexture.ts?");

/***/ }),

/***/ "./src/game/utils/graphicsFunctions/thorneTexture.ts":
/*!***********************************************************!*\
  !*** ./src/game/utils/graphicsFunctions/thorneTexture.ts ***!
  \***********************************************************/
/*! exports provided: generateThorneTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateThorneTexture\", function() { return generateThorneTexture; });\nfunction generateThorneTexture(graphics) {\r\n    var x = 1;\r\n    graphics.clear();\r\n    graphics.lineStyle(2, 0xffffff);\r\n    graphics.moveTo(x, 15);\r\n    for (var i = 0; i < 8; i++) {\r\n        graphics.lineTo(x += 5, i % 2 == 0 ? 0 : 15);\r\n    }\r\n    graphics.stroke();\r\n    graphics.generateTexture('thorne', 52, 17);\r\n    graphics.clear();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game/utils/graphicsFunctions/thorneTexture.ts?");

/***/ }),

/***/ "./src/game/utils/inputs.ts":
/*!**********************************!*\
  !*** ./src/game/utils/inputs.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar default_1 = /** @class */ (function () {\r\n    function default_1(scene) {\r\n        var _this = this;\r\n        this.horizontale = function () { return _this.cursors.left.isDown ? -10 : _this.cursors.right.isDown ? 10 : 0; };\r\n        this.verticale = function () { return _this.jump.isDown ? -16 : 0; };\r\n        this.cursors = scene.input.keyboard.createCursorKeys();\r\n        this.jump = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);\r\n    }\r\n    return default_1;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/utils/inputs.ts?");

/***/ }),

/***/ "./src/game/world/coins.ts":
/*!*********************************!*\
  !*** ./src/game/world/coins.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1(world, scene) {\r\n        return _super.call(this, world, scene) || this;\r\n    }\r\n    default_1.prototype.scene1 = function () {\r\n        this.create(50, 400, 'coin');\r\n        this.create(490, 400, 'coin');\r\n        this.create(595, 350, 'coin');\r\n        this.create(690, 300, 'coin');\r\n        this.create(790, 350, 'coin');\r\n        this.create(890, 400, 'coin');\r\n        this.createMultiple({ key: 'coin', setXY: { x: 1000, y: 450, stepX: 100 }, quantity: 7 });\r\n    };\r\n    default_1.prototype.scene2 = function () {\r\n        this.create(35, 400, 'coin');\r\n        this.create(190, 200, 'coin');\r\n        this.create(250, 150, 'coin');\r\n        this.create(345, 300, 'coin');\r\n        this.create(500, 300, 'coin');\r\n        this.create(600, 300, 'coin');\r\n        this.create(700, 250, 'coin');\r\n        this.create(800, 300, 'coin');\r\n        this.create(1005, 300, 'coin');\r\n        this.create(1200, 300, 'coin');\r\n        this.create(1480, 450, 'coin');\r\n        this.create(1580, 450, 'coin');\r\n        this.create(1680, 450, 'coin');\r\n    };\r\n    default_1.prototype.scene3 = function () {\r\n        this.createMultiple({ key: 'coin', setXY: { x: 150, y: 200, stepX: 100 }, quantity: 4 });\r\n        this.create(700, 75, 'coin');\r\n        this.createMultiple({ key: 'coin', setXY: { x: 1100, y: 300, stepX: 100 }, quantity: 3 });\r\n        this.createMultiple({ key: 'coin', setXY: { x: 1890, y: 200, stepY: 75 }, quantity: 4 });\r\n    };\r\n    default_1.prototype.addTween = function (scene) {\r\n        scene.tweens.add({\r\n            targets: this.getChildren(),\r\n            scaleX: -1,\r\n            ease: \"Linear.easeInOut\",\r\n            duration: 1500,\r\n            repeat: -1,\r\n        });\r\n    };\r\n    default_1.prototype.checkOverllap = function (player) {\r\n        for (var _i = 0, _a = this.getChildren(); _i < _a.length; _i++) {\r\n            var coin = _a[_i];\r\n            if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), coin.getBounds())) {\r\n                if (coin && coin.active)\r\n                    return coin;\r\n            }\r\n        }\r\n        return null;\r\n    };\r\n    return default_1;\r\n}(Phaser.Physics.Arcade.StaticGroup));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/world/coins.ts?");

/***/ }),

/***/ "./src/game/world/limits.ts":
/*!**********************************!*\
  !*** ./src/game/world/limits.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar default_1 = /** @class */ (function () {\r\n    function default_1(target, minX, maxX, minY, maxY, velocityX, velocityY) {\r\n        this.target = target;\r\n        this.minX = minX;\r\n        this.maxX = maxX;\r\n        this.minY = minY;\r\n        this.maxY = maxY;\r\n        this.velocityX = velocityX;\r\n        this.velocityY = velocityY;\r\n        this.target.setX(this.minX);\r\n        this.target.setY(this.minY);\r\n        this.target.setImmovable(true);\r\n        this.target.setVelocityX(this.velocityX);\r\n        this.target.setVelocityY(this.velocityY);\r\n        this.target.setFriction(1);\r\n    }\r\n    return default_1;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/world/limits.ts?");

/***/ }),

/***/ "./src/game/world/movingPlatforms.ts":
/*!*******************************************!*\
  !*** ./src/game/world/movingPlatforms.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _limits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./limits */ \"./src/game/world/limits.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1(world, scene) {\r\n        var _this = _super.call(this, world, scene) || this;\r\n        _this.limits = [];\r\n        return _this;\r\n    }\r\n    default_1.prototype.scene2 = function () {\r\n        this.limits.push(new _limits__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.create(0, 0, 'blockThorne'), 190, 0, 300, 420, 0, 50));\r\n        this.limits.push(new _limits__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.create(0, 0, 'blockThorne'), 525, 600, 381, 0, 30, 0));\r\n    };\r\n    default_1.prototype.scene3 = function () {\r\n        this.limits.push(new _limits__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.create(0, 0, 'blockThorne'), 250, 450, 274, 0, 30, 0));\r\n        this.limits.push(new _limits__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.create(0, 0, 'blockThorne'), 1000, 0, 274, 400, 0, 30));\r\n        this.limits.push(new _limits__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.create(0, 0, 'blockThorne'), 1400, 0, 274, 400, 0, 30));\r\n        this.limits.push(new _limits__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.create(0, 0, 'blockThorne'), 1500, 1750, 274, 0, 40, 0));\r\n    };\r\n    default_1.prototype.updateMovingPlatforms = function () {\r\n        for (var _i = 0, _a = this.limits; _i < _a.length; _i++) {\r\n            var platform = _a[_i];\r\n            if (platform.target.x < platform.minX) {\r\n                platform.target.setVelocityX(Math.sqrt(Math.pow(platform.velocityX, 2)));\r\n            }\r\n            if (platform.target.x > platform.maxX) {\r\n                platform.target.setVelocityX(-Math.sqrt(Math.pow(platform.velocityX, 2)));\r\n            }\r\n            if (platform.target.y < platform.minY) {\r\n                platform.target.setVelocityY(Math.sqrt(Math.pow(platform.velocityY, 2)));\r\n            }\r\n            if (platform.target.y > platform.maxY) {\r\n                platform.target.setVelocityY(-Math.sqrt(Math.pow(platform.velocityY, 2)));\r\n            }\r\n        }\r\n    };\r\n    return default_1;\r\n}(Phaser.Physics.Arcade.Group));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/world/movingPlatforms.ts?");

/***/ }),

/***/ "./src/game/world/platforms.ts":
/*!*************************************!*\
  !*** ./src/game/world/platforms.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1(world, scene) {\r\n        return _super.call(this, world, scene) || this;\r\n    }\r\n    default_1.prototype.scene1 = function () {\r\n        this.create(250, 500, 'ground4');\r\n        this.create(800, 500, 'ground4');\r\n        this.create(1400, 500, 'ground4');\r\n        this.create(1800, 500, 'ground4');\r\n        this.create(500, 474, 'block1');\r\n        this.create(600, 449, 'block2');\r\n        this.create(780, 449, 'block2');\r\n        this.create(880, 474, 'block1');\r\n    };\r\n    default_1.prototype.scene2 = function (scene) {\r\n        this.create(170, 500, 'ground2');\r\n        this.create(22, 474, 'block1');\r\n        this.create(350, 424, 'block4');\r\n        this.create(1000, 500, 'ground2');\r\n        this.create(800, 424, 'block4');\r\n        this.create(1200, 424, 'block4');\r\n        this.create(1000, 449, 'block3');\r\n        this.create(1670, 500, 'ground4');\r\n    };\r\n    default_1.prototype.scene3 = function () {\r\n        this.create(100, 250, 'ground1');\r\n        this.create(800, 250, 'ground2');\r\n        this.create(1200, 375, 'ground1');\r\n        this.create(1775, 550, 'ground2');\r\n        this.create(550, 224, 'block1');\r\n        this.create(625, 199, 'block3');\r\n        this.create(800, 199, 'block2');\r\n    };\r\n    default_1.prototype.updateMovingPlatforms = function () {\r\n    };\r\n    return default_1;\r\n}(Phaser.Physics.Arcade.StaticGroup));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/world/platforms.ts?");

/***/ }),

/***/ "./src/game/world/thornes.ts":
/*!***********************************!*\
  !*** ./src/game/world/thornes.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar default_1 = /** @class */ (function (_super) {\r\n    __extends(default_1, _super);\r\n    function default_1(world, scene) {\r\n        return _super.call(this, world, scene) || this;\r\n    }\r\n    default_1.prototype.scene1 = function () {\r\n        this.create(700, 492, 'thorne');\r\n    };\r\n    default_1.prototype.scene2 = function () {\r\n        this.create(930, 492, 'thorne');\r\n        this.create(1080, 492, 'thorne');\r\n    };\r\n    default_1.prototype.scene3 = function () {\r\n        this.create(705, 242, 'thorne');\r\n    };\r\n    return default_1;\r\n}(Phaser.Physics.Arcade.StaticGroup));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\r\n\n\n//# sourceURL=webpack:///./src/game/world/thornes.ts?");

/***/ }),

/***/ "phaser":
/*!*******************************************************!*\
  !*** external {"root":"phaser","commonjs2":"phaser"} ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22phaser%22,%22commonjs2%22:%22phaser%22%7D?");

/***/ })

/******/ });