import { DefaultTheme, defineConfig } from 'vitepress';
const docs = require("../../docs.json")
/**
 * Convert feishu-pages's docs.json into VitePress's sidebar config
 * @param docs from `docs.json`
 * @returns
 */
const convertDocsToSidebars = (docs: any) => {
  const sidebars: DefaultTheme.SidebarItem[] = [];
  for (const doc of docs) {
    let sidebar: DefaultTheme.SidebarItem = {
      text: doc.title,
      link: doc.slug,
    };
    if (doc.children.length > 0) {
      sidebar.items = convertDocsToSidebars(doc.children);
    }
    sidebars.push(sidebar);
  }

  return sidebars;
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "手把手带你学扣子Coze知识库",
  titleTemplate: 'coze开发教程',
  description: "coze 扣子网站专注于 AI 开发教程，内容涵盖 coze 智能体开发、工作流搭建教程、知识库构建指南、数据库在 AI 中的应用等全面知识。提供 coze 扣子从基础到进阶的全流程 AI 开发学习资源，包括智能体构建步骤、工作流设计方法、知识库管理技巧、数据库整合实战等教程内容，助力用户掌握 coze 相关 AI 开发技能。",
  head: [
    [
      'script',
      { charts: 'UTF-8',id:'MXA_COLLECT', src: '//mxana.tacool.com/sdk.js' }
    ],
    [
      'script',
      {},
      `MXA.init({ id: "c1-ztWxIrlt" })`
    ]
  ],
  ignoreDeadLinks: true,
  markdown: {
    // html: false,
    attrs: {
      disable: true
    }
  },
  
  vite: {
    build: {
      sourcemap: false
    },
    plugins: [
      {
        name: 'fix-markdown-chars',
        enforce: 'pre',
        transform(code, id) {
          if (id.endsWith('.md')) {
            // 处理特殊字符转义
            code = code.replace(/。/g, '.');
            // code = code.replace(/</g, '&lt;');
            code = code.replace(/{/g, '&#123;');
            
            // 处理图片链接，替换为占位内容
            code = code.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, url) => {
              // 如果是无法解析的链接，替换为占位图片
              if (url.includes('图片链接')) {
                return `![${alt}](https://picsum.photos/800/400?random=${Math.random()})`;
              }
              return match;
            });
            
            return code;
          }
          return null;
        }
      }
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: convertDocsToSidebars(docs),
  },
})
