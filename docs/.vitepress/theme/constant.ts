import { CategoryInfo } from "./type_def";

// 定义一个分类英文名和中文名的映射,text 表示category 的英文名,name 表示category 的中文名,isHome 标示是否是首页显示的分类
export const categoryMap: CategoryInfo[] = [
  {
    text: "hot",
    name: "热门",
    isHome: true,
  },
  {
    text: "video",
    name: "技术",
    isHome: true,
  },
  {
    text: "lifestyle",
    name: "生活",
    isHome: true,
  },
  {
    text: "work",
    name: "工作",
    isHome: true,
  },
];

//一些配置
export const BlogConfig = {
  arttalk: {
    server: "",
  },
};
