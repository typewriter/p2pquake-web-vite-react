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
 *
 * @export
 * @interface EEWAllOfIssue
 */
export interface EEWAllOfIssue {
  /**
   * 発表時刻
   * @type {string}
   * @memberof EEWAllOfIssue
   */
  time: string;
  /**
   * 識別情報
   * @type {string}
   * @memberof EEWAllOfIssue
   */
  eventId: string;
  /**
   * 情報番号
   * @type {string}
   * @memberof EEWAllOfIssue
   */
  serial: string;
}

/**
 * Check if a given object implements the EEWAllOfIssue interface.
 */
export function instanceOfEEWAllOfIssue(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "time" in value;
  isInstance = isInstance && "eventId" in value;
  isInstance = isInstance && "serial" in value;

  return isInstance;
}

export function EEWAllOfIssueFromJSON(json: any): EEWAllOfIssue {
  return EEWAllOfIssueFromJSONTyped(json, false);
}

export function EEWAllOfIssueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EEWAllOfIssue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    time: json["time"],
    eventId: json["eventId"],
    serial: json["serial"],
  };
}

export function EEWAllOfIssueToJSON(value?: EEWAllOfIssue | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    time: value.time,
    eventId: value.eventId,
    serial: value.serial,
  };
}