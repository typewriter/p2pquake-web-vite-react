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
import type { Areapeers } from "./Areapeers";
import {
  AreapeersFromJSON,
  AreapeersFromJSONTyped,
  AreapeersToJSON,
} from "./Areapeers";
import type { EEW } from "./EEW";
import { EEWFromJSON, EEWFromJSONTyped, EEWToJSON } from "./EEW";
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
import type { EEWDetection } from "./EEWDetection";
import {
  EEWDetectionFromJSON,
  EEWDetectionFromJSONTyped,
  EEWDetectionToJSON,
} from "./EEWDetection";
import type { JMAQuake } from "./JMAQuake";
import {
  JMAQuakeFromJSON,
  JMAQuakeFromJSONTyped,
  JMAQuakeToJSON,
} from "./JMAQuake";
import type { JMAQuakeAllOfPoints } from "./JMAQuakeAllOfPoints";
import {
  JMAQuakeAllOfPointsFromJSON,
  JMAQuakeAllOfPointsFromJSONTyped,
  JMAQuakeAllOfPointsToJSON,
} from "./JMAQuakeAllOfPoints";
import type { JMATsunami } from "./JMATsunami";
import {
  JMATsunamiFromJSON,
  JMATsunamiFromJSONTyped,
  JMATsunamiToJSON,
} from "./JMATsunami";
import type { Userquake } from "./Userquake";
import {
  UserquakeFromJSON,
  UserquakeFromJSONTyped,
  UserquakeToJSON,
} from "./Userquake";
import type { UserquakeEvaluation } from "./UserquakeEvaluation";
import {
  UserquakeEvaluationFromJSON,
  UserquakeEvaluationFromJSONTyped,
  UserquakeEvaluationToJSON,
} from "./UserquakeEvaluation";
import type { UserquakeEvaluationAllOfAreaConfidences } from "./UserquakeEvaluationAllOfAreaConfidences";
import {
  UserquakeEvaluationAllOfAreaConfidencesFromJSON,
  UserquakeEvaluationAllOfAreaConfidencesFromJSONTyped,
  UserquakeEvaluationAllOfAreaConfidencesToJSON,
} from "./UserquakeEvaluationAllOfAreaConfidences";

/**
 *
 * @export
 * @interface HistoryGet200ResponseInner
 */
export interface HistoryGet200ResponseInner {
  /**
   * 情報を一意に識別するID
   * @type {string}
   * @memberof HistoryGet200ResponseInner
   */
  id: string;
  /**
   * 情報コード。常に9611です。
   * @type {any}
   * @memberof HistoryGet200ResponseInner
   */
  code: any | null;
  /**
   * 評価日時。形式は `2006/01/02 15:04:05.999` です。
   * @type {string}
   * @memberof HistoryGet200ResponseInner
   */
  time: string;
  /**
   *
   * @type {EEWAllOfIssue}
   * @memberof HistoryGet200ResponseInner
   */
  issue: EEWAllOfIssue;
  /**
   *
   * @type {EEWAllOfEarthquake}
   * @memberof HistoryGet200ResponseInner
   */
  earthquake: EEWAllOfEarthquake;
  /**
   * 震度観測点の情報
   * @type {Array<JMAQuakeAllOfPoints>}
   * @memberof HistoryGet200ResponseInner
   */
  points?: Array<JMAQuakeAllOfPoints>;
  /**
   * 取消
   * @type {boolean}
   * @memberof HistoryGet200ResponseInner
   */
  cancelled: boolean;
  /**
   * 細分区域
   * @type {Array<EEWAllOfAreas>}
   * @memberof HistoryGet200ResponseInner
   */
  areas: Array<EEWAllOfAreas>;
  /**
   * 検出種類
   * @type {string}
   * @memberof HistoryGet200ResponseInner
   */
  type: HistoryGet200ResponseInnerTypeEnum;
  /**
   * テストかどうか。
   * @type {boolean}
   * @memberof HistoryGet200ResponseInner
   */
  test?: boolean;
  /**
   * 地域コード（コード一覧は [GitHub: epsp-specifications/epsp-area.csv · p2pquake/epsp-specifications](https://github.com/p2pquake/epsp-specifications/blob/master/epsp-area.csv) 参照）
   * @type {number}
   * @memberof HistoryGet200ResponseInner
   */
  area: number;
  /**
   * 件数
   * @type {number}
   * @memberof HistoryGet200ResponseInner
   */
  count: number;
  /**
   * P2P地震情報 Beta3 における信頼度（0～1）
   * 0: 非表示、0.97015: レベル1、0.96774: レベル2、0.97024: レベル3、0.98052: レベル4。
   * 値は適合率 (precision) です。
   * @type {number}
   * @memberof HistoryGet200ResponseInner
   */
  confidence: number;
  /**
   * 開始日時。地震感知情報のイベントを一意に識別するキーとなります。
   * 形式は `2006/01/02 15:04:05.999` です。
   * @type {string}
   * @memberof HistoryGet200ResponseInner
   */
  startedAt?: string;
  /**
   * 更新日時。形式は `2006/01/02 15:04:05.999` です。
   * @type {string}
   * @memberof HistoryGet200ResponseInner
   */
  updatedAt?: string;
  /**
   * 地域ごとの信頼度情報
   * @type {{ [key: string]: UserquakeEvaluationAllOfAreaConfidences; }}
   * @memberof HistoryGet200ResponseInner
   */
  areaConfidences?: { [key: string]: UserquakeEvaluationAllOfAreaConfidences };
}

/**
 * @export
 */
export const HistoryGet200ResponseInnerTypeEnum = {
  Full: "Full (チャイム＋音声)",
  Chime: "Chime (チャイム (未実装))",
} as const;
export type HistoryGet200ResponseInnerTypeEnum =
  typeof HistoryGet200ResponseInnerTypeEnum[keyof typeof HistoryGet200ResponseInnerTypeEnum];

/**
 * Check if a given object implements the HistoryGet200ResponseInner interface.
 */
export function instanceOfHistoryGet200ResponseInner(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "id" in value;
  isInstance = isInstance && "code" in value;
  isInstance = isInstance && "time" in value;
  isInstance = isInstance && "issue" in value;
  isInstance = isInstance && "earthquake" in value;
  isInstance = isInstance && "cancelled" in value;
  isInstance = isInstance && "areas" in value;
  isInstance = isInstance && "type" in value;
  isInstance = isInstance && "area" in value;
  isInstance = isInstance && "count" in value;
  isInstance = isInstance && "confidence" in value;

  return isInstance;
}

export function HistoryGet200ResponseInnerFromJSON(
  json: any
): HistoryGet200ResponseInner {
  return HistoryGet200ResponseInnerFromJSONTyped(json, false);
}

export function HistoryGet200ResponseInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): HistoryGet200ResponseInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    code: json["code"],
    time: json["time"],
    issue: EEWAllOfIssueFromJSON(json["issue"]),
    earthquake: EEWAllOfEarthquakeFromJSON(json["earthquake"]),
    points: !exists(json, "points")
      ? undefined
      : (json["points"] as Array<any>).map(JMAQuakeAllOfPointsFromJSON),
    cancelled: json["cancelled"],
    areas: (json["areas"] as Array<any>).map(EEWAllOfAreasFromJSON),
    type: json["type"],
    test: !exists(json, "test") ? undefined : json["test"],
    area: json["area"],
    count: json["count"],
    confidence: json["confidence"],
    startedAt: !exists(json, "started_at") ? undefined : json["started_at"],
    updatedAt: !exists(json, "updated_at") ? undefined : json["updated_at"],
    areaConfidences: !exists(json, "area_confidences")
      ? undefined
      : mapValues(
        json["area_confidences"],
        UserquakeEvaluationAllOfAreaConfidencesFromJSON
      ),
  };
}

export function HistoryGet200ResponseInnerToJSON(
  value?: HistoryGet200ResponseInner | null
): any {
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
    issue: EEWAllOfIssueToJSON(value.issue),
    earthquake: EEWAllOfEarthquakeToJSON(value.earthquake),
    points:
      value.points === undefined
        ? undefined
        : (value.points as Array<any>).map(JMAQuakeAllOfPointsToJSON),
    cancelled: value.cancelled,
    areas: (value.areas as Array<any>).map(EEWAllOfAreasToJSON),
    type: value.type,
    test: value.test,
    area: value.area,
    count: value.count,
    confidence: value.confidence,
    started_at: value.startedAt,
    updated_at: value.updatedAt,
    area_confidences:
      value.areaConfidences === undefined
        ? undefined
        : mapValues(
          value.areaConfidences,
          UserquakeEvaluationAllOfAreaConfidencesToJSON
        ),
  };
}