
export default class Bold {
    constructor(editor) {
        console.log(editor,123)
        this.editor = editor
        let elem = document.createElement('div')
        elem.classList.add('z-editor-menu-item')
        elem.innerHTML = `
            <span class="icon-bold iconfont"></span>
        `
        editor.menuEle.appendChild(elem)
        this.elem = elem
        this.active = false
        this.preActive = false

        console.log(this.exec)
        elem.addEventListener('mousedown', this.savePreState)
        elem.addEventListener('click', this.exec)
    }
    exec = async () => {
        console.log('点击bold，触发事件')

        // 如果选区是折叠的，需要插入一个零宽空白符
        let selection = this.editor.selection 
        let isCollapsed = selection.isCollapsed

        if(isCollapsed) { 
            await selection.insertSpaceRange()
            console.log('插入空白完成', 6666666)
        }

        await this.editor.cmd.exec('bold')
        console.log('bold执行完成', 7777777)
        if(isCollapsed) {
            // 先将curRange折叠，再用curRange重设selection
            console.log('折叠')
            selection.collapseCurRange()
            selection.restoreSelection()
        }
    }
    savePreState = () => {
        this.preActive = this.editor.cmd.queryState('bold')
        console.log('keydown', document.queryCommandState('bold'), 89999)
    }
    updateActive() {
        console.log('更新bold状态', this.editor.cmd.queryState('bold'))
        let active = this.editor.cmd.queryState('bold')
        if(active) {
            this.elem.classList.add('z-menu-active')
        } else {
            this.elem.classList.remove('z-menu-active')
        }
        this.active = active
    }
}
