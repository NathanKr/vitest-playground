import jsdom from 'jsdom'
import { addPtoBody } from './utils';
const { JSDOM } = jsdom;

describe('dom tests',()=>{
    beforeEach(()=>{
        const html = '<!DOCTYPE html><body><p>Hello</p><p>world</p></body></html>'
        const dom = new JSDOM(html);
        global.document = dom.window.document;
    })

    test('document is the same as global.document',()=>{
        expect(global.document === document).toBeTruthy()
    })

    test('document is not null',()=>{
        expect(document).not.toBeNull();
    })

    test('document has two p',()=>{
        expect(document.querySelectorAll('p').length).toBe(2)
    })

    test('document has three p',()=>{
        addPtoBody(1);
        expect(document.querySelectorAll('p').length).toBe(3)
    })
})