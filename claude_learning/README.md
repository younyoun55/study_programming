# Claude 学習プロジェクト

プログラミングを段階的に学ぶための練習用フォルダです。
Claude と一緒に「説明 → 練習 → 確認」の順で進めます。

## 構成

```
claude_learning/
├── README.md              この説明
├── lessons/               レッスン資料（読むもの）
│   └── 01_python_basics.md
└── exercises/             練習問題（書くもの）
    ├── ex01_sum.py        課題ファイル（TODO を埋める）
    └── test_ex01_sum.py   自動チェック用テスト
```

## 進め方

1. `lessons/` のレッスンを読む
2. `exercises/` の課題に、`TODO` の部分を自分で書く
3. テストを実行して確認する

```bash
cd claude_learning/exercises
python3 -m unittest test_ex01_sum -v
```

全部 `ok` になれば合格です。

## 学習ロードマップ（目安）

| 段階 | テーマ | 内容 |
|------|--------|------|
| 1 | Python基礎 | 変数、型、条件分岐、繰り返し、関数 |
| 2 | データ構造 | リスト、辞書、タプル、集合 |
| 3 | ファイル操作 | 読み書き、CSV、例外処理 |
| 4 | 実践 | 小さなツール作成、テストの書き方 |
