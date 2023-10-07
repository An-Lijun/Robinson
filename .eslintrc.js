module.exports = {
    root: true,
    env: {
        //ESLint 默认不开启任何环境
        browser: false,
        node: true,
        es6: true,
        es2021: true // 支持 es 语法全局变量识别，这是必须的
    },
    globals: {
        //设置设置代码中的全局变量{"变量名": "off"|"readonly"|"writable"}
        // "hah" : "readonly",
        // globalState: "writable"
    },
    parser: '@typescript-eslint/parser',

    parserOptions: {
        //SLint 解析的时候提供一些语言特性的支持，如 ES 语法、JSX。ESLint 默认支持 ES5 语法。
        /* ecmaVersion: 指定 ECMA 语法版本
         *  取值：
         *      - "latest": 使用最新版本，现在 (2021) 等同于 12
         *      - 版本号：3, 5（默认）, 6, 7, 8, 9, 10, 11, 12
         *      - 年份命名法：2015(=6), 2016(=7), 2017(8) ...
         */
        ecmaVersion: 'latest',

        /* sourceType: 脚本类型，普通脚本 或 ES 模块脚本
         *  取值："script"（默认） | "module"(ES 模块脚本）
         */
        sourceType: 'module',

        /* ecmaFeatures: 支持的特性语法*/
        ecmaFeatures: {
            // 支持在全局使用 return
            globalReturn: true,

            // 默认使用严格模式（ES 5 或 以上）
            impliedStrict: true,

            // 支持 JSX 语法
            jsx: false
        }
    },
    // plugins: ['@typescript-eslint'],
    // "off"  或者 0: 关闭规则，常用于关闭某个来自extends中的规则。
    // "warn" 或者 1: 规则校验不通过时发出 warning 提示。
    // "error"  或者 2: 规则校验不通过时发出 error 提示，返回 1，表示 lint 检查不通过。
    rules: {
        'no-console': 'warn', // 使用 "off", "warn", "error",
        'array-callback-return': 'error', // 数组方法必须return
        'constructor-super': 'error', //派生类必须调用super()
        'for-direction': 'error', // 不允许无限循环
        'getter-return': 'warn', //getter写return
        'no-async-promise-executor': 'error', //new Promise中回调函数不能是异步(原因是怕抛错误)
        'no-await-in-loop': 'warn', // 迭代器不能 有await 应该用Promise.all
        'no-class-assign': 'error', //类不能直接被赋值 如 class A{} A="123"--错误 可以 let b= class A{} b="123"
        'no-compare-neg-zero': 'error', // x===-0错误 x===+0错误  可以 Object.is(x, -0)。
        'no-cond-assign': ['error', 'always'], //在判断中不允许赋值
        'no-const-assign': 'error', // 不能给const 改值
        'no-constructor-return': 'error', // 构造函数不能return 任何东西
        'no-constant-binary-expression': 'error', // 防止=== 误判 可以小括号避免
        'no-constant-condition': 'error', // 防止常量判断 如 if(true)
        // "no-debugger":"error",// 不能包含debugger,这里开发时候需要注掉
        'no-dupe-args': 'error', //不允许函数或表达式命名重复
        'no-dupe-class-members': 'error', //不允许类中出现同名方法
        'no-dupe-else-if': 'error', //不允许在一个分支语句中出现相同的elseif 条件
        'no-dupe-keys': 'error', //禁止 对象中出现重复的key
        'no-duplicate-case': 'error', //禁止 switch语句中出现 相同的case
        // 禁止 出现相同模块的import 如 import {a} from './x' import {b} from './x' 应该是 import{a,b} from './x'
        'no-duplicate-imports': 'error',
        'no-empty-character-class': 'error', //不允许正则中是空的 因为不匹配任何东西 如[]
        'no-ex-assign': 'error', //不允许给错误对象赋值
        'no-fallthrough': 'error',
        //switch case如果不break 会到下一个 如果想要这样 必须在 cas加入 注解// falls through
        // 或 是 case 1: case 2: xxx break
        'no-func-assign': 'error', // 不允许将 一个已经定义好的函数赋值
        'no-import-assign': 'error', //不允许对导入的对象进行增删改
        'no-invalid-regexp': 'error', //不允许无效的 正则
        'no-new-native-nonconstructor': 'error', //不允许new symbol new bigint
        'no-obj-calls': 'error', //这条规则不允许将 Math、JSON、Reflect、Atomics 和 Intl 对象作为函数调用。
        'no-promise-executor-return': 'error', //new Promise 不能return 具体东西 可以return
        'no-self-assign': 'error', //不允许自己给自己赋值
        'no-self-compare': 'error', // 不允许自己跟自己比较
        'no-sparse-arrays': 'error', // 不允许数据中存在以,分割的空内容 如 [,,]
        'no-template-curly-in-string': 'error', // 不允许 出现 "${}"
        // "no-undef":"error", // 全局声明的函数
        'no-this-before-super': 'error', // this如果出现在super之前会报错
        'no-unexpected-multiline': 'error', //不允许出现混乱的多行表达式
        'no-unmodified-loop-condition': 'error', //如果循环条件没在这个循环中会更改,报错
        'no-unreachable': 'error', // 如果return 后面的代码不会执行那么应该是有问题
        'no-unreachable-loop': 'error', //禁止只会发生一次的循环
        'no-unsafe-finally': 'error', //trycatch 中finally 不能直接return或者 throw Error
        'no-unsafe-negation': 'error', // 不允许否定以下关系运算符的左边操作数 如  !a in  obj 必须 !(a in obj) 或 ! a>b
        // "no-unsafe-optional-chaining":"error",//未看懂
        'no-unused-private-class-members': 'error', // 类中定义的私有成员不能不使用
        'no-unused-vars': ['error', {
            vars: 'local'
        }], //不允许本地的对象不被使用但是全局可以不被使用
        'no-use-before-define': 'error', // 不允许在声明前使用变量/函数
        // no-useless-backreference 没看懂
        'require-atomic-updates': 'error', //不允许出现  result += await something;
        // 必须 const temp = await something;result +temp ,因为会导致错误
        'use-isnan': 'error', //不能使用任何 ===NaN ==NaN !=NaN  !===Number.NaN 等判断 必须用isNaN判断
        'valid-typeof': 'error', //"undefined", "object", "boolean", "number", "string", "function", "symbol", and "bigint"。 会自动校验对比的值,如果不是以上几种抛错
        'accessor-pairs': 'error', //设置getter没设置setter跑错
        'arrow-body-style': ['error', 'as-needed'], //除箭头函数外所有函数不可以省略大括号
        'block-scoped-var': 'error', // 因为var有作用域提升 这里我不建议用var去作用域提升,不直观
        // camelcase: ["error", {allow: ["UNSAFE_componentWillMount"]}] 强制变量名驼峰?不建议
        //
        eqeqeq: ['error', 'always'], //强制使用=== !==
        'dot-notation': 'error', //var x = foo["bar"];错 应该 foo.bar 或者foo[bar]
        'default-param-last': 'error', //这条规则强制规定默认参数为参数的最后一个。
        'default-case-last': 'error', //如果switch语句有default 必须在最后
        curly: 'error', //不允许没有代码块的 判断语句
        // "consistent-this":["error","that"],// 用来接收this 的必须是that 可以改别名
        'consistent-return': 'error', //一个函数必须有明确的return
        complexity: 'error', //代码圈复杂度 只能在20以内
        // 'func-style': ['error', 'expression'], //函数只能先声明后使用
        'grouped-accessor-pairs': ['error', 'getBeforeSet'], //有getter setter 必须相邻而且getter在前
        'logical-assignment-operators': ['error', 'always'], //不能使用||= 这种
        'max-classes-per-file': ['error', 1], //一个文件只能有一个类
        'max-depth': ['error', 6], // 不可以代码嵌套超过6层
        'max-lines': ['error', {
            max: 2000,
            skipBlankLines: true,
            skipComments: true
        }], //每个文件最多500行 不算注释和空行
        'max-statements': ['error', 300], // 一个函数最多三百行
        'max-params': ['error', 10], // 一个函数最多十个参数
        'max-nested-callbacks': ['error', 3], //回调函数最多嵌套三层
        'no-alert': 'error', //不能有alert confirm prompt
        'new-cap': ['error', {
            newIsCap: true
        }], // 不允许在没有 new 运算符的情况下调用大写字母启动的函数。
        'no-array-constructor': 'error', // 不允许 这样创建数组Array(0, 1, 2) new Array(0, 1, 2) 但可以 Array(500)或 new Array(500)
        'no-caller': 'error', //禁止使用 arguments.caller 和 arguments.callee
        'no-delete-var': 'error', //不允许对变量使用 delete 运算符。
        'no-else-return': 'error', //不允许在 if else 中使用return
        'no-empty': 'error', //不能有空的代码块
        'no-empty-function': 'error', //不能有空的函数
        'no-eq-null': 'error', //不能用变量 == null 但是可以 === null
        'no-extra-bind': 'error', //避免不必要的bind 如箭头函数
        'no-extra-boolean-cast': 'error', //不允许不必要的布尔转换
        'no-extra-label': 'error', // 不允许不必要的label
        'no-extra-semi': 'error', // 不允许不必要的分号
        'no-floating-decimal': 'error', //不允许  -.7; 只能 -0.7
        'no-global-assign': 'error', //不允许给默认的全局变量赋值
        'no-implicit-coercion': 'error', //不允许用特殊方式转类型 ~ ! !!
        'no-implicit-globals': 'error', //不允许全局定义变量//但是可以window.a=xxx (()=>{var a =1})()
        'no-implied-eval': 'error', // 不允许 setTimeout("alert('Hi!');", 100);
        'no-inline-comments': 'error', //不允许出现代码和注释在一行
        'no-nested-ternary': 'error', //不允许嵌套的使用三元
        'no-multi-assign': 'error', //不能使用链式赋值 如 const a =c=5
        'no-lone-blocks': 'error', // 不能有由大括号限定的独立代码块
        'no-label-var': 'error', //标签不能跟 作用域变量有同名
        'no-iterator': 'error', //禁止出现 Foo.prototype.__iterator__ =  xxx 这种写法
        'no-new-wrappers': 'error', //不可以使用new Number() new String() new Boolean
        'no-octal': 'error', //禁止使用0开头的数字 因为ES5之前是八进制 但是ES6移除了
        'no-return-await': 'error', //禁止return await 但是可以 const a =await fn(); return a
        'no-return-assign': ['error', 'except-parens'], //不可以在return 中进行赋值 除非用()包裹
        'no-redeclare': 'error', //不可以使用var 重复声明同一个变量
        'no-undef-init': 'error', //不可以将变量初始化为undefined
        'no-undefined': 'error', //不可以定义名为undefined 的变量
        'no-undefined': 'error', //抛出错误只能抛出 new Error()
        'no-param-reassign': ['error', {
            props: false
        }], //不能给parmas 赋值
        'no-proto': 'error', //var a = obj.__proto__; var a = obj["__proto__"];
        'no-unused-labels': 'error', //不能存在没有使用的标签
        'no-useless-catch': 'error', // 不允许存在 catch 中又throw
        'no-useless-computed-key': 'error', //不允许存在 不必要的计算属性 如 obj['a']
        'no-useless-concat': 'error', // 不允许存在 没必要的字符拼接 如var foo = "a" + "b"; 应该为 var foo = "ab";
        'no-var': 'error', //不允许使用var
        'no-with': 'error', //不允许使用 with
        'vars-on-top': 'error', //变量需要再作用域顶层
        // 'sort-vars': ["error", { "ignoreCase": true }]//var b, a;    var a, B, c;必须合并
        'require-await': 'warn', //async 中调用没有 await 的函数
        'prefer-promise-reject-errors': 'error', //reject 必须是new Promise
        'prefer-rest-params': 'error', //使用剩余参数而不是arguments
        'prefer-spread': 'error', // 使用 rest 而不是 apply形式传递剩余参数 var args = [1, 2, 3, 4]; Math.max.apply(Math, args); Math.max(...args);
        'prefer-template': 'error', // 使用模板字符串拼接而不是加号
        radix: 'error', //parseint 必须携带第二个参数
        'comma-dangle': ['error', 'never'], //不允许对象数组最后又逗号
        'comma-spacing': ['error', {
            before: false,
            after: true
        }], //逗号后面必须有空格
        'comma-style': ['error', 'last'], //上一行的逗号必须在上一行
        'computed-property-spacing': ['error', 'never'], //计算属性不能有空格 如  {}[ a ] => {}[a]
        'key-spacing': ['error', {
            afterColon: true
        }], //属性中:前面不需要空格 后面必须有
        indent: ['error', 2], //使用两个空格进行缩进
        // 'eol-last': ["error", "never"],//此规则在非空文件的末尾强制执行至少一个换行符（或没有换行符）。
        'func-call-spacing': ['error', 'never'], //
        'function-call-argument-newline': ['error', 'consistent'], //函数调用换行
        'wrap-regex': "error", // return /foo/.test("bar"); => (/foo/).test("bar");
        'wrap-iife': ["error", "any"], //var x = function () { return { y: 1 };}(); var x = (function () { return { y: 1 };})()
        // "template-curly-spacing": ["error", "always"],//
        "space-unary-ops": [
            'error', {
                "words": true,
                "nonwords": false,
            }
        ], //   适用于一元词运算符，例如： new, delete, typeof, void, yield 需要空格 而 一元运算符，例如： -, +, --, ++, !, !! 不需要 
        'space-infix-ops': "error", //1-2 = + 必须有前后空格
        'space-in-parens': ["error", "never"], // 括号内前后不允许有空格
        'space-before-function-paren': "error", //定义括号左边不允许有空格
        'space-before-blocks': "error", // 块级作用域前面必须有空格
        "semi-style": ["error", "last"], //分号只能与末尾,, 注意这里有的地方需要;开头比如是一个 库
        'semi-spacing': "error", //分号前面不能有空格
        'keyword-spacing': "error", //关键词前后必须有空格
        'lines-between-class-members': ["error", "always"], //不允许类成员之间有空行
        'max-len': ["error", {
            "code": 100,
            "ignoreTrailingComments": true
        }], //一行只能有100个字符 忽略后面的注释
        'newline-per-chained-call': ["error", {
            "ignoreChainWithDepth": 2
        }], //方法链 如果超过两个必须换行
        'no-extra-parens': "error", //禁止不必要的小括号
        'no-mixed-spaces-and-tabs': "error", // 禁止混用制表符和空格
        'no-multi-spaces': ["error", {
            ignoreEOLComments: false
        }], //不允许有多个空格
        'no-multiple-empty-lines': ["error", {
            "max": 1,
            "maxEOF": 0
        }], //最大连续空行是1
        'no-trailing-spaces': 'error', //不允许结尾最后有多余的空格
        'no-whitespace-before-property': "error", //禁止使用属性时候有空格
        'object-curly-newline': ["error", {
            "minProperties": 2
        }], //对象超过1个必须换行
        'object-curly-spacing': ["error", "always"], //对象如果是一行需要空格前后 { c:1 }
        semi: ["error", "always"], //必须添加分号
        'object-property-newline': "error", //对象强制换行
        quotes: ["error", "single"], //要求使用单引号/ "double" （默认）要求尽可能使用双引号 "single" 要求尽可能使用单引号"backtick" 要求尽可能使用反引号

    },
    extends: [''],
    // settings: {
    //   'import/resolver': {
    //     node: {
    //       extensions: ['.js', '.ts'],
    //       moduleDirectory: ['node_modules', './src'],
    //     },
    //   },
    // },
    // parserOptions: {
    //   project: './tsconfig.json',
    // },
};