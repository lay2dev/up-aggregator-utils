import test from 'ava';
import { Blake2bHasher } from '.';
test('test reader  hello', (t) => {
    const hasher = new Blake2bHasher();
    const res = hasher.hash('hello').serializeJson();
    // console.log(res);
    t.is(res, '0x2da1289373a9f6b7ed21db948f4dc5d942cf4023eaef1d5a2b1a45b9d12d1036');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxha2UyYi1oYXNoZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXNoL2JsYWtlMmItaGFzaGVyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFFbEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNuQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pELG9CQUFvQjtJQUNwQixDQUFDLENBQUMsRUFBRSxDQUNGLEdBQUcsRUFDSCxvRUFBb0UsQ0FDckUsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=