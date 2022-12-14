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
 * 発表元の情報
 * @export
 * @interface JMATsunamiAllOfIssue
 */
export interface JMATsunamiAllOfIssue {
  /**
   * 発表元
   * @type {string}
   * @memberof JMATsunamiAllOfIssue
   */
  source: string;
  /**
   * 発表日時
   * @type {string}
   * @memberof JMATsunamiAllOfIssue
   */
  time: string;
  /**
   * 発表種類。現在は Focus (津波予報) のみです。
   * @type {string}
   * @memberof JMATsunamiAllOfIssue
   */
  type: string;
}

/**
 * Check if a given object implements the JMATsunamiAllOfIssue interface.
 */
export function instanceOfJMATsunamiAllOfIssue(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "source" in value;
  isInstance = isInstance && "time" in value;
  isInstance = isInstance && "type" in value;

  return isInstance;
}

export function JMATsunamiAllOfIssueFromJSON(json: any): JMATsunamiAllOfIssue {
  return JMATsunamiAllOfIssueFromJSONTyped(json, false);
}

export function JMATsunamiAllOfIssueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): JMATsunamiAllOfIssue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    source: json["source"],
    time: json["time"],
    type: json["type"],
  };
}

export function JMATsunamiAllOfIssueToJSON(
  value?: JMATsunamiAllOfIssue | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    source: value.source,
    time: value.time,
    type: value.type,
  };
}
