import { floyd } from "./3.Day";

const c = {
  value: -4
};

const b = {
  value: 0
};

const a = {
  value: 2
};

const head = {
  value: 3
};

head.dep = a;
a.dep = b;
b.dep = c;
c.dep = a;

test("判断在位置1处发生需循环依赖", () => {
  expect(floyd(head)).toEqual(1);
});
