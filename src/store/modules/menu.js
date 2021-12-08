const menu = {
  state: {
    isCollapse: false,
    menuWidth: 256,
    info: {id: 1, userCode: 'admin', userName: '管理员'},
    menus: [],
    navMenus: [
      {
        id: 1,
        label: '业务视图',
        path: '/view',
        icon: 'icon iconfont icon-yewu',
        children: [
          {
            id: 9,
            label: '质量信息追溯',
            path: '/page/qualityInformationTraceability',
            icon: '',
            children: []
          },
          {
            id: 10,
            label: '供应链信息追溯',
            path: '/page/supplyChainInformationTraceability',
            icon: '',
            children: []
          },
          {
            id: 11,
            label: '生产信息追溯',
            path: '/page/productionInformationTraceability',
            icon: '',
            children: []
          },
          {
            id: 12,
            label: '销售及售后服务信息追溯',
            path: '/page/salesInformationTraceability',
            icon: '',
            children: []
          }
        ]
      },
      {
        id: 2,
        label: '向前追溯',
        path: '/page/forwardTrace',
        icon: 'icon iconfont icon-backward',
        children: []
      },
      {
        id: 3,
        label: '向后追溯',
        path: '/page/backwardTrace',
        icon: 'icon iconfont icon-forward',
        children: []
      },
      {
        id: 4,
        label: '一键查询',
        path: '/page/oneClickQuery',
        icon: 'icon iconfont icon-icon_yijianchaxun',
        children: []
      },
      {
        id: 13,
        label: '关键件追溯',
        path: '/page/keyPartsTraceability',
        icon: 'icon iconfont icon-guanjianci',
        children: []
      },
      {
        id: 5,
        label: '系统管理',
        path: '/basic',
        icon: 'el-icon-setting',
        children: [
          {
            id: 6,
            label: '用户管理',
            path: '/basic/user',
            icon: '',
            children: []
          },
          {
            id: 7,
            label: '角色管理',
            path: '/basic/role',
            icon: '',
            children: []
          },
          {
            id: 8,
            label: '部门管理',
            path: '/basic/org',
            icon: '',
            children: []
          }
        ]
      }
    ],
    activeMenu: '/home',
    activeMenuName: '首页',
    deviceHeight: window.innerHeight - 90
  },

  mutations: {
    SET_ISCOLLAPSE: (state, isCollapse) => {
      state.isCollapse = isCollapse
    },
    SET_MENUWIDTH: (state, menuWidth) => {
      state.menuWidth = menuWidth
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    },
    SET_NAVMENUS: (state, menus) => {
      state.navMenus = menus
    },
    SET_ACTIVEMENU: (state, menus) => {
      state.activeMenu = menus
    },
    SET_ACTIVEMENUNAME: (state, menus) => {
      state.activeMenuName = menus
    },
    SET_DeviceHeight: (state, deviceHeight) => {
      state.deviceHeight = deviceHeight
    }
  },

  actions: {
    setIsCollapse ({ commit }, isCollapse) {
      return new Promise(resolve => {
        commit('SET_ISCOLLAPSE', isCollapse)
      })
    },
    setMenuWidth ({ commit }, menuWidth) {
      return new Promise(resolve => {
        commit('SET_MENUWIDTH', menuWidth)
      })
    },
    setMenu ({ commit }, menu) {
      return new Promise(resolve => {
        commit('SET_MENUS', menu)
      })
    },
    setNavMenu ({ commit }, menu) {
      return new Promise(resolve => {
        commit('SET_NAVMENUS', menu)
      })
    },
    setActiveMenu ({ commit }, menu) {
      return new Promise(resolve => {
        commit('SET_ACTIVEMENU', menu)
      })
    },
    setActiveMenuName ({ commit }, menu) {
      return new Promise(resolve => {
        commit('SET_ACTIVEMENUNAME', menu)
      })
    },
    setDeviceHeight ({ commit }, deviceHeight) {
      return new Promise(resolve => {
        commit('SET_DeviceHeight', deviceHeight)
      })
    }
  }
}

export default menu
