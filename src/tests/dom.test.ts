describe('dom tests',()=>{
    test('document is not null',()=>{
        expect(document).not.toBeNull();
    })

    test('document.body.innerHTML with new div to be truthy',()=>{
        document.body.innerHTML += '<div>123</div>'
        expect(document.body.innerHTML).toBeTruthy();
        expect(document.body.childNodes.length).toBe(1)
    })
})