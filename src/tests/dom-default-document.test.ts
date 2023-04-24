/*  default JSDOM is working very partially 
    not working for querySelectorAll 
    so dont use it !!!! use 
    const dom = new JSDOM(html);
    global.document = dom.window.document;
    as done in dom.test.ts
*/


describe('dom default document tests',()=>{
    test('document is not null',()=>{
        expect(document).not.toBeNull();
    })

    test('document.body.innerHTML with new div to be truthy',()=>{
        document.body.innerHTML += '<div>123</div>'
        expect(document.body.innerHTML).toBeTruthy();
        expect(document.body.childNodes.length).toBe(1)
    })

    test('query selector is defined',()=>{
        expect(document.querySelector).toBeDefined()
    })

    test('querySelector is not working by default',()=>{
        document.body.innerHTML += '<div>123</div>'
        expect(document.querySelectorAll('div')!.length).not.toBe(1)
    })
})

export {} // to remove build error , can be removed after import