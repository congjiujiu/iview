<template>
    <i-button type="blue" @click="instance('info')">消息</i-button>
    <i-button type="green" @click="instance('success')">成功</i-button>
    <i-button type="yellow" @click="instance('warning')">警告</i-button>
    <i-button type="red" @click="instance('error')">错误</i-button>
</template>
<script>
    export default {
        methods: {
            instance(type) {
                const title = '对话框的标题';
                const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    }
</script>