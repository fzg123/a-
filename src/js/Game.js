import Life from './Life'
class Game {
    constructor() {
        this.canvas = document.getElementById('root');
        this.context = this.canvas.getContext('2d');
        this.lifeArr = []; // 装生命的盒子
        this.lifeWidth = 10;    // 每个区域的宽度
        this.lifeHeight = 10;   // 每块区域的高度
        this.row = Math.floor(document.documentElement.clientHeight / this.lifeHeight); // 行数
        this.column = Math.floor(document.documentElement.clientWidth / this.lifeWidth); // 每行的列数
        this.isRandom = false;  // 是否 随机生成生命
        this.time = 300;  //每个多久迭代一次
        this.isAutoIteration = false; // 是否 无限次的 继续 下一次迭代
        this.currentMoveLife = null; // 当前鼠标移动到的 生命
        // this.row = 10;
        // this.column = 10;
        this.dom = {
            start: document.getElementById('start'),
            oneStart: document.getElementById('one-start'),
            stop: document.getElementById('stop'),
            hint: document.getElementById('hint'),
            resetGame: document.getElementById('reset-game'),
            btn: document.getElementById('btn')
        }
        this.lifeStates = this.resetLifeStates();  // 所有的生命状态
        this.mouseMoveTimer = null;

    }/**
     * 监听鼠标移动
     */
    switchMouseMove() {
        this.switchMouseMoveTimer = setTimeout(() => {
            this.dom.btn.classList.add('hide');
        }, 5000)
    }
    init() {
        this.initViewContent();
        this.addEvent();
        this.switchMouseMove();
    }
    /**
     * 重置游戏
     */
    resetGame() {
        this.lifeArr = [];
        this.clearRect();
        this.initViewContent();
    }
    resetLifeStates() {     // 返回一个 默认的 lifeStates
        const arr = [];
        for (let i = 0; i < this.row; i++) {
            let column = [];
            for (let j = 0; j < this.column; j++) {
                column.push(false);
            }
            arr.push(column);
        }
        return arr;
    }
    /**
     * 开始 无限次的 继续 下一次迭代
     */
    start() {
        this.stop();
        this.isAutoIteration = true;
        this.timer = setInterval(() => {
            this.societyMove();
        }, this.time)
    }
    stop() {
        this.isAutoIteration = false;
        clearInterval(this.timer);
    }
    /**
     * 生命自由繁殖死亡
     */
    societyMove() {
        this.nextState(); // 获取下一刻的 状态
        
        this.stateLeadingIn(); // 导入新状态

        this.lifeStates = this.resetLifeStates(); // 重置状态存储器

        this.clearRect();   // 清空面板
        this.viewContentUpDate(); // 重新渲染
    }
    /**
     * 初始化视图
     */
    initViewContent() {
        for (let i = 0; i < this.row; i++) {
            let row = [];
            for (let j = 0; j < this.column; j++) {
                let isOrganic = (Math.random() > 0.9) ? true : false;
                let life = new Life(this.lifeWidth, this.lifeHeight, j, i, this.isRandom ? isOrganic : false, this.context);
                row.push(life);
            }
            this.lifeArr.push(row);
        }
    }
    /**
     * 将元素挂载到 页面上
     * @param {*} dom 
     */
    viewContentMount(dom) {
        this.container.appendChild(dom);
    }
    /**
     * 下一个时刻的状态
     */
    nextState() {
        for (let i = 0; i < this.lifeArr.length; i++) {
            let element = this.lifeArr[i];
            for (let j = 0; j < element.length; j++) {

                let item = element[j];
                let neighborsNum = this.getNeighborsNum(item);

                if (neighborsNum == 2) this.lifeStates[item.y][item.x] = item.isOrganic;
                else if (neighborsNum == 3) this.lifeStates[item.y][item.x] = true;
                else this.lifeStates[item.y][item.x] = false;
            }
        }
        
        
    }
    /**
     * 将新的生命状态导入到 lifeArr 内
     */
    stateLeadingIn() {
        for (let i = 0; i < this.lifeStates.length; i++) {
            const element = this.lifeStates[i];
            for (let j = 0; j < element.length; j++) {
                const lifeStatesItem = element[j];
                const lifeArrItem = this.lifeArr[i][j];
                if (lifeStatesItem === lifeArrItem.isOrganic) continue;
                lifeArrItem.setOrganic(lifeStatesItem);
            }
        }
    }
    /**
     * 清空画布
     */
    clearRect() {
        this.context.clearRect(0, 0, 1436, 754);
    }
    /**
     * 画布更新
     */
    viewContentUpDate() {
        for (let i = 0; i < this.lifeArr.length; i++) {
            let element = this.lifeArr[i];
            for (let j = 0; j < element.length; j++) {
                let prop = element[j];
                prop.render();
            }
        }
    }
    /**
     * 获得邻居数量
     * @param {*} life 
     */
    getNeighborsNum(life) {
        let lifeNum = 0,
            { x, y } = life;
        let tempLifeArr = [
            this.isOrganic(this.lifeArr[y][x + 1]), //右边的
            this.isOrganic(this.lifeArr[y][x - 1]), //左边的
            this.isOrganic(this.lifeArr[y + 1] ? this.lifeArr[y + 1][x] : null), //上边的
            this.isOrganic(this.lifeArr[y - 1] ? this.lifeArr[y - 1][x] : null), //下边的
            this.isOrganic(this.lifeArr[y + 1] ? this.lifeArr[y + 1][x + 1] : null), //右上的
            this.isOrganic(this.lifeArr[y - 1] ? this.lifeArr[y - 1][x + 1] : null), //右下的
            this.isOrganic(this.lifeArr[y + 1] ? this.lifeArr[y + 1][x - 1] : null), //左上
            this.isOrganic(this.lifeArr[y - 1] ? this.lifeArr[y - 1][x - 1] : null), //左下
        ]

        tempLifeArr.forEach((e) => {
            if (e) lifeNum++;
        })
        return lifeNum;
    }
    /**
     * 生命是否存活
     * @param {*} life 
     */
    isOrganic(life) {
        if (life == undefined) return;
        return life.isOrganic;
    }
    addEvent() {
        this.canvas.onmousedown = (e) => {
            if (this.isAutoIteration) {
                alert('正在自动迭代，不能点击');
                return;
            }
            let x = Math.floor(e.clientX / this.lifeWidth);
            let y = Math.floor(e.clientY / this.lifeHeight);
            const life = this.lifeArr[y][x];

            life.isOrganic = !life.isOrganic;
            this.lifeAgainRender(life);
            this.currentMoveLife = life;

            this.canvas.onmousemove = (e) => {
                let x = Math.floor(e.clientX / this.lifeWidth);
                let y = Math.floor(e.clientY / this.lifeHeight);
                const life = this.lifeArr[y][x];
                if (this.currentMoveLife != null && life.x == this.currentMoveLife.x && life.y == this.currentMoveLife.y) return;
                this.currentMoveLife = life;
    
                life.isOrganic = !life.isOrganic;
                this.lifeAgainRender(life);
            }
        }
        this.canvas.onmouseup = (e) => {
            this.canvas.onmousemove = null;
        }
        this.dom.start.onclick = () => {
            this.start();
            hint.innerHTML = '已在运行中';
        }
        this.dom.stop.onclick = () => {
            this.stop();
            hint.innerHTML = '已停止运行';
        }
        this.dom.oneStart.onclick = () => {
            this.societyMove();
        }
        this.dom.resetGame.onclick = () => {
            hint.innerHTML = '已停止运行';
            this.stop();
            this.resetGame();
        }
        document.onmousemove = () => {
            clearTimeout(this.mouseMoveTimer);
            if (this.dom.btn.classList.contains('hide')) this.dom.btn.classList.remove('hide');
            this.mouseMoveTimer = setTimeout(() => {
                clearTimeout(this.switchMouseMoveTimer);
                this.switchMouseMove();
            }, 300)
        }
        

    }
    /**
     * 生命重新渲染
     */
    lifeAgainRender(life) {
        this.context.clearRect(life.x * this.lifeWidth, life.y * this.lifeHeight, this.lifeWidth, this.lifeHeight);
        life.render();
    }
}
export default new Game();