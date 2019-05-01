---
path: '/lazy-evaluation-python'
date: '2019-04-27'
title: 'Lazy Evaluation in Python'
tags: ['python', 'lazy evaluation', 'generator']
excerpt: 'A look at lazy evaluation in Python.'
---
Lazy evaluation is one of the first steps in [learning data engineering](https://elainechan.nyc/choosing-data-engineering-project). According to [Wikipedia](https://en.wikipedia.org/wiki/Lazy_evaluation), lazy evaluation is a strategy which delays the evaluation of an expression until its value is needed, while avoiding repeated evaluations. The concept was initially introduced for lambda calculus and later adopted for programming languages.

When you google "python lazy evaluation", a bunch of results will suggest using [generators](https://www.python.org/dev/peps/pep-0255/) to achieve this strategy.

## Generators
The Python [`yield`](https://docs.python.org/3/reference/simple_stmts.html#yield) keyword lets you return one thing after another; when you use `yield`, your function returns a generator, and you can use `next()` to return the next item in the generator. There are three ways to create a generator.

### 1. Function
```python
def gen():
    yield 1
    yield 2
    yield 3

>>> g = gen()
>>> g
<generator object g at 0x105dc6c78>
>>> next(g)
1
>>> next(g)
2
>>> next(g)
3
>>> next(g)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration
```

Python raises a `StopIteration` exception when there is nothing left to yield. You can also `yield` iteratively.

```python
from itertools import islice

def generator():
    i = 1
    while True:
        yield i
        i += 1

def take(n, iterable):
    """Return first n items of iterable as a list."""
    return list(islice(iterable, n))

print(take(5, generator())
>>> [1, 2, 3, 4, 5]
```

### 2. Range
You can also use `range()` to create a generator.

```python
g = (x**2 for x in range(5))
>>> print(next(g))
0
>>> print(next(g))
1
>>> print(next(g))
4
>>> print(next(g))
9
>>> print(next(g))
16
```

The above is equivalent to:

```python
def __gen(exp):
    for x in exp:
        yield x**2
g = __gen(iter(range(5)))
>>> print(next(g))
0
>>> print(next(g))
1
>>> print(next(g))
4
>>> print(next(g))
9
>>> print(next(g))
16
```

## 3. List Comprehension
Use [list comprehension](https://www.python.org/dev/peps/pep-0202/) to creat generators by using `()` instead of `[]`. This iterates over the elements one at a time, without creating a full list in memory.

```python
sum(x*x for x in range(10))
```

The above returns the same result as:

```python
sum([x*x for x in range(10)])
```

Using `[]` consumes more memory; besides iterating over each element, it performs these extra steps:
1. Build a full list of squares in memory
3. When the reference is no longer needed, delete the list.

See the Python official [guide](https://www.python.org/dev/peps/pep-0289/#rationale) for more details.

## References
- [Lazy evaluation in Python](https://stackoverflow.com/questions/20535342/lazy-evaluation-in-python)

- [Python and lazy evaluation](https://swizec.com/blog/python-and-lazy-evaluation/swizec/5148)

- [Improve Your Python: 'yield' and Generators Explained](https://jeffknupp.com/blog/2013/04/07/improve-your-python-yield-and-generators-explained/)

- [What does the “yield” keyword do?](https://stackoverflow.com/questions/231767/what-does-the-yield-keyword-do)

- [Avoid or delay evaluation of things which may not be used](https://stackoverflow.com/questions/9802981/avoid-or-delay-evaluation-of-things-which-may-not-be-used)

- [PEP 255 -- Simple Generators](https://www.python.org/dev/peps/pep-0255/)

- [PEP 289 -- Generator Expressions](https://www.python.org/dev/peps/pep-0289/#id8)