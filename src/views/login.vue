<template>
    <div class="bg-box">
        <div class="box">
            <!-- //背景小盒子 -->
            <div class="bg">
                <div class="bg-item">
                    <h3>已有账号？</h3>
                    <img src="@/assets/login_img/login1.webp" alt="">
                    <div class="login" @click="isLogin = false">
                        去登录
                    </div>
                </div>
                <div class="bg-item">
                    <h3>没有账号？</h3>
                    <img id="img1" src="@/assets/login_img/login2.webp" alt="">
                    <div class="login" @click="isLogin = true">
                        去注册
                    </div>
                </div>
            </div>
            <!-- //内容盒子 -->
            <transition>
                <div class="context" :class="isLogin ? 'to-right' : ''">
                    <img src="@/assets/login_img/cat.png" alt="" class="cat">
                    <transition mode="out-in">
                        <div class="sign" v-if="!isLogin">
                            <h2> 登录 </h2>
                            <input type="text" placeholder="邮箱 或 ID号">
                            <div class="pass">
                                <input :type="passShow ? 'text' : 'password'" placeholder="密码">
                                <img class="eye" @click="passShow=!passShow"
                                    :src="passShow ? require('@/assets/login_img/yanjing_xianshi.png') : require('@/assets/login_img/yanjing_yincang.png')"
                                    alt="">
                            </div>
                            <div class="sign-btn">立即登录</div>

                        </div>
                        <div class="sign" v-else>
                            <h2> 注册 </h2>
                            <input type="text" placeholder="邮箱 或 ID号">
                            <div class="pass">
                                <input type="password" placeholder="密码">
                                <img class="eye" src="@/assets/login_img/yanjing_yincang.png" alt="">
                            </div>
                            <div class="sign-btn">立即注册</div>
                        </div>
                    </transition>

                </div>
            </transition>


        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
//控制动画
let isLogin = ref(false)
//控制密码显示
let passShow = ref(false)

// @param aa dnnjj
// 

</script>

<style lang="less" scoped>
.bg-box {
    width: 100vw;
    height: 100vh;
    background: url('@/assets/login_img/bg1.webp') no-repeat;
    background-size: 100%;
    position: relative;

    .box {
        position: absolute;
        top: 50%;
        left: 15%;
        transform: translateY(-50%);
        width: 41.6667vw;
        height: 31.25vw;

        // 白色背景盒子
        .bg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 80%;
            background: white;
            border-radius: 1.0417vw;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.247);
            display: flex;
            justify-content: space-between;
            padding: 0 50px;


            .bg-item {
                width: 40%;
                height: 100%;
                position: relative;

                h3 {
                    font-size: 28px;
                    margin-top: 2.6042vw;
                    text-align: center;
                }

                img {
                    margin-top: 30px;
                    width: 100%;
                }

                #img1 {
                    display: block;
                    margin: 20px auto;
                    width: 80%;
                }

                .login {
                    box-shadow: 0.1563vw 0.1563vw 0.2604vw rgba(0, 0, 0, 0.164);
                    position: absolute;
                    bottom: 3.5vw;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 6vw;
                    height: 2vw;
                    color: white;
                    text-align: center;
                    line-height: 2vw;
                    background: #e1abac;
                    border-radius: 0.5208vw;
                }
            }
        }

        //登录和注册盒子
        .context {
            position: absolute;
            right: 45%;
            width: 20.8333vw;
            height: 31.25vw;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.247);
            background: #eccacb;
            border-radius: 1.0417vw;
            transition: all 0.5s;

            .cat {
                z-index: 0;
                position: absolute;
                bottom: 0;
                left: 10%;
                width: 70%;
            }

            .sign {

                display: flex;
                flex-direction: column;
                align-items: center;

                h2 {
                    margin-top: 2vw;
                    text-align: center;
                    color: white;
                    font-size: 40px;
                }

                .pass {
                    width: 100%;
                    position: relative;
                    display: flex;
                    justify-content: center;

                    .eye {
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        bottom: 5px;
                        right: 50px;
                    }
                }

                //按钮
                .sign-btn {
                    margin-top: 50px;
                    color: #eccacb;
                    font-size: 1.5625vw;
                    line-height: 2.6042vw;
                    width: 40%;
                    height: 2.6042vw;
                    background: white;
                    border-radius: 0.5208vw;
                    box-shadow: 0.1563vw 0.1563vw 0.2604vw rgba(0, 0, 0, 0.164);
                }

                input {
                    text-indent: 0.5208vw;
                    margin-top: 30px;
                    width: 70%;
                    height: 25px;
                    color: white;
                    background: none;
                    border-bottom: 2px solid white;
                }
            }

        }

        //使盒子向右移动
        .to-right {
            right: 5%;
        }

    }
}

/* 进入之前和离开后的样式 */
.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

/* 离开和进入过程中的样式 */
.v-enter-active,
.v-leave-active {
    /* 添加过渡动画 */
    transition: all 0.3s ease;
}

/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
    opacity: 1;
    transform: translateY(0%);
}
</style>