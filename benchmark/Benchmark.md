# Benchmark test of @fav/text.kebab-case

Comparing with following modules:

- [kebab-case](https://www.npmjs.com/package/kebab-case)
- [just-kebab-case](https://www.npmjs.com/package/just-kebab-case)
- [change-case](https://www.npmjs.com/package/change-case)

## v1.0.3

|                | @fav/text.kebab-case(1.0.3) | kebab-case(1.0.0) | just-kebab-case(1.1.0) | change-case(3.1.0) |
|:---------------|----------------------------:|------------------:|-----------------------:|-------------------:|
| Empty String   |          16,209,964 ops/sec | 6,063,763 ops/sec |      3,373,713 ops/sec |    932,685 ops/sec |
| From camelCase |             971,639 ops/sec | 1,737,188 ops/sec |        738,137 ops/sec |    409,841 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB