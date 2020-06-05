export default class PEFile {
    
    constructor(file) {
        this.file = file;
        this.headers = new Headers(this);
    }

    async readBuffer(fromByte, toByte) {
        return readBuffer(this.file, 0, 2*4096);
    }
}
