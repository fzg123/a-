import Block from './Block'
/**
    * 
    * @param {*} width 
    * @param {*} height 
    * @param {*} x 
    * @param {*} y 
    * @param {*} isOrganic 为true代表这个生命 活着， false为 死亡
    * @param {*} context 画笔
    */
export default class Life extends Block {

    constructor(width, height, x, y, isOrganic, context) {
        super(width, height, x, y);
        this.isOrganic = isOrganic;
        this.context = context;
        this.init();
    }
    /**
     * 
     * @param {Boolean} state 存活 或者 死亡
     */
    setOrganic(state) {
        this.isOrganic = state;
    }
    die() {
        this.setOrganic(false);
        this.render();// 重新渲染
    }
    revive() {
        this.setOrganic(true);
        this.render(); //重新渲染
    }
    render() {
        if (this.isOrganic) {
            this.context.fillStyle = 'aqua';
            this.context.fillRect(this.x * this.width, this.y * this.height, this.width, this.height)
        }
        else {
            this.context.strokeRect(this.x * this.width, this.y * this.height, this.width, this.height)
        }
    }
    init() {
        this.render();
    }
}