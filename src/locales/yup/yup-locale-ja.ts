
import type * as yup from 'yup/lib/locale'

export const mixed: yup.MixedLocale = {
  default: ({ label }) => (label ? label + 'には' : '') + '正しい値を入力してください',
  required: ({ label }) => (label ? label + 'には' : '') + '必須です',
  oneOf: ({ label, values }) => (label ? label + 'には' : '') + `${values}のいずれかを入力してください`,
  notOneOf: ({ label, values }) => (label ? label + 'には' : '') + `${values}以外のものを入力してください`,
  defined: ({ label }) => (label ? label + 'には' : '') + '値を入力してください',
}

export const string: yup.StringLocale = {
  length: ({ label, length }) => (label ? label + 'は' : '') + `${length}文字で入力してください`,
  min: ({ label, min }) => (label ? label + 'は' : '') + `${min}文字以上入力してください`,
  max: ({ label, max }) => (label ? label + 'は' : '') + `${max}文字以下にしてください`,
  matches: ({ label, regex }) => (label ? label + 'は' : '') + `以下の形式で入力してください: ${regex}`,
  email: ({ label }) => (label ? label + 'には' : '') + '正しいメールアドレスを入力してください',
  url: ({ label }) => (label ? label + 'には' : '') + '正しいURLを入力してください',
  uuid: ({ label }) => (label ? label + 'には' : '') + '正しいUUIDを入力してください',
  trim: ({ label }) => (label ? label + 'の' : '') + '前後の空白を取り除いてください',
  lowercase: ({ label }) => (label ? label + 'には' : '') + '小文字のみ入力してください',
  uppercase: ({ label }) => (label ? label + 'には' : '') + '大文字のみ入力してください',
}

export const number: yup.NumberLocale = {
  min: ({ label, min }) => (label ? label + 'は' : '') + `${min}以上にしてください`,
  max: ({ label, max }) => (label ? label + 'は' : '') + `${max}以下にしてください`,
  lessThan: ({ label, less }) => (label ? label + 'は' : '') + `${less}未満にしてください`,
  moreThan: ({ label, more }) => (label ? label + 'は' : '') + `${more}より大きい数にしてください`,
  positive: ({ label }) => (label ? label + 'は' : '') + '正の数にしてください',
  negative: ({ label }) => (label ? label + 'は' : '') + '負の数にしてください',
  integer: ({ label }) => (label ? label + 'には' : '') + '整数を入力してください',
}

export const date: yup.DateLocale = {
  min: ({ label, min }) => (label ? label + 'には' : '') + `${min}以降の日付を入力してください`,
  max: ({ label, max }) => (label ? label + 'には' : '') + `${max}以前の日付を入力してください`,
}

export const boolean: yup.BooleanLocale = {
  isValue: ({ label, value }) => (label ? label + 'は' : '') + `${value}である必要があります。`,
}

export const object: yup.ObjectLocale = {
  noUnknown: '${path}には登録されていないキーは入力できません: ${unknown}'
}

export const array: yup.ArrayLocale = {
  min: ({ label, min }) => (label ? label + 'は' : '') + `${min}つ以上にしてください`,
  max: ({ label, max }) => (label ? label + 'は' : '') + `${max}つ以下にしてください`,
  length: ({ label, length }) => (label ? label + 'は' : '') + `${length}つ必要です`,
}

export const yupLocaleJa = {
  mixed,
  string,
  number,
  date,
  boolean,
  object,
  array
}