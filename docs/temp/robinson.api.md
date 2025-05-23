---
url: /temp/robinson.api.md
---
## API Report File for "robinson"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BigSource } from 'big.js';
import dayjs from 'dayjs';

// @beta
export function addClass(dom: Element, classNm: string): void;

// Warning: (ae-forgotten-export) The symbol "position" needs to be exported by the entry point index.d.ts
//
// @beta
export function addNode(parentDom: Element, dom: Element | String, position?: position): void;

// Warning: (ae-forgotten-export) The symbol "DAMNU_ENABLE" needs to be exported by the entry point index.d.ts
//
// @beta
export function asignData(obj1: DAMNU_ENABLE, obj2: DAMNU_ENABLE): DAMNU_ENABLE;

// @beta
export function base64ToBlob(base64: string): Blob;

// @beta
export function bind(dom: Node, eventType: string, callBack: EventListenerOrEventListenerObject, isCatch?: boolean): void;

// @beta
export function blobToBase64(blob: BlobPart, suffix?: string): Promise<unknown>;

// Warning: (ae-forgotten-export) The symbol "TOperate" needs to be exported by the entry point index.d.ts
//
// @beta
export function calc(number1: BigSource, number2: BigSource, operate?: TOperate): string;

// @beta
export function compose(...fns: Array<Function>): Function;

// @beta
export function copyToClipboard(text: string): void;

// Warning: (ae-forgotten-export) The symbol "ParamsInter" needs to be exported by the entry point index.d.ts
//
// @beta
export const createCache: (storage: any, parmas?: ParamsInter) => {
    "__#9309@#storage": any;
    "__#9309@#encode": Function;
    "__#9309@#decode": Function;
    setCache(key: string, value: any, expire: number): void;
    getCache(encodeKey: string): any;
    removeCache(key: string): void;
    has(key: string): boolean;
    length(): any;
    clear(): void;
};

// @beta
export function currying(fn: Function): Function;

// @beta
export function debounce(fn: Function, delay: number, isLimmediate?: boolean): Function;

// @beta
export function deepClone(originalValue: any): any;

// @beta
export function downloadByBase64(buf: string, fileNm: string, suffix: string): void;

// @beta
export function downloadByBlob(blob: BlobPart, fileNm: string, suffix?: string): void;

// @beta
export function downloadByUrl(url: string, filename?: string, type?: string): void;

// @beta
export class EventBus {
    constructor();
    clear(eventName: string): void;
    emit(eventName: string, ...Args: any): void;
    // (undocumented)
    off(eventName: string, fn: Function): void;
    on(eventName: string, eventFn: Function): void;
}

// Warning: (ae-forgotten-export) The symbol "Tday" needs to be exported by the entry point index.d.ts
//
// @beta
export function formatDate(date: Tday, pattern?: string): string;

// Warning: (ae-forgotten-export) The symbol "IOptions" needs to be exported by the entry point index.d.ts
//
// @beta
export function getAfterDate(date: Tday, option: IOptions): string;

// @beta
export function getBeforeDate(date: Tday, option: IOptions): string;

// @beta
export function getChunkArray(array: Array<any>, size?: number): Array<Array<any>>;

// @beta
export function getDiff(start: Tday, end: Tday, unitType: dayjs.OpUnitType, float?: boolean): number;

// @beta
export function getEtc(value: string, len: number, etcStr?: string): string;

// @beta
export function getFileChunk(file: File, chunkSize?: number): Array<{
    index: number;
    file: Blob;
}>;

// @beta
export function getFileSize(file: File, unit?: string): number;

// @beta
export function getFileType(file: File): string | undefined;

// @beta
export function getMimeType(suffix: String): "" | "audio/aac" | "application/x-abiword" | "image/apng" | "application/x-freearc" | "image/avif" | "video/x-msvideo" | "application/vnd.amazon.ebook" | "application/octet-stream" | "image/bmp" | "application/x-bzip" | "application/x-bzip2" | "application/x-cdf" | "application/x-csh" | "text/css" | "text/csv" | "application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.ms-fontobject" | "application/epub+zip" | "application/gzip" | "image/gif" | "text/html" | "image/x-icon" | "text/calendar" | "application/java-archive" | "image/jpeg" | "text/javascript" | "application/json" | "application/ld+json" | "audio/midi" | "audio/mpeg" | "video/mp4" | "video/mpeg" | "application/vnd.apple.installer+xml" | "application/vnd.oasis.opendocument.presentation" | "application/vnd.oasis.opendocument.spreadsheet" | "application/vnd.oasis.opendocument.text" | "audio/ogg" | "video/ogg" | "application/ogg" | "audio/opus" | "font/otf" | "image/png" | "application/x-httpd-php" | "application/pdf" | "application/vnd.ms-powerpoint" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/vnd.rar" | "application/rtf" | "application/x-sh" | "image/svg+xml" | "application/x-shockwave-flash" | "application/x-tar" | "image/tiff" | "video/mp2t" | "application/x-font-ttf" | "text/plain" | "application/vnd.visio" | "audio/wav" | "audio/webm" | "video/webm" | "image/webp" | "font/woff" | "font/woff2" | "application/xhtml+xml" | "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/xml" | "application/vnd.mozilla.xul+xml" | "application/zip" | "video/3gpp" | "video/32" | "application/x-7z-compressed";

// @beta
export function getNode(domName: string): Element | null;

// @beta
export function getNodes(domName: string): NodeList | null;

// @beta
export function getRandom(min: number, max: number, point?: number): number;

// @beta
export function getRelArray(array: Array<any>): Array<any>;

// @beta
export function getTimestamp(date: Tday): number;

// @beta
export function getUniqueId(): string;

// @beta
export function hasClass(dom: Element, classNm: String): boolean;

// @beta
export function hasTypeIn(value: any, types: Array<string>): boolean;

// @beta
export function hexToRgb(hex: string): string;

// @beta
export function hexToRgba(hex: string): string;

// @beta
export function imgCompression(file: File, size: number): Promise<unknown>;

// @beta
export function insertStr(str: string, start: number, char: string): string;

// @beta
export function is(value: any, type: string): boolean;

// @beta
export function isAfter(start: dayjs.ConfigType, end: dayjs.ConfigType): boolean;

// @beta
export function isArray(value: any): boolean;

// @beta
export function isBefore(start: dayjs.ConfigType, end: dayjs.ConfigType): boolean;

// @beta
export function isBoolean(value: any): boolean;

// @beta
export function isDecimal(s: string | number): boolean;

// @beta
export function isElement(val: any): boolean;

// @beta
export function isEmail(s: string): boolean;

// @beta
export function isEmpty(value: any): boolean;

// @beta
export function isEqType(value: any, value2: any): boolean;

// @beta
export function isEqValue(value1: any, value2: any): boolean;

// @beta
export function isExternal(path: any): boolean;

// @beta
function isFinite_2(value: any): boolean;
export { isFinite_2 as isFinite }

// @beta
export function isFunction(value: any): boolean;

// @beta
export function isHex(color: string): boolean;

// @beta
export function isIdCard(id: string): boolean;

// Warning: (ae-forgotten-export) The symbol "Iwindow" needs to be exported by the entry point index.d.ts
//
// @beta
export function isIE(win: Iwindow): boolean;

// @beta
export function isInt(value: any): boolean;

// @beta
export function isLeapYear(year: string | number): boolean;

// @beta
export function isMobileNum(s: string | number): boolean;

// @beta
function isNaN_2(value: any): boolean;
export { isNaN_2 as isNaN }

// @beta
export function isNode(el: any): Boolean;

// @beta
export function isNull(value: any): boolean;

// @beta
export function isNumber(value: any): boolean;

// @beta
export function isObjectLike(value: any): boolean;

// @beta
export function isOriginDate(val: any): boolean;

// @beta
export function isPromise(val: any): boolean;

// @beta
export function isRange(value: number, min: number, max: number): boolean;

// @beta
export function isRefType(value: any): boolean;

// @beta
export function isRegExp(val: any): boolean;

// @beta
export function isRgb(color: string): boolean;

// @beta
export function isRgba(color: string): boolean;

// @beta
export function isSimpleType(value: any): boolean;

// @beta
export function isString(value: any): boolean;

// @beta
export function isSymbol(value: any): boolean;

// @beta
export function isUndefined(value: any): boolean;

// @beta
export function isUrl(url: string): boolean;

// Warning: (ae-forgotten-export) The symbol "enumData" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "options" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "result" needs to be exported by the entry point index.d.ts
//
// @beta
export function mapping(enumData: enumData, options: options, expty?: string): result;

// @beta
export function nodeToString(node: Element): string;

// Warning: (ae-forgotten-export) The symbol "IRgba" needs to be exported by the entry point index.d.ts
//
// @beta
export const parseColorString: (color: string) => IRgba | string;

// @beta
export const parseHexColor: (color: string) => IRgba;

// @beta
export const parseRgbaColor: (color: string) => IRgba;

// @beta
export function pipe(...fns: Array<Function>): Function;

// @public
export function preventDefault(event: Event): void;

// @beta
export function printByBlob(blob: Blob, type?: string): void;

// @beta
export function printByDom(el: HTMLElement, custStyle?: string): void;

// @beta
export function removeClass(dom: Element, classNm: string): void;

// @beta
export function removeNode(parentNode: Element, dom: Element): void;

// @beta
export function renderTmp(selecter: string, data: any): string;

// @public
export function replaceClass(dom: Element, newClass: string, oldClass: string): void;

// @beta
export function replaceNode(parentNode: Element, newDom: string | Node, oldDom: Element): void;

// @beta
export function rgbaToHex(color: string): string;

// @beta
export function rgbToHex(color: string): string;

// @beta
export function stopPropagation(event: Event): void;

// @beta
export function stringToNode(str: string): Node | null;

// @beta
export function throttle(fn: Function, immediate: number, leading?: boolean, trailing?: boolean): Function;

// @beta
export const toRgbaString: (colorObj: IRgba, n?: number) => string;

// @beta
export function transHightLight(str: string, keyWords: string | Array<string>, color?: string): string;

// @beta
export function unBind(dom: Node, eventType: string, fnName: EventListenerOrEventListenerObject): void;

// @beta
export function urlToBase64(url: string, suffix?: string): Promise<string>;

// (No @packageDocumentation comment for this package)

```
