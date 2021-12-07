#!/usr/bin/env node
const { isCache, setCache } = require('./common/index');

const { Command } = require('commander');


const program = new Command();
program.version('0.0.1');

program
  .option('-p, --publish', '发布项目')

program.parse(process.argv);

const options = program.opts();
if (options.publish) {
    console.log('发布')
    if(isCache()) return;
    setCache('123123');
};