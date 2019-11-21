import React from 'react'

function HistorySteps (props) {
  let {history, handleStepBackTo} = props
  return (
    <div>
      <h4>历史步骤：</h4>
      {
        history.map((step, move) => {
          let desc = move ? `回退到第${move}步` : '重新开始游戏'
          return (
            <button
              key={move}
              onClick={() => handleStepBackTo(move)}
            >{desc}</button>
          )
        })
      }
    </div>
  )
}

export default HistorySteps