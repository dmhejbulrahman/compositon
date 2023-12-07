import React from 'react';

// tmi jodi amr cutomize kora code gulake commentout kore import kora Emoji2 ke delete kore dao mean comment kore dao tao Text2.jsx kaj koebe......

import Emoji2 from './Emoji2';

// ata sumit vi ar kora....

// class Text2 extends Emoji2 {~
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let decoretedText = this.addEmoji('I am JavaScript Language.', '💚');

//     return super.render(decoretedText);
//   }
// }
// export default Text2;

// ata amr customize kora....

let mainCheck;
if (!typeof Emoji2 === undefined || typeof Emoji2 === 'function') {
  // eslint-disable-next-line no-undef
  mainCheck = Emoji2;
} else {
  mainCheck = React.Component;
}

class Text2 extends mainCheck {
  constructor(props) {
    super(props);
  }

  checkEmoji = () => {
    let result;

    if (this.addEmoji) {
      result = this.addEmoji('I am JavaScipt Language', '💚');
    }
    return result;
  };

  defaultText2 = () => {
    let result;
    if (this.defaultText) {
      result = this.defaultText();
    }
    return result;
  };

  render() {
    const decoretedText = this.checkEmoji();
    const defaultText = this.defaultText2();

    let defaultText1 =
      'when conditions of Text2 of defaultText had failed, I have been called . Remember that I am the second';

    let result;

    if (decoretedText) {
      result = decoretedText;
    } else if (defaultText) {
      result = defaultText;
    } else {
      result = defaultText1;
    }

    return <p>{result}</p>;
  }
}
export default Text2;

// ay file ta sumit vi ar videor Text.js a moto......
