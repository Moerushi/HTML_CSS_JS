function generatePassword(){
	var length = 14,
	charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	res = '';
	for (var i = 0, n = charset.length; i < length; ++i) {
		res += charset.charAt(Math.floor(Math.random() * n));
	}
	return res;
}

module.exports = { generatePassword };