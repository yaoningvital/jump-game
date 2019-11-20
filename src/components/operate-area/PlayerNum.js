import React from 'react'

function PlayerNum (props) {
  let {playerNum, choosePlayerNum, history} = props
  return (
    <div className="player-num">
      <h4>请选择玩家数</h4>
      <p>当前玩家数：{playerNum} 人</p>
      {
        [2, 3, 4, 5, 6].map((playerNum) => {
          return (
            <button
              key={playerNum}
              onClick={() => choosePlayerNum(playerNum)}
              disabled={history.length > 1}
            >{playerNum}人玩</button>
          )
        })
      }
    </div>
  )
}

export default PlayerNum