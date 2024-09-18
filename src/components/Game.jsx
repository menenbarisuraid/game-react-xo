import React, { useState} from 'react';
import { calculateWinner } from '../helper';

import './Game.css'
import Board from './Board';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // определить был ли клик по ячейке или игра закончена
        if(winner || boardCopy[index]) return
        // определить чей ход X ? O
        boardCopy[index] = xIsNext ? 'X' : 'O'
        // обновить наш стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить</button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='game__info'>
                {winner ? 'Победитель '+winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    );
}

export default Game;
