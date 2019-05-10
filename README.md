# graduation-design

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

关于该科研管理系统的一些注意事项

- 添加管理员弹窗组件的使用(add-admin.vue)。由于该组件使用了 props 传值来管理组件的打开和关闭，但是关闭按钮在组件内，props 属性不可被组件本身修改（vue 的限制，其实也是规范需要的），因而采用了 bus event 的方式，使用该组件的父组件需要在 methods 和 mounted 生命周期内加这两段代码

```javascript
// isShowAddAdmin是data属性中控制添加管理员子组件显示的值
methods: {
  closeAddAdminBox: function() {
    this.isShowAddAdmin = true
  }
}
mounted() {
  bus.$on('closeAddAdmin', closeAddAdminBox)
}
```
