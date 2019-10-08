export default value => ((typeof (value) === 'number' && value.length === 10) ? new Date(value * 1e3) : value);
