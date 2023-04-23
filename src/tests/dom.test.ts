import jsdom from 'jsdom'
const { JSDOM } = jsdom;

describe('dom tests',()=>{
    let document: any; 
    beforeAll(()=>{
        const html = '<!DOCTYPE html><body><p>Hello</p><p>world</p></body></html>'
        document = (new JSDOM(html)).window.document;
    })

    test('document is not null',()=>{
        expect(document).not.toBeNull();
    })

    test('document has two p',()=>{
        expect(document.querySelectorAll('p').length).toBe(2)
    })
})