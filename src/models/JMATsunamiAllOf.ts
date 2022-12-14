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
import type { JMATsunamiAllOfAreas } from "./JMATsunamiAllOfAreas";
import {
  JMATsunamiAllOfAreasFromJSON,
  JMATsunamiAllOfAreasFromJSONTyped,
  JMATsunamiAllOfAreasToJSON,
} from "./JMATsunamiAllOfAreas";
import type { JMATsunamiAllOfIssue } from "./JMATsunamiAllOfIssue";
import {
  JMATsunamiAllOfIssueFromJSON,
  JMATsunamiAllOfIssueFromJSONTyped,
  JMATsunamiAllOfIssueToJSON,
} from "./JMATsunamiAllOfIssue";

/**
 * 津波予報
 * @export
 * @interface JMATsunamiAllOf
 */
export interface JMATsunamiAllOf {
  /**
   * 情報コード。常に552です。
   * @type {any}
   * @memberof JMATsunamiAllOf
   */
  code?: any | null;
  /**
   * 津波予報が解除されたかどうか。trueの場合、areasは空配列です。
   * @type {boolean}
   * @memberof JMATsunamiAllOf
   */
  cancelled: boolean;
  /**
   *
   * @type {JMATsunamiAllOfIssue}
   * @memberof JMATsunamiAllOf
   */
  issue: JMATsunamiAllOfIssue;
  /**
   * 津波予報の詳細
   * @type {Array<JMATsunamiAllOfAreas>}
   * @memberof JMATsunamiAllOf
   */
  areas?: Array<JMATsunamiAllOfAreas>;
}

/**
 * Check if a given object implements the JMATsunamiAllOf interface.
 */
export function instanceOfJMATsunamiAllOf(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "cancelled" in value;
  isInstance = isInstance && "issue" in value;

  return isInstance;
}

export function JMATsunamiAllOfFromJSON(json: any): JMATsunamiAllOf {
  return JMATsunamiAllOfFromJSONTyped(json, false);
}

export function JMATsunamiAllOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): JMATsunamiAllOf {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    code: !exists(json, "code") ? undefined : json["code"],
    cancelled: json["cancelled"],
    issue: JMATsunamiAllOfIssueFromJSON(json["issue"]),
    areas: !exists(json, "areas")
      ? undefined
      : (json["areas"] as Array<any>).map(JMATsunamiAllOfAreasFromJSON),
  };
}

export function JMATsunamiAllOfToJSON(value?: JMATsunamiAllOf | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    code: value.code,
    cancelled: value.cancelled,
    issue: JMATsunamiAllOfIssueToJSON(value.issue),
    areas:
      value.areas === undefined
        ? undefined
        : (value.areas as Array<any>).map(JMATsunamiAllOfAreasToJSON),
  };
}
