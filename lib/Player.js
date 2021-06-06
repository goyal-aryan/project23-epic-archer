class Player {

    // contructor
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        //to create options
        var options = {
            isStatic: true
        };

        //to create rectangle
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);

        //to load images
        this.image = loadImage("./assets/player.png");

        //to add it to world
        World.add(world, this.body);
    }

    display() {

        //variable for position
        var pos = this.body.position;

        //variable for angle
        var angle = this.body.angle;

        push();

        //to capture the position
        translate(pos.x, pos.y);

        //to rotate the angle
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}