var chess = function() {

	var board, pieces, moves, ranks, files, removed;

	moves = [];
	ranks = [1,2,3,4,5,6,7,8];
	files = ["a","b","c","d","e","f","g","h"];
	removed = [];

	pieces = [
		{ id:'wR1', color: 1, file: 0, rank: 0, abbr:'R' },
		{ id:'wN1', color: 1, file: 1, rank: 0, abbr:'N' },
		{ id:'wB1', color: 1, file: 2, rank: 0, abbr:'B' },
		{ id:'wQ',  color: 1, file: 3, rank: 0, abbr:'Q' },
		{ id:'wK',  color: 1, file: 4, rank: 0, abbr:'K' },
		{ id:'wB2', color: 1, file: 5, rank: 0, abbr:'B' },
		{ id:'wN2', color: 1, file: 6, rank: 0, abbr:'N' },
		{ id:'wR2', color: 1, file: 7, rank: 0, abbr:'R' },
		{ id:'wp1', color: 1, file: 0, rank: 1, abbr:''  },
		{ id:'wp2', color: 1, file: 1, rank: 1, abbr:''  },
		{ id:'wp3', color: 1, file: 2, rank: 1, abbr:''  },
		{ id:'wp4', color: 1, file: 3, rank: 1, abbr:''  },
		{ id:'wp5', color: 1, file: 4, rank: 1, abbr:''  },
		{ id:'wp6', color: 1, file: 5, rank: 1, abbr:''  },
		{ id:'wp7', color: 1, file: 6, rank: 1, abbr:''  },
		{ id:'wp8', color: 1, file: 7, rank: 1, abbr:''  },
		{ id:'bR1', color: 0, file: 7, rank: 7, abbr:'R' },
		{ id:'bN1', color: 0, file: 6, rank: 7, abbr:'N' },
		{ id:'bB1', color: 0, file: 5, rank: 7, abbr:'B' },
		{ id:'bK',  color: 0, file: 4, rank: 7, abbr:'K' },
		{ id:'bQ',  color: 0, file: 3, rank: 7, abbr:'Q' },
		{ id:'bB2', color: 0, file: 2, rank: 7, abbr:'B' },
		{ id:'bN2', color: 0, file: 1, rank: 7, abbr:'N' },
		{ id:'bR2', color: 0, file: 0, rank: 7, abbr:'R' },
		{ id:'bp1', color: 0, file: 7, rank: 6, abbr:''  },
		{ id:'bp2', color: 0, file: 6, rank: 6, abbr:''  },
		{ id:'bp3', color: 0, file: 5, rank: 6, abbr:''  },
		{ id:'bp4', color: 0, file: 4, rank: 6, abbr:''  },
		{ id:'bp5', color: 0, file: 3, rank: 6, abbr:''  },
		{ id:'bp6', color: 0, file: 2, rank: 6, abbr:''  },
		{ id:'bp7', color: 0, file: 1, rank: 6, abbr:''  },
		{ id:'bp8', color: 0, file: 0, rank: 6, abbr:''  },
	];



	function init() {
		populateBoard();

		console.log(board);
	}


	function populateBoard() {
		var piece, i;

		board = blank_board();

		for( i = 0; i < pieces.length; i++ ) {
			piece = pieces[i];
			board[ piece.file ][ piece.rank ] = piece.id;
		}
	}

	function blank_board() {
		var i, b = [];

		for (i = 0; i < 8; i++) {
			b.push( new Array(8) );
		}

		return b;
	}


	return {
		init: init,
	};

}(); // END chess



chess.init();