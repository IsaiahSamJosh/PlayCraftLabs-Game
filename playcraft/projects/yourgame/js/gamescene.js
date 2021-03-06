/**
 * GameScene
 * A template game scene
 */
GameScene = pc.Scene.extend('GameScene',
    { }, //statics here
    {
        gameLayer:null,
        boxes:null,

        init:function ()
        {
            this._super();// calls Scene's init function

            this.boxes = [];

            //-----------------------------------------------------------------------------
            // game layer
            //-----------------------------------------------------------------------------
            this.gameLayer = this.addLayer(new pc.EntityLayer('game layer', 10000, 10000));//added the layer to the GameScene

            // all we need is the render and effects systems
            this.gameLayer.addSystem(new pc.systems.Render());
            this.gameLayer.addSystem(new pc.systems.Effects());

//the code below creates the three boxes we see on the screen when we run this game
            for (var i = 0; i < 3; i++)
            {
                var box = pc.Entity.create(this.gameLayer);
                box.addComponent(pc.components.Spatial.create({ x:200 + (i * 100), y:200, w:75, h:75 }));
                box.addComponent(pc.components.Rect.create({ color:[ pc.Math.rand(0, 255), pc.Math.rand(0, 255), pc.Math.rand(0, 255) ] }));
//create methods creates a random color in the RGB(red-green-blue) spectrum
//black is (0,0,0), red is (255,0,0), green is (0,255,0), and blue is (0,0,255)
                this.boxes.push(box);//the boxes array now contains all the contents of box
            }

            // bind some keys/clicks/touches to access the menu
            pc.device.input.bindAction(this, 'menu', 'ENTER');
            pc.device.input.bindAction(this, 'menu', 'ESC');
            pc.device.input.bindAction(this, 'menu', 'MOUSE_BUTTON_LEFT_DOWN');
            pc.device.input.bindAction(this, 'menu', 'TOUCH');

        },

        // handle menu actions
        onAction:function (actionName, event, pos, uiTarget)
        {
            if (pc.device.game.menuScene.active)
                return true;

            if (actionName === 'menu')
                pc.device.game.activateMenu();

            return false; // eat the event (so it wont pass through to the newly activated menuscene
        },

        process:function ()
//Scenes and layers both have a process method, which will be called by the game class on every update cycle        
        {
            // clear the background(the gamescene background)
            pc.device.ctx.clearRect(0, 0, pc.device.canvasWidth, pc.device.canvasHeight);

            // always call the super
            this._super(); //calls Scene's process function

            //
            // ... do extra processing in here
            //
        }
    });
