<style>
    .example-div {
        margin: 40px 60px;
    }
    
    .example-div form {
        margin-bottom: 10px;
    }
</style>
<template>
    <div class="example-div">
        <form>
            <i-input :value.sync="value1"></i-input>
        </form>
        <Poptip placement="top-end">
            <i-button type="blue">Dynamic Popover</i-button>
            <div slot="content">
                <p>{{value1}}</p>
            </div>
        </Poptip>
    </div>
    <div class="example-div">
        <Poptip placement="top-end">
            <i-button type="blue">Popover With template</i-button>
            <div slot="content">
                <img src="https://avatars1.githubusercontent.com/u/5436704?v=3&s=96" style="width: 40px; height: 40px;" alt="">
                <h1>User</h1>
                <h4 style="margin-top: 50px;">Infomation</h4>
            </div>
        </Poptip>
    </div>
    <div class="example-div">
        <Poptip content="On the top!" placement="top">
            <i-button type="blue">Top</i-button>
        </Poptip>
        <Poptip content="On the left!" placement="left">
            <i-button type="green">Left</i-button>
        </Poptip>
        <Poptip content="On the right!" placement="right">
            <i-button type="red">Right</i-button>
        </Poptip>
        <Poptip content="On the bottom!" placement="bottom">
            <i-button type="blue">Bottom</i-button>
        </Poptip>
    </div>
    <div class="example-div">
        <Poptip trigger="hover" content="show on hover" placement="top-end">
            <i-button type="blue">hover</i-button>
        </Poptip>
        <Poptip trigger="click" content="show on click" placement="top-end">
            <i-button type="blue">click</i-button>
        </Poptip>
        <Poptip trigger="focus" content="show on focus" placement="top-end">
            <i-button type="blue">focus</i-button>
        </Poptip>
    </div>
    <div class="example-div">
        <Poptip trigger="click" content="show on hover" placement="top">
            <i-input placeholder="click here" ></i-input>
        </Poptip>
    </div>
    <div class="example-div">
        <Poptip trigger="hover" title="title" content="this is content" placement="top">
            <i-button type="blue">title</i-button>
        </Poptip>
    </div>
</template>
<script>
    import {
        Tooltip,
        iButton,
        Row,
        iCol,
        Poptip,
        iSelect,
        iOption,
        Message,
        Icon,
        Input
    } from 'iview';

    export default {
        components: {
            Tooltip,
            iButton,
            Row,
            iCol,
            Poptip,
            iSelect,
            iOption,
            Message,
            Icon,
            Input
        },
        props: {

        },
        data() {
            return {
                value1: ''
            }
        },
        computed: {

        },
        methods: {
            ok() {
                Message.info('ok');
            },
            cancel() {
                Message.info('cancel');
            }
        }
    }
</script>