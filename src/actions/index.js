/// Action
/// 処理名の情報を持つオブジェクトを定義する場所

// アクション名はプログラムで共通的に利用するため、定数も定義しておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


// ActionCreator
// View側で何かしらのイベントが行われたときに、行いたい状態遷移の定義を行っている。
export const increment = () => {{
    type: INCREMENT
}}

export const decrement = () => {{
    type: DECREMENT
}}

