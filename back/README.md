# README

## デバッグ方法

以下の手順で`binding.pry`が使用可能です。

1. デバッグしたい箇所に`binding.pry`を挿入
2. `docker attach sample_back`を実行
3. デバッグしたい処理を実行


## RSpec

テストツールとしてRSpecを導入しています。

springを導入しているので下記の手順で実行可能です。

1. `docker-compose exec spring rails spec back/spec/models/user_spec.rb`を実行
2. `rails spec spec/models/user_spec.rb`など

## 静的解析

`Rails Best Practices`を導入しています。

下記コマンドで静的解析を実行可能です。

`docker-compose exec spring bundle exec rails_best_practices`