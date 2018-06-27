<template>
    <div>
        <dialogs v-model="show">
            <div slot="body"></div>
            <div slot="foot">
                <button class="btn btn-primary" @click="hide">确定</button>
            </div>
        </dialogs>
        <button @click="show=true">111</button>
    </div>
</template>

<script>
import dialogs from '@/component/main';
export default {
    data() {
        return {
            show: false      
        };
    },
    methods: {
        hide(){
            console.log(1);
            this.show = false;
        }
    },
    components: {
        dialogs
    }
};
</script>

<style>

</style>
