import { select, Separator } from "@inquirer/prompts";

export default async function (appName) {
  console.log("这是一个创建项目的处理函数..., 用户要创建的是 " + appName);

  // 让用户选择包管理器
  let packageManager = await getPackageManager()
  console.log(`哇哦，你选择了 ${packageManager}, 厉害`);
}

async function getPackageManager() {
  const answer = await select({
    message: "选择一个牛逼的包管理器",
    choices: [
      {
        name: "npm",
        value: "npm",
        description: "npm is the most popular package manager",
      },
      {
        name: "yarn",
        value: "yarn",
        description: "yarn is an awesome package manager",
      },
      {
        name: "pnpm",
        value: "pnpm",
      },
      new Separator(),
      {
        name: "cnpm",
        value: "cnpm",
        disabled: "(cnpm 不给用哦！)",
      },
    ],
  });
  return answer;
}
