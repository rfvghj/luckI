!function (r, e, n) {
    // "object" == typeof exports ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], e) : e(r.CryptoJS)
    "object" == typeof exports ? module.exports = exports = e(r.CryptoJS) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], e) : e(r.CryptoJS)


}(this, function (r) {
    return function () {
        function e(r, e) {
            return r ^ e
        }

        function n(r, e) {
            var n = 32;
            return e %= n, r << e | r >>> n - e
        }

        function t(r) {
            var e = w[(4026531840 & r) >>> 28][(251658240 & r) >>> 24],
                n = w[(15728640 & r) >>> 20][(983040 & r) >>> 16], t = w[(61440 & r) >>> 12][(3840 & r) >>> 8],
                o = w[(240 & r) >>> 4][(15 & r) >>> 0];
            return e << 24 | n << 16 | t << 8 | o << 0
        }

        function o(r) {
            return r = t(r), e(e(e(r, n(r, 2)), e(n(r, 10), n(r, 18))), n(r, 24))
        }

        function i(r) {
            return r = t(r), e(r, e(n(r, 13), n(r, 23)))
        }

        function a(r) {
            var n = new Array, t = new Array;
            n[0] = e(r[0], p[0]), n[1] = e(r[1], p[1]), n[2] = e(r[2], p[2]), n[3] = e(r[3], p[3]);
            for (var o = 0; 32 > o; o++) n[o + 4] = e(n[o], i(e(e(n[o + 1], n[o + 2]), e(n[o + 3], A[o])))), t[o] = n[o + 4].toString(16);
            return t
        }

        var c = r, y = c.lib, u = y.BlockCipher, f = c.algo, w = new Array;
        w[0] = new Array(214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5), w[1] = new Array(43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153), w[2] = new Array(156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98), w[3] = new Array(228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166), w[4] = new Array(71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168), w[5] = new Array(104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53), w[6] = new Array(30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135), w[7] = new Array(212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158), w[8] = new Array(234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161), w[9] = new Array(224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227), w[10] = new Array(29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111), w[11] = new Array(213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81), w[12] = new Array(141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216), w[13] = new Array(10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176), w[14] = new Array(137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132), w[15] = new Array(24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72);
        var A = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257],
            p = [2746333894, 1453994832, 1736282519, 2993693404], d = f.SM4 = u.extend({
                _doReset: function () {
                    for (var r = this._key, e = r.words, n = a(e), t = this._SK = [], o = 0; o < n.length; o++) t[o] = n[o];
                    for (var i = this._invSK = [], o = n.length - 1; o >= 0; o--) i[n.length - 1 - o] = n[o]
                }, encryptBlock: function (r, e) {
                    this._doCryptBlock(r, e, this._SK)
                }, decryptBlock: function (r, e) {
                    this._doCryptBlock(r, e, this._invSK)
                }, _doCryptBlock: function (r, n, t) {
                    var i = [];
                    i[0] = r[n], i[1] = r[n + 1], i[2] = r[n + 2], i[3] = r[n + 3];
                    for (var a = 0; 32 > a; a++) i[a + 4] = e(i[a], o(e(e(i[a + 1], i[a + 2]), e(i[a + 3], parseInt(t[a], 16)))));
                    r[n] = i[35], r[n + 1] = i[34], r[n + 2] = i[33], r[n + 3] = i[32]
                }, keySize: 4, ivSize: 4, blockSize: 4
            });
        c.SM4 = u._createHelper(d)
    }(), r.SM4
});