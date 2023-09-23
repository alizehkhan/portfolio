import { useEffect, useState } from 'react'

import { URL } from '../utils/constants'

const FoodGrid = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [food, setFood] = useState({})

  useEffect(() => {
    const getFood = async () => {
      const res = await fetch(`${URL}Food`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
        },
      })
      const { records } = await res.json()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const normalisedData = records.reduce((accumulator: any, food: any) => {
        accumulator[food.id] = { ...food.fields, id: food.id }
        return accumulator
      }, {})

      setFood(normalisedData)
      setIsLoading(false)
    }

    getFood()
  }, [])

  return (
    <>
      <div className="container mt-12 grid auto-rows-[232px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {!isLoading
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Object.values(food).map((foodItem: any, index) => (
              <button
                className="flex flex-col items-center transition-all justify-between rounded-lg bg-white px-2 pb-4 pt-2 shadow-sm hover:scale-[1.02] hover:shadow-lg"
                key={index}
              >
                <p
                  className={`mr-auto inline-block w-fit rounded-full px-3 py-1 text-xs font-bold`}
                >
                  {foodItem.Category}
                </p>
                <img
                  src={foodItem.Photo?.[0].url}
                  alt=""
                  className="mx-auto h-[132px]"
                />
                <h2 className="text-md text-center font-serif font-bold">
                  {foodItem.Name}
                </h2>
              </button>
            ))
          : Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="loading-state" />
            ))}
      </div>
    </>
  )
}

export default FoodGrid
