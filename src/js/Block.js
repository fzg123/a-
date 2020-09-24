
export default class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.viewContent = document.createElement('div');
    }
    render(context) {
        // this.viewContent.style.width = this.width + 'px';
        // this.viewContent.style.height = this.height + 'px';
        // this.viewContent.style.top = this.y * this.width + 'px';
        // this.viewContent.style.left = this.x * this.height + 'px';
        // console.log(context)
        context.fillStyle = this.bgColor;
        context.fillRect(this.x * this.width, this.y * this.height, this.width, this.height)
    }
}
