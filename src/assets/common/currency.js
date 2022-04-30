const digitsRE = /(\d{3})(?=\d)/g
const digitsRE = /(\d{3})(?=\d)/g
const digitsRE = /(\d{3})(?=\d)/g
const digitsRE = /(\d{3})(?=\d)/g
const digitsRE = /(\d{3})(?=\d)/g

  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '￥'
 
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  var _float = decimals
  ? stringified.slice(-1 - decimals)
  : ''
var sign = value < 0 ? '-' : ''
var _float = decimals
? stringified.slice(-1 - decimals)
: ''
var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}