const Pill = ({ purpose, app }: { purpose: string; app: string }) => {
  return (
    <div className="w-fit rounded-md bg-white px-2 py-1 shadow-sm">
      <p>{purpose}</p>
      <p className="text-lg font-bold">{app}</p>
    </div>
  )
}

export default Pill
