export class Hasher {
    constructor(h) {
        this.h = h;
    }
    setH(h) {
        this.h = h;
    }
    hash(data) {
        return this.update(data).digest();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhc2gvaGFzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE1BQU0sT0FBZ0IsTUFBTTtJQUMxQixZQUFzQixDQUFhO1FBQWIsTUFBQyxHQUFELENBQUMsQ0FBWTtJQUFHLENBQUM7SUFNN0IsSUFBSSxDQUFDLENBQWE7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsSUFBSSxDQUNGLElBQStEO1FBRS9ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBQ0YifQ==