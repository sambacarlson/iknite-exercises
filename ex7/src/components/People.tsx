

export default function People(): JSX.Element {
  return (
    <div className="relative">
      <div className="relative bg-primary h-[270px] w-[530px] py-6 flex flex-row justify-center space-x-6">
        <div className="bg-secondary">
          <img src="assets/businessman.png" alt="person" className="w-[225px] h-[225px]"/>
        </div>
        <div className="bg-secondary">
          <img src="assets/armchair.png" alt="product" className="w-[225px] h-[225px]"/>
        </div>
      </div>
      <div className="relative"></div>
      <div className="relative"></div>
    </div>
  )
}