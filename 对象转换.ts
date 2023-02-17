
const ovMap: [string, string][] = [
    ['lgort','warehouseNum'],
    ['lgobe','warehouseDesc'],
    ['maktx','materielName'],
    ['matnr','materielCode'],
    ['meins','unit'],
]

export function voParseObject2Local(ovMap, from, ) {
  let result = {}
  ovMap.forEach((it,) => result[it[1]] = from[it[0]])
  return result
}
export function voParseObject2Backend(ovMap, from, ) {
  let result = {}
  ovMap.forEach((it,) => result[it[0]] = from[it[1]])
  return result
}
// targetType 转换的方向，转换为本地和后端结构，local为本地，不填为后端
function voParseArray(array: any[], targetType: 'local'|'') {
    targetType === 'local' ? array.forEach(it => voParseObject2Local(it)) : array.forEach(it => voParseObject2Backend(it)) 
}