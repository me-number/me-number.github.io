/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      babelLoaderOptions(opts) {
        opts.plugins?.unshift('babel-plugin-react-compiler');
      },
    }),
  ],
  html: {
    title: '张文涛',
    meta: {
      description: "一位正在努力钻研技术的全栈开发者，在 0 与 1 之间构建梦想!",
    },
  },
  // 核心修复步骤：强制注入 lang 属性到 html 标签
  tools: {
    htmlPlugin(config) {
      if (typeof config === 'object') {
        config.attributes = {
          ...config.attributes,
          lang: 'zh-CN', // 强制在 HTML 标签添加 lang="zh-CN"
        };
      }
    },
  },
  output: {
    // 如果是自定义域名，使用 '/'；如果是 github.io/repo/，请改为 '/repo/'
    assetPrefix: '/',
  },
});

