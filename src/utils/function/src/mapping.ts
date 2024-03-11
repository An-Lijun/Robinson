import is from '../../common/src/is';

interface optionsObj{
	key:String,
	keyValue:string,
	label:string,
  type:String
}
type options = String|optionsObj
type enumData=Object|Array<Object>
type result =Object|String|undefined

export function mapping (enumData:enumData, options:options, expty:String = '--'):result {
  if (Array.isArray(enumData) && is(options, 'object')) {
    // @ts-ignore
    let data = enumData.find(item => item[options.key] === options.keyValue);
    if (data) {
    // @ts-ignore
      switch (options.type) {
      case 'value':
        // @ts-ignore
        return data[options.label];
      case 'object':
        return data;
      default:
        return data;
      }
    }
    return expty;
  }
  return void 0;
}