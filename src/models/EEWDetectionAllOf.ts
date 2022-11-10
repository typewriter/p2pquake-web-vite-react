/* tslint:disable */
/* eslint-disable */
/**
 * P2P地震情報 API仕様書
 * - 商用・非商用問わず無償（無料）でご利用になれます。 [二次利用できます · P2P地震情報](https://www.p2pquake.net/secondary_use/) をご確認ください。 - 以下のレート制限があります。超えるとレスポンスが遅くなったり拒否 (HTTP ステータスコード 429) される場合があります。   - /history: 60 リクエスト/分 (IP アドレス毎)   - /jma: 10 リクエスト/分 (IP アドレス毎)
 *
 * The version of the OpenAPI document: 2.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "./runtime";
/**
 * 緊急地震速報の発表検出です。
 * @export
 * @interface EEWDetectionAllOf
 */
export interface EEWDetectionAllOf {
  /**
   * 情報コード。常に554です。
   * @type {any}
   * @memberof EEWDetectionAllOf
   */
  code?: any | null;
  /**
   * 検出種類
   * @type {string}
   * @memberof EEWDetectionAllOf
   */
  type: EEWDetectionAllOfTypeEnum;
}

/**
 * @export
 */
export const EEWDetectionAllOfTypeEnum = {
  Full: "Full (チャイム＋音声)",
  Chime: "Chime (チャイム (未実装))",
} as const;
export type EEWDetectionAllOfTypeEnum =
  typeof EEWDetectionAllOfTypeEnum[keyof typeof EEWDetectionAllOfTypeEnum];

/**
 * Check if a given object implements the EEWDetectionAllOf interface.
 */
export function instanceOfEEWDetectionAllOf(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "type" in value;

  return isInstance;
}

export function EEWDetectionAllOfFromJSON(json: any): EEWDetectionAllOf {
  return EEWDetectionAllOfFromJSONTyped(json, false);
}

export function EEWDetectionAllOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EEWDetectionAllOf {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    code: !exists(json, "code") ? undefined : json["code"],
    type: json["type"],
  };
}

export function EEWDetectionAllOfToJSON(value?: EEWDetectionAllOf | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    code: value.code,
    type: value.type,
  };
}