import { useEffect, useState } from "react";

const Test = () => {
  const title = "Test Page";
  const object = { name: "山田", age: 20 };

  const test_users = [
    { id: 1, name: "山田", age: 20 },
    { id: 2, name: "佐藤", age: 22 },
    { id: 3, name: "田中", age: 30 },
  ];

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    // データを取得
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // 取得したデータをオブジェクト(json)に変換
    const json = await response.json();

    // データを確認するためのコード
    console.log(json);

    // 取得した データ を変数 users にセット
    setUsers(json);
  };

  // ブラウザにアクセスした時に実行される関数
  useEffect(() => {
    // アクセスした時に getPosts 関数も一緒に実行
    getUsers();
  }, [setUsers]);

  return (
    <div className="max-w-[960px] mx-auto px-4">
      {/* 変数を表示してみよう */}
      <h1 className="text-4xl font-bold mb-8">Home Page</h1>

      {/* オブジェクトの要素を取り出してみよう */}
      <div className="mb-8">
        <p className="font-bold">
          ・name: <span className="font-normal">xxx</span>
        </p>
        <p className="font-bold">
          ・age: <span className="font-normal">xxx</span>
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        <li>
          <p>山田</p>
          <p>20</p>
        </li>
        <li>
          <p>佐藤</p>
          <p>22</p>
        </li>
        <li>
          <p>田中</p>
          <p>30</p>
        </li>
      </ul>

      <ul className="space-y-4 mb-8">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded-lg">
            <p className="font-bold">{user.name}</p>
            <p className="font-bold">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
