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
import type { EEWAllOf } from "./EEWAllOf";
import {
  EEWAllOfFromJSON,
  EEWAllOfFromJSONTyped,
  EEWAllOfToJSON,
} from "./EEWAllOf";
import type { EEWAllOfAreas } from "./EEWAllOfAreas";
import {
  EEWAllOfAreasFromJSON,
  EEWAllOfAreasFromJSONTyped,
  EEWAllOfAreasToJSON,
} from "./EEWAllOfAreas";
import type { EEWAllOfEarthquake } from "./EEWAllOfEarthquake";
import {
  EEWAllOfEarthquakeFromJSON,
  EEWAllOfEarthquakeFromJSONTyped,
  EEWAllOfEarthquakeToJSON,
} from "./EEWAllOfEarthquake";
import type { EEWAllOfIssue } from "./EEWAllOfIssue";
import {
  EEWAllOfIssueFromJSON,
  EEWAllOfIssueFromJSONTyped,
  EEWAllOfIssueToJSON,
} from "./EEWAllOfIssue";

/**
 *
 * @export
 * @interface EEW
 */
export interface EEW {
  /**
   * 情報を一意に識別するID
   * @type {string}
   * @memberof EEW
   */
  id: string;
  /**
   * 情報コード。常に556です。
   * @type {any}
   * @memberof EEW
   */
  code: any | null;
  /**
   * 受信日時。形式は `2006/01/02 15:04:05.999` です。
   * @type {string}
   * @memberof EEW
   */
  time: string;
  /**
   * テストかどうか。
   * @type {boolean}
   * @memberof EEW
   */
  test?: boolean;
  /**
   *
   * @type {EEWAllOfEarthquake}
   * @memberof EEW
   */
  earthquake?: EEWAllOfEarthquake;
  /**
   *
   * @type {EEWAllOfIssue}
   * @memberof EEW
   */
  issue: EEWAllOfIssue;
  /**
   * 取消
   * @type {boolean}
   * @memberof EEW
   */
  cancelled: boolean;
  /**
   * 細分区域
   * @type {Array<EEWAllOfAreas>}
   * @memberof EEW
   */
  areas?: Array<EEWAllOfAreas>;
}

/**
 * Check if a given object implements the EEW interface.
 */
export function instanceOfEEW(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "id" in value;
  isInstance = isInstance && "code" in value;
  isInstance = isInstance && "time" in value;
  isInstance = isInstance && "issue" in value;
  isInstance = isInstance && "cancelled" in value;

  return isInstance;
}

export function EEWFromJSON(json: any): EEW {
  return EEWFromJSONTyped(json, false);
}

export function EEWFromJSONTyped(json: any, ignoreDiscriminator: boolean): EEW {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    code: json["code"],
    time: json["time"],
    test: !exists(json, "test") ? undefined : json["test"],
    earthquake: !exists(json, "earthquake")
      ? undefined
      : EEWAllOfEarthquakeFromJSON(json["earthquake"]),
    issue: EEWAllOfIssueFromJSON(json["issue"]),
    cancelled: json["cancelled"],
    areas: !exists(json, "areas")
      ? undefined
      : (json["areas"] as Array<any>).map(EEWAllOfAreasFromJSON),
  };
}

export function EEWToJSON(value?: EEW | null): any {
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
    test: value.test,
    earthquake: EEWAllOfEarthquakeToJSON(value.earthquake),
    issue: EEWAllOfIssueToJSON(value.issue),
    cancelled: value.cancelled,
    areas:
      value.areas === undefined
        ? undefined
        : (value.areas as Array<any>).map(EEWAllOfAreasToJSON),
  };
}
