import { DataFetch } from '../../../state/actions/fetchUsers'

export type NameType = (
  data: DataFetch[],
  error: string | undefined,
  loading: boolean
) => string[] | undefined

export enum InputCart {
  CLASS = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  TYPE = 'text',
  ID = 'username',
  PLACEHOLDER = 'Username',
}

export enum LabelCart {
  CLASS = 'block text-gray-700 text-sm font-bold mb-2',
  HTML_FOR = 'username',
}

export enum ButtonCart {
  CLASS = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
  TYPE = 'button',
}
