<template>
    <h4>基本</h4>
    <br><br>
    <i-button type="blue">blue</i-button>
    <i-button type="red">red</i-button>
    <i-button type="yellow">yellow</i-button>
    <i-button type="green">green</i-button>
    <i-button type="orange">orange</i-button>
    <i-button type="ghost">ghost</i-button>
    <i-button disabled>Disabled</i-button>
    <br><br>
    <h4>基本按钮组</h4>
    <br><br>
    <Button-group>
        <i-button>取消</i-button>
        <i-button type="ghost">确认</i-button>
        <i-button type="blue">查看</i-button>
        <i-button type="red">删除</i-button>
    </Button-group>
    <Button-group>
        <i-button disabled>昨日</i-button>
        <i-button disabled>今日</i-button>
        <i-button disabled>明日</i-button>
    </Button-group>
    <Button-group>
        <i-button type="blue">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">M</i-button>
        <i-button type="dashed">R</i-button>
    </Button-group>
    <br><br>
    <h4>配合图标</h4>
    <br><br>
    <Button-group>
        <i-button type="blue">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="blue">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group>
        <i-button type="blue" icon="ios-skipbackward"></i-button>
        <i-button type="blue" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group>
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <br><br>
    <h4>圆角</h4>
    <br><br>
    <Button-group shape="circle">
        <i-button type="blue">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="blue">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group shape="circle">
        <i-button type="blue" icon="ios-skipbackward"></i-button>
        <i-button type="blue" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <Button-group shape="circle" size="large">
        <i-button type="blue" icon="ios-skipbackward"></i-button>
        <i-button type="blue" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle" size="large">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <Button-group shape="circle" size="small">
        <i-button type="blue" icon="ios-skipbackward"></i-button>
        <i-button type="blue" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle" size="small">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <br><br>
    <i-button type="blue" icon="ios-search" shape="circle" size="small"></i-button>
    <i-button type="blue" icon="ios-search" shape="circle"></i-button>
    <i-button type="blue" icon="ios-search" shape="circle" size="large"></i-button>
    <i-button type="blue" icon="ios-search" shape="circle" size="small">搜索</i-button>
    <i-button type="blue" icon="ios-search" shape="circle">搜索</i-button>
    <i-button type="blue" icon="ios-search" shape="circle" size="large">搜索</i-button>
    <br><br>
    <i-button>Default</i-button>
    <i-button type="blue">Primary</i-button>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="dashed">Dashed</i-button>
    <i-button type="text">文字按钮</i-button>
    <i-button type="text" disabled>文字按钮</i-button>
    <br><br>
    <i-button type="blue" size="large">Large</i-button>
    <i-button type="blue">Default</i-button>
    <i-button type="blue" size="small">Small</i-button>
    <br><br>
    <i-button>Default</i-button>
    <i-button disabled>Default(Disabled)</i-button>
    <br><br>
    <i-button type="blue">Primary</i-button>
    <i-button type="blue" disabled>Primary(Disabled)</i-button>
    <br><br>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="ghost" disabled>Ghost(Disabled)</i-button>
    <br><br>
    <i-button type="dashed">dashed</i-button>
    <i-button type="dashed" disabled>dashed(Disabled)</i-button>
    <br><br>
    <i-button type="blue" shape="circle" icon="ios-search"></i-button>
    <i-button type="blue" icon="ios-search">搜索</i-button>
    <br><br>
    <i-button type="ghost" shape="circle">
        <Icon type="search"></Icon>
    </i-button>
    <i-button type="ghost">
        <Icon type="search"></Icon>
        搜索
    </i-button>
    <i-button type="ghost" shape="circle" size="large">
        <Icon type="search"></Icon>
    </i-button>
    <i-button type="ghost" shape="circle" size="small">
        <Icon type="search"></Icon>
    </i-button>
    <br><br><br>
    <i-button type="blue" loading>Loading...</i-button>
    <i-button type="blue" loading size="large">Loading...</i-button>
    <i-button type="blue" loading size="small">Loading...</i-button>
    <i-button type="blue" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </i-button>
    <i-button type="blue" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </i-button>
    <h4>基本</h4>
    <Button-group size="large">
        <i-button>取消</i-button>
        <i-button type="blue">确定</i-button>
    </Button-group>
    <Button-group>
        <i-button type="blue">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">R</i-button>
        <i-button type="dashed">R</i-button>
    </Button-group>
    <h4>配合图标</h4>
    <Button-group>
        <i-button type="blue">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="blue">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group>
        <i-button type="blue" icon="cloud"></i-button>
        <i-button type="blue" icon="upload"></i-button>
    </Button-group>
</template>
<script>
    import {
        iButton,
        Icon,
        Input,
        Switch,
        Radio,
        Checkbox,
        InputNumber,
        Row,
        Col,
        Page
    } from 'iview';
    const ButtonGroup = iButton.Group;
    const RadioGroup = Radio.Group;
    const CheckboxGroup = Checkbox.Group;

    export default {
        components: {
            iButton,
            ButtonGroup,
            Icon,
            iInput: Input,
            Switch,
            Radio,
            RadioGroup,
            Checkbox,
            CheckboxGroup,
            InputNumber,
            Row,
            iCol: Col,
            Page
        },
        props: {

        },
        data() {
            return {
                loading: false,
                loading2: false,
                model6: ''
            }
        },
        methods: {
            toLoading() {
                this.loading = true;
            },
            toLoading2() {
                this.loading2 = true;
            }
        }
    }
</script>