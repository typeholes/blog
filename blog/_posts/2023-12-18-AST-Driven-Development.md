---
date: 2023-12-18
tags:
   - AST
   - development
author: TypeHoles
location: USA
---

# AST Driven Development

I've been a big fan of using ASTs for code generation and manipulation for years.  If you've ever had to implement anything complex in a language with limited expressive power, say pl/sql, you know the monotony of manually writing tons of code that could be avoided if you only you could express better abstractions. Code generation often turned hours long tasks into mintes long tasks.

In more expressive languages AST manipulation lets you accomplish large tasks quickly enough that you don't need a "stop the world" event in your development cycle.  See Jake Bailey's [talk on migrating typescript to modules](https://portal.gitnation.org/contents/migrating-typescript-to-modules-the-fine-details)

I'd like to build some tooling to make an AST modification workflow easier. It is obviously much easier to make a small one off code change by editing your code in the editor than writing code to identify the AST nodes and transform them. In other words, there is a relatively high fixed cost to an AST modification workflow. It is only worthwhile when that fixed cost is amortized over many changes.  So, what can we do to lower that cost and make AST modification a better value proposition in more cases?

My first thought is to use a sample change to scaffold the AST modification.  The workflow would be:

1. make a pre-change snapshot of the existing code. For example, a git commit
2. do the change in your IDE
3. make a post-change snapshot
4. run the scaffolding tool to generate a program that uses ts-morph to make the change

There are many things I could add - for example, helpers to generalize the fixed AST path that is changed. This is already a big task, so I'm going to cut off scope creep right here and getting started.

For a proof of concept I made a simple program that uses ts lib to open a project in watch mode and console logs a deep-diff of the ASTs on change.  As expected, this did not go well.  Every node reports a change because the typescript AST nodes contain many properties that change on each run. I need to find the properties that are idempotent and only compare those.  If I had to check every property on every kind of node manually I would just give up here.  Thankfully, I have what I need to automate it

1. A way to find idempotent properties. 
  * These are simply the properties that do not appear on the deep-diff above when I make a trivial change such as adding a space.
2. A way to generate a set of ASTs covering all kinds of nodes
  * The unit tests in the typescript repo should do it.

This is a great example of taking advantage of ASTs to save countless hours of development time.  Tune in next time for the implementation.
