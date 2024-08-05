import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../features/counters/countersSlice";
import Posts from "../../Components/Posts/Posts";

export default function Home() {
const counters = useSelector((state)=> state.counters)
const dispatch = useDispatch()

const totalCounters = counters.reduce(
  (sum, current) => sum+current.value, 0
);

const handleIncrement = (counterId)=>{   //ekhane action dispatch kora hoye
dispatch(increment(counterId))
}

const handleDecrement = (counterId)=>{
dispatch(decrement(counterId))
}

  return (
    <div className="bg-red-50 h-screen p-10">
      {/* <div className="min-h-[400px] w-1/4 bg-white py-10 px-10 mx-auto pt-10"> */}
      <h2 className="max-w-md mx-auto text-center text-2xl font-bold">Counter Application</h2>

      <div className="max-w-md mx-auto mt-10 space-y-5">
      {counters.map((counter)=> (
        <div key={counter.id} className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <h1 className="text-xl">{counter.value}</h1>
      <div className="flex space-x-3">
      <button className="btn btn-success text-white" onClick={()=> handleIncrement(counter.id)}>Increment</button>
      <button className="btn btn-warning text-white" onClick={()=> handleDecrement(counter.id)}>Decrement</button>
      </div>
      </div>
      ))}
      <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <h3 className=" text-2xl font-semibold">Total Count: {totalCounters}</h3>
    </div>
      </div>
    {/* </div> */}
    <Posts></Posts>

    
    </div>
  )
}
