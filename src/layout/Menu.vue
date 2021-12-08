<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    :style="{height: menuHeight}"
    background-color="#0f9095"
    text-color="#ffffff"
    @select="selectNavBar"
    :collapse="isCollapse"
    :unique-opened="true">
    <el-menu-item index="/home" key="/home">
      <i class="el-icon-s-home" />
      <span slot="title">首页</span>
    </el-menu-item>
    <template v-for="menu in navMenus">
      <el-submenu v-if="menu.children.length > 0" :index="menu.path" :key="menu.path">
        <template slot="title">
          <i :class="menu.icon" />
          <span slot="title">{{ menu.label }}</span>
        </template>
        <template v-for="menu1 in menu.children">
          <el-submenu v-if="menu1.children.length > 0" :index="menu1.path" :key="menu1.path">
            <template slot="title">
              <i :class="menu1.icon" />
              <span slot="title">{{ menu1.label }}</span>
            </template>
            <el-menu-item v-for="menu2 in menu1.children" :index="menu2.path" :key="menu2.path">
              <i :class="menu2.icon" />
              <span slot="title">{{ menu2.label }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="menu1.path" :key="menu1.path">
            <i :class="menu1.icon" />
            <span slot="title">{{ menu1.label }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="menu.path" :key="menu.path">
        <i :class="menu.icon" />
        <span slot="title">{{ menu.label }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      defaultActive: ''
    }
  },
  computed: {
    ...mapState({
      navMenus: (state) => state.menu.navMenus,
      activeMenu: (state) => state.menu.activeMenu,
      menuName: (state) => state.menu.activeMenuName,
      isCollapse: (state) => state.menu.isCollapse
    }),
    menuHeight: function () {
      return window.innerHeight - 60 + 'px'
    }
  },
  created () {
    const { actIndex, actPath } = this.getActiveMenu()
    this.$store.dispatch('setActiveMenu', actPath)
    this.$store.dispatch('setMenu', this.navMenus[actIndex].children)
  },
  methods: {
    getActiveMenu () {
      this.defaultActive = this.$route.path
      let actIndex = 0
      let actPath = '/home'
      let bool = false
      if (Array.isArray(this.navMenus)) {
        this.navMenus.forEach((item, index) => {
          if (bool) {
            return -1
          }
          item.children.forEach((men) => {
            if (men.children.length > 0) {
              men.children.forEach((child) => {
                if (child.path === this.defaultActive) {
                  bool = true
                  actIndex = index
                  actPath = item.path
                  return -1
                }
              })
            } else if (men.path === this.defaultActive) {
              bool = true
              actIndex = index
              actPath = item.path
              return -1
            }
          })
        })
      }
      return { actIndex, actPath }
    },
    selectNavBar (key, keyPath) {
      this.navMenus.forEach((item) => {
        if (item.path === key) {
          this.$store.dispatch('setActiveMenuName', item.label)
        } else {
          if (item.children.length > 0) {
            item.children.forEach((item1) => {
              if (item1.path === key) {
                this.$store.dispatch('setActiveMenuName', item1.label)
              } else {
                if (item1.children.length > 0) {
                  item1.children.forEach((item2) => {
                    if (item2.path === key) {
                      this.$store.dispatch('setActiveMenuName', item2.label)
                    } else {
                      if (item2.children.length > 0) {
                        item2.children.forEach((item3) => {
                          if (item3.path === key) {
                            this.$store.dispatch('setActiveMenuName', item3.label)
                          }
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        }
      })
      this.$router.push(key)
      this.$store.dispatch('setActiveMenu', key)
    }
  }
}
</script>

<style lang="scss">
.el-menu{
  border-right: solid 0px #e6e6e6;
}
.el-menu-item.is-active {
  background-color: #0d7377 !important;
  color: #fff !important;
}
.el-menu-item i {
  color: #ffffff;
}
.el-submenu__title i {
  color: #ffffff;
}
</style>
