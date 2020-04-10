import { isPlaceholderSpace } from '@/utils'

export default class Selection {
    constructor(editor) {
        this.editor = editor;
        this.curRange = null
        this.isCollapsed = true
        // setInterval(() => {
        //     let node = document.createElement('span')
        //     node.innerHTML = '&#8203;'
        //     console.log(node.innerHTML === this.curRange.commonAncestorContainer.nodeValue)

        //     //console.log(this.curRange.commonAncestorContainer, textNode, this.curRange.commonAncestorContainer.nodeValue)
        // }, 3000)
    }
    // 存储当前选区range, 无参数表示把当前selection中的range存储为curRange， 有参数则直接使用参数range替换
    saveRange(_range) {
        if(_range) {
            this.curRange = _range
            // console.log(_range.startContainer === _range.endContainer , _range.startOffset === _range.endOffset)
            this.isCollapsed = _range.startContainer === _range.endContainer && _range.startOffset === _range.endOffset
            return
        }

        let selection = getSelection()
        if(selection.rangeCount === 0) return
        let range = selection.getRangeAt(0)
        this.isCollapsed = selection.isCollapsed // 设置选择是否折叠
        this.curRange = range
        console.log('保存选区range为this.curRange', range, this.curRange)
    }


    // 恢复选区
    restoreSelection() {
        console.log('恢复选区为之前保存的range')
        const selection = getSelection()
        selection.removeAllRanges()
        selection.addRange(this.curRange)
    }
    // 创建一个空白（即 &#8203 字符）选区，目的是保持当前位置加粗等状态，否则点击加粗光标切换再切回时之前设置的加粗就会失效
    async insertSpaceRange() {
        console.log('插入空白')
        const editor = this.editor
        const range = this.curRange

        if (!range) return
        
        // 若选区不是折叠的，不需要创建空白选区
        if (!this.isCollapsed) return

        if (isPlaceholderSpace(range.commonAncestorContainer)) {
            console.log('选区在空白内', 999)
            range.setStart(range.endContainer, range.endOffset - 1)
            // range修改后与curRange不同步,需要手动存储
            this.saveRange(range)
            return
        }

        try {
            // 插入 &#8203
            await editor.cmd.exec('insertHTML', '&#8203;')
            
            // 修改 offset 位置
            range.setEnd(range.endContainer, range.endOffset + 1)
            console.log('插入html完成', 555555, range)
            // range修改后与curRange不同步,需要手动存储
            this.saveRange(range)
        } catch (ex) {
            console.log(ex)
            // 部分情况下会报错，兼容一下
        }
    }

    // 折叠选区，默认折叠到末尾
    collapseCurRange(toStart = false) {
        const range = this.curRange
        if (range) {
            range.collapse(toStart)
            this.saveRange(range) // 折叠后也需要手动存储
        }
    }
}