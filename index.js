#!/usr/bin/env node
const { getCache, loginEnter, loginFn } = require('./common/index');
const { Command } = require('commander');


const program = new Command();
program.version('0.0.1');

program
  .option('-p, --publish', '发布项目')

program.parse(process.argv);

const options = program.opts();

const publish = (op) => {
  if (op.publish) {
    const data = getCache();
      // 有token
      if(data) {
        loginFn(JSON.parse(data));
        return;
      };
      // 无token
      loginEnter();
  };
};

publish(options);