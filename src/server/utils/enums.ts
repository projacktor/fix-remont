export enum Tariff {
  base = 'Базовый',
  standard = 'Стандартный',
  comfort = 'Комфорт',
  business = 'Бизнес'
}

export enum Notification {
  accept = 'Accepted', // green
  wait = 'Wait', // yellow
  attention = 'Attention', // red
  inactive = 'Inactive' // gray
}

export enum State {
  act = 'Требуется подписать акт',
  notification = 'Для вас есть сообщение',
  empty = 'Сообщений нет'
}

export enum Operation {
  output = 'Вывод',
  input = 'Ввод'
}
