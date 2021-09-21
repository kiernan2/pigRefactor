import Game from "../src/game";

describe('Game', () => {

  test('Make sure the numbers between one and six', () => {
    let game = new Game();
    expect(game.d6()).toBeGreaterThanOrEqual(1);
    expect(game.d6()).toBeLessThanOrEqual(6);
  })

  test('If role equals one end round' , () => {
    let game = new Game();
    game.scoreReader(1);
    expect(game.roundScore).toEqual(0);
  })

  test('Test to handle numbers other than one', () => {
    let game = new Game();
    game.scoreReader(4);
    expect(game.roundScore).toEqual(4);
  })

  test('Test to determine the end of player ones turn', () => {
    let game = new Game();
    game.playerTurn = true;
    game.endRound();
    expect(game.playerTurn).toBeFalsy();
  })

  test('Tests determine the end of player two turn', () => {
    let game = new Game();
    game.playerTurn = false;
    game.endRound();
    expect(game.playerTurn).toBeTruthy();
  })

  test('Test to see if round score is added to player score properly', () => {
    let game = new Game();
    game.roundScore = 14;
    game.playerTurn = true;
    game.updateScore();
    expect(game.playerScore).toEqual(14);
  })

  test('Test to see if round score is added to cpu score properly', () => {
    let game = new Game();
    game.roundScore = 8;
    game.playerTurn = false;
    game.updateScore();
    expect(game.cpuScore).toEqual(8);
  })
})