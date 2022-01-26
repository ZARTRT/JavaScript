/**
 * 深拷贝
 *
 * 缺陷: 比如拷贝Symbol、拷贝函数、循环引用
 */
export const deepCopyJson = source => {
  return JSON.parse(JSON.stringify(source));
};

/**
 * 请试着实现一个可以解决 deepCopyJson 中不能拷贝的Symbol、循环引用问题的拷贝函数，
 * 并且保证copy.test.js中的单元测试顺利通过。
 */
export const deepCopy = source => {};
