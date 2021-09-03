export class ArrayBufferReader {
    constructor(input) {
        this.input = input;
        this.view = new DataView(input);
    }
    static fromRawString(string) {
        const buffer = new ArrayBuffer(string.length);
        const view = new DataView(buffer);
        for (let i = 0; i < string.length; i++) {
            const c = string.charCodeAt(i);
            if (c > 0xff) {
                throw new Error('fromRawString can only accept UTF-8 raw string!');
            }
            view.setUint8(i, c);
        }
        return new ArrayBufferReader(buffer);
    }
    length() {
        return this.view.byteLength;
    }
    indexAt(i) {
        return this.view.getUint8(i);
    }
    toArrayBuffer() {
        return this.view.buffer;
    }
    serializeJson() {
        return ('0x' +
            Array.prototype.map
                .call(new Uint8Array(this.view.buffer), (x) => ('00' + x.toString(16)).slice(-2))
                .join(''));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktYnVmZmVyLXJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWFkZXIvYXJyYXktYnVmZmVyLXJlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQW1CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRTtnQkFDWixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7YUFDcEU7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDOUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLENBQ0wsSUFBSTtZQUNKLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRztpQkFDaEIsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUM1QyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2xDO2lCQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDWixDQUFDO0lBQ0osQ0FBQztDQUNGIn0=