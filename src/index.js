/**
 * const, let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

//var変数は再定義可能
var val1 = "var変数を再定義";
console.log(val1);

//letは上書き可能
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

//letは再定義不可能(SyntaxError)
//let val2 = "let変数を再定義";

//const変数は上書き・再定義ともに不可能
const val3 = "const変数";
console.log(val3);

//val3 = "const変数を上書き";
//const val3 = ""const変数を再定義;

//constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じゃけぇ",
  age: 28
};
val4.name = "jak";
val4.address = "Hiroshima";
console.log(val4);

//配列
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name_ = "じゃけぇ";
const age_ = 28;
//「私の名前はじゃけぇです。年齢は28歳です。」

const message = `私の名前は${name_}です。年齢は${age_}です。`;
console.log(message);

/**
 * アロー関数 =>
 */
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

const func2 = (str) => {
  return str;
};
console.log(func2("funk2です"));

//アロー関数は引数が1つのとき()を省略できる
// const func2 = str => {
//   return str;
// };

//アロー関数は中の処理が1行の場合returnを省略できる
//const func2 = (str) => str;

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
//const func3 = (num1, num2) => num1 + num2;

/**
 * 分割代入
 */
const myProfile = {
  name: "じゃけぇ",
  age: 28
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

const myArray = ["じゃけぇ", 28];
const message3 = `名前は${myArray[0]}です。年齢は${myArray[1]}歳です。`;
console.log(message3);

const [_name, _age] = myArray;
const message4 = `名前は${_name}です。年齢は${_age}歳です。`;
console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello();

/**
 * スプレッド構文
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//配列まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけぇ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));

nameArr.map((name, index) => console.log(`${index + 1}番は${name}です`));

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけぇ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
const num = 1300;
//const num = "1300";
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
const num_ = null;
const fee = num_ || "金額未設定です";
console.log(fee);
