import { useQuery } from '@tanstack/react-query'

import { URL } from '../utils/constants'
import { GearById } from '../utils/types'

export function useHikingGear(category?: string) {
	return useQuery<GearById>({
		queryKey: ['hiking-gear', category],
		queryFn: async () => {
			const res = await fetch(
				`${URL}Gear?${category ? `&filterByFormula={Category}="${category}"` : ''}`,
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
					},
				},
			)
			const { records } = await res.json()

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return records.reduce((accumulator: GearById, gear: any) => {
				accumulator[gear.id] = { ...gear.fields, id: gear.id }
				return accumulator
			}, {})
		},
	})
}

export function useHikingFood() {
	return useQuery({
		queryKey: ['hiking-food'],
		queryFn: async () => {
			const res = await fetch(`${URL}Food`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
				},
			})
			const { records } = await res.json()

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return records.reduce((accumulator: any, food: any) => {
				accumulator[food.id] = { ...food.fields, id: food.id }
				return accumulator
			}, {})
		},
	})
}
