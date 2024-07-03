import { Item } from "@/Types"

export const totalPriceOfItems = (items: Item[]) => {
	const total = items.reduce((a, b) => (a += b.total), 0)
	return total
}