import xlsx from 'node-xlsx'
import fs from 'node:fs'
const sheetOptions = {'!cols': [
  {wch: 35}, 
  {wch: 15}, 
  {wch: 10},
  {wch: 10},
  {wch: 10}, 
  {wch: 10}, 
  {wch: 30},
  {wch: 40}, 
  {wch: 30},
  {wch: 20}
]};
export const datas:any[] = [['名称', '所属区', '区编号','级别','性质','类别','特色','园部','地址','电话']]
export const exportXlsx = (sheetName:string='学前机构',data:any[])=>{
  // var data = [
  //   ['姓名', '年龄', '性别'],
  //   ['张三', 18, '男'],
  //   ['李四', 20, '女'],
  //   ['王五', 22, '男'],
  // ];
  
  const buffer = xlsx.build([{name: sheetName, data: data, options:sheetOptions}]);
  
  fs.writeFileSync('上海市学前教育机构一览.xlsx', buffer, 'binary');
}