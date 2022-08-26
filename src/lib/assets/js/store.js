import { writable } from 'svelte/store'

export const currentPage = writable('')
export const isMenuOpen = writable(false)

//todo away this
export const categoriesStore = writable()