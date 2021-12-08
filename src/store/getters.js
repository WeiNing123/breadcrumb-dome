const getters = {
  userInfo: state => state.menu.info,
  navMenus: state => state.menu.navMenus,
  deviceHeight: state => state.menu.deviceHeight,
  isCollapse: state => state.menu.isCollapse,
  menuWidth: state => state.menu.menuWidth
}

export default getters
