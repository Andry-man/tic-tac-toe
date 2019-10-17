class TicTacToe {
    constructor( options ) {
        this.currentPlayerSymbol = 'x';
        this.matrix = [[null, null,null ], [null, null, null], [null, null, null]];
     
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        if (this.getWinner() != null||this.isDraw()){
            return true;
        } else return false;
    }

    getWinner()  {
        for (let i= 0; i < 3 ; i++){
            if (this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][1] == this.matrix[i][2]) {
                if (this.matrix[i][0]) return this.matrix[i][0];
             } else if (this.matrix[0][i] == this.matrix[1][i] && this.matrix[1][i] == this.matrix[2][i]) {
                if (this.matrix[0][i])  return this.matrix[0][i] ;
                }
            }
            if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2] || this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0]) {
                return this.matrix[1][1];
            }
             
             return null ; 
    }

    noMoreTurns() {
        for (let i = 0; i  < 3; i++) {
           for ( let j = 0; j  < 3; j++) {
             if (this.matrix[i][j] == null)  {
                return false ; 
             }
            
           }
           
        }
        return true ; 
        
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
        return false ;
    }

    getFieldValue(rowIndex, colIndex) { 
        return this.matrix[rowIndex][colIndex];
    
}

}
module.exports = TicTacToe;
