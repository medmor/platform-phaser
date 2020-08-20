!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){t.exports=void 0},function(t,e,o){"use strict";o.r(e);o(0);function n(t){t.clear(),t.lineStyle(4,13612347),function(t,e,o,n,i,r){var s=Math.PI/2*3,a=t,c=e,h=Math.PI/o;r.moveTo(t,e-n);for(var l=0;l<o;l++)a=t+Math.cos(s)*n,c=e+Math.sin(s)*n,r.lineTo(a,c),s+=h,a=t+Math.cos(s)*i,c=e+Math.sin(s)*i,r.lineTo(a,c),s+=h;r.lineTo(t,e-n),r.stroke()}(21,21,5,12,9,t),t.lineStyle(2,13612347),t.strokeCircle(21,21,1),t.strokeCircle(21,21,20),t.save(),t.generateTexture("coin",42,42),t.clear()}function i(t){!function(t){t.clear(),t.lineStyle(2,16777215),t.strokeRect(1,1,50,50),t.generateTexture("player",52,52),t.clear(),t.lineStyle(2,16777215),t.strokeCircle(26,26,25),t.generateTexture("player1",52,52),t.clear()}(t),function(t){t.clear(),t.lineStyle(2,16777215),t.moveTo(1,1),t.lineTo(200,1),t.stroke(),t.generateTexture("ground1",202,4),t.clear(),t.lineStyle(2,16777215),t.moveTo(1,1),t.lineTo(300,1),t.stroke(),t.generateTexture("ground2",302,4),t.clear(),t.lineStyle(2,16777215),t.moveTo(1,1),t.lineTo(400,1),t.stroke(),t.generateTexture("ground3",402,4),t.clear(),t.lineStyle(2,16777215),t.moveTo(1,1),t.lineTo(500,1),t.stroke(),t.generateTexture("ground4",502,4),t.clear()}(t),function(t){t.clear(),t.lineStyle(2,16777215),t.strokeRect(1,1,100,50),t.generateTexture("block1",102,52),t.clear(),t.lineStyle(2,16777215),t.strokeRect(1,1,100,100),t.generateTexture("block2",102,102),t.clear(),t.lineStyle(2,16777215),t.strokeRect(1,1,50,100),t.generateTexture("block3",52,102),t.clear(),t.lineStyle(2,16777215),t.strokeRect(1,1,150,150),t.generateTexture("block4",152,152),t.clear()}(t),function(t){var e=1;t.clear(),t.lineStyle(2,16777215),t.moveTo(e,15);for(var o=0;o<8;o++)t.lineTo(e+=5,o%2==0?0:15);t.stroke(),t.generateTexture("thorne",52,17),t.clear()}(t),n(t),function(t){t.clear(),t.lineStyle(2,16777215),t.moveTo(1,150),t.lineTo(1,51),t.arc(51,51,50,0,Math.PI,!0),t.moveTo(101,51),t.lineTo(101,150),t.lineTo(1,150),t.stroke(),t.generateTexture("door",102,152),t.clear()}(t),function(t){t.clear(),t.lineStyle(2,16777215),t.strokeRect(1,1,100,40),t.lineStyle(2,16777215);var e=1.5;t.moveTo(e,42);for(var o=0;o<25;o++)t.lineTo(e+=5,o%2==0?50:42);t.stroke(),t.generateTexture("blockThorne",102,52),t.clear()}(t),function(t,e,o,n,i,r,s,a){a.clear(),a.fillStyle(16777215),a.beginPath(),a.moveTo(25,75),a.lineTo(0,52),a.lineTo(0,50),a.lineTo(50,50),a.lineTo(50,52),a.lineTo(25,75),a.closePath(),a.fill(),a.arc(12.5,50,12.5,0,Math.PI,!0,0),a.arc(37.5,50,12.5,0,Math.PI,!0,0),a.fillStyle(16777215),a.fill(),a.generateTexture("heart",50,75),a.clear()}(0,0,0,0,0,0,0,t)}var r,s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=function(t){function e(){var e=t.call(this,"intro")||this;return e.graphics=null,e.loadingText=null,e}return s(e,t),e.prototype.init=function(){this.graphics=this.add.graphics(),this.loadingText=this.add.text(400,300,"loading",{fontSize:"80px",color:"#ff0000",fontFamily:"Arial"}).setOrigin(.5)},e.prototype.preload=function(){i(this.graphics),this.game.scene.start("ui"),this.load.audio("music","https://raw.githubusercontent.com/medmor/platform-phaser/local/docs/sounds/music1.mp3"),this.load.audio("coin","https://raw.githubusercontent.com/medmor/platform-phaser/local/docs/sounds/music1.mp3")},e.prototype.create=function(){var t=this;this.scene.get("ui").togglePlayerInventory(),this.loadingText.setInteractive(),this.loadingText.setText("Press enter to play"),this.input.on("gameobjectdown",(function(e,o){t.scene.start("scene1")})),this.input.keyboard.on("keydown",(function(t){"Enter"===t.key&&this.scene.start("scene1")}),this)},e}(Phaser.Scene),c=function(){function t(t){this.coins=0,this.health=100,this.lives=3}return t.prototype.setCoins=function(t){this.coins=t},t.prototype.setHealth=function(t){this.health=t},t.prototype.setLives=function(t){this.lives=t},t}(),h=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),l=function(t){function e(e,o,n,i,r){var s=t.call(this,e,o,n,i,r)||this;return s.jumpTweens={start:void 0,middle:void 0,end:void 0},s.canDamage=!0,s.startX=o,s.startY=n,e.add.existing(s),s.initPhysics(e.physics),s.emitter=e.add.particles("player"),s.inventory=new c(e),s.UILayer=e.scene.get("ui"),s}return h(e,t),e.prototype.initPhysics=function(t){t.add.existing(this),this.setCollideWorldBounds(!0),this.setBounce(.2),this.setGravity(0,500)},e.prototype.move=function(t,e,o){this.body.touching.down?(0!==t&&this.setVelocityX(t*o),0!==e&&this.jumpTweens.start.play(),this.setVelocityX(.89*this.body.velocity.x)):this.setVelocityX(.99*this.body.velocity.x),this.y>550&&this.die()},e.prototype.reset=function(){this.x=this.startX,this.y=this.startY,this.inventory.setHealth(100),this.UILayer.setHealth(100),this.canDamage=!0},e.prototype.onCoinTake=function(){this.inventory.setCoins(this.inventory.coins+1),this.UILayer.setCoins(this.inventory.coins.toString())},e.prototype.thorneDamage=function(){var t=this;this.canDamage&&(this.canDamage=!1,this.setVelocity(-200),this.inventory.health<11?(this.inventory.setHealth(0),this.UILayer.setHealth(this.inventory.health),this.die()):(this.inventory.setHealth(this.inventory.health-10),this.UILayer.setHealth(this.inventory.health),setTimeout((function(){t.canDamage=!0}),500)))},e.prototype.blockThorneDamage=function(t,e){this.canDamage&&e.body.touching.down&&(this.canDamage=!1,this.inventory.health<11?(this.inventory.setHealth(0),this.UILayer.setHealth(this.inventory.health),this.die()):(this.inventory.setHealth(this.inventory.health-10),this.UILayer.setHealth(this.inventory.health),this.canDamage=!0))},e.prototype.die=function(){var t=this;if(this.visible){this.visible=!1,this.inventory.setHealth(0),this.UILayer.setHealth(this.inventory.health);var e=this.emitter.createEmitter({scale:.2,speed:50,x:this.x,y:this.y,lifespan:500,emitZone:{type:"random",source:new Phaser.Geom.Circle(0,0,20)}});setTimeout((function(){e.stop(),setTimeout((function(){t.UILayer.setLives((--t.inventory.lives).toString()),t.reset(),t.visible=!0}),500)}),200)}},e.prototype.addJumpTween=function(t){var e=this;this.jumpTweens.start=t.add.tween({targets:this,scaleY:.6,duration:100}),this.jumpTweens.middle=t.add.tween({targets:this,scaleY:1.1,scaleX:.9,duration:400,yoyo:!0,ease:"Cubic.easeOut"}),this.jumpTweens.start.on("complete",(function(){e.jumpTweens.middle.play(),e.setVelocityY(-300),e.canDamage||e.setVelocity(e.body.velocity.y-300)}))},e}(Phaser.Physics.Arcade.Sprite),u=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),p=function(t){function e(e,o){return t.call(this,e,o)||this}return u(e,t),e.prototype.scene1=function(){this.create(250,500,"ground4"),this.create(800,500,"ground4"),this.create(1400,500,"ground4"),this.create(1800,500,"ground4"),this.create(500,474,"block1"),this.create(600,449,"block2"),this.create(780,449,"block2"),this.create(880,474,"block1")},e.prototype.scene2=function(t){this.create(170,500,"ground2"),this.create(22,474,"block1"),this.create(350,424,"block4"),this.create(1e3,500,"ground2"),this.create(800,424,"block4"),this.create(1200,424,"block4"),this.create(1e3,449,"block3"),this.create(1670,500,"ground4")},e.prototype.updateMovingPlatforms=function(){},e}(Phaser.Physics.Arcade.StaticGroup),y=function(t,e,o,n,i,r,s){this.target=t,this.minX=e,this.maxX=o,this.minY=n,this.maxY=i,this.velocityX=r,this.velocityY=s,this.target.setX(this.minX),this.target.setY(this.minY),this.target.setImmovable(!0),this.target.setVelocityX(this.velocityX),this.target.setVelocityY(this.velocityY),this.target.setFriction(1)},f=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),d=function(t){function e(e,o){var n=t.call(this,e,o)||this;return n.limits=[],n}return f(e,t),e.prototype.scene2=function(){this.limits.push(new y(this.create(0,0,"blockThorne"),190,0,300,420,0,50)),this.limits.push(new y(this.create(0,0,"blockThorne"),525,600,381,0,30,0))},e.prototype.updateMovingPlatforms=function(){for(var t=0,e=this.limits;t<e.length;t++){var o=e[t];o.target.x<o.minX&&o.target.setVelocityX(Math.sqrt(Math.pow(o.velocityX,2))),o.target.x>o.maxX&&o.target.setVelocityX(-Math.sqrt(Math.pow(o.velocityX,2))),o.target.y<o.minY&&o.target.setVelocityY(Math.sqrt(Math.pow(o.velocityY,2))),o.target.y>o.maxY&&o.target.setVelocityY(-Math.sqrt(Math.pow(o.velocityY,2)))}},e}(Phaser.Physics.Arcade.Group),v=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),g=function(t){function e(e,o){return t.call(this,e,o)||this}return v(e,t),e.prototype.scene1=function(){this.create(700,492,"thorne")},e.prototype.scene2=function(){this.create(930,492,"thorne"),this.create(1080,492,"thorne")},e}(Phaser.Physics.Arcade.StaticGroup),m=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),_=function(t){function e(e,o){return t.call(this,e,o)||this}return m(e,t),e.prototype.scene1=function(){this.create(50,400,"coin"),this.create(490,400,"coin"),this.create(595,350,"coin"),this.create(690,300,"coin"),this.create(790,350,"coin"),this.create(890,400,"coin"),this.createMultiple({key:"coin",setXY:{x:1e3,y:400,stepX:100},quantity:7})},e.prototype.scene2=function(){this.create(35,400,"coin"),this.create(190,200,"coin"),this.create(250,150,"coin"),this.create(345,300,"coin"),this.create(500,300,"coin"),this.create(600,300,"coin"),this.create(700,250,"coin"),this.create(800,300,"coin"),this.create(1005,300,"coin"),this.create(1200,300,"coin"),this.create(1480,450,"coin"),this.create(1580,450,"coin"),this.create(1680,450,"coin")},e.prototype.addTween=function(t){t.tweens.add({targets:this.getChildren(),scaleX:-1,ease:"Linear.easeInOut",duration:1500,repeat:-1})},e.prototype.checkOverllap=function(t){for(var e=0,o=this.getChildren();e<o.length;e++){var n=o[e];if(Phaser.Geom.Intersects.RectangleToRectangle(t.getBounds(),n.getBounds())&&n&&n.active)return n}return null},e}(Phaser.Physics.Arcade.StaticGroup),T=function(t){var e=this;this.horizontale=function(){return e.cursors.left.isDown?-10:e.cursors.right.isDown?10:0},this.verticale=function(){return e.jump.isDown?-16:0},this.cursors=t.input.keyboard.createCursorKeys(),this.jump=t.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)},w=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),b=function(t){function e(e){var o=t.call(this,e)||this;return o.lastTime=0,o}return w(e,t),e.prototype.init=function(t){this.lastTime=this.time.now,this.cameras.main.setBounds(0,0,1920,600),this.physics.world.setBounds(0,0,1920,600,!0,!0,!1,!1)},e.prototype.preload=function(){},e.prototype.create=function(){var t=this;this.inputs=new T(this),this.platforms=new p(this.physics.world,this),this.movingPlatforms=new d(this.physics.world,this),this.thornes=new g(this.physics.world,this),this.coins=new _(this.physics.world,this),this.player=new l(this,50,300,"player"),this.player.initPhysics(this.physics),this.cameras.main.startFollow(this.player),this.player.addJumpTween(this),this.physics.add.collider(this.player,this.platforms),this.physics.add.collider(this.player,this.movingPlatforms,this.player.blockThorneDamage,void 0,this.player),this.physics.add.collider(this.player,this.thornes,(function(){t.player.thorneDamage()}))},e.prototype.update=function(t){this.player.visible&&this.player.move(this.inputs.horizontale(),this.inputs.verticale(),t-this.lastTime),this.movingPlatforms.updateMovingPlatforms();var e=this.coins.checkOverllap(this.player);e&&this.onCoinTake(e),this.player.inventory.lives<=0&&this.scene.start("gameOver"),this.lastTime=this.time.now},e.prototype.onCoinTake=function(t){t.active&&(this.sound.play("coin"),t.active=!1,this.player.onCoinTake(),this.tweens.add({targets:t,y:"-=200",duration:500,ease:"Linear"}).on("complete",(function(){t.destroy()})))},e}(Phaser.Scene),P=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),O=function(t){function e(){return t.call(this,"scene1")||this}return P(e,t),e.prototype.init=function(){t.prototype.init.call(this,void 0),this.scene.get("ui").togglePlayerInventory()},e.prototype.preload=function(){},e.prototype.create=function(){t.prototype.create.call(this),this.sound.play("music"),this.platforms.scene1(),this.thornes.scene1(),this.coins.scene1(),this.coins.addTween(this),this.door=this.add.image(1800,424,"door").getBounds()},e.prototype.update=function(e){t.prototype.update.call(this,e),this.door.contains(this.player.x,this.player.y)&&this.scene.start("scene2",{playerInventory:this.player.inventory})},e}(b),x=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),k=function(t){function e(){return t.call(this,"scene2")||this}return x(e,t),e.prototype.init=function(e){t.prototype.init.call(this,void 0),this.playerInventoryBase=e.playerInventory},e.prototype.preload=function(){},e.prototype.create=function(){t.prototype.create.call(this),this.player.inventory=this.playerInventoryBase,this.platforms.scene2(this),this.movingPlatforms.scene2(),this.thornes.scene2(),this.coins.scene2(),this.coins.addTween(this),this.door=this.add.image(1800,424,"door").getBounds()},e.prototype.update=function(e){t.prototype.update.call(this,e),this.door.contains(this.player.x,this.player.y)&&this.scene.start("win")},e}(b),j=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),S={fontSize:"30px",color:"#ffffff",fontFamily:"Arial"},I=function(t){function e(){return t.call(this,"ui")||this}return j(e,t),e.prototype.create=function(){this.coinsText=this.add.text(85,35,"0",S),this.coinsImage=this.add.image(50,50,"coin"),this.livesText=this.add.text(195,35,"3",S),this.livesImage=this.add.image(160,35,"heart").setScale(.85,1),this.healthText=this.add.text(525,35,"100",S),this.healthBarBackground=this.add.rectangle(680,50,200,30,16711680),this.healthBarForground=this.add.rectangle(680,50,200,30,16777215),this.playerInventory=this.add.group(),this.playerInventory.addMultiple([this.coinsImage,this.coinsText,this.livesText,this.livesImage,this.healthText,this.healthBarBackground,this.healthBarForground])},e.prototype.togglePlayerInventory=function(){this.playerInventory.toggleVisible()},e.prototype.setCoins=function(t){this.coinsText.setText(t)},e.prototype.setLives=function(t){this.livesText.setText(t)},e.prototype.setHealth=function(t){this.healthText.setText(t.toString()),this.healthBarForground.width=t<=0?0:t/100*this.healthBarBackground.width},e}(Phaser.Scene),M=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),A=function(t){function e(){var e=t.call(this,"win")||this;return e.winText=null,e}return M(e,t),e.prototype.create=function(){this.winText=this.add.text(400,300,"You win",{fontSize:"80px",color:"#ff0000",fontFamily:"Arial"}).setOrigin(.5)},e}(Phaser.Scene),X=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),Y=function(t){function e(){var e=t.call(this,"gameOver")||this;return e.gameOverText=null,e}return X(e,t),e.prototype.create=function(){this.gameOverText=this.add.text(400,300,"Game Over",{fontSize:"80px",color:"#ff0000",fontFamily:"Arial"}).setOrigin(.5)},e}(Phaser.Scene),B=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),C=function(t){function e(){return t.call(this,D)||this}return B(e,t),e}(Phaser.Game),D={type:Phaser.AUTO,width:800,height:600,scene:[a,O,k,I,A,Y],parent:"game",physics:{default:"arcade",arcade:{debug:!1}}};new C}]);
