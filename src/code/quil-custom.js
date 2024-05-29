import Quill from 'quill';

const Keyboard = Quill.import('modules/keyboard');

const customBindings = {
  linebreak: {
    key: 'Enter',
    shiftKey: true,
    handler: function(range, context) {
      this.quill.insertEmbed(range.index, 'break', true, 'user');
      this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
    }
  }
};

// Extend Quill to handle line breaks
const Embed = Quill.import('blots/embed');

class LineBreak extends Embed {
  static blotName = 'break';
  static tagName = 'br';

  static create(value) {
    let node = super.create(value);
    return node;
  }
}

Quill.register(LineBreak);

export default customBindings;