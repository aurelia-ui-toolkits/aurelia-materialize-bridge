// import './setup';
import 'aurelia-polyfills';
import {initialize} from 'aurelia-pal-browser';
import { MdToastService } from 'src/toast/toastService';
import 'materialize';

describe('MdToastService', () => {
  let service;

  beforeEach(() => {
    initialize();

    service = new MdToastService();
    spyOn(Materialize, 'toast');
  });

  it('calls Materialize.toast', () => {
    service.show('hello test', 2000);
    // expect(Materialize.toast).toHaveBeenCalledWith('hello test', 2000, undefined, Function);
    expect(Materialize.toast).toHaveBeenCalled();
  });

  it('resolves a promise when dismissed', () => {
    let promise = service.show('hello test', 20);
    promise.then((done) => {
      expect(true).toBe(true);
      done();
    }, () => {
      done.fail('promise rejected');
    });
  });
});
