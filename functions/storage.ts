import { type History } from '~/models/History'

export function saveInStorage(newValue: History, storage: any){
  if(!storage.getItem('history')){
    storage.setItem('history', JSON.stringify([]))
  }

  const list = JSON.parse(storage.getItem('history')) as History[]

  list.push(newValue)

  storage.setItem('history', JSON.stringify(list))
}

export function getFromStorage(storage: any): History[] {
  console.log(storage.getItem('history'))
  return JSON.parse(storage.getItem('history') || '') as History[]
}