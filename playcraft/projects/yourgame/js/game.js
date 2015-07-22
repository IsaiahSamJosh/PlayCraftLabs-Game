/**
 * A sample game.js for you to work from
 */

TheGame = pc.Game.extend('TheGame', //you can access this game instance anywhere using global pc.device.game
    { }, //statics go in here. statics apply to all instances (objects) of a class
    { //instances go in here
        gameScene:null,
        menuScene:null,

        onReady:function ()
        {
            this._super();//calls the Game class' onReady() method

            // disable caching when developing
            // if (pc.device.devMode)
            //    pc.device.loader.setDisableCache();

            // no resources are loaded in this template, so this is all commented out
            // pc.device.loader.add(new pc.Image('an id', 'images/an image.png'));

            //if (pc.device.soundEnabled)
            //   pc.device.loader.add(new pc.Sound('fire', 'sounds/fire', ['ogg', 'mp3'], 15));

            //this is where we would load up all of our resources(images,textures, ect)
            
            //bind() method makes it so this refers to the correct global object TheGame
            pc.device.loader.start(this.onLoading.bind(this), this.onLoaded.bind(this));
        },

        onLoading:function (percentageComplete)
        {
            // draw title screen -- with loading bar
        },

        onLoaded:function()//called immediately after onLoading finishes
        {
            // create the game scene (notice we do it here AFTER the resources are loaded)
            this.gameScene = new GameScene();
            this.addScene(this.gameScene);

            // create the menu scene (but don't make it active)
            this.menuScene = new MenuScene();
            this.addScene(this.menuScene, false);

            // resources are all ready, start the main game scene
            // (or a menu if you have one of those)
            this.activateScene(this.gameScene);
        },

        activateMenu:function()
        {
            this.deactivateScene(this.gameScene);
            this.activateScene(this.menuScene);
        },

        deactivateMenu:function()
        {
            this.deactivateScene(this.menuScene);
            this.activateScene(this.gameScene);
        }
    });


