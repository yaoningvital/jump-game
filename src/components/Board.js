import React from 'react'
import Circle from "./Circle";

class Board extends React.Component {
  
  render () {
    let {
      circles, handleClickCircle, r, a, direction, degNum,
      ableReceiveCells, currentSelectedCircle
    } = this.props
    
    let boardWidth = 29.445 * (r + a / 2)  // 棋盘的宽高
    let boardBorderRadius = boardWidth / 2
    let boardRowHeight = 1.732 * (r + a / 2)  // 棋子所在行的高度
    let transform = `rotate(${direction}${degNum}deg)`
    return (
      <div className="board"
           style={{
             width: boardWidth + 'px',
             height: boardWidth + 'px',
             borderRadius: boardBorderRadius + 'px',
             transform: transform
           }}>
        {
          circles.map((rowArr, rowIndex) => {
            return (
              <div className="board-row"
                   key={rowIndex}
                   style={{
                     height: boardRowHeight + 'px',
                   }}
              >
                {
                  rowArr.map((circleItem, circleIndex) => {
                    let ableReceivePoint = false // 当前这个点是否是一个 落子点 （默认不是）
                    for (let cell of ableReceiveCells) {
                      if (cell.rowIndex === circleItem.rowIndex && cell.columnIndex === circleItem.columnIndex) {
                        ableReceivePoint = true
                      }
                    }
                    return (
                      <Circle
                        key={circleIndex}
                        circleData={circleItem}
                        handleClickCircle={handleClickCircle}
                        r={r}
                        a={a}
                        boardRowHeight={boardRowHeight}
                        currentSelectedCircle={currentSelectedCircle}
                        ableReceive={ableReceivePoint}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Board