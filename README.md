# ブラックジャック

ブラックジャックとは、トランプを使ったテーブルゲームです。ディーラーとプレイヤーにカードを配り、手札の合計数が「21」に近い方が勝ちとなります。

## 基本ルール

### プレイ

* 初期カードは52枚（ジョーカー無し）。
* プレイヤーとディーラーの２人対戦（プレイヤーは人間、ディーラーはCPUの自動実行）。
* ゲーム開始時、ディーラーとプレイヤーにカードが２枚ずつ配られる。配られたカードは画面に表示。ただし、ディーラーの2枚目のカードは分からないように伏せて表示。
* まず、プレイヤーのターン。カードの合計値が「21」を越えない限り、好きなだけカードを引くことができる。カードの合計値が「21」を超えたら、無条件にプレイヤーの負け。
* プレイヤーが引き終えたら、ディーラーのターン。ディーラーは、合計値が「17」を超えるまで（強制的に）カードを引き続ける。「21」を超えたら、その時点でディーラーの負け。
* プレイヤーとディーラーが引き終えたら勝負。より「21」に近い方の勝ち。

### カードの数え方

* エース（A）は、「1」もしくは「11」として扱う（有利な方を任意で選択できる）
* 絵札（JとQとK）は、「10」として扱う
* その他のカード（2〜10）は、数値そのまま

### その他

* ダブルダウンなし、スプリットなし、サレンダーなし、その他特殊そうなルールなし。

----

## 課題

上記の基本ルールを満たす「ブラックジャック」を React で実装しましょう。

### 使用するライブラリ

- 必須
  - create-react-app
  - React v16
- 歓迎
  - Redux
  - Redux-Saga
  - Atomic Design
  - styled-components or stylus
  - jest
  - eslint/prettier
- 補足
  - 余裕があれば、Wistantで採用している技術たちも使用してみてください。  
    https://developers.relationsgroup.co.jp/entry/2018/12/18/120000

### UI 仕様

- 相手のカード
- 相手のポイント
- 自分のカード
- 自分のポイント
- Hitボタン（カードを引く）
- Standボタン（これで勝負）
- Win/Lose判定表示

### API

カードの配布に関しては、下記の API を使用してください。
 * ランダムでカードを１枚返します。
 * すでに配布済みのカードIDを引数で渡すことで、それ以外のカードを１枚取得することができます。

#### Request

- endpoint: 
  - https://5d3o0rntjk.execute-api.ap-northeast-1.amazonaws.com/prd/card/draw
- method: 
  - POST
- request parameter:
  - drawnCards: すでに配布済みのカードのIDの配列

```
method: 'POST',
headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
},
body: JSON.stringify({
     drawnCards: [38, 4, 21, 46]
})
```

#### Response

```
{
    "card": {
        "id": 36,  // カードID (1〜52)
        "suit": "diamond",  // カードのスート（'heart', 'club', 'diamond', 'spade'）
        "number": 10  // カード番号 (1〜13)
    },
}
```