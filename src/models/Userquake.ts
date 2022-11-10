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
import type { BasicData } from "./BasicData";
import {
  BasicDataFromJSON,
  BasicDataFromJSONTyped,
  BasicDataToJSON,
} from "./BasicData";
import type { UserquakeAllOf } from "./UserquakeAllOf";
import {
  UserquakeAllOfFromJSON,
  UserquakeAllOfFromJSONTyped,
  UserquakeAllOfToJSON,
} from "./UserquakeAllOf";

/**
 *
 * @export
 * @interface Userquake
 */
export interface Userquake {
  /**
   * 情報を一意に識別するID
   * @type {string}
   * @memberof Userquake
   */
  id: string;
  /**
   * 情報コード。常に561です。
   * @type {any}
   * @memberof Userquake
   */
  code: any | null;
  /**
   * 受信日時。形式は `2006/01/02 15:04:05.999` です。
   * @type {string}
   * @memberof Userquake
   */
  time: string;
  /**
   * 地域コード（コード一覧は [GitHub: epsp-specifications/epsp-area.csv · p2pquake/epsp-specifications](https://github.com/p2pquake/epsp-specifications/blob/master/epsp-area.csv) 参照）
   * @type {number}
   * @memberof Userquake
   */
  area: number;
}

/**
 * Check if a given object implements the Userquake interface.
 */
export function instanceOfUserquake(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "id" in value;
  isInstance = isInstance && "code" in value;
  isInstance = isInstance && "time" in value;
  isInstance = isInstance && "area" in value;

  return isInstance;
}

export function UserquakeFromJSON(json: any): Userquake {
  return UserquakeFromJSONTyped(json, false);
}

export function UserquakeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Userquake {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    code: json["code"],
    time: json["time"],
    area: json["area"],
  };
}

export function UserquakeToJSON(value?: Userquake | null): any {
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
    area: value.area,
  };
}