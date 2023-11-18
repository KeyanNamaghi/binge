## How to run

```
bun run dev
```

## KV DB

To wipe the redis cache just use `FLUSHDB`

## Id Logic - Might do something like this

xxxxxxxxxx-xxxxxxxxx-xxxxxxxxxxxx-xxxx

| gender    | hex digits | conversion                      |
| --------- | ---------- | ------------------------------- |
| name      | 2          | index                           |
| gender    | 1          | boolean (for now)               |
| height    | 1          | 16 + value                      |
| age       | 2          | value                           |
| ethnicity | 1          | index                           |
| politics  | 1          | index                           |
| religion  | 1          | index                           |
| job       | 1          | index                           |
| -         | -          | -                               |
| prompts   | n x 3      | 2 prompt index + 1 answer index |
| -         | -          | -                               |
| images    | n x 4      | 2 image index + 2 caption index |
| -         | -          | -                               |
| random    | 4          | unused                          |
