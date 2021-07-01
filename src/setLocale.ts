import locale, { ArrayLocale, BooleanLocale, DateLocale, MixedLocale, NumberLocale, ObjectLocale, StringLocale } from './locale';
import { Message } from './types';

type BaseLocaleOptions = {
  mixed?: MixedLocale;
  string?: StringLocale;
  number?: NumberLocale;
  date?: DateLocale;
  boolean?: BooleanLocale;
  object?: ObjectLocale;
  array?: ArrayLocale;
}

type ExtendedLocaleOptions = BaseLocaleOptions & {
  [key: string]: {
    [key: string]: Message;
  } | BaseLocaleOptions[keyof BaseLocaleOptions]
}

export default function setLocale(custom: ExtendedLocaleOptions) {
  Object.keys(custom).forEach(type => {
    Object.keys(custom[type]).forEach(method => {
      locale[type][method] = custom[type][method];
    });
  });
}
