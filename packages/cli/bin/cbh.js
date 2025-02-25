#! /usr/bin/env node

import { Command } from 'commander'
import createHandler from '../lib/create.js'

const program = new Command();

console.log("换用使用 炳翰 CLI !")

program
.version(`脚手架版本`)
.usage('<command> [options]')


program.command("create <appName>")
.description("创建项目")
.action((appName) => createHandler(appName))


program.parse(process.argv)

