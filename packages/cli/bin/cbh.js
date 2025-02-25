#!/usr/bin/env node
const {program} = require('commander')

program
  .version(`@cbh/cli ${require('../package').version}`)
  .usage('<command> [options]')

program
.command('create <项目名>')
.description('通过炳翰得脚手架创建一个新项目')
.option('-n, --no-git', '跳过git仓库初始化')
.action((name, options) => {
console.log("脚手架创建中...", name, options)
})

program.parse(process.argv)