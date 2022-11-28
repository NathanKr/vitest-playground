// --- strange because i use global : true in vite.config.ts
import {expect, test} from 'vitest';
import { sum } from '../logic/utils';

test('1+2 is 3' , ()=>{
expect(sum(1,2)).toBe(3); 

})