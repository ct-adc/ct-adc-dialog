import DialogComponent from './main';

const mergeOptions = function(vm, options) {
    const defaults = {};

    for (const i in vm.$options.props) {
        if (i !== 'value') {
            defaults[i] = vm.$options.props[i].default;
        }
    }
    const _options = Object.assign({}, defaults, options);

    for (const i in _options) {
        vm[i] = _options[i];
    }
};

const DialogPlugin = {
    install(vue){
        const DialogConstructor = vue.extend(DialogComponent);
        const $vm = new DialogConstructor({
            el: document.createElement('div')
        });

        document.body.appendChild($vm.$el);

        vue.prototype.$dialog = {
            show(options){
                if (typeof options === 'object'){
                    mergeOptions($vm, options);
                } else if (typeof options === 'string') {
                    $vm.content = options;
                }

                this.watcher && this.watcher();

                this.watcher = $vm.$watch('isShow', val => {
                    val && options.onShow && options.onShow($vm);

                    if (val === false && options.onHide){
                        options.onHide($vm);
                        this.watcher && this.watcher();
                    }
                });

                $vm.isShow = true;
            },
            hide(){
                $vm.isShow = false;
                $vm.nextTick(() => {
                    this.watcher && this.watcher();
                    this.watcher = null;
                });
            }
        };
    }
};

export default DialogComponent;
export {DialogPlugin};

