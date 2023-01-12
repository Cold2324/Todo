import { useState, useEffect } from 'react'

function useLocalStorage(name, initialValue) {
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    const localStorageItems = localStorage.getItem(name)

    let parsedItems

    if (!localStorageItems) {
      localStorage.setItem(name, JSON.stringify(initialValue))
      parsedItems = initialValue
    } else {
      parsedItems = JSON.parse(localStorageItems)
    }
    setItem(parsedItems)
  }, [])

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(name, stringifiedItem)
    setItem(newItem)
  }

  return [item, saveItem]
}

export default useLocalStorage
