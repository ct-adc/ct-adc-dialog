<template>
    <div class="ct-dialog">
        <transition name="container">
            <div class="ct-dialog-container" v-show="isShow" :style="{width: width}">
                <div class="ct-dialog-head">
                    <div>{{title}}</div> 
                    <div style="flex:1">
                        <i class="glyphicon glyphicon-remove pull-right ct-dialog-close" @click="hide"></i>
                    </div>
                </div>
                <div class="ct-dialog-body">
                    <slot name="body">
                        {{content}}
                    </slot>
                </div>
                <div class="ct-dialog-foot">
                    <slot name="foot">
                        <button class="btn btn-primary" @click="hide">确定</button>
                    </slot>
                    <!-- <button class="btn btn-default" @click="hide">取消</button> -->
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false
        };
    },
    props: {
        width: {
            type: String,
            default: '30%'
        },
        value: Boolean,
        title: {
            type: String,
            default: '标题'
        },
        content: {
            type: String,
            default: '内容'
        }
    },
    watch: {
        value(val){
            this.isShow = val;
        },
        isShow(val){
            this.$emit('input', val);
            if (val){
                this.$emit('on-show');
                this.showMask();
                return;
            }

            this.$emit('on-hide');
            this.removeMask();
        }
    },
    methods: {
        hide(){
            this.isShow = false;
        },
        yes(){
            this.$emit('input', false);
            this.$emit('yes');
        },
        showMask(){
            const mask = document.createElement('div');

            mask.className = 'ct-dialog-mask';
            document.body.appendChild(mask);
            mask.classList.add('active');
        },
        removeMask(){
            const mask = document.querySelector('.ct-dialog-mask');

            if (mask){
                mask.classList.add('unactive');
                setTimeout(() => {
                    mask.remove();
                }, 300);
            }
        }
    }
};
</script>

<style>
@keyframes fadeIn{
    from {
        opacity: 0;
    }
    to{
        opacity: 0.6;
    }
}
@keyframes fadeOut{
    from {
        opacity: 0.6;
    }
    to{
        opacity: 0;
    }
}
.ct-dialog-mask{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    z-index: 2000;
}
.ct-dialog-mask.active{
    display: block;
    animation: fadeIn .3s;
}
.ct-dialog-mask.unactive{
    animation: fadeOut .3s forwards;
}

.ct-dialog-close{
    color: #999;
    cursor: pointer;
}
.ct-dialog-close:hover{
    color: #337ab7;
}
.mask-enter,.mask-leave-active{
    opacity: 0;
}
.mask-enter-active,.mask-leave-active{
    transition: .3s;
}
.container-enter{
    transform: translateY(-20px);
    opacity: 0;
}
.container-enter-active{
    transition: .3s;
}
.container-leave-active{
    opacity: 0;
    transform: translateY(-20px);
    transition: .3s;
}
.ct-dialog-container{
    position: fixed;
    top: 200px;
    right: 0;
    left: 0;
    background-color: #fff;
    z-index: 2001;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    width: 30%;
    padding: 15px;
    margin: 0 auto;
}
.ct-dialog-head {
    font-size: 18px;
    display: flex;
    align-items: center;
}

.ct-dialog-body {
    padding: 15px 0;
    font-size: 14px;
}

.ct-dialog-foot {
    text-align: right;
}
</style>


