# programmercarl_learn

一个学习 代码随想录 的笔记

# 算法考察的两种模式

一种是像 leetcode 一样，给你写好了前置代码，导入好了相关的包，定义了相关数据结构，你只需要实现核心代码的 **核心模式**。  
另一种是什么代码都没给，只给空白段落，全部代码让你实现，就如面试时，考官给你一张白纸，要你把所有代码实现出来的 **ACM 模式**。

# 算法性能分析

## 时间复杂度

### 什么是时间复杂度

**时间复杂度是一个函数，它定性描述该算法的运行时间。**  
假设算法的问题规模为 n，那么操作单元数量便用函数 f(n)来表示，随着数据规模 n 的增大，算法执行时间的增长率和 f(n)的增长率相同，  
这称作为算法的渐近时间复杂度，简称时间复杂度，记为 O(f(n))。

### 什么是大 O

《算法导论》给出的解释：**大 O 用来表示上界**，当用它作为算法的最坏情况运行时间的上界，就是对任意数据输入的运行时间的上界。

同样算法导论给出了例子：拿插入排序来说，插入排序的时间复杂度我们都说是 O(n^2) 。

输入数据的形式对程序运算时间是有很大影响的，在数据本来有序的情况下时间复杂度是 O(n)，但如果数据是逆序的话，插入排序的时间复杂度就是 O(n^2)，也就对于所有输入情况来说，最坏是 O(n^2) 的时间复杂度，所以称插入排序的时间复杂度为 O(n^2)。

同样的同理再看一下快速排序，都知道快速排序是 O(nlogn)，但是当数据已经有序情况下，快速排序的时间复杂度是 O(n^2) 的，**所以严格从大 O 的定义来讲，快速排序的时间复杂度应该是 O(n^2)**。

但是**我们依然说快速排序是 O(nlogn)的时间复杂度，这个就是业内的一个默认规定**，这里说的**O 代表的就是一般情况，而不是严格的上界**。 如图所示：
![插入排序算法复杂度比较](https://code-thinking-1253855093.file.myqcloud.com/pics/20200728185745611-20230310123844306.png)  
**面试中说道算法的时间复杂度是多少指的都是一般情况。**

### 不同数据规模的差异

![不同数据规模下，不同的算法之间复杂度的比较](https://code-thinking-1253855093.file.myqcloud.com/pics/20200728191447384-20230310124015324.png)  
在决定使用哪些算法的时候，不是时间复杂越低的越好（因为简化后的时间复杂度忽略了常数项等等），要考虑数据规模，如果数据规模很小甚至可以用 O(n^2)的算法比 O(n)的更合适（在有常数项的时候）。

就像上图中 O(5n^2) 和 O(100n) 在 n 为 20 之前 很明显 O(5n^2)是更优的，所花费的时间也是最少的。

那为什么在计算时间复杂度的时候要忽略常数项系数呢，也就说 O(100n) 就是 O(n)的时间复杂度，O(5n^2) 就是 O(n^2)的时间复杂度，而且要默认 O(n) 优于 O(n^2) 呢 ？

这里就又涉及到大 O 的定义，**因为大 O 就是数据量级突破一个点且数据量级非常大的情况下所表现出的时间复杂度，这个数据量也就是常数项系数已经不起决定性作用的数据量**。

例如上图中 20 就是那个点，n 只要大于 20 常数项系数已经不起决定性作用了。

**所以我们说的时间复杂度都是省略常数项系数的，是因为一般情况下都是默认数据规模足够的大，基于这样的事实，给出的算法时间复杂的的一个排行如下所示：**

O(1)常数阶 < O(logn)对数阶 < O(n)线性阶 < O(nlogn)线性对数阶 < O(n^2)平方阶 < O(n^3)立方阶 < O(2^n)指数阶

但是也要注意大常数，如果这个常数非常大，例如 10^7 ，10^9 ，那么常数就是不得不考虑的因素了。

### 复杂表达式的化简

有时候我们去计算时间复杂度的时候发现不是一个简单的 O(n) 或者 O(n^2)， 而是一个复杂的表达式，例如：

```
O(2*n^2 + 10*n + 1000)
```

最后可以直接化简为：

```
O(n^2)
```

### O(logn)中的 log 是以什么为底？

平时说这个算法的时间复杂度是 logn 的，那么一定是 log 以 2 为底 n 的对数么？

其实不然，也可以是以 10 为底 n 的对数，也可以是以 20 为底 n 的对数，但我们统一说 logn，也就是忽略底数的描述。

为什么可以这么做呢？如下图所示：

高中的换底公式，换了底，前面就是乘以一个常数，常数可以忽略，所以大 O 以什么为底的对数，这个底数是可以忽略的  
![log函数换底](https://code-thinking-1253855093.file.myqcloud.com/pics/20200728191447349-20230310124032001.png)

## 递归算法的时间复杂度

递归算法的时间复杂度本质上是要看: **递归的次数 \* 每次递归中的操作次数。**  
有的递归算法代码写出来的时间复杂度是 O(n); 有的递归算法写出来的时间复杂度是 O(logn),因此要具体情况具体分析

# 数组

## 数组理论基础

数组是非常基础的数据结构，在面试中，考察数组的题目一般在思维上都不难，主要是考察对代码的掌控能力

**数组是存放在连续内存空间上的相同类型数据的集合。**  
数组可以方便的通过下标索引的方式获取到下标下对应的数据。如图所示：  
![数据结构 - 数组](https://code-thinking.cdn.bcebos.com/pics/%E7%AE%97%E6%B3%95%E9%80%9A%E5%85%B3%E6%95%B0%E7%BB%84.png)

- 数组下标都是从 0 开始的。
- 数组内存空间的地址(物理地址)是连续的  
  正是**因为数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址。**

**数组的元素是不能删的，只能覆盖。**

二维数组表示如图：
![二维数组](https://code-thinking.cdn.bcebos.com/pics/%E7%AE%97%E6%B3%95%E9%80%9A%E5%85%B3%E6%95%B0%E7%BB%842.png)

那么二维数组在内存的空间地址是连续的么？

不同编程语言的内存管理是不一样的，以 C++为例，在 C++中二维数组是连续分布的。而 java 没有指针，二维数组的每一行头结点的地址是没有规则的，更谈不上连续。

## 二分查找

二分法的适用首先是有序的序列；其次还需要该序列没有重复元素，因为一旦有重复元素，使用二分查找法返回的元素下标可能不是唯一的  
二分法很多人一看就会，一写就废，难点在于 while 循环是否写等号，以及重新选择左右边界时会陷入迷茫。就是定义域区间没定好的问题。  
建议直接看讲解视频，看完就都懂了[二分查找 - 区间](https://www.bilibili.com/video/BV1fA4y1o715)  
二分查找目前带来两种写法，第一种左闭右闭区间 ———— [left, right];第二种左闭右开区间 —————— [left, right), 以下做讲解

### 二分查找第一种写法

第一种写法，我们定义 target 是在一个在左闭右闭的区间里，也就是 **[left, right]** （这个很重要非常重要）。

区间的定义这就决定了二分法的代码应该如何写，因为定义 target 在[left, right]区间，所以有如下三点：

- while (left <= right) 要使用 <= ，因为 left == right 是有意义的，所以使用 <=
- if (nums[middle] > target) right 要赋值为 middle - 1，因为当前这个 nums[middle]一定不是 target，那么接下来要查找的左区间结束下标位置就是 middle - 1
- right(右边界)的初始取值是 right = nums.length，而不是第一种写法的 right = nums.length - 1

代码如下：

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
    let mid, left = 0, right = nums.length - 1;
    // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
    while (left <= right) {
        // 位运算 + 防止大数溢出
        mid = left + ((right - left) >> 1);
        // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
        if (nums[mid] > target) {
            right = mid - 1;  // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1;   // 去右面闭区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};
```

- 时间复杂度：O(log n)
- 空间复杂度：O(1)

### 二分查找第二种写法 如果说定义 target 是在一个在左闭右开的区间里，也就是[left, right) ，那么二分法的边界处理方式则截然不同。

有如下两点：

- while (left < right)，这里使用 < ,因为 left == right 在区间[left, right)是没有意义的
- if (nums[middle] > target) right 更新为 middle，因为当前 nums[middle]不等于 target，去左区间继续寻找，而寻找区间是左闭右开区间，所以 right 更新为 middle，即：下一个查询区间不会去比较 nums[middle]

代码如下：

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
    let mid, left = 0, right = nums.length;
    // 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
    while (left < right) {
        // 位运算 + 防止大数溢出
        mid = left + ((right - left) >> 1);
        // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
        // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
        if (nums[mid] > target) {
            right = mid;  // 去左区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1;   // 去右区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};
```

- 时间复杂度：O(log n)
- 空间复杂度：O(1)

### 问题拓展 —————— 为什么二分查找的时间复杂度是 O(log(n))?

当采用二分查找算法进行查询时，最优的情况是第一次就找到，最坏的情况是 n/2，由于每次都是对半查询，所以中间过程就是 n/2,n/4,n/8 ... 1.

每一次的循环就是对半查找，我们要对半查找多少次，最后才能从 n 个里面剩下一个

![二分查找时间复杂度计算](https://img2020.cnblogs.com/blog/1985544/202111/1985544-20211120134745605-1572056335.png)

中间计算过程  
![二分查找时间复杂度计算](https://img2018.cnblogs.com/blog/1150097/201907/1150097-20190730212140322-1590260864.png)

![二分查找时间复杂度计算](https://img2018.cnblogs.com/blog/1150097/201907/1150097-20190730212305255-1604279115.png)

![二分查找时间复杂度计算](https://img2018.cnblogs.com/blog/1150097/201907/1150097-20190730212526774-51748586.png)

![二分查找时间复杂度计算](https://img2018.cnblogs.com/blog/1150097/201907/1150097-20190730212657521-1875193024.png)

# 链表

什么是链表，链表是一种通过指针串联在一起的线性结构，每一个节点由两部分组成，一个是数据域一个是指针域（存放指向下一个节点的指针），最后一个节点的指针域指向 null（空指针的意思）。

链表的入口节点称为链表的头结点也就是 head。  
如图所示：  
![链表数据结构](https://code-thinking-1253855093.file.myqcloud.com/pics/20200806194529815.png)

## 双链表

单链表中的指针域只能指向节点的下一个节点。

双链表：每一个节点有两个指针域，一个指向下一个节点，一个指向上一个节点。

双链表 既可以向前查询也可以向后查询。

如图所示：  
![双链表数据结构](https://code-thinking-1253855093.file.myqcloud.com/pics/20200806194559317.png)

## 循环链表

循环链表，顾名思义，就是链表首尾相连。  
![循环链表](https://code-thinking-1253855093.file.myqcloud.com/pics/20200806194629603.png)

## 定义链表结构

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
```

```
class ListNode {
  val;
  next = null;
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
```

## 链表操作 删除节点和增加节点

两个都非常方便，时间复杂度是 O(1)。  
但是要注意，要是删除第五个节点，需要从头节点查找到第四个节点通过 next 指针进行删除操作，查找的时间复杂度是 O(n)。

## 性能分析

再把链表的特性和数组的特性进行一个对比，如图所示：
![链表性能分析](https://code-thinking-1253855093.file.myqcloud.com/pics/20200806195200276.png)  
数组在定义的时候，长度就是固定的，如果想改动数组的长度，就需要重新定义一个新的数组。

链表的长度可以是不固定的，并且可以动态增删， 适合数据量不固定，频繁增删，较少查询的场景。

# 哈希表

首先什么是 哈希表，哈希表（英文名字为 Hash table，国内也有一些算法书籍翻译为散列表，大家看到这两个名称知道都是指 hash table 就可以了）。

哈希表中关键码就是数组的索引下标，然后通过下标直接访问数组中的元素。 **一般哈希表都是用来快速判断一个元素是否出现集合里。**

把元素散射到哈希表中的函数成为**哈希函数**。 不同元素哈希到相同的位置成为**哈希碰撞**

![哈希碰撞](https://code-thinking-1253855093.file.myqcloud.com/pics/2021010423494884.png)

一般哈希碰撞有两种解决方法， **拉链法**和**线性探测法**

## 拉链法

刚刚小李和小王在索引 1 的位置发生了冲突，发生冲突的元素都被存储在链表中。 这样我们就可以通过索引找到小李和小王了  
![拉链法](https://code-thinking-1253855093.file.myqcloud.com/pics/20210104235015226.png)

## 线性探测法

使用线性探测法，一定要保证 tableSize 大于 dataSize。 我们需要依靠哈希表中的空位来解决碰撞问题。

例如冲突的位置，放了小李，那么就向下找一个空位放置小王的信息。所以要求 tableSize 一定要大于 dataSize ，要不然哈希表上就没有空置的位置来存放 冲突的数据了。  
![线性探测法](https://code-thinking-1253855093.file.myqcloud.com/pics/20210104235109950.png)

## 常见的三种哈希结构

- 数组
- map(映射)
- set(集合)

## 总结

当我们遇到了要快速判断**一个元素**是否出现集合里的时候，就要考虑哈希法。

但是哈希法也是牺牲了空间换取了时间，因为我们要使用额外的数组，**set 或者是 map**来存放数据，才能实现快速的查找。

如果在做面试题目的时候遇到需要判断一个元素是否出现过的场景也应该第一时间想到哈希法！
