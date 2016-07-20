var getErrorMessageVerifyValue = function () {},
    getEntryValueInHtmlTagId = function () {},
    convertIntoDateType = function () {};

/**
 * 値チェックしてエラーメッセージを取得する
 * @param  {[unspecified]} target            [エラーチェック対象（文字列など）]
 * @param  {[Array]} verificationConfigArray [実行する値チェックの内容]
 * @return {[String]}                        [エラーメッセージ]
 */
getErrorMessageVerifyValue = function (target, verificationConfigArray) {
    var i,
        max,
        v,
        messageArray = [],
        message = '',
        verify = TAX.verify;
    for (i = 0, max = verificationConfigArray.length; i < max; i += 1) {
        v = verify[verificationConfigArray[i]];
        if (!v.method(target)) {
            messageArray.push(v.message);
        }
    }
    if (messageArray.length !== 0) {
        message = messageArray.join('<br>');
    }
    return message;
};
