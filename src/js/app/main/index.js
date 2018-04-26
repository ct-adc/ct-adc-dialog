import Vue from 'vue';
import dg, {DialogPlugin} from '../../../component/index';

Vue.use(DialogPlugin);

new Vue({
    el: '#app',
    data: {
        isShow: false
    },
    components: {
        dg
    },
    methods: {
        showDialog(){
            this.$dialog.show({
                title: '插件形式',
                content: '可以了吗？'
            });
        }
    }
})
;
