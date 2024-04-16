import { useState} from "react";

export default () => {
  const [count, setCount] = useState(0)
  return(
    <div>
      <button className="outline" onClick={() => setCount(count+1)} >
        {count === 0 ? "Click to reject": `Rejected ${count} times`}
        </button>
    </div>
  )
}