export type localeOptionsType = 'DIGIT' | 'NUMERIC' | 'LONG' | 'SHORT';

export interface ConstantsInterface {
  LOCALE: string;
  LOCALE_OPTIONS: Record<localeOptionsType, string>;
  TIMEZONE_NAMES: Record<string, number>;
}

export declare const CONSTANTS: ConstantsInterface;
