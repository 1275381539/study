### 1、cli2创建项目 
` vue init webpack vuecli2test (vuecli2test --> 项目名称)`

``` 
    Project name (vuecli2test)   -->  项目名称
    Project description (A Vue.js project)  -->  项目描述
    Author (1275381539 <1275381539@qq.com>) -->  项目作者
    Vue build (Use arrow keys)  -->  两种编译模式
    >   Runtime + Compiler: recommended for most users   
        Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere
    Install vue-router? (Y/n)  -->  是否需要安装路由
    Use ESLint to lint your code? (Y/n)  -->  对js代码格式的规范进行限制
    Set up unit tests (Y/n)  -->  单元测试
    Setup e2e tests with Nightwatch? (Y/n)  --> 自动化测试
    Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)  --> 项目的管理，使用npm 还是 yard
    >   Yes, use NPM
        Yes, use Yarn
        No, I will handle that myself
    
```

---

### 2、Runtime + Compiler 和 Runtime-only的区别

#### 渲染过程
+ Runtime + Compiler  template -> ast -> render -> vdom -> ui
+ Runtime-only  render -> vdom -> ui

* 结论： Runtime-only 性能更高，打包以后代码体积更小
---

### 3、 cli3创建项目
` vue create vuecli3test `

```
    Please pick a preset: (Use arrow keys)
    >   default (babel, eslint)  --> 默认配置
        Manually select features --> 手动设置
    Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
    >   (*) Babel
        ( ) TypeScript
        ( ) Progressive Web App (PWA) Support  
        ( ) Router
        ( ) Vuex
        ( ) CSS Pre-processors
        ( ) Linter / Formatter
        ( ) Unit Testing
        ( ) E2E Testing
    Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys) --> 配置文件选择单独存放还是在package.json中配置 （一般都是选择单独存放）
    >   In dedicated config files
        In package.json
    Save this as a preset for future projects? (y/N)  --> 将上面设置的配置保存，下次创建项目时，第一步会多个选择
    Save preset as:  --> 上面的配置命名

