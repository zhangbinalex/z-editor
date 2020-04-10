import Bold from '@/core/menu/Bold'

const MENU_CONFIG = {
    bold: {
        class: Bold
    }
}

export default class Menu {
    constructor(editor) {
        this.menus = {}
        this.editor = editor
        this.init()
    }

    init() {
        let menus = this.editor.config.menus
        let editor = this.editor
        console.log(menus)
        // 初始化菜单
        menus.forEach(menuName => {
            console.log(MENU_CONFIG)
            let MenuClass = MENU_CONFIG[menuName].class;
            console.log(MenuClass)
            this.menus[menuName] = new MenuClass(editor)
        })
    }

    updateActive() {
        for(let menuName in this.menus) {
            let menuItem = this.menus[menuName]
            menuItem.updateActive && menuItem.updateActive()
        }
    }
}