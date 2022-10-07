import React from 'react';
import './PopupMessage.css'

class PopupMessage extends React.Component {
  handleNewGame = () => {
    window.location.href = "/";
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <div>
            {this.props.selected === this.props.winner ? (
              <div>
                <h2>Winner!</h2>
                <p>You Solved the Picto Plot.</p>
              </div>
            ) : (
              <div>
                <h2>Incorrect!</h2>
                <p>Hint: Hover over the pictures to see the word that generated it.</p>
              </div>
            )}
          </div>
          <div class="footer">
            <button class="button" onClick = {this.handleNewGame}>
              <span class="text">
                Start A New Game
              </span>
            </button>
            {this.props.selected !== this.props.winner && (
              <button class="button" data-bs-dismiss="modal" onClick = {() => this.props.resetSelection('')}>
                <span class="text">
                  Try Again
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PopupMessage;
