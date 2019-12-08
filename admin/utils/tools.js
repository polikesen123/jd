function handleMD5(val) {
	val = val.substring(4);
	val = val.split('').reverse().join('');
	val = val.substring(4);
	return val;
}

function filterInvalid(arr) {
	if (!Array.isArray(arr)) return arr;
	return arr.filter(item => {
		return parseFloat(item.state) === 0;
	});
}

function success(flag = true, options = {}) {
	let defaults = {
		code: flag ? 0 : 1,
		codeText: flag ? 'OK' : 'NO'
	};
	return Object.assign(defaults, options);
}
function getUserInfo(userId, req) {
	return req.$userDATA.find(item => {
		return parseFloat(item.id) === parseFloat(userId);
	}) || {};
}
module.exports = {
	handleMD5,
	filterInvalid,
	success,
	getDepartInfo,
	getJobInfo,
	getUserInfo,
	getCustomerInfo,
	getVisitInfo
}