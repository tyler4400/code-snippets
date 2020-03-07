/**
 * 唤起软键盘后会遮挡输入框
 * 当 input 或 textarea 获取焦点后，软键盘会遮挡输入框。
 * 解决办法：全局监听 window 的 resize 事件，当触发事件后，
 * 获取当前 active 的元素并检验是否为 input 或 textarea 元素，
 * 如果是则调用元素的 scrollIntoViewIfNeeded 即可。
 */
window.addEventListener('resize', () => {
    // 判断当前 active 的元素是否为 input 或 textarea
    if (
        document.activeElement!.tagName === 'INPUT' ||
    document.activeElement!.tagName === 'TEXTAREA'
) {
        setTimeout(() => {
            // 原生方法，滚动至需要显示的位置
            document.activeElement!.scrollIntoView();
        }, 0);
    }
});

/**
 * 唤起键盘后 position: fixed;bottom: 0px; 元素被键盘顶起
 * 解决办法：全局监听 window 的 resize 事件，当触发事件后，
 * 获取 id 名为 fixed-bottom 的元素（可提前约定好如何区分定位在窗口底部的元素），
 * 将其设置成 display: none。键盘收回时，则设置成 display: block;。
 * @type {number}
 */
const clientHeight = document.documentElement.clientHeight;
window.addEventListener('resize', () => {
    const bodyHeight = document.documentElement.clientHeight;
    const ele = document.getElementById('fixed-bottom');
    if (!ele) return;
    if (clientHeight > bodyHeight) {
        (ele as HTMLElement).style.display = 'none';
    } else {
        (ele as HTMLElement).style.display = 'block';
    }
});
