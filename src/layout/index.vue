<template>
  <el-container>
    <el-aside class="aside-context" :style="{'min-height': asideHeight, 'width': menuWidth}">
      <div class="aside-header">
        <img :src="logo" class="aside-logo">
        <div v-show="!isCollapse" class="aside-title">&nbsp;面包屑Dome</div>
      </div>
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header style="padding: 0;">
        <Header></Header>
      </el-header>
      <div class="header-breadcrumb">
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item @click.native="clickBreadcrumb('/home')" style="cursor: pointer;">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeMenu.indexOf('Traceability') !== -1 && activeMenu !== '/page/keyPartsTraceability'" @click.native="clickBreadcrumb('/page/qualityInformationTraceability')" style="cursor: pointer;">业务视图</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeMenu.indexOf('/basic/') !== -1" @click.native="clickBreadcrumb('/basic/user')" style="cursor: pointer;">系统管理</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeMenu !== '/home'">{{ menuName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-main class="menu-nav">
        <router-view :key="key"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import Header from './Header'
import Menu from './Menu'

export default {
  components: {
    Header,
    Menu
  },
  data () {
    return {
      logo: require('@/assets/logo.png')
    }
  },
  computed: {
    ...mapState({
      navMenus: (state) => state.menu.navMenus,
      menuWidth: (state) => state.menu.menuWidth + 'px',
      isCollapse: (state) => state.menu.isCollapse,
      activeMenu: (state) => state.menu.activeMenu,
      menuName: (state) => state.menu.activeMenuName
    }),
    asideHeight: function () {
      return window.innerHeight + 'px'
    },
    mainHeight: function () {
      return window.innerHeight - 112 + 'px'
    },
    key () {
      return this.$route.fullPath
    }
  },
  methods: {
    clickBreadcrumb (key) {
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

<style scoped>
  .aside-context {
    background: #0f9095;
  }
  .aside-header {
    height: 60px;
    background: #1bb0b6;
  }
  .aside-logo {
    height: 50px;
    width: 50px;
    margin: 5px 7px;
    float: left;
  }
  .aside-title {
    height: 60px;
    line-height: 60px;
    color: #fff;
    width: 190px;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
  .menu-nav {
    padding: 0;
    width: 100%;
  }
  .header-breadcrumb {
    width: 100%;
    height: 49px;
    border-bottom: 1px #e6e6e6 solid;
  }
  .breadcrumb {
    height: 20px;
    margin: 15px;
  }
</style>
