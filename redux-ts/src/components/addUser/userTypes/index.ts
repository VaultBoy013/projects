import { DataFetch } from '../../../state/actions/fetchUsers'

export type NameType = (
  data: DataFetch[],
  error: string | undefined,
  loading: boolean
) => string[] | undefined

export enum InputUser {
  CLASS = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  TYPE = 'text',
  ID = 'username',
  AUTO_COMPLETE_OFF = 'off',
  PLACEHOLDER = 'Search',
}

export enum LabelUser {
  CLASS = 'block text-gray-700 text-sm font-bold mb-2',
  HTML_FOR = 'username',
}

export enum ButtonUser {
  CLASS = 'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded',
  TYPE = 'button',
}
