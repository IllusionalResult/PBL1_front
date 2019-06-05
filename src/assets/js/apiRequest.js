function get_need_response(method, endpoint, key, parameters, callback) {
    // XMLHttpRequestコンストラクタを作成
    var request = new XMLHttpRequest();

    // Httpリクエストに必要な情報
    request.open(method, endpoint);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.responseType = 'json';

    // 実行
    request.onload = function () {
        response_from_database = this.response;
        // ステータスコードによって処理を変更
        if (request.status === 401) {
            alert("リクエストデータが見つかりません");
            console.log(response_from_database);
        } else if (key === '') {
            console.log("PROPERTY NONSENSE");
        } else if (request.status === 200) {
            choice_data = response_from_database[key];
            console.log(choice_data);
        }

        callback(choice_data);
    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(parameters);
}
