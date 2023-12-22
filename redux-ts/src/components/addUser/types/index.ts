import { DataFetch } from '../../../state/reducers/fetch/asyncThunk';

export type NameType = (
  data: DataFetch[]
) => string[] | undefined;

export enum InputUserType {
  CLASS = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  TYPE = 'text',
  ID = 'username',
  AUTO_COMPLETE_OFF = 'off',
  PLACEHOLDER = 'Search',
}

export enum LabelUserType {
  CLASS = 'block text-gray-700 text-sm font-bold mb-2',
  HTML_FOR = 'username',
}

export enum ButtonUserType {
  CLASS = 'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded',
  CLASS_BLOCKING = 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed',
  TYPE = 'button',
}

export enum AutoComplete {
  UL = 'bg-white shadow-md rounded px-4 py-2 text-sm font-bold absolute  overflow-auto ',
  LI = 'cursor-pointer text-gray-500 hover:text-blue-500',
  HIDDEN = 'auto-complete-off',
  SHOW = 'auto-complete',
}
