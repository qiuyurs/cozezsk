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
  description: "手把手带你学扣子Coze知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: convertDocsToSidebars(docs),
  },
  ignoreDeadLinks: true,
})
