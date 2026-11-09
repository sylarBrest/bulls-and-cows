import type { Base } from './types.js';

export interface BaseConfig {
  label: string;
  digits: number;
  inputMode: 'numeric' | 'text';
  stripPattern: RegExp;
  alphabet: string;
}

export const BASE_CONFIG: Record<Base, BaseConfig> = {
  bin: {
    label: 'Bin (0–1)',
    digits: 2,
    inputMode: 'numeric',
    stripPattern: /[^01]/g,
    alphabet: '01',
  },
  oct: {
    label: 'Oct (0–7)',
    digits: 8,
    inputMode: 'numeric',
    stripPattern: /[^0-7]/g,
    alphabet: '01234567',
  },
  dec: {
    label: 'Dec (0–9)',
    digits: 10,
    inputMode: 'numeric',
    stripPattern: /[^0-9]/g,
    alphabet: '0123456789',
  },
  hex: {
    label: 'Hex (0–F)',
    digits: 16,
    inputMode: 'text',
    stripPattern: /[^0-9a-fA-F]/g,
    alphabet: '0123456789abcdef',
  },
};

export const BASE_ORDER: Base[] = ['bin', 'oct', 'dec', 'hex'];

export const MIN_LENGTH = 2;
export const MAX_LENGTH = 6;

export function maxLengthForBase(base: Base): number {
  return Math.min(MAX_LENGTH, BASE_CONFIG[base].digits);
}
