var TAX = TAX || {};

// システム全体で使う定数
TAX.constant = {
    common : {
        taxRate : {
            HOUSING     : 3,
            NOT_HOUSING : 4,
            LAND        : 3
        },
        floorAreaRange : {
            MIN : 50,
            MAX : 240
        },
        VERIFICATION_REQUIRED_YEAR : '昭和56年12月31日'  //★★★date型表記にする
    },
    house : {
        deductionEachYear : {
            SHOWA290701  : 1000000,
            SHOWA390101  : 1500000,
            SHOWA480101  : 2300000,
            SHOWA510101  : 3500000,
            SHOWA560701  : 4200000,
            SHOWA600701  : 4500000,
            HEISEI010401 : 10000000,
            HEISEI090401 : 12000000
        },
        immunityCriteria : {
            NEW_CONSTRUCTION     : 230000,
            NON_NEW_CONSTRUCTION : 120000
        }
    },
    land : {}
};

// 入出力項目のDOM
TAX.dom = {
    common : {},
    house : {
        // 入力項目
        evaluationAmount  : $('#evaluation_amount'),    // 評価額
        housingNotHousing : $('#housing_not_housing'),   // 住宅・非住宅
        shareMolecule     : $('#share_molecule'),        // 持分（分子）
        shareDenominator  : $('#share_denominator'),     // 持分（分母）
        // 控除入力項目
        acquisitionCause                  : $('#acquisition_cause'),                     // 取得原因
        currentStateUsage                 : $('#current_state_usage'),                   // 現況用途
        currentStateFloorAreaInteger      : $('#current_state_floor_area_integer'),      // 現況床面積（整数部）
        currentStateFloorAreaDecimal      : $('#current_state_floor_area_decimal'),      // 現況床面積（小数部）
        acquisitionDateYear               : $('#acquisition_date_year'),                 // 取得年月日（年）
        acquisitionDateMonth              : $('#acquisition_date_month'),                // 取得年月日（月）
        acquisitionDateDay                : $('#acquisition_date_day'),                  // 取得年月日（日）
        constructionDateEra               : $('#construction_date_era'),                 // 建築年月日（元号）
        constructionDateYear              : $('#construction_date_year'),                // 建築年月日（年）
        constructionDateMonth             : $('#construction_date_month'),               // 建築年月日（月）
        constructionDateDay               : $('#construction_date_day'),                 // 建築年月日（日）
        fitCertification                  : $('#fit_certification'),                     // 耐震基準を満たしている証明書
        surveyEvaluationContractDateYear  : $('#survey_evaluation_contract_date_year'),  // 耐震基準に係る調査・評価・契約年月日（年）
        surveyEvaluationContractDateMonth : $('#survey_evaluation_contract_date_month'), // 耐震基準に係る調査・評価・契約年月日（月）
        surveyEvaluationContractDateDay   : $('#survey_evaluation_contract_date_day'),   // 耐震基準に係る調査・評価・契約年月日（日）
        // 出力項目
        deduction : $('#deduction'),     // 控除額
        taxAmount : $('#tax_amount')     // 税額
    },
    land : {}
};

// 値チェック関数とそのエラーメッセージ
TAX.verify = {
    valueCheck : {
        isEntered : {
            method  : isEntered,
            message : '入力必須です。'
        },
        isStringHalfwidthNumber : {
            method  : isStringHalfwidthNumber,
            message : '半角数字のみです。'
        },
        isStringNaturalCount : {
            method  : isStringNaturalCount,
            message : '自然数のみです。'
        }
    }
};
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
