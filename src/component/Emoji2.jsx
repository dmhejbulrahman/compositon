import React from 'react';

// ata shumit vi ar dekhano........

// class Emoji2 extends React.Component {
//   addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

//   render(override) {
//     let text = 'I am the emoji component.';

//     if (override) text = override;

//     return <div>{text}</div>;
//   }
// }

// export default Emoji2;

// ata amr customize kora.........

class Emoji2 extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  defaultText = () => {
    return 'when conditions of Text2 of decoretedText was failed, I have been called. Remember that I am the first';
  };

  render() {
    return '';
  }
}
export default Emoji2;

// ay file ta shumit vi ar Emoji.js ar moto.....
