<template>
    <canvas width="600" height="600" ref="canvas" @click="chess"></canvas>
</template>

<script>
import { onMounted, reactive, ref } from '@vue/runtime-core'

let ctx;


//画棋子
function downChess(x, y, type) {
    ctx.beginPath()
    ctx.arc(x, y, 15, 0, Math.PI * 2)
    ctx.fillStyle = type == 1 ? '#000' : '#fff'
    ctx.fill()
    ctx.closePath()
}
//画背景
function drawBG() {
    for (let i = 0; i < 16; i++) {
        //画竖线
        ctx.beginPath()
        ctx.moveTo(20 + 40 * i, 20)
        ctx.lineTo(20 + 40 * i, 580)
        ctx.stroke()
        ctx.closePath()
        //画横线
        ctx.beginPath()
        ctx.moveTo(20, 20 + 40 * i)
        ctx.lineTo(580, 20 + 40 * i)
        ctx.stroke()
        ctx.closePath()
    }
    // 画基准点
    let dotArr = [[3, 3], [15 - 4, 3], [7, 7], [3, 15 - 4], [15 - 4, 15 - 4]]
    dotArr.forEach(item => {
        drawDot(item[0], item[1])
    })
}
//画棋盘基准点的函数
function drawDot(x1, y1) {
    let x = 20 + 40 * x1 - 4
    let y = 20 + 40 * y1 - 4
    ctx.fillRect(x, y, 8, 8)
}
export default {
    name: 'RenJu',
    setup() {
        let canvas = ref(null)
        onMounted(() => {
            ctx = canvas.value.getContext('2d')
            drawBG()
        })
        let data = reactive({
            type: 1,
            chessArr: []
        })
        //初始化棋子列表
        for (let i = 0; i < 15; i++) {
            data.chessArr.push([])
        }
        //落子函数
        function chess(e) {
            //计算落子坐标点
            let x = (e.offsetX - 20) % 40 < 20 ? e.offsetX - (e.offsetX - 20) % 40 : e.offsetX - (e.offsetX - 20) % 40 + 40
            let y = (e.offsetY - 20) % 40 < 20 ? e.offsetY - (e.offsetY - 20) % 40 : e.offsetY - (e.offsetY - 20) % 40 + 40
            //计算在棋子数组中的坐标
            let row = (y - 20) / 40
            let col = (x - 20) / 40
            //画出棋子
            downChess(x, y, data.type)
            //在棋子数组中对应的位置填上棋子的类型
            data.chessArr[row][col] = data.type
            //判断输赢
            isVictory(row, col, data.type)
            //因为交替下棋，所以切换棋子类型
            data.type = data.type == 1 ? 2 : 1
        }
        //判断输赢
        function isVictory(row, col, type) {
            //判断横排
            is(0, 1)
            //判断竖排
            is(1, 0)
            //判断\排
            is(1, 1)
            //判断/排
            is(1, -1)
            function is(rStep, cStep) {
                let sum = 1
                let r = row
                let c = col
                //判断横向棋子数
                while (true) {
                    c += cStep
                    r += rStep
                    if (data.chessArr[r][c] == type) {
                        sum++
                    } else {
                        break
                    }
                }
                r = row
                c = col
                cStep = 0 - cStep
                rStep = 0 - rStep
                while (true) {
                    c += cStep
                    r += rStep
                    if (data.chessArr[r][c] == type) {
                        sum++
                    } else {
                        break
                    }
                }
                //当棋子5连珠时，弹窗提示输赢，为了避免棋子还没画出来就弹窗于是加个定时器
                if (sum == 5) setTimeout(() => {
                    alert(`${type == 1 ? '黑棋' : '白棋'}获胜!`)
                }, 0);
            }
        }
        return {
            canvas,
            chess
        }
    }
}
</script>

<style lang="less" scoped>
canvas {
    display: block;
    margin: 60px auto 0;
    width: 600px;
    height: 600px;
    background: rgb(247, 221, 181);
}
</style>