// 自定义命令
const customCommand = {
    todo: {}
}

export default class Command {
    constructor(editor) {
        this.editor = editor
    }

    async exec(name, value, cb) {
        const editor = this.editor

        // // 使用 styleWithCSS
        // if (!editor._useStyleWithCSS) {
        //     document.execCommand('styleWithCSS', null, true)
        //     editor._useStyleWithCSS = true
        // }
        // console.log('当前存储的range', editor.selection.curRange)
        // 如果无选区，忽略
        if (!editor.selection.curRange) return

        // 点击菜单触发此事件时，选区已经改变，需要先恢复到上一次的选区，再执行操作
        await new Promise(resolve => {
            setTimeout(() => {
                editor.selection.restoreSelection()
                resolve()
            }, 1000)
        })

        // // 执行
        // const _name = '_' + name
        // if (this[_name]) {
        //     // 有自定义事件
        //     this[_name](value)
        // } else {
        //     // 默认 command
        //     this.execCommand(name, value)
        // }
        await new Promise(resolve => {
            setTimeout(() => {
                this.execCommand(name, value)
                // 修改菜单状态
                editor.menus.updateActive()
    
                // 若命令执行完成，选区的dom结构可能会变化（例如有一行<p>123</p>选择12加粗，变为<p>1<b>23</b></p>）导致range发生改变，需要重新保存range
                editor.selection.saveRange()
                editor.selection.restoreSelection()
    
                if(cb) cb()
                resolve()
            }, name === 'bold' ? 10000 : 1000)
        })

        // // 触发 onchange
        // editor.change && editor.change()
    }
    queryState(name) {
        if(Object.keys(customCommand).includes(name)) {

        } else {
            return this.queryCommandState(name)
        }
    }
    queryCommandState(name) {
        return document.queryCommandState(name)
    }
    execCommand(name, value) {
        console.log(`执行execCommand ${name}，当前真正选区为`,getSelection().getRangeAt(0))
        document.execCommand(name, false, value)
    }
}