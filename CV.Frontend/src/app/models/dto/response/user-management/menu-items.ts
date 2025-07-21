export interface MenuItems {
    menuId: number,
    userTypeId:number,
    menuName : string,
    menuParent: number,
    menuUrl :string,
    menuImgPath : string,
    sortOrder : number,
    children: MenuItems[],
    showInMenu:boolean
}