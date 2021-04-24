class SpiderMan {
    constructor(x, y, w, h) {
        const options = {
            isStatic: false
        }
        
        this.body = Bodies.rectangle(x, y, w, h, options);

        this.width = w;
        this.height = h;

        this.image = loadImage("spider-man.png");

        World.add(world, this.body);
    }

    display() {
        const pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}