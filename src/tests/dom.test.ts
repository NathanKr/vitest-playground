import jsdom from 'jsdom'
const { JSDOM } = jsdom;

describe('dom tests',()=>{
    beforeAll(()=>{
        const html = '<!DOCTYPE html><body><p>Hello</p><p>world</p></body></html>'
        const dom = new JSDOM(html);
        global.document = dom.window.document;
    })

    test('document is not null',()=>{
        expect(document).not.toBeNull();
    })

    test('document has two p',()=>{
        expect(document.querySelectorAll('p').length).toBe(2)
    })

    test('document has three p',()=>{
        document.body.innerHTML += '<p>!!!!</p>'
        expect(document.querySelectorAll('p').length).toBe(3)
    })
})