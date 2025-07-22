  //ページを開いて、HTMLの読み込みが終わったときに、この中の処理を実行
  document.addEventListener('DOMContentLoaded', () => {
    // jsonファイルを取得
    fetch('data/product.json')
    //JSONをJavaScriptのオブジェクトや配列に変換する
      .then(response => response.json())
      //データを受け取ったあとに何をするかを記入
      .then(data => {
        //forEach を使って、productの中の1つ1つのデータ繰り返し処理
        data.forEach(product => {
          //テーブルの行<tr>要素を新しく作る
          const row = document.createElement('tr');
          //innerHTML=「要素の中身（HTML）を文字列として書く」
          //テーブルの行<tr>の中に、列<td>を入れる
          row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
          `;
          //HTMLの中から、id="productTable"のテーブルに作ったrowを追加
          document.getElementById('productTable').appendChild(row);
        });
      })
      //何かエラーが起きたらエラー内容をコンソールに表示します。
      .catch(error => {
        console.error('エラー:', error);
      });
  });