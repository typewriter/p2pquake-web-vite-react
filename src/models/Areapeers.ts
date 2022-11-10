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
import type { AreapeersAllOf } from "./AreapeersAllOf";
import {
  AreapeersAllOfFromJSON,
  AreapeersAllOfFromJSONTyped,
  AreapeersAllOfToJSON,
} from "./AreapeersAllOf";
import type { AreapeersAllOfAreas } from "./AreapeersAllOfAreas";
import {
  AreapeersAllOfAreasFromJSON,
  AreapeersAllOfAreasFromJSONTyped,
  AreapeersAllOfAreasToJSON,
} from "./AreapeersAllOfAreas";
import type { BasicData } from "./BasicData";
import {
  BasicDataFromJSON,
  BasicDataFromJSONTyped,
  BasicDataToJSON,
} from "./BasicData";

/**
 *
 * @export
 * @interface Areapeers
 */
export interface Areapeers {
  /**
   * 情報を一意に識別するID
   * @type {string}
   * @memberof Areapeers
   */
  id: string;
  /**
   * 情報コード。常に555です。
   * @type {any}
   * @memberof Areapeers
   */
  code: any | null;
  /**
   * 受信日時。形式は `2006/01/02 15:04:05.999` です。
   * @type {string}
   * @memberof Areapeers
   */
  time: string;
  /**
   * ピアの地域分布
   * @type {Array<AreapeersAllOfAreas>}
   * @memberof Areapeers
   */
  areas: Array<AreapeersAllOfAreas>;
}

/**
 * Check if a given object implements the Areapeers interface.
 */
export function instanceOfAreapeers(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "id" in value;
  isInstance = isInstance && "code" in value;
  isInstance = isInstance && "time" in value;
  isInstance = isInstance && "areas" in value;

  return isInstance;
}

export function AreapeersFromJSON(json: any): Areapeers {
  return AreapeersFromJSONTyped(json, false);
}

export function AreapeersFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Areapeers {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    code: json["code"],
    time: json["time"],
    areas: (json["areas"] as Array<any>).map(AreapeersAllOfAreasFromJSON),
  };
}

export function AreapeersToJSON(value?: Areapeers | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    code: value.code,
    time: value.time,
    areas: (value.areas as Array<any>).map(AreapeersAllOfAreasToJSON),
  };
}