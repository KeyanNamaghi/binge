## How to run

```
bun run dev
```

## KV DB

To wipe the redis cache just use `FLUSHDB`

## Id Logic

xxxxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx

| gender    | hex digits | conversion                      |
| --------- | ---------- | ------------------------------- |
| name      | 1          | index                           |
| gender    | 1          | boolean (for now)               |
| height    | 1          | 16 + value                      |
| age       | 1          | value                           |
| ethnicity | 1          | index                           |
| politics  | 1          | index                           |
| religion  | 1          | index                           |
| job       | 1          | index                           |
| -         | -          | -                               |
| prompts   | n x 2      | 1 prompt index + 1 answer index |
| -         | -          | -                               |
| images    | n x 2      | 1 image index + 1 caption index |
| -         | -          | -                               |
| traits    | 6          | index                           |
| -         | -          | -                               |
| hobbies   | 6          | index                           |
