var isEntered = function () {},
    isStringHalfwidthNumber = function () {},
    isStringNaturalCount = function () {};

/**
 * 入力必須チェック
 * @param  {String}  target [チェック対象の文字列]
 * @return {Boolean}        [エラーあり／なし]
 */
isEntered = function (target) {
    return target !== '' && typeof target !== 'undefined';
};

/**
 * 文字列の半角数字チェック
 * @param  {Number}  target [チェック対象の文字列]
 * @return {Boolean}        [エラーあり／なし]
 */
isStringHalfwidthNumber = function (target) {
    return target.match(/^[0-9]*$/);
};

/**
 * 文字列の自然数チェック
 * @param  {[Number]}  target [チェック対象の文字列]
 * @return {Boolean}          [エラーあり／なし]
 */
isStringNaturalCount = function (target) {
    return target.match(/^[1-9][0-9]*$/);
};

