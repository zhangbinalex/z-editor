import Command from '@/core/command'
import Menus from '@/core/menu'
import Selection from '@/core/selection'
import defaultConfig from '@/config'


class Editor { 
    constructor(selector = () => { throw new Error('请传入selector')}, options = {}) {
        this.selector = selector
        // 初始化配置对象
        this.config = {
            ...defaultConfig,
            ...options
        }
    }

    create() {
        this.initDom();
        this.initCommand();
        this.initMenus();
        this.initSelection();
        this.initEventListeners();
    }


    initDom() {
        let contanierEle = document.querySelector(this.selector)
        contanierEle.classList.add('z-editor-container')

        let menuEle = document.createElement('div')
        menuEle.classList.add('z-editor-menu')

        let contentEle = document.createElement('div')
        contentEle.classList.add('z-editor-content')
        contentEle.setAttribute('contenteditable', 'true')
        contentEle.innerHTML = `<p><br></p>`

        contanierEle.appendChild(menuEle)
        contanierEle.appendChild(contentEle)

        this.contanierEle = contanierEle
        this.menuEle = menuEle
        this.contentEle = contentEle

    }
    initCommand() {
        this.cmd = new Command(this)
    }
    initMenus() {
        this.menus = new Menus(this)
    }
    initSelection() {
        this.selection = new Selection(this)
    }
    initEventListeners() {
        let self = this;
        let contentEle = this.contentEle
        function handleSelectionChange(e){
            console.log('光标可能改变')
            setTimeout(() => {
                self.selection.saveRange()
                self.menus.updateActive()
            }, 0)
        }
        function handleLeave() {
            console.log('leave1')
            handleSelectionChange()
        }
        // 鼠标点击完成和键盘输入完成时可能会改变选区
        contentEle.addEventListener('mousedown', () => {
            // 如果按下鼠标时移出编辑区域，也需要实时记录，否则移出松开鼠标后无法监听到选区改变
            contentEle.addEventListener('mouseleave', handleLeave)
        })
        contentEle.addEventListener('mouseup', () => {
            handleSelectionChange()
            contentEle.removeEventListener('mouseleave', handleLeave) // 在编辑区内点击取消mouseleave监听
        })
        contentEle.addEventListener('keyup',() => {
            handleSelectionChange()
            contentEle.removeEventListener('mouseleave', handleLeave) // 在编辑区内输入同样取消mouseleave监听
        })
    }
}

export default Editor