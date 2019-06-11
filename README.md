## 说明

> 常用工具函数; 有ts的类型推断; 持续更新; 兼容browser和node

## 安装

> npm i tank-utils / yarn add tank-utils

## 使用


函数签名:

``` javascript
/**
 * @description 链式调用,出错保护,支持lodash字符串模式和回调函数,推荐函数式
 * @author anthhub
 * @date 2019-06-01
 * @export
 * @template T
 * @param {T} target
 * @param {(string | { (target: T): any })} fn
 * @param {*} [defaultValue=null]
 * @returns {*}
 */
function pick(target, fn, defaultValue) 

/**
 * @description 延时函数, 返回一个promise, 配合async/await使用更佳
 * @author anthhub
 * @date 2019-06-01
 * @export
 * @param {number} [time=0]
 * @returns
 */
function wait(time)

/**
 * @description 函数节流
 * @author anthhub
 * @date 2019-06-01
 * @export
 * @template T
 * @param {T} fn
 * @param {number} [delay=0]
 * @returns {T}
 */

/**
 * @description 函数防抖
 * @author anthhub
 * @date 2019-06-01
 * @export
 * @template T
 * @param {T} fn
 * @param {number} [delay=0]
 * @returns {T}
 */
function debounce(fn, delay) 

/**
 * @description 毫秒数转字符串
 * @author anthhub
 * @date 2019-06-02
 * @export
 * @param {number} time
 * @returns {string}
 */
function timeToLocalStr(time) 
```


使用实例:

``` javascript
import { pick } from "tank-utils";

const obj = { a: { b: "1111" } };


pick(obj, 'a.b.c.d', null);
pick(obj, obj => obj.a.b.c.d, null);  //推荐函数式方式


//常用方法可以应用到全局, 以browser为例, 在入口文件index里面
import { pick } from "tank-utils";
window.pick = pick  //这样全局都可以访问了

```




