# README

## デバッグ方法

以下の手順で`binding.pry`が使用可能です。

1. デバッグしたい箇所に`binding.pry`を挿入
2. `docker attach sample_back`を実行
3. デバッグしたい処理を実行


## RSpecの設定

テストツールとしてRSpecを導入しています。

下記の手順で実行可能です。

1. `docker-compose exec back sh`を実行
2. `rails spec spec/models/user_spec.rb`など
