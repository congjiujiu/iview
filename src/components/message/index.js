import Notification from '../base/notification';

const prefixCls = 'ivu-message';
const iconPrefixCls = 'ivu-icon';
const prefixKey = 'ivu_message_key_';

let defaultDuration = 1.5;
let top;
let messageInstance;
let key = 1;

const iconTypes = {
    'info': 'ion-close-round',
    'success': 'ion-close-round',
    'warning': 'ion-close-round',
    'error': 'ion-close-round',
    'loading': 'load-c'
};

function getMessageInstance() {
    messageInstance = messageInstance || Notification.newInstance({
        prefixCls: prefixCls,
        style: {
            top: `${top}px`
        }
    });

    return messageInstance;
}

function notice(content, duration = defaultDuration, type, onClose) {
    if (!onClose) {
        onClose = function() {

        }
    }
    const iconType = iconTypes[type];

    // if loading
    const loadCls = type === 'loading' ? ' ivu-load-loop' : '';

    let instance = getMessageInstance();

    instance.notice({
        key: `${prefixKey}${key}`,
        duration: duration,
        style: {},
        transitionName: 'move-up',
        content: `
            <div class="${prefixCls}-custom-content ${prefixCls}-${type}">
                <span>${content}</span>
                <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}${loadCls}"></i>
            </div>
        `,
        onClose: onClose
    });

    // 用于手动消除
    return (function() {
        let target = key++;

        return function() {
            instance.remove(`${prefixKey}${target}`);
        }
    })();
}

export default {
    info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config(options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration) {
            defaultDuration = options.duration;
        }
    },
    destroy() {
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy();
    }
}