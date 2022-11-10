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
 * 地震の位置要素
 * @export
 * @interface EEWAllOfEarthquakeHypocenter
 */
export interface EEWAllOfEarthquakeHypocenter {
  /**
   * 震央地名
   * @type {string}
   * @memberof EEWAllOfEarthquakeHypocenter
   */
  name?: string;
  /**
   * 短縮用震央地名
   * @type {string}
   * @memberof EEWAllOfEarthquakeHypocenter
   */
  reduceName?: string;
  /**
   * 緯度。震源情報が存在しない場合は-200となります。
   * @type {number}
   * @memberof EEWAllOfEarthquakeHypocenter
   */
  latitude?: number;
  /**
   * 経度。震源情報が存在しない場合は-200となります。
   * @type {number}
   * @memberof EEWAllOfEarthquakeHypocenter
   */
  longitude?: number;
  /**
   * 深さ(km)。震源情報が存在しない場合は-1となります。
   * システムの都合で小数点が付きますが整数部のみ有効です。
   * @type {number}
   * @memberof EEWAllOfEarthquakeHypocenter
   */
  depth?: number;
  /**
   * マグニチュード。震源情報が存在しない場合は-1となります。
   * @type {number}
   * @memberof EEWAllOfEarthquakeHypocenter
   */
  magnitude?: number;
}

/**
 * Check if a given object implements the EEWAllOfEarthquakeHypocenter interface.
 */
export function instanceOfEEWAllOfEarthquakeHypocenter(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function EEWAllOfEarthquakeHypocenterFromJSON(
  json: any
): EEWAllOfEarthquakeHypocenter {
  return EEWAllOfEarthquakeHypocenterFromJSONTyped(json, false);
}

export function EEWAllOfEarthquakeHypocenterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EEWAllOfEarthquakeHypocenter {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    reduceName: !exists(json, "reduceName") ? undefined : json["reduceName"],
    latitude: !exists(json, "latitude") ? undefined : json["latitude"],
    longitude: !exists(json, "longitude") ? undefined : json["longitude"],
    depth: !exists(json, "depth") ? undefined : json["depth"],
    magnitude: !exists(json, "magnitude") ? undefined : json["magnitude"],
  };
}

export function EEWAllOfEarthquakeHypocenterToJSON(
  value?: EEWAllOfEarthquakeHypocenter | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    reduceName: value.reduceName,
    latitude: value.latitude,
    longitude: value.longitude,
    depth: value.depth,
    magnitude: value.magnitude,
  };
}
