## 说明

> 类似于 lodash 的_.get, 链式引用出错低返回默认值; 使用回调的形式, 具有更好的可读性和代码提示

## 安装

> npm i tank-utils / yarn add tank-utils

## 使用


函数签名:

``` javascript
/**
 * @description 链式调用,出错保护
 * @author anthhub
 * @date 2019-05-25
 * @export
 * @template T
 * @param {T} target
 * @param {(target: T) => any} fn
 * @param {*} [defaultValue=null]
 * @returns {*}
 */
function _get<T>(target: T, fn: (target: T) => any, defaultValue?: any): any;
```


使用方式:

``` javascript
import {_get} from "../dist/index";

const obj = { a: { b: "1111" } };

_get(obj, obj => obj.a.b.c.d, null);
```




