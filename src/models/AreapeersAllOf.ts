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
import type { AreapeersAllOfAreas } from "./AreapeersAllOfAreas";
import {
  AreapeersAllOfAreasFromJSON,
  AreapeersAllOfAreasFromJSONTyped,
  AreapeersAllOfAreasToJSON,
} from "./AreapeersAllOfAreas";

/**
 * P2P地震情報ネットワークに接続しているピアの地域分布です。
 * @export
 * @interface AreapeersAllOf
 */
export interface AreapeersAllOf {
  /**
   * 情報コード。常に555です。
   * @type {any}
   * @memberof AreapeersAllOf
   */
  code?: any | null;
  /**
   * ピアの地域分布
   * @type {Array<AreapeersAllOfAreas>}
   * @memberof AreapeersAllOf
   */
  areas: Array<AreapeersAllOfAreas>;
}

/**
 * Check if a given object implements the AreapeersAllOf interface.
 */
export function instanceOfAreapeersAllOf(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "areas" in value;

  return isInstance;
}

export function AreapeersAllOfFromJSON(json: any): AreapeersAllOf {
  return AreapeersAllOfFromJSONTyped(json, false);
}

export function AreapeersAllOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AreapeersAllOf {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    code: !exists(json, "code") ? undefined : json["code"],
    areas: (json["areas"] as Array<any>).map(AreapeersAllOfAreasFromJSON),
  };
}

export function AreapeersAllOfToJSON(value?: AreapeersAllOf | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    code: value.code,
    areas: (value.areas as Array<any>).map(AreapeersAllOfAreasToJSON),
  };
}