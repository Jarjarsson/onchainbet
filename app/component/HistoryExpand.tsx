import React, { useState } from 'react'
import History from '../component/HistoryItems';
import { useTContext } from '../context/Context';
import { storeHistory } from '../utils/utils';


const HistoryExpand = () => {
    const { history, setHistory,} = useTContext();
  const data = storeHistory();
  const [expand, setExpand]=useState(false)
const handleExpand = ()=>{
    setExpand(!expand)
}
  return (
   <section>
     <p className="px-2 py-1 font-semibold text-cc3 bg-cc3/50 rounded-md hover:bg-cc3/20"
     onClick={handleExpand}>
            Betting History
          </p>
          {expand && history.length !== 0 && (
              <section className="flex flex-col gap-2">
                <History history={history} />
                <div className="flex justify-between">
                  <p>
                    Balance:{' '}
                    {history.reduce((prev, next) => {
                      return (prev +=
                        next.status === 'Win' ? next.amount : -next.amount);
                    }, 0)}
                  </p>
                  <button
                    onClick={() => {
                      data.clear();
                      setHistory([]);
                    }}
                  >
                    Clear
                  </button>
                </div>
              </section>
              
            ) }
          
   </section>
  )
}

export default HistoryExpand