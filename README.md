## ct-adc-dialog

a dialog component for vue,with bootstrap style,have a try!

## 功能点

1.组件模式
2.插件模式
3、自定义内容

## 使用

从npm安装ct-adc-dialog

```
npm install ct-adc-dialog --save
```
在代码中使用

```
<template>
    <ct-dialog v-model="isShow">
</template>

<script>
import ctDialog from 'ct-adc-dialog';

export default {
    data(){
        return {
            isShow: false
        }
    },
    compnents: {
        ctDialog
    }
}
</script>

或者 插件模式

import Vue from 'vue';
import {DialogPlugin} from 'ct-adc-dialog';

Vue.use(DialogPlugin);

然后在 组件中

this.$dialog.show({
    title: '',
    content: '',
    onShow(){},
    onHide(){}
})

```

## props

参数 |  类型 | 默认值 | 可选值 | 描述 |
--- |  --- | --- | ---- | ---
v-model |  Boolean | false | - | 控制显示 |
width |  String | 30% | - | 容器宽度 |
title |  String | 30% | - | 标题 |
content |  String | 30% | - | 内容 |

## slots

name |   描述
--- |  --- 
body |  -
foot |  -

## 事件

事件名称 |  回调参数 | 描述
--- |  --- | --- 
on-show | - | 显示事件
on-hide | - | 隐藏事件

## 更新日志

[更新日志](https://github.com/ct-adc/ct-adc-dialog/blob/dev/CHANGELOG.md)


