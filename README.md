handlebarsjs-logic
==================

Logical operators for handlebarsjs (http://handlebarsjs.com/)

It sometimes useful to have some logical and other operations instead of simple condition in the {{#if}} block of the handlebarsjs template.

You can use this project to have such possibilities. Just install the handlebars-logic.js somewhere in your static files, include it as a script after the handlebarsjs itself, and enjoy.

Then you can use the following operators (note that you can combine them using parenthesis):

```
{{#if (eq v1 v2)}} // v1 == v2
{{#if (neq v1 v2)}} // v1 != 2
{{#if (gt v1 v2)}} // v1 > v2
{{#if (lt v1 v2)}} // v1 < v2
{{#if (gte v1 v2)}} // v1 >= v2
{{#if (lte v1 v2)}} // v1 <= v2
{{#if (or v1 v2)}} // v1 || v2
{{#if (and v1 v2)}} // v1 && v2
{{#if (not v)}} // !v
{{choice index v1 v2 v3 v4 ...}} // [v1,v2,v3,v4,...][index]
{{oneof v1 v2 v3 v4 ... empty1=e1 empty2=e2 ...}} // select the first not-empty value from v1 v2 v3 v4 ...
                                                  // values passed as emptyN considered as empty also
```

You can use this project as you wish having your code open source.
