// 图标命名风格转换
export const toPascalCase = (value: string): string => {
  return value.replace(/(^\w|-\w)/g, function (current: string): string {
    return current.slice(-1).toUpperCase();
  });
}
