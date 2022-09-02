import { packageNameToTitle } from "../src/package-name-to-title"

describe('package-name-to-title', ()=> {
    it('capitalizes a single word package', () =>{
        expect(packageNameToTitle('react')).toEqual('React')
    })
    it('capitalizes a multi word package', () =>{
        expect(packageNameToTitle('react-dom')).toEqual('React Dom')
    })
    it('removes a scope', () => {
        expect(packageNameToTitle('@some-scope/react-dom')).toEqual('React Dom')
    })

})