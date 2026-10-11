# レッスン1：Python の基礎

## 1. 変数と型

```python
name = "たろう"   # 文字列 (str)
age = 20          # 整数 (int)
height = 170.5    # 小数 (float)
is_student = True # 真偽値 (bool)
```

## 2. 条件分岐

```python
score = 75
if score >= 80:
    print("優秀")
elif score >= 60:
    print("合格")
else:
    print("要復習")
```

## 3. 繰り返し

```python
for i in range(1, 4):   # 1, 2, 3
    print(i)

total = 0
for n in [10, 20, 30]:
    total += n          # total = total + n
print(total)            # 60
```

## 4. 関数

```python
def add(a, b):
    """a と b を足した値を返す"""
    return a + b

print(add(2, 3))  # 5
```

## 練習のポイント

- 関数は「入力 → 処理 → `return` で出力」と考える
- `print` で途中経過を確認すると理解が早まる
- 迷ったら小さく動かして確かめる
