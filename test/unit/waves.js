import {ClickCounter} from 'src/waves/waves';

describe('Waves', () => {
  it('applies waves-effect class', () => {
    let waves = new MdWaves();

    // FIXME: inject element
    let element = { classList: [] };
    
    expect(element.classList).toContain('waves-effect');
  });
});
